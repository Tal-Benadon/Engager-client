import React from 'react'
import CampaignItem from '../CampaignItem'
import styles from './style.module.css'

export default function CampaignList({ campaignList, searchTerm }) {
    return (
        <div className={styles.campaignList}>
            {searchTerm.trim() !== "" ?
                campaignList
                    .filter(c => c.title?.toLowerCase().includes(searchTerm?.trim().toLowerCase()))
                    .map(camp => <CampaignItem key={camp._id} id={camp._id} title={camp.title} />)
                : campaignList
                    .map(camp => <CampaignItem key={camp._id} id={camp._id} title={camp.title} />)
            }
        </div>
    )
}
