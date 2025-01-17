import { BiMessageRoundedDetail } from "react-icons/bi";
import { CiClock2, CiEdit } from "react-icons/ci";
import { FaCheck, FaRegCirclePause } from "react-icons/fa6";
import { MdOutlineMotionPhotosPaused } from "react-icons/md";
import { RiCheckDoubleFill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import styles from './style.module.css';
import Popover from "../Popover";
import Icon from "../Icon";
import { FaTrashAlt } from "react-icons/fa";
import DataContext from "../../context/DataContext";
import MessageEdit from "../MessageEdit";
import { useCampaign } from "../../pages/CampaignPage";
import { useContext } from "react";
import { toast } from "react-toastify";
import Confirm from '../Confirm'
import api from "../../functions/api";

// Description: This component displays a message item based on the provided properties.
// Props:
// - title: The message title.
// - time: The time the message was sent.
// - date: The date the message was sent.
// - isCampaignActive: Indicates if the campaign is active, which sets the icon to active.
// - read: Indicates if the message has been read, which sets the icon to read.
// - pending: Indicates if the message is in the process of being written.
// Creator: Refael



export default function MessageItem({ campaignId, msgId, content, subject, title, time, date, isCampaignActive = true, read = true, pending = false }) {
  const { setPopUp } = useContext(DataContext)
  const { getCamp } = useCampaign()

  const deleteMsg = async () => {
    try {
      await api.del(`campaign/${campaignId}/msg/${msgId}`)
      toast.success('ההודעה נמחקה בהצלחה')
      setPopUp(false)
      getCamp()
    } catch (error) {
      console.log({ error });
    }
  }
  const handleEdit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setPopUp({
      title: 'עריכת הודעה',
      component: <MessageEdit campaignId={campaignId} setPopUp={setPopUp} getCamp={getCamp} message={{ content, subject, _id: msgId }} msgId={msgId} title={title} />
    })
  }
  const handleDelete = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setPopUp({
      title: 'מחיקת הודעה',
      component: <Confirm onConfirm={deleteMsg} text="האם אתה בטוח שברצונך למחוק את ההודעה?" />
    })
  }


  const list = [
    { text: 'עריכה', icon: <CiEdit />, onClick: handleEdit },
    { text: 'השהיה', icon: <FaRegCirclePause />, onClick: () => alert('TODO') },
    { text: 'מחיקה', icon: <FaTrashAlt />, onClick: handleDelete, color: 'red' },
  ]

  return (
    <Popover list={list} fnName='onRight' outStyle={{ top: '20px', bottom: 'auto', right: '20px', left: 'auto', width: '200px' }}  >
    <NavLink
      to={`/campaign/${campaignId}/messages/${msgId}`}
      className={({ isActive }) => `${isActive ? styles.messageActive : styles.message} ${styles.main}`}>
        <div className={styles.square}>
          {isCampaignActive ?
            <BiMessageRoundedDetail className={styles.activeIcon} /> :
            <MdOutlineMotionPhotosPaused className={styles.pausedIcon} />}
        </div>
      <div className={styles.titleAndDetails}>
        <p className={styles.title}>{title}</p>
        <div className={styles.DateAndTime}>
          {pending ?
            <CiClock2 className={styles.pendingIcon} /> :
            read ?
              <RiCheckDoubleFill className={styles.readIcon} /> :
              <FaCheck className={styles.unreadIcon} />}
          <div className={styles.time}>{time}</div>
          <div className={styles.creationDate}>{date}</div>
          <div className={styles.checkIcon}>
          </div>
        </div>
      </div>
    </NavLink>
      </Popover>

  );
}
