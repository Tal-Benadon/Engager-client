import { NavLink, Outlet } from 'react-router-dom'
import styles from './style.module.css'

// Description : ניתוב של 2 הקטגוריות ע"י
// Props : ____________ , _________
// Creator : ________
export default function TabSwitcher({ rout = [] }) {
  const className = ({ isActive }) => `${isActive ? styles.active : ""} ${styles.link}`
  return (
  <div className={styles.allcom}>
    {rout.map(r =>
      <div key={r.tab} className={styles.TabSwitcher}>
        <NavLink to={`/${r.tab}`} className={className}>{r.text}</NavLink>
      </div>
    )}
    <div className={styles.line}></div>
  </div>
)
}
