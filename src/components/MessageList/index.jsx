import { useEffect, useState } from 'react';
import styles from './style.module.css'
import data from "../../data/lead.data.json"
import timeDateFormat from "../../functions/timeDateFormat"
import messagesByDate from '../../functions/messagesByDate';
import MessageItem from '../MessageItem';

// Description : 
// Props : ____________ , _________
// Creator : yehoshua preiser
export default function MessageList() {
  const [organizedMessages, setOrganizedMessages] = useState({});

  useEffect(() => {
    const messages = messagesByDate(data); // Corrected function name
    setOrganizedMessages(messages);
  }, [data]);

  console.log(Object.entries(organizedMessages).map(([date, messages]) => ( messages)));

  return (
    <div>
      {Object.entries(organizedMessages).map(([date, messages], index) => (
        <div key={index}>
          <div>{date}</div>
          <ul>
            {messages.map((message, messageIndex) => (
              <li key={messageIndex}>
                <MessageItem message={message} date={date} title={"faasdf"}  />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}