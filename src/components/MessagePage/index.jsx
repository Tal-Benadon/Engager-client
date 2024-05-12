import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import DataContext from '../../context/DataContext';
import api from '../../functions/api';
import campaignHelper from '../../functions/campaignHelper';
import formatDate from '../../functions/dateFormat';
import { useCampaign } from '../../pages/CampaignPage';
import Accordion from '../Accordion';
import Button from '../Button';
import HeadLine from '../HeadLine';
import MessageEdit from '../MessageEdit';
import ScheduleInput from '../ScheduleInput';
import styles from './style.module.css';
import { MdEdit } from "react-icons/md";
import { formatDateSchedule, formatTimeSchedule } from './functions';



// TODO: לחבר את שליחת ההודעה לווטסאפ
// TODO: "להסיר את כפתור השלח במידה ואין אנשים שלא קיבלו את ההודעה או להפוך אותו ל"שלח מחדש

export default function MessagePage() {
    const { PopUp, setPopUp, user } = useContext(DataContext)
    const [date, setDate] = useState(null)
    const { messageId } = useParams();
    const { campaign, getCamp } = useCampaign() || {};

    const message = campaign?.msg?.find(msg => msg._id == messageId) || {};
    const { creationDate, subject, content } = message;

    let msgSent = campaignHelper.msgSentDetails(campaign, message._id);
    let dateSend = formatDateSchedule(date || new Date())
    let timeSend = formatTimeSchedule(date || new Date())


    const schedulingButton = async (date, userId) => {
        try {
            const miliSecondsDate = new Date(date).getTime()
            console.log(miliSecondsDate);
            setPopUp(false)
            const response = await api.put(`campaign/${campaign._id}/msg/${messageId}/update-queue`, miliSecondsDate)
            if (response.success === true) {
                const res = await axios.post(`http://localhost:3000/whatsupserver/update/jobs`, { userId })
                console.log(res.data);
            }
        } catch (error) {
            console.error(error);
        }
    }

    const editMsg = () => setPopUp({
        title: "עריכת הודעה",
        component: <MessageEdit campaignId={campaign?._id} isOpen={PopUp} message={message} getCamp={getCamp} setPopUp={setPopUp} />
    })

    const send = async () => {
        try {
            const res = await api.get(`/campaign/whatsapp/camp/${campaign._id}/msg/${messageId}/leads`)
        } catch (error) { console.error("Error:", error); }
    }

    const schedule = () => setPopUp({
        title: "תזמון הודעה",
        component: (<form className={styles.schedulePopUp} onSubmit={(e) => e.preventDefault()}><ScheduleInput setDate={setDate} />
            <Button content='בחר זמן' onClick={() => schedulingButton(date, user._id)} />
        </form>)
    })

    return (
        <div className={styles.MessagePage}>
            <HeadLine
                title={subject}
                subtitle={`נוצר ב - ${formatDate(creationDate)}`}
                iconName={'writing'}
                icon={<MdEdit/>}
                iconOnClick={editMsg}
            />

            <div className={styles.message}>
                <div className={styles.messageitem}>
                    {content}
                </div>
                {dateSend && timeSend ?
                    <div className={styles.messageDate}>
                        יישלח ב- {dateSend} | {timeSend}
                    </div> :
                    //ToDo: רינדור מותנה לתזמן הודעה, צריך לחבר לאון קליק את הפןנקציה של תזמון הודעה
                    <div className={styles.messageitem}><button onClick={() => alert('תזמן')}>תזמן הודעה</button></div>
                }
            </div>
            
            <div className={styles.send}>
                <Button content='שלח' onClick={send} />
                <Button content='תזמן הודעה' onClick={schedule} />
            </div>

            <Accordion
                title={`נשלח ל-${msgSent.sent?.length || 0} אנשים`}
                campaignId={campaign._id}
                leadList={msgSent.sent} />
            <Accordion
                title={`לא נשלח ל-${msgSent.notSent?.length || 0} אנשים`}
                campaignId={campaign._id}
                leadList={msgSent.notSent} />
        </div>
    )
}