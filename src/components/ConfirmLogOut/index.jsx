import React, { useContext, useEffect, useState } from "react";
import styles from './style.module.css'
import api from "../../functions/api";
import InputWrapper from "../InputWrapper";
import InputText from "../InputText/InputText";
import Button from "../Button";
import { redirect, useNavigate } from "react-router-dom";
import DataContext from "../../context/DataContext";
import { toast } from "react-toastify";
import useSocket from "../../context/SocketContext";


export default function ConfirmLogOut({ title, setPopUp }) {
  const nav = useNavigate();
  const { setQueueJob } = useContext(DataContext)
  const { socket } = useSocket()
  const handleLogOut = async () => {
    delete localStorage.token;
    setPopUp(false);
    setQueueJob([])
    socket.disconnect()
    nav("/login");
  };

  const handleCancel = () => {
    setPopUp(false);
  };


  return (
    <div>
      <span>האם אתה בטוח שברצונך להתנתק?</span>
      <div className={styles.buttons}>
        <Button
          onClick={handleCancel}
          className={"cancel"}
          content={"ביטול"}
        />
        <Button
          onClick={handleLogOut}
          className={"save"}
          content={title}
        />
      </div>
    </div>
  );
}
