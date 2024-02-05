import React from 'react'
import styles from './style.module.css'
import InputText from '../InputText/InputText'




export default function Login() {
    return (
        <div className={styles.centerDiv}>
            <div className={styles.loginDiv}>
                <>
                    <label htmlFor='userName' className={styles.userNameaAndPssword}>
                        userName
                    </label>
                    <div className={styles.inputSpace}>
                        <InputText name={'userName'} />
                    </div>
                </>

                <>
                    <label htmlFor='password' className={styles.userNameaAndPssword}>
                        password
                    </label>
                    <InputText type={'password'} name={'password'} />
                </>
            </div>
            {/* <Button /> */}
        </div>
    )
}
