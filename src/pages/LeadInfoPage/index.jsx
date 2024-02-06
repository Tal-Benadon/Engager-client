import { useState } from 'react'
import Icon from '../../components/Icon'
import MessageList from '../../components/MessageList'
import styles from './style.module.css'


// Description: This component serves as a user profile page. It is designed to display user information, including first name, last name, email, phone number, registration date, and active status indicator.
//Use of this component should pass real user data from the DB as props.
// Props:
//   - firstName (string): The first name of the user.
//   - lastName (string): The last name of the user.
//   - phoneNumber (string): The phone number of the user.
//   - email (string): The email address of the user.
//   - notes (string): Additional notes or comments about the user.
//   - signUpDate (string): The date of user registration.
//   - isActive (boolean): A flag indicating whether the user is active.
//    If isActive is true, it will display "פעיל"; if false, it will display a red dot and "לא פעיל"
// Creator: Refael

export default function LeadInfoPage({ name = "יעקב הנוכל", phoneNumber = "054-8104093", email = "email@gmail.com", notes = "-", signUpDate = "12/03/22", isActive = true }) {
  

  //****************************************************************************
  
  //TODO: replace the default props values with this object:
  // const {name, phoneNumber, email, notes, signUpDate, isActive = true} = userDetils
  
  //*************************************************************************************************************

  const [isEdit, setIsEdite]=useState(false)

  const handleEditClick=() =>{
    setIsEdite(true)

  }
  
  return (
    <div>

      {isEdit ? (
        <> ***TODO: Add edit component***
          <LeadEdit userDetils={userDetils} setIsEdite={setIsEdite} />
          <div className={styles.editPage}></div></>)
        : (<><div className={styles.info}>
          <div className={styles.container}>
            <div onClick={handleEditClick} className={styles.edit}><Icon nameIcon={'writing'}
              nameColor={''} />  </div>
            <div className={styles.details}>
              {name}
              <div className={styles.isActive}>
                {isActive ? (
                  <>
                    <span>פעיל/ה</span>
                    <div className={styles.greenDot}></div>
                  </>
                ) : (
                  <>
                    <span>לא פעיל/ה</span>
                    <div className={styles.redDot}></div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className={styles.detailsFrame}>
            <table>
              <tbody>
                <tr>
                  <th></th><th>שם</th>
                </tr>
                <tr>
                  <td>{ }</td><td>{name}</td>
                </tr>
                <tr>
                  <th>אימייל</th><th>טלפון</th>
                </tr>
                <tr>
                  <td>{email}</td><td>{phoneNumber}</td>
                </tr>
                <tr>
                  <th colSpan="2">הערות</th>
                </tr>
                <tr>
                  <td colSpan="2" >{notes}</td>
                </tr>
              </tbody>
            </table>

            <div className={styles.signUpDate}>
              תאריך ההצטרפות: {signUpDate}

            </div>
          </div>

          <div className={styles.sentMessagesContainer}>
            <div className={styles.sentTitle}>הודעות שנשלחו</div>
            ***TODO: make it only sent messages***

            <div className={styles.messages}><MessageList /></div>
          </div>
        </div>
        </>
        )}

    </div>
  )
}
