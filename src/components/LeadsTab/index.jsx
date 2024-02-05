import React from 'react'
import { useCampaign } from '../../pages/CampaignPage';


export default function LeadsTab() {

  const campaign = useCampaign();

  return (
    <div>
      <MessagesTab />
    </div>
  )
}
