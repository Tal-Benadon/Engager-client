import LeadList from '../LeadList'
import SearchBar from '../SearchBar'
import styles from './style.module.css'

// Description : 
// Props : ____________ , _________
// Creator : ________
export default function LeadListHolder() {
  return (
  
      <div className={styles.LeadListHolder}>
        <SearchBar />
        {/* <LeadList /> */}
      </div>
      )
}
