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

export default function HeadLine({ title, icon, children , subtitle}) {
  // const editMessage = () => <MessagesTab/> 
  const { isOpen, setIsOpen } = useContext(DataContext)
const list = [
  { text: "ערוך שם", icon: '', onClick: () => editCampName() }
  
]

const editCampName = () => {
  

}

  return (
    <div className={styles.headLine} >
      <div >
        <p className={styles.title} >{title}</p>
        <p className={styles.subtitle} >{subtitle}</p>
      </div >
      <div>
        <Popover list={list} fnName='onClick' >
        <Icon className={styles.button} nameIcon={"menu"} nameColor={''} />
      </Popover></div>
    </div>
  )
}
