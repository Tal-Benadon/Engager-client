// Description : Formats a date object or string into the format hh:mm dd/mm/yyyy.
// Creator : yehoshua preiser

export default function formatDateTime(date) {
    if (!(date instanceof Date)) {
      date = new Date(date);
    }
  
    // Extract individual components
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
  
    // Format the date and time
    const formattedDate =  `${day}/${month}/${year}`;
    const formattedTime = `${hours}:${minutes}`;
  
    return [formattedDate, formattedTime];
  }
  
  // Example usage:
  const currentDate = new Date(); // You can replace this with your specific date
  const formattedDate = formatDateTime(currentDate);
  // console.log(formattedDate);
  