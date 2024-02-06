import React from 'react'
import CampaignItem from '../CampaignItem'
import styles from './style.module.css'

export default function CampaignList({ campaignList }) {
    return (
        <div className={styles.campaignList}>
                {campaignList
                     .map(c => <CampaignItem key={c.id} id={c.id} title={c.title} />)}
        </div>
    )
}
