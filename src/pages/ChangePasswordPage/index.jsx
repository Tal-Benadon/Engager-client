import styles from './style.module.css'
import { useNavigate } from 'react-router-dom'
import ChangePassword from '../../components/ChangePassword'



export default function ChangePasswordPage() {



  return (
    < div className={styles.container}>
      <div className={styles.circle}></div>
      <div className={styles.allin}>
        {/* <div className={styles.tabSwitcher}>
          <TabSwitcher rout={arr} />
        </div> */}
        <div className={styles.login}>
          <ChangePassword />
        </div>
      </div>
    </div>

  )


}
