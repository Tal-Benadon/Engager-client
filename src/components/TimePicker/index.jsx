import styles from "./style.module.css"
import Icon from '../Icon';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';




function CustomInput({ value, onClick }) {
  return (
    <button type='button' onClick={onClick} className={styles.timePicker}>
      {value || "בחירת שעה"}
      <Icon nameIcon={'clock'} />
    </button>
  );
}


export default function TimePicker({ setSelectedTime, handleTimeChange, selectedTime }) {



  // const handleTimeChange = (time) => {
  //   setSelectedTime(time)
  //   console.log(time);
  // }

  return (
    <div>
      <ReactDatePicker
        selected={selectedTime}
        onChange={handleTimeChange}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption='Time'
        dateFormat="HH:mm"
        customInput={<CustomInput />}

      />

    </div>

  );
}

