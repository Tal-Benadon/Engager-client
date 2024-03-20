import React, { useEffect, useState } from 'react'
import InputWrapper from '../InputWrapper'
import DatePicker from '../DatePicker'
import TimePicker from '../TimePicker'
import styles from './style.module.css'
export default function ScheduleInput({ setDate }) {
    const [selectedDateTime, setSelectedDateTime] = useState(null)
    const [selectedDate, setSelectedDate] = useState(null)

    useEffect(() => {
        setDate(selectedDateTime)


    }, [selectedDateTime])


    const handleDateChange = (date) => {
        setSelectedDate(date);
        if (selectedDateTime) {
            const updatedDateTime = new Date(date)
            updatedDateTime.setHours(selectedDateTime.getHours(), selectedDateTime.getMinutes())
            setSelectedDateTime(updatedDateTime)
            console.log(updatedDateTime);
        } else {
            setSelectedDateTime(date);
        }
    }

    const handleTimeChange = (time) => {
        if (!selectedDate) {
            console.log("please select a date first?");
            return
        }
        const updatedDateTime = new Date(selectedDate)
        updatedDateTime.setHours(time.getHours(), time.getMinutes())
        setSelectedDateTime(updatedDateTime)
        console.log(updatedDateTime);
    }
    return (
        <div className={styles.pickers}>
            <DatePicker handleDateChange={handleDateChange} setSelectedDate={setSelectedDate} selectedDate={selectedDate} />
            <TimePicker handleTimeChange={handleTimeChange} selectedDate={selectedDate} selectedTime={selectedDateTime} />
        </div>
    )
}
