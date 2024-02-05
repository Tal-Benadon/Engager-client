import React from 'react'
import styles from './style.module.css'
import Icon from '../Icon'
//קומפוננטה שצריכה לקבל כותרת וכותרת משנה כ פרופס וכן אייקון
export default function HeadLine({ title, subtitle, icon }) {
  return (
    <div className={styles.headLine} >
      <div >
        <p className={styles.title} >{title}</p>
        <p className={styles.subtitle} >{subtitle}</p>
      </div>
      <Icon className={styles.button} nameIcon={icon} nameColor={''} />
    </div>
  )
}
