import React from 'react';
import styles from './style.module.css';

export default function Plans() {

    function getIcon(value) {
        return value ? '✓' : '✗';
    }

    const plans = [
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
        },
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

    ];

    return (
        <div className={styles.container}>
            {plans.map((plan, index) => (
                <div key={index} className={styles.card}>
                    <h1></h1>
                    <ul className={`${styles.price} `}>
                        <li className={`${styles.header} ${styles.grey}`}>{plan.name}</li>
                        <li>מחיר: {plan.price}</li>
                        {/* <li>מספר מקסימלי של לידים: {plan.max_num_leads}</li> */}
                        {/* <li>לידים מ-Webhook: {getIcon(plan.leads_from_webhook)}</li> */}
                        {/* <li>ממשק לניהול קשר: {getIcon(plan.contact_management_interface)}</li> */}
                        <li>מספר לידים ברשימה: {plan.num_leads_in_list}</li>
                        <li>הודעת פתיחה ללידים חדשים: {plan.opening_msg_to_new_lids} תווים</li>
                        <li>מספר הודעות: {plan.msg_number}</li>
                        {/* <li>העלאת רשימת קבצים: {getIcon(plan.uploading_file_list)}</li> */}
                        <li>העברת נתונים ל-CRM: {getIcon(plan.data_transfer_crm)}</li>
                        {/* <li>פיצול טרמינלים: {getIcon(plan.split_terminals)}</li> */}
                        {/* <li>התראה על ליד חדש: {getIcon(plan.notification_new_lead)}</li> */}
                        {/* <li>הודעת כתיבה: {getIcon(plan.copywriting_msg)}</li> */}
                        {/* <li>חיבור ל-WhatsApp: {getIcon(plan.connection_to_whatsApp)}</li> */}
                        {/* <li>מסע הלקוח: {getIcon(plan.customer_journey)}</li> */}
                        {/* <li>תמיכה טכנית: {getIcon(plan.technical_support)}</li> */}
                        {/* <li>גרסה מעודכנת: {getIcon(plan.update_version)}</li> */}
                        <li>
                            <button className={styles.button}>הירשם</button>
                        </li>
                    </ul>
                </div>
            ))}
        </div>
    );
}