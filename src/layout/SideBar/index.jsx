import styles from './style.module.css'
import { NavLink } from 'react-router-dom'
import Icon from '../../components/Icon'
import CampaignList from '../../components/CampaignList'
import Button from '../../components/Button'

export default function SideBar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebartop}>
        <h1>אנגייג׳ר</h1>
        <ul>
          <li>
            <Icon nameIcon={'search'} nameColor={''} />
            <NavLink to="/search">חיפוש</NavLink>
          </li>
          <li>
            <Icon nameIcon={'setting'} nameColor={''} />
            <NavLink to="/settings">הגדרות</NavLink>
          </li>
          <li>
            <Icon nameIcon={'thumbsup'} nameColor={''} />
            <NavLink to="/fidback">שליחת פידבק</NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.lists} >
        <div className={styles.liststitle}>רשימות</div>
        <div className={styles.newlist} >
          <CampaignList campaignList={[
            {
              id: "1",
              title: "קורס תפירה 2023_3"
            },
            {
              id: "2",
              title: "כפר נוער - גיוס תלמידים"
            },
            {
              id: "3",
              title: "מנויי חדר כושר גבעת שמואל הנביר"
            },
            {
              id: "4",
              title: "מנויי חדר כושר גבעת שמואל הנביר"
            }
          ]
          } />
          <div className={styles.item}>
            <Icon nameIcon={'pluscircle'} nameColor={'create'} />
            <Button className="create" content="רשימה חדשה" />
          </div>
        </div>


      </div>
      <div className={styles.user} >

      </div>
    </div>
  )
}
