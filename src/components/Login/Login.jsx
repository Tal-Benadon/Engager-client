import React from 'react'
import styles from './style.module.css'
import InputText from '../InputText/InputText'
import Button from '../Button'


// login page.
// <button /> gets props of content. needs to get ruot to DB to check that user fits password

export default function Login() {
    function handleSubmit(e) {
        e.preventDefault();
        const loginInfo = new FormData(e.target);
        console.log([...loginInfo])

    }
    return (
        <div className={styles.centerDiv}>
            <div className={styles.loginDiv}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='userName' className={styles.userNameaAndPssword}>
                        user name
                    </label>
                    <div className={styles.inputSpace}>
                        <InputText name={'userName'} />
                    </div>
                    <label htmlFor='password' className={styles.userNameaAndPssword}>
                        password
                    </label>
                    <div className={styles.inputSpace}>
                        <InputText type={'password'} name={'password'} />
                    </div>
                    <Button type='submit' content={'התחבר'} />
                </form>
            </div>
        </div>
    )
}
