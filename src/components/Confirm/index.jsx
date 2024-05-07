import React, { useContext } from 'react'
import DataContext from '../../context/DataContext'
import styles from './style.module.css'
export default function Confirm({ onConfirm, text }) {
   const { setPopup } = useContext(DataContext)

   return (
      <div className={styles.container}>
         <h2>{text}</h2>
         <div className={styles.buttons}>
            <button onClick={() => setPopup(false)}>ביטול</button>
            <button className={styles.confirm} onClick={onConfirm}>אישור</button>
         </div>
      </div>
   )
}
