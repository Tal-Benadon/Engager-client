import styles from './style.module.css'
import { useNavigate } from 'react-router-dom'


export default function ChangePasswordPage() {


  const navigate = useNavigate()
  const arr = [{ tab: "register", text: "הרשמה" }, { tab: "login", text: "התחברות" }]

  // const login = () => {
  //   navigate(`/login`, { relative: 'path' })
  // }

  return (
    < div className={styles.container}>
      <div className={styles.circle}></div>
      <div className={styles.allin}>
        {/* <div className={styles.tabSwitcher}>
          <TabSwitcher rout={arr} />
        </div> */}
        <div className={styles.login}>
          <Login />
        </div>
      </div>
    </div>

  )


}
