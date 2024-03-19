import React, { useEffect, useState, useContext } from 'react'
import InputWrapper from '../InputWrapper'
import InputText from '../InputText/InputText'
import styles from './style.module.css'
import InputTextArea from '../InputTextArea'
import Button from '../Button'
import axios from 'axios'
import api from '../../functions/api'
import LeadInfoPage from '../../pages/LeadInfoPage/index'
import DataContext from '../../context/DataContext'
import { toast } from 'react-toastify';
import { useCampaign } from '../../pages/CampaignPage'
// import  from './LeadInfoPage'


export default function UpdateAndAddLead({ details={}, campaign, getCamp,isEdit }) {

    const [errorState, setErrorState] = useState()
    const { setPopUp } = useContext(DataContext);

    const [newData, setNewData] = useState({ ...details })
    //     fullName: details ? details.fullName : '',
    //     phone: details ? details.phone : '',
    //     email: details ? details.email : '',
    //     notes: details ? details.notes : ''
    // })


    const handleChange = (e, isPhone) => {
        let { name, value } = e.target
        if (isPhone && value == details.phone) return;
        setNewData(old => ({ ...old, [name]: value }))
    }


    function isValidIsraeliPhoneNumber(phoneNumber) {
        // Israeli phone number regex pattern
        const regexPattern = /^(0(5[^67]|[23489]))([\d]{7})$/;
        // Check if the provided phone number matches the regex pattern
        return regexPattern.test(phoneNumber);
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        if (!isValidIsraeliPhoneNumber(newData.phone)) {
            setErrorState('מספר הטלפון לא תקין ')
        } else {
            setErrorState()
            const thenF = _ => { toast.success("בוצע בהצלחה!"); getCamp() }
            const catchF = error => toast.error(error || "somthing want worng")
            if (!isEdit) {
                api.post(`/campaign/${campaign._id}/lead/`, { data: { ...newData } })
                    .then(thenF).catch(catchF)
            }
            else {
                api.put(`/campaign/${campaign._id}/lead/${details.leadId}`, newData)
                    .then(thenF).catch(catchF)
            }
            setPopUp(false)
        }
    }

    return <div className={styles.contanier} >
        <form onSubmit={handleOnSubmit} >
            <h1>{newData.fullName}</h1>
            <InputWrapper label={'שם מלא'} children={<InputText name='fullName' value={newData.fullName} required={true} onChange={handleChange} />} />
            <InputWrapper label={'טלפון'} children={<InputText name='phone' value={newData.phone} required={true} onChange={(e)=>handleChange(e,true)} />} />
            {errorState && <div className={styles.error}>{errorState}</div>}
            <InputWrapper label={'אמייל'} children={<InputText name='email' value={newData.email} onChange={handleChange} type={"email"} />} />
            <InputWrapper label={'הערות'} children={<InputTextArea name='notes' style={{ width: "100%" }} value={newData.notes} onChange={handleChange} />} />
            <div className={styles.buttons}>
                <Button type='submit' content='שמירה' />
                <Button content='ביטול' className='cancel' />
            </div>
        </form>
    </div>
}
