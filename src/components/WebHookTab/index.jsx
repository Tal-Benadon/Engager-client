import React, { useContext, useEffect } from 'react'
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
import { useNavigate } from 'react-router-dom';

export default function WebHookTab() {
  const { campaign } = useCampaign();
  if (!Object.keys(campaign).length) return <></>
  const nav = useNavigate()


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
      <WebHook campaign_id={campaign._id} />
    </div>
  )
}
