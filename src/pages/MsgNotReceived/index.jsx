import React, { useEffect, useState } from 'react'
import api from '../../functions/api'
import styles from './style.module.css'

export default function MsgNotReceived() {
   const [msgNotReceived, setMsgNotReceived] = useState([])
   const [loading, setLoading] = useState(false)
   const [errorMsg, setErrorMsg] = useState(null)

   const getAllMsg = async () => {
      try {
         setLoading(true)
         const response = await api.get('campaign/msg/all-not-received')
         setMsgNotReceived(response)
      } catch (error) {
         console.error('Error fetching msgNotReceived:', error)
         setErrorMsg('Error fetching msgNotReceived')
      } finally {
         setLoading(false)
      }
   }

   useEffect(() => {
      getAllMsg()
      const interval = setInterval(getAllMsg, (30 * 1000))
      return () => clearInterval(interval)
   }, [])

   return (
      <div className={styles.container}>
         <h2 className={styles.title}>הודעות שלא התקבלו</h2>
         <p className={styles.info}>  {msgNotReceived.length} הודעות</p>
         {loading ? (
            <p className={styles.loading}>טוען...</p>
         ) : errorMsg ? (
            <p className={styles.error}>{errorMsg}</p>
         ) : (
            <table className={styles.msgTable}>
               <thead>
                  <tr>
                     <th>שם הלקוח</th>
                     <th>טלפון הלקוח</th>
                     <th>נושא</th>
                     <th>שם הקמפיין</th>
                     <th>סטטוס</th>
                  </tr>
               </thead>
               <tbody>
                  {msgNotReceived.map((msg) => (
                     <tr key={msg.msgId + msg.leadId}>
                        <td>{msg.leadName}</td>
                        <td>{msg.leadPhone}</td>
                        <td>{msg.subject}</td>
                        <td>{msg.campaignTitle}</td>
                        <td>{msg.status}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         )}
      </div>
   )
}