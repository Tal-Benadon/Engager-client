import styles from './style.module.css'
import MessageList from '../MessageList'
import Button from '../Button'
import SearchBar from '../SearchBar'
import PopUp from '../PopUp'
import { useContext, useEffect, useState } from 'react'
import NewMessageForm from '../NewMessageForm'
import DataContext from '../../context/DataContext'
import Icon from '../../components/Icon'
import { useParams } from 'react-router'
import { useCampaign } from '../../pages/CampaignPage'

// Description : 
// Props : ____________ , _________
// Creator : Yehoshua Preiser
export default function MsgListHolder() {

  const [searchTerm, setSearchTerm] = useState('')
  const {campId} =useParams()
const {getCamp, campaign} = useCampaign()
  const { PopUp, setPopUp } = useContext(DataContext);

  return (
    <>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className={styles.innerList}>
        <MessageList searchTerm={searchTerm} />
      </div>
      <span className={styles.newMsg}>
        <div className={styles.item} onClick={() => setPopUp({
          title:"הודעה חדשה",
          component:<NewMessageForm setPopUp={setPopUp} campId={campId} campaign={campaign} getCamp={getCamp} />
        })}>
          <Icon nameIcon={'pluscircle'} nameColor={'create'} />
          <Button className="create"
          content='הודעה חדשה'
          />
        </div>  
      </span>
    </>
  )
}
