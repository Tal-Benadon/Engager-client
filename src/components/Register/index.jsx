import React, { useState } from 'react'
import InputText from '../InputText/InputText'
import styles from './style.module.css'
import Button from '../Button'
import InputWrapper from '../InputWrapper'
import axios from 'axios'

// קומפוננטת הרשמת משתמש חדש לא ליד!! כל העיצוב מוכן
//בהכנה:1 פונקצייה שבודקת אימות סיסמה
//2 פונקציית הנדלסבמיט
//3 פונקציית הנדל צנג
//וכן הכפתור הרשמה בסוף לא עושה כרגע כלוםםם
//וצריך להתחבר לשרת ולעשות פוסט

export default function Register() {
    const [formState, setFormState] = useState({})

    async function handleSubmit(e) {
        e.preventDefault();

    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormState(old => {
            const newData = { ...old, [name]: value }
            localStorage.user = JSON.stringify({ ...newData, password: '' })
            if ((newData.passwordConfirm) != (newData.password)) {
                console.log(newData.name);
            }
            //console.log(newData);
            return newData
        })
    }


    return (
        <div className={styles.centerDiv}>
            <form className={styles.register} onSubmit={handleSubmit}>

                <div className={styles.inputSpace}>
                    <InputWrapper label={"שם פרטי"} >
                        <InputText name={'userFName'} required={true} onChange={handleChange} value={formState.name} />
                    </InputWrapper>
                </div>

                <div className={styles.inputSpace}>
                    <InputWrapper label={"שם משפחה"} >
                        <InputText name={'userLName'} required={true} onChange={handleChange} value={formState.name} />
                    </InputWrapper>
                </div>

                <div className={styles.inputSpace}>
                    <InputWrapper label={"טלפון"} >
                        <InputText name={'userPhone'} required={true} onChange={handleChange} value={formState.name} />
                    </InputWrapper>
                </div>

                <div className={styles.inputSpace}>
                    <InputWrapper label={"אימייל"} >
                        <InputText type={'email'} name={'userEmail'} required={true} onChange={handleChange} value={formState.name} />
                    </InputWrapper>
                </div>

                <div className={styles.inputSpace}>
                    <InputWrapper label={"סיסמה"} >
                        <InputText type={'password'} name={'password'} required={true} onChange={handleChange} value={formState.name} />
                    </InputWrapper>
                </div>

                <div className={styles.inputSpace}>
                    <InputWrapper label={"אימות סיסמה"} >
                        <InputText type={'password'} name={'passwordConfirm'} required={true} onChange={handleChange} value={formState.name} />
                    </InputWrapper>
                </div>

                <div className={styles.button} >
                    <Button type='submit' content={'הרשם'} />
                    {/* <Button type='submit' content={'ביטול'} className={"cancel"} /> */}
                </div>
            </form>
        </div>
    )
}
