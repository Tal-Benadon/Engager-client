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
import Button from '../Button';
import axios from 'axios';
import api from '../../functions/api';

export default function WebHookPage() {

    // TODO: לחבר את שליחת ההודעה לווטסאפ
    // TODO: "להסיר את כפתור השלח במידה ואין אנשים שלא קיבלו את ההודעה או להפוך אותו ל"שלח מחדש




    return (
        <div className={styles.MessagePage}>
            <h1>מה זה Webhook?</h1>
            <br />
            <p>אנגייג'ר היא מערכת דיוור חכמה שמאפשרת לעסקים לנהל ולאוטמט את תהליך התקשורת עם לקוחותיהם ולידים פוטנציאליים בצורה יעילה ואפקטיבית. חדשנות משמעותית במערכת היא השימוש ב-Webhook ייחודיים, שמותאמים לרשימות תקשורת ספציפיות, מה שמאפשר זרימה אוטומטית ומדויקת של לידים חדשים אל הרשימה המתאימה ביותר.</p>
            <br />
            <p>נניח שהעסק שלכם מקיים מספר קמפיינים שיווקיים במקביל, כל אחד מופנה לקהל יעד שונה ומטרות שונות. על ידי שימוש ב-Webhook ייחודי לכל רשימה באנגייג'ר, כל פעולת הרשמה או יצירת קשר של ליד דרך אחד מהטפסים המקושרים לקמפיין ספציפי, מתווספת אוטומטית לרשימה המתאימה. זה מבטיח שהמידע נשלח בצורה מסודרת וממוקדת לקמפיין הנכון, ומאפשר לכם לתקשר בצורה יעילה ואישית עם כל ליד, תוך קידום המטרות הספציפיות של כל קמפיין.</p>
            <br />  
            <p>היתרון המשמעותי של שימוש ב-Webhook ייחודיים פר רשימה הוא הגמישות והדיוק בניהול הלידים. זה מייתר את הצורך בעבודה ידנית ומייגעת של סינון והעברת לידים בין רשימות, מקטין את סיכויי הטעויות, ומאפשר מעקב וניתוח מדויקים יותר של התגובות לכל קמפיין. בנוסף, האוטומציה של התהליך מאפשרת תגובה מהירה ואפקטיבית לכל ליד שנרשם, מה שמגביר את הסיכויים להמרת לידים אלו ללקוחות משלמים.</p>
        </div>
    )
}