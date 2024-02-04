// Description : makes arrays of messages by dates
// Creator : yehoshua preiser

import dateFormat from './dateFormat';


const messagesByDate = (data) => {
  const messagesByDate = {};

  data.forEach(entry => {
    const creationDate = new Date(entry.msgs[0].creationDate);
    const formattedDate = dateFormat(creationDate);

    if (!messagesByDate[formattedDate]) {
      messagesByDate[formattedDate] = [];
    }

    messagesByDate[formattedDate].push(entry);
  });

  return messagesByDate;
};

export default messagesByDate;
