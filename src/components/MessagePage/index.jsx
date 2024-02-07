import React, { useContext, useState } from 'react'
import HeadLine from '../HeadLine'
import styles from './style.module.css'
import Accordion from '../Accordion'
import { useCampaign } from '../../pages/CampaignPage';
import { useParams } from 'react-router';
import formatDate from '../../functions/DateFormat';
import campaignHelper from '../../functions/campaignHelper'
import DataContext from '../../context/DataContext';
import MessageEdit from '../MessageEdit';

export default function MessagePage() {
    const { isOpen, setIsOpen } = useContext(DataContext)

    const { messageId } = useParams();
    const campaign = useCampaign() || {};
    console.log({ campaign });
    const msgs = campaign.msg || [];
    const message = msgs.find(msg => msg._id == messageId) || {}
    console.log(msgs);

    const { creationDate, subject, content } = message;

    return (
        <div className={styles.MessagePage}>
            <HeadLine
                title={subject}
                subtitle={`נוצר ב - ${formatDate(creationDate)}`} 
                iconName={'writing'}
                iconOnClick={() => setIsOpen(<MessageEdit isOpen={isOpen} setIsOpen={setIsOpen} />)}
            />
            <div className={styles.message}>
                <div className={styles.messageitem}>
                    {content}
                </div>
                <div className={styles.messageDate}>
                    יישלח ב-{"dateSend"} | {"timeSend"}
                </div>
            </div>
            <Accordion
                title={`נשלח ל-${campaignHelper.msgSentLeads(campaign, message._id)[1]} אנשים`}
                campaignId={campaign._id}>
                {campaignHelper.msgSentLeads(campaign, message._id)[0]}
                {/* {console.log(campaign)} */}
            </Accordion>
        </div>
    )
}