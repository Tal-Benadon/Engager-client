import React from 'react'
import styles from './style.module.css'

export default function InputText({ style = {}, name = "", ...props }) {
    return (

        <div className={styles.MsgName}>
            <input type="text" name={name} id={name} style={style} className={styles.inputLine} {...props} />
        </div>
    )
}
