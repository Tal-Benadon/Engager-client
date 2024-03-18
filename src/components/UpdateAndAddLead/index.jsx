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
// import  from './LeadInfoPage'


export default function UpdateAndAddLead({ details, campaign }) {
    // להעביר כזה אובייקט.. בקשה...
    // details = {fullName:"aryeh", email:"aryeh@gmil.com",phone:"052776",notes:"", leadId: "dfyui"}


    const [fetchedCampaigns, setFetchedCampaigns] = useState(null);
    const [editOrAdd, setEditOrAdd] = useState()
    const [erorrState, setErorrState] = useState()
    const { setPopUp } = useContext(DataContext);
    const { user, setUser } = useContext(DataContext)

    const [newData, setNewData] = useState({
        fullName: details ? details.fullName : '',
        phone: details ? details.phone : '',
        email: details ? details.email : '',
        notes: details ? details.notes : ''
    })

    useEffect(() => {
        if (details) {
            setEditOrAdd('edit')
        } else { setEditOrAdd('add') }
    }, [])

    const handleChange = (e) => {
        let { name, value } = e.target
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
        console.log(newData)
        if (!isValidIsraeliPhoneNumber(newData.phone)) {
            setErorrState('מספר הטלפון לא תקין ')
        } else {
            setErorrState()
            if (editOrAdd == 'add') {
                try {
                    api.post(`lead/${campaign}/lead/`, { userId: user._id, data: { ...newData } })
                    toast.success(response && "נשלח בהצלחה!");
                    fetchCampaign()
                } catch (error) {
                    console.log(error);
                    toast.error(Error?.response?.data?.msg || "somthing want worng");

                }
            } else {
                if (Object.keys(newData).includes('phone')) {
                    if (newData.phone == details.phone) {
                        let result = newData
                        delete result.phone
                        setNewData(result)
                        console.log('😓😓😓😓');
                    }
                }
                api.put('/lead/' + details.leadId, newData)
                    .then(res => {
                        console.log('🧸' + res.data)
                        fetchCampaign()
                    })
                    .catch(e => {
                        console.log("🚛luliau", e.response.data);
                        if (e.response.data == "phoneExist") {
                            setErorrState('מספר הטלפון כבר קיים במערכת')
                        }
                    })
            }
        }
    }


    const fetchCampaign = async () => {
        try {
            const response = await api.get(`/campaign/`);
            setFetchedCampaigns(response.data);
        } catch (error) {
            console.error('Error fetching campaign data:', error);
        }
    };


    return <div className={styles.contanier} >
        <form onSubmit={(e) => handleOnSubmit(e)} >
            <h1>{newData.fullName}</h1>
            <InputWrapper label={'שם מלא'} children={<InputText name='fullName' value={newData.fullName} required={true} onChange={(e) => handleChange(e)} />} />
            <InputWrapper label={'טלפון'} children={<InputText name='phone' value={newData.phone} required={true} onChange={(e) => handleChange(e)} />} />
            {(erorrState)
                ?
                <div className={styles.error}>{erorrState}</div>
                :
                null}
            <InputWrapper label={'אמייל'} children={<InputText name='email' value={newData.email} onChange={(e) => handleChange(e)} type={"email"} />} />
            <InputWrapper label={'הערות'} children={<InputTextArea name='notes' style={{ width: "100%" }} value={newData.notes} onChange={(e) => handleChange(e)} />} />
            <div className={styles.buttons}>
                <Button type='submit' content='שמירה' onClick={() => setPopUp(false)} />
                {/* <Button type='submit' content='שמירה'  /> */}
                <Button content='ביטול' className='cancel' onClick={() => setPopUp(false)} />
                {/* <Button content='ביטול' className='cancel' onClick={() => { (editOrAdd == "edit") ? setIsEdite(false) : setPopUp(false) }} /> */}

            </div>
        </form>

    </div>
}
