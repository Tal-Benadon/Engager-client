import timeDateFormat from './timeDateFormat';

const messagesByDate = data => {
  const messagesByDate = {};

  data.forEach(entry => {
    const creationDate = new Date(entry.msgs[0].creationDate);
    const formattedDate = timeDateFormat(creationDate);

    if (!messagesByDate[formattedDate]) {
      messagesByDate[formattedDate] = [];
    }

    messagesByDate[formattedDate].push(entry);
  });

  return messagesByDate;
};

export default messagesByDate;
