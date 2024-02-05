import styles from './style.module.css'
import MessageList from '../MessageList'
import Button from '../Button'
import SearchBar from '../SearchBar'
import PopUp from '../PopUp'
import { useState } from 'react'
const [isOpen, setIsOpen] = useState(false)

// Description : 
// Props : ____________ , _________
// Creator : Yehoshua Preiser
export default function MessagesTab() {
  return (
    <div className={styles.MessagesTab}>
      <SearchBar/>
      <MessageList/>
      <Button className='cancel' content='הודעה חדשה' />
      <PopUp isOpen={isOpen} setIsOpen={setIsOpen}>
      
      </PopUp>
    </div>
  )
}
