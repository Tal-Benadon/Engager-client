import { NavLink, Outlet } from 'react-router-dom'
import styles from './style.module.css'

// Description : 
// Props : ____________ , _________
// Creator : ________
export default function TabSwitcher() {
  const classHeader = ({ isActive }) => isActive ? styles.active : ""

  return (
    <div className={styles.allcom}>
      <div className={styles.TabSwitcher}>
        <Outlet />
        <NavLink to="/gila1" className={styles.active}>הודעות</NavLink>
        <NavLink to="/gila2" className={styles.active}>נרשמים</NavLink>
      </div>
        <div className={styles.line}></div>
    </div>
  )
}
