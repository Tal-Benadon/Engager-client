import React from 'react'
import HeadLine from '../HeadLine'
import styles from './style.module.css'
import Accordion from '../Accordion'

export default function MessagePage({ title, subtitle, icon, message, dateSend, timeSend }) {
    return (
        <div className={styles.MessagePage}>
            <HeadLine title={title} subtitle={subtitle} icon={icon} />
            <div className={styles.message}>
                <div className={styles.messageitem}>
                    {message}
                </div>
                <div className={styles.messageDate}>
                    ישלח ב {dateSend} | {timeSend}
                </div>
            </div>
            <Accordion title={'הודעה חדשה'}>
                {['hello', 'i', 'am', 'shaked', 'ben', 'hamo', 'guikh', 'gyhjbvh']}
            </Accordion>
        </div>
    )
}
