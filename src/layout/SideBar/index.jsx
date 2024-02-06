import styles from './style.module.css'
import { NavLink } from 'react-router-dom'
import Icon from '../../components/Icon'
import CampaignList from '../../components/CampaignList'
import Button from '../../components/Button'
import SearchBar from '../../components/SearchBar'
import { useState } from 'react'

export default function SideBar() {
  const [displaySearchBar, setDisplaySearchBar] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebartop}>
        <h1>אנגייג׳ר</h1>
        <ul>
          <li onClick={() => setDisplaySearchBar(!displaySearchBar)}>
            <Icon nameIcon={'search'} nameColor={''} />
            <NavLink>חיפוש</NavLink>
          </li>
          {!displaySearchBar &&
            <li>
              <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </li>
          }
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
          <CampaignList searchTerm={searchTerm} campaignList={[
            {
              id: "65c0939a5aa397278552a5b5",
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
