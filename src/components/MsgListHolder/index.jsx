import styles from './style.module.css'
import MessageList from '../MessageList'
import Button from '../Button'
import SearchBar from '../SearchBar'
import PopUp from '../PopUp'
import { useContext } from 'react'
import NewMessageForm from '../NewMessageForm'
import DataContext from '../../context/DataContext'
// Description : 
// Props : ____________ , _________
// Creator : Yehoshua Preiser
export default function MsgListHolder() {

  const { isOpen, setIsOpen } = useContext(DataContext);
  console.log(isOpen);
  return (<>
    <div>
      <PopUp isOpen={isOpen} setIsOpen={setIsOpen}>
        <NewMessageForm />
      </PopUp>
    </div>
    <div className={styles.MessagesTab}>
      <SearchBar />
      <MessageList />
      <Button className='cancel' content='הודעה חדשה' onClick={() => setIsOpen(true)} />
    </div>
  </>
  )
}
