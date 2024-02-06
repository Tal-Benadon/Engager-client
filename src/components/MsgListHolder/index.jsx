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
    <div className={styles.innerList}>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <MessageList searchTerm={searchTerm} />
      <span>
        <Button
          className='cancel'
          content='הודעה חדשה'
          onClick={() => setIsOpen(<NewMessageForm />)}
        />
      </span>
    </div>
  )
}
