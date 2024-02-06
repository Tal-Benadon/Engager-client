import React from 'react'
import styles from './style.module.css'
import InputText from '../InputText/InputText'
import Button from '../Button'
import InputWrapper from '../InputWrapper'
import { useState } from 'react'


// login page.
// <button /> gets props of content. needs to get ruot to DB to check that user fits password

export default function Login() {

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
            return newData
        })
    }



    return (
        <form className={styles.loginDiv}>

            <div className={styles.inputSpace}>
                <InputWrapper label={"טלפון"}>
                    <InputText name={'phone'} required={true} onChange={handleChange} value={formState.name} />
                </InputWrapper>
            </div>


            <div className={styles.inputSpace}>
                <InputWrapper label={"סיסמה"}>
                    <InputText name={'password'} required={true} onChange={handleChange} value={formState.name} />
                </InputWrapper>
            </div>

            <div className={styles.button} >

                <Button type='submit' content={'התחבר'} />
            </div>

        </form>


        // ******************************************

        // <div >
        //     <form className={styles.register} onSubmit={handleSubmit}>

        //         <div className={styles.inputSpace}>
        //             <InputWrapper label={"שם משתמש"} >
        //                 <InputText name={'userFName'} required={true} onChange={handleChange} value={formState.name} />
        //             </InputWrapper>
        //         </div>

        //         <div className={styles.inputSpace}>
        //             <InputWrapper label={"הזן סיסמה"} >
        //                 <InputText name={'userLName'} required={true} onChange={handleChange} value={formState.name} />
        //             </InputWrapper>
        //         </div>


        //     </form>
        // </div>
    )
}
