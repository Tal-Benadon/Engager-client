import React from 'react'
import InputText from '../InputText/InputText'
import styles from './style.module.css'
import Button from '../Button'
import InputWrapper from '../InputWrapper'
export default function Register() {



    return (
        <div className={styles.centerDiv}>
            <div className={styles.register}>
                <>
                    <label className={styles.text}> <span className={styles.star}>*</span> שם פרטי</label>
                    <div className={styles.inputSpace}>
                        <InputText name={'userName'} required={'required'} />

                    </div>
                </>
                <>
                    <label className={styles.text}> <span className={styles.star}>*</span> שם משפחה</label>
                    <div className={styles.inputSpace}>
                        <InputText name={'userName'} required={'required'} />
                    </div>
                </>
                <>
                    <label className={styles.text} > <span className={styles.star}>*</span> טלפון</label>
                    <div className={styles.inputSpace}>
                        <InputText name={'userName'} required={'required'} />
                    </div>
                </>
                <>
                    
                    <div className={styles.inputSpace}>
                    <InputWrapper label={"אימייל"} >
                        <InputText type={'email'} name={'userName'} required={'required'} />
                    </InputWrapper>
                    </div>
                </>
              
                    <div className={styles.inputSpace}>
                    <InputWrapper label={"סיסמה"} >
                        <InputText type={'password'} name={'password'} required={true} />
                    </InputWrapper>
                    </div>
                
                
                    <div className={styles.inputSpace}>
                    <InputWrapper label={"הערות"} >
                        <InputText name={'userName'} required={false} />
                        </InputWrapper>
                    </div>
                
                <div className={styles.button} >
                <Button type='submit' content={'הרשם'}  />
                <Button type='submit' content={'ביטול'} className = {"cancel"} />
                </div>
            </div>
        </div>
    )
}
