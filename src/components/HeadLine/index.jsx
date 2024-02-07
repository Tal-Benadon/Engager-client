import React, { useContext, useState } from 'react'
import styles from './style.module.css'
import Icon from '../Icon'
import PopUp from '../PopUp'
import MessagesTab from '../MsgTab'
import NewMassageForm from '../NewMessageForm'
import MessageEdit from '../MessageEdit'
import DataContext from '../../context/DataContext'
import Menu from '../OpenMenu'
import Popover from '../Popover'

//קומפוננטה שצריכה לקבל כותרת וכותרת משנה כ פרופס וכן אייקון


export default function HeadLine({ title, subtitle, icon={}, iconOnClick }) {
  return (
    <div className={styles.headLine} >
      <div >
        <p className={styles.title} >{title}</p>
        { subtitle ? <p className={styles.subtitle} >{subtitle}</p> : "" }
      </div >
      <div onClick={iconOnClick}>{}</div>
    </div>
  )
}
