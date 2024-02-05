import React from 'react'
import styles from './style.module.css'
import Icon from '../Icon'
import PopUp from '../PopUp'
//קומפוננטה שצריכה לקבל כותרת וכותרת משנה כ פרופס וכן אייקון

export default function HeadLine({ title, icon, dateCreate }) {
  const editMessage = () => alert("ghjfkhjf")

  return (
    <div className={styles.headLine} >
      <div >
        <p className={styles.title} >{title}</p>
        <p className={styles.subtitle} >נוצר ב {dateCreate}</p>
      </div>
      <div onClick={editMessage}><Icon className={styles.button} nameIcon={"writing"} nameColor={''} /></div>
    </div>
  )
}
