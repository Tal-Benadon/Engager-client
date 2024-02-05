import timeDateFormat from './timeDateFormat';

const messagesByDate = (data) => {
  const messagesByDate = {};

  data.forEach(entry => {
    const creationDate = new Date(entry.creationDate); 
    const [formattedDate, formattedTime] = timeDateFormat(creationDate);

    if (!messagesByDate[formattedDate]) {
      messagesByDate[formattedDate] = [];
    }

    const messageDetails = {
      subject: entry.subject,
      formattedDate: formattedDate,
      formattedTime: formattedTime,
      status: entry.leads[0].status, // Assuming leads array always has at least one element
    };

    messagesByDate[formattedDate].push(messageDetails);
  });

  return messagesByDate;
};

export default messagesByDate;
