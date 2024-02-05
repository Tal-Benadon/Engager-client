import React from 'react'
import styles from './style.module.css';
import InputWrapper from "../InputWrapper/index"
export default function index() {
  // <InputWrapper label="שם:" to=""  h2=" " children={} type="text" value={name}/>

  return (
   <InputWrapper label={"קוד QR לסריקה"} subLabel={"סרקו אותי לשליחת הודעת וואצפ"} />
   
  )
}
