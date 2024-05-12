import styles from './style.module.css'
// import axios, { Axios } from 'axios';
import InputWrapper from '../InputWrapper';
import Button from '../Button';
import InputTextArea from '../InputTextArea/index';
import { useState } from 'react';
import InputText from '../InputText/InputText';
import api from '../../functions/api';

export default function MessageEdit({  setPopUp, message, campaignId, getCamp }) {
    const [formData, setFormData] = useState(message || {})

    const handleChange = (e) => setFormData(old => ({ ...old, [e.target.name]: e.target.value }))

    const handleSubmit = async (e) => {
        e.preventDefault();
        const dataToUpdate = { content: formData.content, subject: formData.subject }
        try {
            await api.put(`/campaign/${campaignId}/msg/${message._id}`, dataToUpdate)
            await getCamp()
            setPopUp(false)
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className={styles.InputWrapper}  >
            <hr />
            <form onSubmit={handleSubmit} >
                    <InputWrapper
                        label={'שם ההודעה'}
                        subLabel={'שם פנימי שיהיה גלוי רק לך'}
                    >
                                <InputText style={{margin: '10px 0'}} name='subject' onChange={handleChange} value={formData.subject} />
                    </InputWrapper>
                        
                    <InputWrapper
                        label={'תוכן ההודעה'}
                        subLabel={'זוהי ההודעה שתשלח בתזמון הנבחר'}
                    >
                        <InputTextArea name="content" onChange={handleChange} value={formData.content} />
                    </InputWrapper>
                <div className={styles.actions}  >
                    <Button className={"cancel"} content={"ביטול"} onClick={() => setPopUp(false)} />
                    <Button className={"save"} content={"שמירה"} />
                </div>
            </form>
        </div>
    )

}