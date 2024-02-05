import React from 'react'
import CampaignList from '../components/CampaignList'
// import { data } from '../data/campaign.data.json'
export default function Liel() {
  let data = [
    {
      user: "65ba97e536d6af41e9beb0d1",
      title: " jkvlashflkeahhjkv;rehgewmacj;flsקמפיין1"
    },
    {
      user: "65ba97e536d6af41e9beb0d1",
      title: "קמפיין2"
    }]
  return (
    <div>
      {/* <HeadLine title={title} subtitle={subtitle} />  */}

      <CampaignList campaignList={data} />

    </div>
  )
}
