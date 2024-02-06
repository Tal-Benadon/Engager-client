// Description : Formats a date object or string into the time format hh:mm 
// Creator : yehoshua preiser

export default function formatTime(date) {
    if (!(date instanceof Date)) {
        date = new Date(date);
    }

    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const formattedTime = `${hours}:${minutes}`;

    return formattedTime
}
