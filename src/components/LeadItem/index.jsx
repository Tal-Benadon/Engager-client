import { NavLink } from 'react-router-dom';
import styles from './style.module.css'
import Icon from '../Icon';
import Popover from '../Popover'
import api from "../../functions/api";

import { LuUserCircle2 } from "react-icons/lu";
import { useCampaign } from '../../pages/CampaignPage';
import DataContext from '../../context/DataContext';
import { useContext } from 'react';
import Confirm from '../Confirm';

// Description: This component displays a Lead item based on the provided properties.
// Props: name, email, date
// Creator: Refael

export default function LeadItem({ campaignId, name, email, date, id }) {
  const { getCamp } = useCampaign()
  const { setPopUp } = useContext(DataContext);

  const handleDelete = async (campaignId, id) => {
    await api.del(`/campaign/${campaignId}/lead/${id}`).then((res) => {
      getCamp()
      setPopUp(false)
      console.log(res);
    }).catch((error) => {
      console.error('Error updating title:', error);
    });
  }

  let list = [
    {
      text: "הסר מהרשימה", icon: < Icon nameIcon={"trash"} />, onClick: () =>
        setPopUp({
          title: "הסר מהרשימה",
          component: <Confirm
            text={`האם אתה בטוח שאתה רוצה להסיר את ${name} מהרשימה?`}
            onConfirm={() => handleDelete(campaignId, id)}
          />
        })
    },

  ];
  return (

    <Popover list={list} fnName='onRight'  >
      <NavLink to={`/campaign/${campaignId}/leads/${id}`}
        className={({ isActive }) => isActive ? styles.leadActive : styles.lead}>
        <div className={styles.square}>
          <LuUserCircle2 className={styles.activeIcon} />
        </div>
        <div className={styles.nameAndDetails}>
          <div className={styles.name}>{name}</div>
          <div className={styles.DateAndEmail}>
            {/* TODO: להוסיף 3 נקודות לאימיילים ארוכים מידי וליישר את התאריך לצד שמאל של הקומפוננטה */}
            <div className={styles.email}>{email}</div>
            <div className={styles.date}>{date}</div>
          </div>
        </div>
      </NavLink>
    </Popover>

  )
}
