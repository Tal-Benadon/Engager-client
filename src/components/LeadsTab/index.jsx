import React from 'react'
import { useCampaign } from '../../pages/CampaignPage';
import HeadLine from '../HeadLine';
import TabSwitcher from '../TabSwitcher';
import LeadList from '../LeadList';
import SearchBar from '../SearchBar';
import styles from './style.module.css'



export default function LeadsTab() {

  const campaign = useCampaign();

  return (
    <div>
      <HeadLine
        title={campaign.title}
        subtitle={`${campaign.leads.length} נרשמים, ${campaign.msg.length} הודעות נשלחו`}
        icon={"menu"} />
      <TabSwitcher rout={[
        {tab: `campaign/${campaign._id}/leads`, text: `נרשמים(${campaign.leads.length})`},
        {tab: `campaign/${campaign._id}/messages`, text: "הודעות"}
        ]} />
      <div className={styles.LeadListHolder}>
        <SearchBar />
        <LeadList />
      </div>
    </div>
  )
}
