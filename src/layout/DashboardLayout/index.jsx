import React, { useContext, useEffect } from 'react'
import SideBar from '../SideBar'
import { Outlet } from 'react-router'
import styles from './style.module.css'
import { useNavigate } from 'react-router-dom'
import apiWhatsapp from '../../functions/api_whatsapp'
import DataContext from '../../context/DataContext'
import useSocket from '../../context/SocketContext'

export default function DashboardLayout() {
  const token = !localStorage.token || localStorage.token === '' || localStorage.token === 'undefined';
  if (token) {
    location.href = '/login'
    localStorage.removeItem('token')
  }
  const { setQueueJob, user } = useContext(DataContext)
  const { socket,connect } = useSocket()

  useEffect(() => {
    if (token) return;
    connect()
    apiWhatsapp.get('/queue').then(arr => {
      console.log('queue:', arr);
      setQueueJob(arr)
      // if(arr.length) connect();
    })

    return () => {  
      if (socket?.connected) socket.disconnect()
    }
  }, [user])

  return (<>
    {!token && Object.keys(user).length > 0 && 
      <div className={styles.layout}>
        <SideBar />
        {/* TODO: להוסיף מסך פתיחה בכניסה לאפליקציה כשאין ראוט ספציפי */}
        <Outlet />
      </div>
    }
  </>
  )
}

