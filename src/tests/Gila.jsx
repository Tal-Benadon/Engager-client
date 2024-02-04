import React from 'react'
import TabSwitcher from '../components/TabSwitcher'
import { Outlet } from 'react-router-dom'

export default function Gila() {
  return (
    <div>
      <TabSwitcher/>
      <Outlet/>
    </div>
  )
}
