import React from 'react'
import { useCampaign } from '../../pages/CampaignPage';
import HeadLine from '../HeadLine';
import TabSwitcher from '../TabSwitcher';


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
      <MessagesTab />
    </div>
  )
}
