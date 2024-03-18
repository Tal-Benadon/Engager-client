import React, { useEffect, useState } from 'react'
import styles from './style.module.css'
import Icon from '../Icon'
import api from '../../functions/api'
import axios from 'axios'
import Button from '../Button'
import { toast } from "react-toastify";

export default function WebHook({ link }) {

    function copy() {
        navigator.clipboard.writeText(link)
        toast.success("הקישור הועתק בהצלחה!");
    }


    return <div className={styles.container}>
        <p className={styles.titele}>קישור  API לדף נחיתה (Webhook)</p>
        <p className={styles.pas}>זוהי הכתובת של המנגנון שמאפשר לנו לקבל את פרטי הנרשמים מהטופס שלך, ברגע שמתבצעת הרשמה דרך דף נחיתה</p>
        <div className={styles.link}>
            <p className={styles.pLink}>{link || 'אין קישור'}</p>
        </div>
        <div className={styles.item} >
            <Icon nameIcon={'copy'} nameColor={'white'} />
            <Button content='העתקת כתובת קישור' className='fill' onClick={copy} />
        </div>
    </div>
}

