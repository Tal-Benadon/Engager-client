import styles from './style.module.css'
import MessageList from '../MessageList'
import Button from '../Button'
import SearchBar from '../SearchBar'
import PopUp from '../PopUp'
import { useContext, useState } from 'react'
import NewMessageForm from '../NewMessageForm'
import DataContext from '../../context/DataContext'

// Description : 
// Props : ____________ , _________
// Creator : Yehoshua Preiser
export default function MsgListHolder() {

  const [searchTerm, setSearchTerm] = useState('')

  const { isOpen, setIsOpen } = useContext(DataContext);

  return (
    <>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className={styles.innerList}>
        <MessageList searchTerm={searchTerm} />
      </div>
      <span className={styles.newMsg}>
        <Button
          className='cancel'
          content='הודעה חדשה'
          onClick={() => setIsOpen(<NewMessageForm />)}
        />
      </span>
    </>
  )
}
