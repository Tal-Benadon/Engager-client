import React, { useContext } from 'react'
import { useCampaign } from '../../pages/CampaignPage';
import TabSwitcher from '../TabSwitcher';
import HeadLine from '../HeadLine';
import MsgListHolder from '../MsgListHolder';
import styles from './style.module.css'
import MessageEdit from '../MessageEdit';
import DataContext from '../../context/DataContext';
import Popover from '../Popover';
import Icon from '../Icon';

export default function MsgTab() {
  const { campaign } = useCampaign();
  if (!Object.keys(campaign).length) return <></>

  return (
    <div className={styles.msgTab}>

      <div className={styles.headerContainer}>

        <div className={styles.titlesContainer}>
          <HeadLine
            title={campaign.title}
            subtitle={`${campaign.leads.length} נרשמים, ${campaign.msg.length} הודעות`} />
        </div>
        <div className={styles.popOverContainer}>
          <Popover fnName={"onClick"} list={[
            {
              text: "עריכת רשימה",
              icon: <Icon nameIcon={"writing"} />
            },
            {
              text: "ייבוא רשימה",
              icon: <Icon nameIcon={"importList"} />
            },
            {
              text: "מחיקת רשימה",
              icon: <Icon nameIcon={"trash"} />,
              color: "red"
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
      <MsgListHolder />
    </div>
  )
}
