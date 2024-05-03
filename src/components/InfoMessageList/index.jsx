import { useEffect, useState } from 'react';
import formatDate from '../../functions/dateFormat';
import messagesByDate from '../../functions/messagesByDate';
import formatTime from '../../functions/timeFormat';
import { useCampaign } from '../../pages/CampaignPage';
import MessageItem from '../MessageItem';
import styles from './style.module.css';

// Description : gets a message array from context, maps it to MessageItem component seperated by date, with filter by seach
// Props : searchTerm from usestate of seachbar
// Creator : yehoshua preiser

export default function MessageList({ searchTerm, leadId }) {
  const { campaign } = useCampaign();
  const [organizedMessages, setOrganizedMessages] = useState({});

  useEffect(() => {
    const messages = campaign.receivedMsgs?.filter((msg) => msg.leadId == leadId);
    const msgArr = campaign.msg;
    const fullArr = messages?.map((sentMsg) => {
      const originalMsg = msgArr.find((v) => v._id == sentMsg.msgId);
      const fullMsg = { ...sentMsg, subject: originalMsg.subject, content: originalMsg.content };
      return fullMsg;
    });
    setOrganizedMessages(messagesByDate(fullArr, "sentDate"));
  }, [leadId]);


  if (!Object.keys(organizedMessages).length) return <p className={styles.sentTitle}>לא נמצאו הודעות...</p>;

  return (
    <>
      <div className={styles.sentTitle}>הודעות שנשלחו</div>
      <div className={styles.MessageList}>
        {Object.entries(organizedMessages).map(([date, messages], index) => (
          <div key={index} className={styles.messageListDiv}>
            <div className={styles.date}>{date}</div>
            <ul className={styles.unorderedList}>
              {searchTerm?.trim() ?
                messages.filter((message) =>
                  message.subject?.toLowerCase().includes(searchTerm?.trim().toLowerCase()))
                  .map((message, messageIndex) => (
                    <li key={messageIndex}>
                      <MessageItem
                        content={message.content}
                        subject={message.subject}
                        campaignId={campaign._id}
                        msgId={message.msgId}
                        title={message.subject}
                        date={formatDate(message.sentDate)}
                        time={formatTime(message.sentDate)}
                      />
                    </li>
                  ))
                : messages.map((message, messageIndex) => (
                  <li key={messageIndex}>
                    <MessageItem
                      content={message.content}
                      subject={message.subject}
                      campaignId={campaign._id}
                      msgId={message.msgId}
                      title={message.subject}
                      date={formatDate(message.sentDate)}
                      time={formatTime(message.sentDate)}
                    />
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}