import styles from './style.module.css'
import MessageList from '../MessageList'
import Button from '../Button'
import SearchBar from '../SearchBar'
import PopUp from '../PopUp'
import { useState } from 'react'
import NewMessageForm from '../NewMessageForm'
// Description : 
// Props : ____________ , _________
// Creator : Yehoshua Preiser
export default function MessagesTab() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={styles.MessagesTab}>
      <SearchBar/>
      <MessageList/>
      <Button className='cancel' content='הודעה חדשה' onClick={()=>setIsOpen(true)}/>
      <PopUp isOpen={isOpen} setIsOpen={setIsOpen}>
      {/* <NewMessageForm/> */}
      hello
      </PopUp>
    </div>
  )
}
