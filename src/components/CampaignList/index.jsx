import React from 'react'
import CampaignItem from '../CampaignItem'
import styles from './style.module.css'

export default function CampaignList({ campaignList }) {
    return (
        <div className={styles.campaignList}>
            <div className={styles.list}>
                {campaignList
                     .map(c => <CampaignItem key={c.id} id={c.id} title={c.title} />)}
            </div>
        </div>
    )
}
