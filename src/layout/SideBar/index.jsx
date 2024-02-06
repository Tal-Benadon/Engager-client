import styles from './style.module.css'
import { NavLink } from 'react-router-dom'
import Icon from '../../components/Icon'
import CampaignList from '../../components/CampaignList'
import Button from '../../components/Button'
import SearchBar from '../../components/SearchBar'
import { useContext, useState } from 'react'
import DataContext from '../../context/DataContext'
import NewCampaigenForm from '../../components/NewCampaignForm'

export default function SideBar() {
  const [displaySearchBar, setDisplaySearchBar] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const { isOpen, setIsOpen } = useContext(DataContext);

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebartop}>
        <h1>אנגייג׳ר</h1>
        <ul>
          <li onClick={() => setDisplaySearchBar(!displaySearchBar)}>
            <span>
              <Icon nameIcon={'search'} nameColor={''} />
              חיפוש
            </span>
          </li>
          {displaySearchBar &&
            <li>
              <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </li>
          }
          <li>
            <NavLink to="/settings">
              <Icon nameIcon={'setting'} nameColor={''} />
              הגדרות
            </NavLink>
          </li>
          <li>
            <NavLink to="/fidback">
              <Icon nameIcon={'thumbsup'} nameColor={''} />
              שליחת פידבק
            </NavLink>
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
          <div className={styles.item} onClick={()=> setIsOpen(<NewCampaigenForm setIsOpen={setIsOpen}/>)}>
            <Icon nameIcon={'pluscircle'} nameColor={'create'}  />
            <Button className="create"
             content="רשימה חדשה" 
             />
          </div>
        </div>


      </div>
      <div className={styles.user} >

      </div>
    </div>
  )
}
