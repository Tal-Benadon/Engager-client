import { useEffect, useState } from 'react';
import styles from './style.module.css'
import data from "../../data/lead.data.json"
import timeDateFormat from "../../functions/timeDateFormat"
import messageByDate from '../../functions/messagesByDate';

// Description : 
// Props : ____________ , _________
// Creator : yehoshua preiser
export default function MessageList({ data }) {

  const [organizedMessages, setOrganizedMessages] = useState({});

  useEffect(() => {
    const messages = messageByDate(data);
    setOrganizedMessages(messages);
  }, [data]);

  return (
   <div>
    test
   </div>
  );
};


