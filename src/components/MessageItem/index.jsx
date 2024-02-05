import React, { useState } from 'react';
import styles from './style.module.css';
import { BiMessageRoundedDetail } from "react-icons/bi";
import { RiCheckDoubleFill } from "react-icons/ri";
import { MdOutlineMotionPhotosPaused } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";


// Description: This component displays a message item based on the provided properties.
// Props: 
// - title: The message title.
// - time: The time the message was sent.
// - date: The date the message was sent.
// - isCampaignActive: Indicates if the campaign is active, which sets the icon to active.
// - read: Indicates if the message has been read, which sets the icon to read.
// - pending: Indicates if the message is in the process of being written.
// Creator: Refael

export default function MessageItem({ title = "תראו איזו הודעה מגניבה", time = "12:42", date = "04/12/2024", isCampaignActive = true, read=true, pending=false }) {
  
  
  //**state for active section. changing the background to gray and the icon to green*** */
 
  const [isOnActive, setIsOnActive] = useState(false);
  const toggleActive = () => setIsOnActive(!isOnActive);

//***************************************************************************************** */

  return (
    <div
      className={`${styles.message} ${isOnActive ? 'message' : ''}`} // שימו לב לשינוי כאן: הוספת ve messageActive על פי הצורך
      onClick={toggleActive}>
      <div className={styles.titleAndDetails}>
        <div className={styles.title}>{title}</div>
        <div className={styles.DateAndTime}>
          <div className={styles.time}>{time}</div>
          <div className={styles.date}>{date}</div>
          <div className={styles.checkIcon}>
            {pending ? (
              <CiClock2 className={styles.pendingIcon} />
            ) : read ? (
              <RiCheckDoubleFill className={styles.readIcon} />
            ) : (
              <FaCheck className={styles.unreadIcon} />
            )}
          </div>
        </div>
      </div>
      <div className={styles.square}>
        {isCampaignActive ? (
          <BiMessageRoundedDetail className={`${styles.activeIcon}`} />
        ) : (
          <MdOutlineMotionPhotosPaused className={styles.pausedIcon} />
        )}
      </div>
    </div>
  );
}
