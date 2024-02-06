import React, { useState } from 'react'
import InputText from '../InputText/InputText'
import styles from './style.module.css'
import Button from '../Button'
import InputWrapper from '../InputWrapper'
import axios from 'axios'
import api from '../../functions/api'

// קומפוננטת הרשמת משתמש חדש לא ליד!! כל העיצוב מוכן
//2 פונקציית הנדלסבמיט
//וכן הכפתור הרשמה בסוף לא עושה כרגע כלוםםם
//וצריך להתחבר לשרת ולעשות פוסט

export default function Register() {
    const [formState, setFormState] = useState({})
    const [errorForm, setErrorForm] = useState({ passwordConfirm: '', password: '', userEmail: '', userPhone: '' })

    async function handleSubmit(e) {
        e.preventDefault();
        const data =formState
        api.post("/user", data).
            then((res) => console.log("response from server", res.data))

    }

    const checkInput = (newData = '', name) => {
        const pas = newData.password
        const email = newData.userEmail
        const phone = newData.userPhone
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
        const phoneRegex = /^(?:0[5][2-9]\d(?:-?\d){6})$/;

        if ([name] == 'passwordConfirm' && (newData.passwordConfirm) != (pas)) {//עובד נפלא
            setErrorForm(old => ({ ...old, [name]: 'סיסמה לא תואמת' }))
            console.log(phone);
        }
        else if ([name] == 'password' && (!passwordRegex.test(pas))) {//עובד נפלא
            console.log(passwordRegex.test(pas));
            setErrorForm(old => ({ ...old, [name]: ' סיסמה כוללת אות ומספר ו8 תווים לפחות' }))
        }
        else if ([name] == 'userEmail' && (!email.includes("@") || !email.includes("."))) {//עובד נפלא
            setErrorForm(old => ({ ...old, [name]: 'אמייל לא תקין' }))
        }
        else if ([name] == 'userPhone' && (!phoneRegex.test(phone))) {//עובד נפלא
            setErrorForm(old => ({ ...old, [name]: '10 ספרות' }))
        }
        else {
            setErrorForm(0)
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormState(old => {
            const newData = { ...old, [name]: value }
            localStorage.user = JSON.stringify({ ...newData, password: '' })
            checkInput(newData, [name])
            console.log(newData);
            setFormState(newData)
            return newData
        })
    }


    return (
        <div className={styles.centerDiv}>
            <form className={styles.register} onSubmit={handleSubmit}>

                <div className={styles.inputSpace}>
                    <InputWrapper label={"שם"} >
                        <InputText name={'userName'} required={true} onChange={handleChange} value={formState.name} />
                    </InputWrapper>
                </div>

                <div className={styles.inputSpace}>
                    <InputWrapper label={"טלפון"} >
                        <InputText name={'userPhone'} required={true} onChange={handleChange} value={formState.name} />
                        {errorForm.userPhone &&
                            <div className={styles.error}>{errorForm.userPhone}</div>}
                    </InputWrapper>
                </div>

                <div className={styles.inputSpace}>
                    <InputWrapper label={"אמייל"} >
                        <InputText type={'email'} name={'userEmail'} required={true} onChange={handleChange} value={formState.name} />
                        {errorForm.userEmail &&
                            <div className={styles.error}>{errorForm.userEmail}</div>}
                    </InputWrapper>
                </div>

                <div className={styles.inputSpace}>
                    <InputWrapper label={"סיסמה"} >
                        <InputText type={'password'} name={'password'} required={true} onChange={handleChange} value={formState.name} />
                        {errorForm.password &&
                            <div className={styles.error}>{errorForm.password}</div>}
                    </InputWrapper>
                </div>

                <div className={styles.inputSpace}>
                    <InputWrapper label={"אימות סיסמה"} >
                        <InputText type={'password'} name={'passwordConfirm'} required={true} onChange={handleChange} value={formState.name} />
                    </InputWrapper>
                    {errorForm.passwordConfirm &&
                        <div className={styles.error}>{errorForm.passwordConfirm}</div>}
                </div>

                <div className={styles.button} >
                    <Button type='submit' content={'הרשם'} />
                    {/* <Button type='submit' content={'ביטול'} className={"cancel"} /> */}
                </div>
            </form>
        </div>
    )
}
