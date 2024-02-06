import React, { useState } from "react";
import DatePicker from "react-datepicker";
import styles from './style.module.css'

import "react-datepicker/dist/react-datepicker.css";

export default function DayPicker() {
  const Example = () => {}
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker 
      showIcon
      className={styles.newdaypicker}
      selected={startDate} 
      onChange={(date) => setStartDate(date)}
      dateFormat="dd/MM/yyyy"
      
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="25px"
          viewBox="0 0 24 25"
        >
            <g fill="none" stroke="#6B6B6B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path
                d="M21 10.0963H3M21 12.5963V8.89631C21 7.21616 21 6.37608 20.673 5.73434C20.3854 5.16986 19.9265 4.71091 19.362 4.42329C18.7202 4.09631 17.8802 4.09631 16.2 4.09631H7.8C6.11984 4.09631 5.27976 4.09631 4.63803 4.42329C4.07354 4.71091 3.6146 5.16986 3.32698 5.73434C3 6.37608 3 7.21616 3 8.89631V17.2963C3 18.9765 3 19.8166 3.32698 20.4583C3.6146 21.0228 4.07354 21.4817 4.63803 21.7693C5.27976 22.0963 6.11984 22.0963 7.8 22.0963H12M16 2.09631V6.09631M8 2.09631V6.09631M14.5 19.0963L16.5 21.0963L21 16.5963"
              >
              </path>
            </g>
        </svg>
      }
      />
    );
}
