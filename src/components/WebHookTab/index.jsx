import {  useState, useEffect } from 'react'
import { useCampaign } from '../../pages/CampaignPage';
import TabSwitcher from '../TabSwitcher';
import HeadLine from '../HeadLine';
import MsgListHolder from '../MsgListHolder';
import styles from './style.module.css'
import MessageEdit from '../MessageEdit';
import DataContext from '../../context/DataContext';
import Popover from '../Popover';
import Icon from '../Icon';
import WebHook from '../WebHook';
import api from '../../functions/api'

export default function WebHookTab() {


  const { campaign } = useCampaign();
  const campId = campaign?._id
  const [link, setLink] = useState('')
  
  useEffect(() => {
    if(campaign)    setLink('https://www.engager.co.il/webhook/' + campaign.webhook)
  }, [campaign])
  

  const createWebHook = async () => {
    if (confirm("אתה בטוח?") == true) {
      try {
        const res = await api.post('/webhook', { campId })
        setLink('https://www.engager.co.il/webhook/' + res)

      } catch (error) {
        console.error('Error creating webhook:', error)
      }
    }
  }

  if (!Object.keys(campaign).length) return <></>

  return (
    <div className={styles.msgTab}>
      <HeadLine
        title={campaign.title}
        subtitle={`${campaign.leads.length} נרשמים, ${campaign.msg.length} הודעות`}
      />
      <TabSwitcher rout={[
        { tab: `campaign/${campaign._id}/leads`, text: `נרשמים(${campaign.leads.length})` },
        { tab: `campaign/${campaign._id}/messages`, text: "הודעות" },
        { tab: `campaign/${campaign._id}/webhook`, text: "קישור" }
      ]} />
      <WebHook campaign_id={campaign._id} webhook={campaign.webhook} link={link} />
      <div className={styles.menu}>
        {/* TODO: ליישם את האופציות של התפריט הנפתח */}
        <Popover fnName={"onClick"} list={[
          {
            text: "מחיקת קישור קיים ויצרת קישור חדש",
            icon: <Icon nameIcon={"writing"} />,
            onClick: () => createWebHook()
          },
        ]} >
          <Icon nameIcon={"menu"} />
        </Popover>
      </div>
    </div>
  )
}
