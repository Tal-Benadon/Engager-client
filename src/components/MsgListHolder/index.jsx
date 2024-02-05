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
export default function MsgListHolder() {
  const [isOpen, setIsOpen] = useState(false)
  return (<>
  <div>
      <PopUp isOpen={isOpen} setIsOpen={setIsOpen} title={"הודעה חדשה"}>
        <NewMessageForm />
      </PopUp>
  </div>
    <div className={styles.MsgListHolder}>
      <SearchBar/>
      <MessageList/>
      <Button className='cancel' content='הודעה חדשה' onClick={()=>setIsOpen(true)}/>
    </div>
  </>
  )
}
