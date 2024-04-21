import { BiMessageRoundedDetail } from "react-icons/bi";
import { CiClock2 } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";
import { MdOutlineMotionPhotosPaused } from "react-icons/md";
import { RiCheckDoubleFill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import styles from './style.module.css';


// Description: This component displays a message item based on the provided properties.
// Props: 
// - title: The message title.
// - time: The time the message was sent.
// - date: The date the message was sent.
// - isCampaignActive: Indicates if the campaign is active, which sets the icon to active.
// - read: Indicates if the message has been read, which sets the icon to read.
// - pending: Indicates if the message is in the process of being written.
// Creator: Refael


export default function MessageItem({ campaignId, msgId, title, time, date, isCampaignActive = true, read = true, pending = false }) {

  return (
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

  );
}
