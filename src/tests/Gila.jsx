import React from 'react'
import MessagePage from '../components/MessagePage'
import CampaignItem from '../components/CampaignItem'
import Accordion from '../components/Accordion'

export default function Gila() {
  const message = "בלה בלה בלה"
  const title = "הודעת ראשונה - ההרשמה נפתחה"
  const subtitle = "נשלח לפני 12 שעות, ל 24 נרשמים"
  const icon = "ooo"
  const dateSend = "14.10.2024"
  const timeSend = "12:34"

  return (
    <div>
      {/* <TabSwitcher/> */}
      {/* <CampaignItem/> */}
      <MessagePage title={title} subtitle={subtitle} icon={"icon"} message={message} dateSend={dateSend} timeSend={timeSend} />
    </div>
  )
}
