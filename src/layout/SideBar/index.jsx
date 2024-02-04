import styles from './style.module.css'
import { NavLink } from 'react-router-dom'

export default function index() {
  return (
  <div  className={styles.sidebar}>
    <div  className={styles.sidebartop}>
      <h1>אנגייג׳ר</h1>
      <ul>
        <li>
        <NavLink to="/search">חיפוש</NavLink>
        </li>
        <li>
        <NavLink to="/settings">הגדרות</NavLink>
        </li>
        <li>
          <NavLink to="/fidback">שליחת פידבק</NavLink>
        </li>
      </ul>
    </div>
 <div  className={styles.lists} >
  <div className={styles.liststitle}>רשימות</div>
    <div  className={styles.newlist} >

    </div>
  </div>
  <div  className={styles.user} >

  </div>
</div>
  )
}
