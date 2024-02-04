import React from 'react'
import styles from './style.module.css'
//קומפוננטה שצריכה לקבל כותרת וכותרת משנה כ פרופס וכן אייקון
export default function HeadLine({title,subtitle}) {
  return (
    <div className={styles.headLine} >
        <div >
        <p className={styles.title} >{title}</p>
        <p className={styles.subtitle} >{subtitle}</p>
        </div>
      {/*  אייקון זמני לדוגמא */}
        <svg className={styles.button} width="5" height="19" viewBox="0 0 5 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.25049 10.4375C2.80277 10.4375 3.25049 9.98978 3.25049 9.4375C3.25049 8.88522 2.80277 8.4375 2.25049 8.4375C1.6982 8.4375 1.25049 8.88522 1.25049 9.4375C1.25049 9.98978 1.6982 10.4375 2.25049 10.4375Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.25049 3.4375C2.80277 3.4375 3.25049 2.98978 3.25049 2.4375C3.25049 1.88522 2.80277 1.4375 2.25049 1.4375C1.6982 1.4375 1.25049 1.88522 1.25049 2.4375C1.25049 2.98978 1.6982 3.4375 2.25049 3.4375Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.25049 17.4375C2.80277 17.4375 3.25049 16.9898 3.25049 16.4375C3.25049 15.8852 2.80277 15.4375 2.25049 15.4375C1.6982 15.4375 1.25049 15.8852 1.25049 16.4375C1.25049 16.9898 1.6982 17.4375 2.25049 17.4375Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    </div>
  )
}
