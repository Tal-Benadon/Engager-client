import styles from './style.module.css'
import { useNavigate } from 'react-router-dom'
import ChangePassword from '../../components/ChangePassword'
import { useState } from 'react'
import ActivationStatusBox from '../../components/ActivationStatusBox'



export default function ChangePasswordPage() {
const [tokenExpired, setTokenExpired] = useState(false)


  return (
    < div className={styles.container}>
      <div className={styles.circle}></div>
      <div className={styles.allin}>
        {/* <div className={styles.tabSwitcher}>
          <TabSwitcher rout={arr} />
        </div> */}
        <div className={styles.login}>
          {tokenExpired ? <ActivationStatusBox successStatus={'ExpiredPass'}/> :
          <ChangePassword setTokenExpired={setTokenExpired} />
        }
        </div>
      </div>
    </div>

  )


}
