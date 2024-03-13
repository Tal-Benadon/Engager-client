import React, { useContext } from 'react'
import styles from './style.module.css'
import InputText from '../../components/InputText/InputText'
import Button from '../../components/Button'
import InputWrapper from '../../components/InputWrapper'
import { useState } from 'react'
import axios from 'axios'
import api from '../../functions/api'
import DataContext from '../../context/DataContext'
import { useNavigate, useParams } from 'react-router'
import getGoogleOAuthURL from '../../functions/loginWithGoogle'

export default function CompleteDetails() {

    const [formState, setFormState] = useState({})
    // const { user, setUser } = useContext(DataContext)
    const nav = useNavigate()
    const { email } = useParams(); 
    async function handleSubmit(e) {
        try {
            e.preventDefault();
            const res = await api.put(`/user/update/${email}`, formState);

        } catch (err) {
            console.error({ err })
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormState(old => {
            const newData = { ...old, [name]: value }
            localStorage.user = JSON.stringify({ ...newData })
            return newData
        })
    }


    return (
        < div className={styles.container}>
            <div className={styles.circle}></div>
            <div className={styles.allin}>
                <div>

                    <form onSubmit={handleSubmit} className={styles.inputSpace}>
                        <div className={styles.title}>אנגייג'ר</div>
                        <div className={styles.title2}>השלמת פרטים קטנה וסיימנו..</div>
                        <div>
                            <InputWrapper label={"טלפון"} >
                                <InputText name={'phone'} required={true} onChange={handleChange} value={formState.name} className={styles.input} />
                            </InputWrapper>
                        </div>
                        <button className={styles.button} type='submit'>שליחה</button>
                    </form>

                    <div className={styles.notlogin}>
                        <div className={styles.notlogin1}>עדיין לא רשומים?</div>
                        <div onClick={toregister} className={styles.notlogin2}>הרשמה זה ממש כאן</div>
                    </div>
                </div>
            </div></div>
    )
}
