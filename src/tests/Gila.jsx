import React from 'react'
import TabSwitcher from '../components/TabSwitcher'
import { Outlet } from 'react-router-dom'
import CampaignItem from '../components/CampaignItem'

export default function Gila() {
  return (
    <div>
      {/* <TabSwitcher/> */}
      {/* <Outlet/> */}
      <CampaignItem/>

    </div>
  )
}
