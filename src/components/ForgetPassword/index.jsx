import React, { useState } from 'react'
import InputWrapper from '../InputWrapper'
import InputText from '../InputText/InputText'
import styles from './style.module.css'
import api from '../../functions/api'


export default function index() {
    const fromtemplet = { phone: '' }
    const [formState, setFormState] = useState(fromtemplet)
    const [errorForm, setErrorForm] = useState(fromtemplet)
    async function handleSubmit(e) {
        e.preventDefault();
        const data = formState
        console.log(data.phone)
        api.get(`user/forgetPassword/${data.phone}`).then(res => console.log("הצליח", res)).
            catch((res) => {
                console.log("מספר טלפון אינו קיים במערכת" , res)
                setErrorForm({ phone: "מספר טלפון אינו קיים במערכת" })
            })
    }
    const handleChange = (event) => {
        const { name, value } = event.target
        setFormState(old => {
            const newData = { ...old, [name]: value }
            localStorage.user = JSON.stringify({ ...newData, password: '' })
            checkInput(newData, [name])
            setFormState(newData)
            return newData
        })
    }
    const checkInput = (newData = '', name) => {
        const phone = newData.phone
        const phoneRegex = /^(?:0[5][2-9]\d(?:-?\d){6})$/;

        if ([name] == 'phone' && (!phoneRegex.test(phone))) {//עובד נפלא
            setErrorForm(old => ({ ...old, [name]: 'המספר אינו תואם ווצאפ' }))
        }
        else {
            setErrorForm(0)
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.circle}></div>
            <div className={styles.allin}>
            <div className={styles.tabSwitcher}>שינוי סיסמה
            <div className={styles.line}></div>
            </div>
            
                <form className={styles.inputSpace} onSubmit={handleSubmit}>
                    <div className={styles.inputSpace}>
                        <div className={styles.title}>אנגייג'ר</div>
                        <InputWrapper label={"טלפון"} setIsVisible={true} >
                            <InputText type={'phone'} name={'phone'} required={true} onChange={handleChange}
                                value={formState.phone} className={styles.input} />
                            {errorForm.phone &&
                                <div className={styles.error}>{errorForm.phone}</div>}
                        </InputWrapper>
                        <button className={styles.button} type='submit' >שלחו לי קישור לשינוי סיסמה</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

