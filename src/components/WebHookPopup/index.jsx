import styles from "./style.module.css";
import axios, { Axios } from "axios";
import InputWrapper from "../InputWrapper";
import Button from "../Button";
import InputText from "../InputText/InputText";
import InputTextArea from "../InputTextArea/index";
import { toast } from "react-toastify";
import React, { useContext, useEffect, useState } from "react";
import api from '../../functions/api'
import DataContext from "../../context/DataContext";
import CampaignItem from "../CampaignItem";
import { useNavigate } from "react-router-dom";

export default function WebHookPopUp({ setPopUp, setConfirm }) {


  const handelConfirm = async () => {
    setConfirm(true)
    setPopUp(false);
  }

  return (
    <div >
      <p className={styles.explosion}>מרגע החלפת הקישור דף הנחיתה יראה כרגיל אך לא יקלוט מצטרפים חדשים.</p>
      <p className={styles.explosion}>דף הנחיתה יחזור לעבוד רק לאחר החלפת הקישור בדף הנחיתה.</p>
      <p className={styles.explosion}>מומלץ לנתק את דף הנחיתה לפני החלפת הקישור על מנת שלא לאבד נתונים של מצטרפים חדשים.</p>
      <div className={styles.actions}>
        <Button type={"submit"} className={"red"} content={"החלף בכל זאת"} onClick={handelConfirm} />
        <Button className={"save"} content={"ביטול"} onClick={() => setPopUp(false)} />
      </div>
    </div>
  );
}
