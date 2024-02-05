import React, { useState } from 'react'
import HeadLine from '../HeadLine'
import styles from './style.module.css'
import Accordion from '../Accordion'

export default function MessagePage({ dateCreate, title, icon, message, dateSend, timeSend }) {
    // const [isEditing, setIsEditing] = useState(false);
    // const [textValue, setTextValue] = useState('הודעה');

    // const handleEditClick = () => {
    //     setIsEditing(true);
    // };

    // const handleInputChange = (event) => {
    //     setTextValue(event.target.value);
    // };

    // const handleSaveClick = () => {
    //     setIsEditing(false);
    //     // כאן תוכל לעדכן את המידע בעסקים כמו שאתה רוצה
    // };
    return (
        <>
            {/* <div>
                {isEditing ? (
                    <input
                        type="text"
                        value={textValue}
                        onChange={handleInputChange}
                        onBlur={handleSaveClick}
                        autoFocus
                    />
                ) : (
                    <button onClick={handleEditClick}>{textValue}</button>
                )}
            </div> */}
            <div className={styles.MessagePage}>
                <HeadLine dateCreate={dateCreate} title={title} icon={icon}/>
                <div className={styles.message}>
                    <div className={styles.messageitem}>
                        {message}
                    </div>
                    <div className={styles.messageDate}>
                        ישלח ב {dateSend} | {timeSend}
                    </div>
                </div>
                <Accordion title={'הודעה חדשה'}>
                    {['hello', 'i', 'am', 'shaked', 'ben', 'hamo', 'guikh', 'gyhjbvh']}
                </Accordion>
            </div>
        </>
    )
}