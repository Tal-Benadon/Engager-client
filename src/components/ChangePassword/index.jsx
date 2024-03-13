import React, { useState } from 'react'
import InputText from '../InputText/InputText'
import styles from './style.module.css'
import Button from '../Button'
import InputWrapper from '../InputWrapper'
import axios from 'axios'
import api from '../../functions/api'
import TabSwitcher from '../../components/TabSwitcher'
import { useNavigate, useParams } from 'react-router-dom'
import CheckBox from '../CheckBox'




export default function ChangePassword() {
    const [isChecked, setIsChecked] = useState(false);

    const fromtemplet = {password: '', passwordConfirm: '' }
    const [formState, setFormState] = useState(fromtemplet)
    const [errorForm, setErrorForm] = useState(fromtemplet)
   const params=useParams()
   
    async function controlToken(){

    }

    async function handleSubmit(e) {
        e.preventDefault();
        const data = '0546339290'
        console.log(data)
        console.log(formState)
        api.put(`user/${data}`, formState).then(res => console.log("הצליח", res)).
            catch((res) => {
                console.log("התחברות נכשלה" , res)
            })
    }

    const checkInput = (newData = '', name) => {
        const pas = newData.password
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;

        if ([name] == 'passwordConfirm' && (newData.passwordConfirm) != (pas)) {//עובד נפלא
            setErrorForm(old => ({ ...old, [name]: 'סיסמה לא תואמת' }))
        }
        else if ([name] == 'password' && (!passwordRegex.test(pas))) {//עובד נפלא
            setErrorForm(old => ({ ...old, [name]: ' סיסמה כוללת אות ומספר ו8 תווים לפחות' }))
        }
        else {
            setErrorForm(0)
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormState(old => {
            const newData = { ...old, [name]: value }
            checkInput(newData, [name])
            setFormState(newData)
            return newData
        })
    }



    return (
        <div className={styles.container}>

            <div className={styles.circle}></div>
            <div className={styles.allin}>
                <form className={styles.inputSpace} onSubmit={handleSubmit}>
                    <div className={styles.title}>אנגייג'ר</div>
                    <div className={styles.title2}>עדכון סיסמה</div>

                    <InputWrapper label={"סיסמה"} setIsVisible={true} >
                        <InputText type={'password'} name={'password'} required={true} onChange={handleChange} value={formState.password} className={styles.input} />
                        {errorForm.password &&
                            <div className={styles.error}>{errorForm.password}</div>}
                    </InputWrapper>

                    <InputWrapper label={"אימות סיסמה"} setIsVisible={true} >
                        <InputText type={'password'} name={'passwordConfirm'} required={true} onChange={handleChange} value={formState.passwordConfirm} className={styles.input} />
                    </InputWrapper>
                    {errorForm.passwordConfirm &&
                        <div className={styles.error}>{errorForm.passwordConfirm}</div>}
                            <button className={styles.button} type='submit' >עדכון סיסמה</button>    
                </form>
            </div>
        </div>
    )

}