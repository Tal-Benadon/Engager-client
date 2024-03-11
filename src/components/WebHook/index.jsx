import React, { useEffect, useState } from 'react'
import styles from './style.module.css'
import Icon from '../Icon'
import api from '../../functions/api'
import axios from 'axios'
import Button from '../Button'
import { toast } from "react-toastify";

export default function WebHook({ campaign_id }) {
    const [link, setLink] = useState('65c9d1ae431dbc73b311ee14')


    const createWebHook = async () => {
        try {
            const res = await api.post('/webhook', { campaign_id })
            setLink('https://www.engager.co.il/webhook/' + res.data)
        } catch (error) {
            console.error('Error creating webhook:', error)
        }
    }


    // useEffect(() => {
    //     createWebHook()
    // }, [campaign_id])


    function copy() {
        navigator.clipboard.writeText(link)
        toast.success("הקישור הועתק בהצלחה!");
    }


    return <div className={styles.container}>
        <p className={styles.titele}>Webhook</p>
        <p className={styles.pas}>זוהי הכתובת של המנגנון שמאפשר לנו לקבל את פרטי הנרשמים מהטופס שלך, ברגע שמתבצעת הרשמה</p>
        <div className={styles.link}>
            <div className={styles.icon} onClick={copy}>
                <Icon nameIcon={'copy'} />
            </div>
            <p className={styles.pLink}>{link || 'אין קישור'}</p>
        </div>
        <Button content='העתקת כתובת קישור' className='fill' onClick={copy} />
        <Button content='ייצר קישור חדש' className='fill' onClick={createWebHook} />
    </div>
}

