import { useEffect, useState } from 'react';
import styles from './style.module.css'
import demo from "../../data/msgs.data.json"
import messagesByDate from '../../functions/messagesByDate';
import MessageItem from '../MessageItem';

// Description : gets a message array, maps it to MessageItem component seperated by date.
// Props : messageAray = array of message objects {subject, content,creationDate, leads:[{lead,receptionDate,status}]}
// Creator : yehoshua preiser
export default function MessageList({ messageArray = demo }) {
  const [organizedMessages, setOrganizedMessages] = useState({});

  useEffect(() => {
    const messages = messagesByDate(messageArray); 
    setOrganizedMessages(messages);
  }, [messageArray]);

  return (
    <div className={styles.MessageList}>
      {Object.entries(organizedMessages).map(([date, messages], index) => (
        <div key={index}>
          <div className={styles.date}>{date}</div>
          <ul className={styles.unorderedList}>
            {messages.map((message, messageIndex) => (
              < li key={messageIndex} >
                <MessageItem
                  title={message.subject}
                  date={message.formattedDate}
                  time={message.formattedTime}
                />
              </li>
            ))}
          </ul>
        </div>
      ))
      }
    </div >
  );
}