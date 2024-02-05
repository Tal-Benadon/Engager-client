import React from 'react'
import CampaignItem from '../CampaignItem'
import styles from './style.module.css'

export default function CampaignList({ campaignList }) {
    return (
        <div className={styles.campaignList}>
            <div className={styles.line}></div>
            <div className={styles.title} >רשימות</div>
            <div className={styles.list}>
                {campaignList
                     .map(c => <CampaignItem id={c.user} title={c.title} />)}
            </div>
            <div className={styles.line}></div>
        </div>
    )
}
