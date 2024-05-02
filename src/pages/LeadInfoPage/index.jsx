import { useEffect, useState, useContext } from 'react'
import Icon from '../../components/Icon'
import { useNavigate } from 'react-router-dom'
import InfoMessageList from '../../components/InfoMessageList'
import styles from './style.module.css'
import UpdateAndAddLead from '../../components/UpdateAndAddLead'
import { useCampaign } from '../CampaignPage'
import { useParams } from 'react-router'
import formatDate from "../../functions/dateFormat"
import DataContext from "../../context/DataContext";
import api from '../../functions/api'
import Confirm from '../../components/Confirm'
// Description: This component serves as a user profile page. It is designed to display user information, including first fullName, last fullName, email, phone number, registration date, and active status indicator.
//Use of this component should pass real user data from the DB as props.
// Props:
//   - firstName (string): The first name of the user.
//   - lastName (string): The last name of the user.
//   - phoneNumber (string): The phone number of the user.
//   - email (string): The email address of the user.
//   - notes (string): Additional notes or comments about the user.
//   - joinDate (string): The date of user registration.
//   - isActive (boolean): A flag indicating whether the user is active.
//    If isActive is true, it will display "פעיל"; if false, it will display a red dot and "לא פעיל"
// Creator: Refael

// TODO: לרווח בין פרטי הליד להודעות שלנשלחו אליו
export default function LeadInfoPage() {
  const navigate = useNavigate();
  const { leadId } = useParams();
  const { campaign, getCamp } = useCampaign();
  const { setPopUp } = useContext(DataContext);
  const { user } = useContext(DataContext)
  const [lead, setLead] = useState({})
  const { fullName, phone, email, notes, _id, extra = {}, joinDate, isActive } = lead || {};
  const signUpDate = formatDate(joinDate)

  useEffect(() => {
    if (Object.keys(campaign).length)
      setLead(campaign.leads.find(obj => obj._id == leadId));
  }, [campaign.leads, leadId])

  const handleTrash = async (leadPhone) => {
    try {
      let data = { userId: user._id }
      await api.del(`campaign/lead/${leadPhone}/all`, data).then((res) => {
        navigate(-1)
        getCamp();
        setPopUp(false)
        console.log('delete', { res });
      }).catch((error) => {
        console.error('Error updating title:', error);
      });
    } catch (error) {
      console.error('Error handling trash:', error);
    }
  };

  const handleDeleteClick =()=> setPopUp({
    title: "מחיקת ליד",
    component: <Confirm
      onConfirm={() => handleTrash(phone)}
      text="האם אתה בטוח שברצונך למחוק את פרטי הליד?"
    />
  })

  return (
    <div className={styles.layout}>
      <div className={styles.info}>
        <div className={styles.container}>
          <div className={styles.details}>
            {fullName}
            <div className={styles.isActive}>
              <div className={isActive ? styles.greenDot : styles.redDot}></div>
              <span>{isActive ? 'פעיל/ה' : 'לא פעיל/ה'}</span>
            </div>
          </div>
          <div className={styles.buttons}>
            <div onClick={
              () =>
                setPopUp({
                  title: "עריכת פרטי נרשמים",
                  component: (
                    <UpdateAndAddLead
                      setPopUp={setPopUp}
                      campaign={campaign}
                      details={{ fullName, email, phone, notes, leadId: _id, extra }}
                      isEdit={true}
                      getCamp={getCamp}
                    />
                  )
                })
            }
              className={styles.edit}><Icon nameIcon={'writing'}
                nameColor={''} />  </div>
            <div className={styles.trash} onClick={handleDeleteClick}><Icon nameIcon={"trash"} /></div>
            {/* <div className={styles.trash} onClick={() => isActive ? !isActive : null}><Icon nameIcon={"trash"} /></div> */}
          </div>


        </div>
        <div className={styles.detailsFrame}>
          <div className={styles.allFields}>
            <div className={styles.detailsFrame}>
              <div className={styles.infoCol}>
                <div className={styles.infoBlock}>
                  <div className={styles.miniTitle}>שם</div>
                  <div className={styles.content}>{fullName}</div>
                </div>
                <div className={styles.infoBlock}>
                  <div className={styles.miniTitle}>טלפון</div>
                  <div className={styles.content}>{phone}</div>
                </div>
              </div>
              <div className={styles.infoCol}>
                <div className={styles.infoBlock}>
                  <div className={styles.miniTitle}>אימייל</div>
                  <div className={styles.content}>{email}</div>
                </div>
              </div>
              <div className={styles.detailsFrame}>
                {Object.keys(extra).map((item, index) => {
                  return <div key={index} className={styles.infoBlock}>
                    <div className={styles.miniTitle}>{extra[item].he}</div>
                    <div className={styles.content}>{extra[item].value}</div>
                  </div>
                })}
              </div>
              <div className={styles.infoFullCol}>
                <div>
                  <div colSpan="2" className={styles.miniTitle}>הערות</div>
                  <div colSpan="2" >{notes}</div>
                </div>
              </div>
            </div>
            <div className={styles.signUpDate}>
              תאריך ההצטרפות: {signUpDate}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sentMessagesContainer}>
        <div className={styles.sentTitle}>הודעות שנשלחו</div>
        {/* ***TODO: make it only sent messages*** */}
        <div className={styles.messages}><InfoMessageList leadId={leadId} /></div>
      </div>
    </div>
  )
}


