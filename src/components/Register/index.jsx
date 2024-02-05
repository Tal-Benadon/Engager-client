import React from 'react'
import InputText from '../InputText/InputText'
import styles from './style.module.css'

export default function Register() {



    return (
        <div className={styles.centerDiv}>
            <div className={styles.register}>
                <>
                    <label className={styles.text}>שם פרטי</label>
                    <div className={styles.inputSpace}>
                        <InputText name={'userName'} required={'required'} />

                    </div>
                </>
                <>
                    <label className={styles.text}> שם משפחה</label>
                    <div className={styles.inputSpace}>
                        <InputText name={'userName'} required={'required'} />
                    </div>
                </>
                <>
                    <label className={styles.text}>טלפון</label>
                    <div className={styles.inputSpace}>
                        <InputText name={'userName'} required={'required'} />
                    </div>
                </>
                <>
                    <label className={styles.text}> אימייל</label>
                    <div className={styles.inputSpace}>
                        <InputText type={'email'} name={'userName'} required={'required'} />
                    </div>
                </>
                <>
                    <label className={styles.text}>סיסמא</label>
                    <div className={styles.inputSpace}>
                        <InputText type={'password'} name={'password'} required={'required'} />
                    </div>
                </>
                <>
                    <label className={styles.text}>הערות</label>
                    <div className={styles.inputSpace}>
                        <InputText name={'userName'} required={'required'} />
                        {/* <input type="text"  /> */}
                    </div>
                </>
            </div>
        </div>
    )
}
