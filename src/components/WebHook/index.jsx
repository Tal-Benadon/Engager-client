import React, { useEffect, useState } from 'react'
import styles from './style.module.css'
import Icon from '../Icon'
import api from '../../functions/api'
import axios from 'axios'
import Button from '../Button'
import { toast } from "react-toastify";

export default function WebHook({ campaign_id, webhook, link }) {
    // const [link, setLink] = useState('https://www.engager.co.il/webhook/' + webhook)


    // const createWebHook = async () => {
    //     if (confirm("אתה בטוח?") == true) {
    //         try {
    //             const res = await api.post('/webhook', { campaign_id })
    //             setLink('https://www.engager.co.il/webhook/' + res)

    //         } catch (error) {
    //             console.error('Error creating webhook:', error)
    //         }
    //     }
    // }


    function copy() {
        navigator.clipboard.writeText(link)
        toast.success("הקישור הועתק בהצלחה!");
    }


    return <div className={styles.container}>
        <p className={styles.titele}>Webhook</p>
        <p className={styles.pas}>זוהי הכתובת של המנגנון שמאפשר לנו לקבל את פרטי הנרשמים מהטופס שלך, ברגע שמתבצעת הרשמה</p>
        <div className={styles.link}>
            <p className={styles.pLink}>{link || 'אין קישור'}</p>
        </div>
        <Button content='העתקת כתובת קישור' className='fill' onClick={copy} />
        {/* <Button content='צור קישור חדש' className='fill' onClick={createWebHook} /> */}
    </div>
}

