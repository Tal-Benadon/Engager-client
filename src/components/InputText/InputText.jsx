import React from 'react'
import styles from './style.module.css'

export default function InputText({ style = {}, name = {},value = {}, ...props }) {
    return (

        <div className={styles.MsgName}>
            <input type="text" placeholder='הודעת "ביאסת אותנו"' name={name} value={value} id={name} style={style} className={styles.inputLine} {...props} />
        </div>
    )
}
