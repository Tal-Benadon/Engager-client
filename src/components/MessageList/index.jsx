import { useEffect, useState } from 'react';
import styles from './style.module.css'
import demo from "../../data/msgs.data.json"
import messagesByDate from '../../functions/messagesByDate';
import MessageItem from '../MessageItem';
import { useCampaign } from '../../pages/CampaignPage';

// Description : gets a message array from context, maps it to MessageItem component seperated by date, with filter by seach
// Props : searchTerm from usestate of seachbar
// Creator : yehoshua preiser
export default function MessageList({ searchTerm }) {

  const campaign = useCampaign();

  const [organizedMessages, setOrganizedMessages] = useState({});

  useEffect(() => {
    const messages = messagesByDate(campaign.msg);
    setOrganizedMessages(messages);
  }, [campaign.msg]);

  return (
    <div className={styles.MessageList}>
      {Object.entries(organizedMessages).map(([date, messages], index) => (
        <div key={index}>
          <div className={styles.date}>{date}</div>
          <ul className={styles.unorderedList}>
            {messages.filter(message =>
              message.subject.toLowerCase().includes(searchTerm.toLowerCase())
            ).map((message, messageIndex) => (
              < li key={messageIndex} >
                <MessageItem
                  campaignId={campaign._id}
                  msgId={message._Id}
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