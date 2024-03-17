import React from 'react'
import SideBar from '../SideBar'
import { Outlet } from 'react-router'
import styles from './style.module.css'
import { useNavigate } from 'react-router-dom'
import LoginPage from '../../pages/LoginPage'
import Dashboard from '../../pages/Dashboard'
export default function DashboardLayout() {
  const nav = useNavigate()
  if (!localStorage.token || localStorage.token === '' || localStorage.token === 'undefined') {
    localStorage.removeItem('token')
    return (
      <LoginPage />
    )
  } else {
    return (
      <div className={styles.layout}>
        <SideBar />
        {/* TODO: להוסיף מסך פתיחה בכניסה לאפליקציה כשאין ראוט ספציפי */}
        <Outlet />
      </div>
    )
  }
}
