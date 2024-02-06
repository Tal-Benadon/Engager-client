import styles from './style.module.css'
import Login from '../../components/Login/Login'
import Register from '../../components/Register'
import { useState } from 'react'


// Details : the componneta render Login/Regisrer by state thet change onClick
// Creator: shir

export default function LoginPage() {

    const [choose,setChoose] =useState('login')
   
    const handleChoose = (value) => {
        setChoose(value);
      };
   
  return (
    < div className ={styles.container}>
     <div className={styles.allcom}>
       <div className={styles.TabSwitcher}>
          <div onClick={() => handleChoose('signin')}  className={styles.active}>הרשמה</div>
          <div onClick={() => handleChoose('login')} className={styles.active}>התחברות</div>
        </div>
        {choose === 'login' ? <Login /> : <Register />}
     </div>
    </div>
    )
      
    
}
