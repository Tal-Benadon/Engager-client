import { useState, useEffect, useContext } from 'react'
import { useCampaign } from '../../pages/CampaignPage';
import TabSwitcher from '../TabSwitcher';
import HeadLine from '../HeadLine';
import styles from './style.module.css'
import DataContext from '../../context/DataContext';
import Popover from '../Popover';
import Icon from '../Icon';
import WebHook from '../WebHook';
import api from '../../functions/api'
import WebHookPopUp from '../WebHookPopup';

export default function WebHookTab() {

  const { PopUp, setPopUp } = useContext(DataContext);

  const { campaign } = useCampaign();
  const campId = campaign?._id
  const userId = campaign?.user

  const [link, setLink] = useState('')
  const [confirm, setConfirm] = useState(false)

  useEffect(() => {
    if (campaign) setLink('https://www.engager.co.il/webhook/' + campaign.webhook)
  }, [campaign])

  useEffect(() => {
    createWebHook()
    return () => {
      setConfirm(false)
    }
  }, [confirm])



  const createWebHook = async () => {
    try {
      const res = await api.post('/webhook', { campId, userId })
      setLink('https://www.engager.co.il/webhook/' + res)

    } catch (error) {
      console.error('Error creating webhook:', error)
    }
  }

  if (!Object.keys(campaign).length) return <></>

  return (
  <div className={styles.msgTab}>
    <div className={styles.headerContainer}>
    <div className={styles.titlesContainer}>
        <HeadLine
          title={campaign.title}
          subtitle={`${campaign.leads.length} נרשמים, ${campaign.msg.length} הודעות`}
        />
      </div>
      <div className={styles.popOverContainer}>
        <Popover fnName={"onClick"} list={[
          {
            text: "מחיקת קישור קיים ויצרת קישור חדש",
            icon: <Icon nameIcon={"writing"} />,
            onClick: () => setPopUp(
              {
                title: "קישור חדש לדף נחיתה",
                component: <WebHookPopUp setPopUp={setPopUp} setConfirm={setConfirm} />
              }
            )
          },
        ]} >
          <Icon nameIcon={"menu"} />
        </Popover>
      </div>
      

    </div>
    <TabSwitcher rout={[
      { tab: `campaign/${campaign._id}/leads`, text: `נרשמים(${campaign.leads.length})` },
      { tab: `campaign/${campaign._id}/messages`, text: "הודעות" },
      { tab: `campaign/${campaign._id}/webhook`, text: "קישור" }
    ]} />
    <WebHook campaign_id={campaign._id} webhook={campaign.webhook} link={link} />
    <div className={styles.menu}>
      {/* TODO: ליישם את האופציות של התפריט הנפתח */}
    </div>
  </div>
)

  
}
