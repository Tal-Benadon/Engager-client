import React from 'react'
import styles from './style.module.css'

export default function InputText() {
    return (

        <div className={styles.MsgName}>
            <p className={styles.inputTitle} >שם הודעה</p>
            <p className={styles.inputSubTitle} >שם פנימי שיהיה חשוף רק לך</p>
            <input type="text" name='title' className={styles.inputLine} />
        </div>
    )
}
