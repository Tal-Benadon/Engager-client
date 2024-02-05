import React from 'react'
import { useCampaign } from '../../pages/CampaignPage';
import TabSwitcher from '../TabSwitcher';
import HeadLine from '../HeadLine';
import MsgListHolder from '../MsgListHolder';

export default function  MsgTab() {
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
      <MsgListHolder />
    </div>
  )
}
