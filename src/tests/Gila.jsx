import React from 'react'
import MessagePage from '../components/MessagePage'
import CampaignItem from '../components/CampaignItem'
import Accordion from '../components/Accordion'
import Login from '../components/Login/Login'
import Register from '../components/Register'
import TabSwitcher from '../components/TabSwitcher'

export default function Gila() {
  const message = "בלה בלה בלה"
  const title = "הודעת ראשונה - ההרשמה נפתחה"
  const icon = "ooo"
  const dateSend = "14.10.2024"
  const timeSend = "12:34"
  const dateCreate = "31.7.2023"

  return (
    <div>
      {/* <CampaignItem/> */}
      {/* <MessagePage title={title} dateCreate={dateCreate} icon={"icon"} message={message} dateSend={dateSend} timeSend={timeSend} /> */}
      {/* <Accordion/> */}
      <TabSwitcher/>
    </div>
  )
}
