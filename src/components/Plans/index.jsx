import React from 'react';
import styles from './style.module.css';

export default function Plans() {

    function getIcon(value) {
        return value ? '✓' : '✗';
    }

    const plans = [
        {
            "name": "premium",
            "price": 280,
            "max_num_leads": 0,
            "leads_from_webhook": true,
            "contact_management_interface": true,
            "num_leads_in_list": 0,
            "opening_msg_to_new_lids": 1000,
            "msg_number": 15000,
            "uploading_file_list": true,
            "data_transfer_crm": true,
            "split_terminals": false,
            "notification_new_lead": false,
            "copywriting_msg": false,
            "connection_to_whatsApp": false,
            "customer_journey": false,
            "technical_support": true,
            "update_version": true
        },
        {
            "name": "enterprise",
            "price": -1,
            "max_num_leads": 0,
            "leads_from_webhook": true,
            "contact_management_interface": true,
            "num_leads_in_list": 0,
            "opening_msg_to_new_lids": 0,
            "msg_number": 0,
            "uploading_file_list": true,
            "data_transfer_crm": true,
            "split_terminals": true,
            "notification_new_lead": true,
            "copywriting_msg": true,
            "connection_to_whatsApp": true,
            "customer_journey": true,
            "technical_support": true,
            "update_version": true
        },
        {
            "name": "free",
            "price": 0,
            "max_num_leads": 0,
            "leads_from_webhook": true,
            "contact_management_interface": true,
            "num_leads_in_list": 1,
            "opening_msg_to_new_lids": 30,
            "msg_number": 100,
            "uploading_file_list": true,
            "data_transfer_crm": false,
            "split_terminals": false,
            "notification_new_lead": false,
            "copywriting_msg": false,
            "connection_to_whatsApp": false,
            "customer_journey": false,
            "technical_support": false,
            "update_version": false
        },
        {
            "name": "basic",
            "price": 117,
            "max_num_leads": 0,
            "leads_from_webhook": true,
            "contact_management_interface": true,
            "num_leads_in_list": 6,
            "opening_msg_to_new_lids": 150,
            "msg_number": 500,
            "uploading_file_list": true,
            "data_transfer_crm": false,
            "split_terminals": false,
            "notification_new_lead": false,
            "copywriting_msg": false,
            "connection_to_whatsApp": false,
            "customer_journey": false,
            "technical_support": true,
            "update_version": true
        }
    ];

    return (
        <div className={styles.container}>
            {plans.map((plan, index) => (
                <div key={index} className={styles.card}>
                    <h3 className={styles.name}>{plan.name}</h3>
                    <p className={styles.price}>מחיר: {plan.price}</p>
                    <p className={styles.max_num_leads}>מספר מקסימלי של לידים: {plan.max_num_leads}</p>
                    <p className={styles.leads_from_webhook}>לידים מ-Webhook: {getIcon(plan.leads_from_webhook)}</p>
                    <p className={styles.contact_management_interface}>ממשק לניהול קשר: {getIcon(plan.contact_management_interface)}</p>
                    <p className={styles.num_leads_in_list}>מספר לידים ברשימה: {plan.num_leads_in_list}</p>
                    <p className={styles.opening_msg_to_new_lids}>הודעת פתיחה ללידים חדשים: {plan.opening_msg_to_new_lids} תווים</p>
                    <p className={styles.msg_number}>מספר הודעות: {plan.msg_number}</p>
                    <p className={styles.uploading_file_list}>העלאת רשימת קבצים: {getIcon(plan.uploading_file_list)}</p>
                    <p className={styles.data_transfer_crm}>העברת נתונים ל-CRM: {getIcon(plan.data_transfer_crm)}</p>
                    <p className={styles.split_terminals}>פיצול טרמינלים: {getIcon(plan.split_terminals)}</p>
                    <p className={styles.notification_new_lead}>התראה על ליד חדש: {getIcon(plan.notification_new_lead)}</p>
                    <p className={styles.copywriting_msg}>הודעת כתיבה: {getIcon(plan.copywriting_msg)}</p>
                    <p className={styles.connection_to_whatsApp}>חיבור ל-WhatsApp: {getIcon(plan.connection_to_whatsApp)}</p>
                    <p className={styles.customer_journey}>מסע הלקוח: {getIcon(plan.customer_journey)}</p>
                    <p className={styles.technical_support}>תמיכה טכנית: {getIcon(plan.technical_support)}</p>
                    <p className={styles.update_version}>גרסה מעודכנת: {getIcon(plan.update_version)}</p>
                </div>
            ))}
        </div>
    );
}
