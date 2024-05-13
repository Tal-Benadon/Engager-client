import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import DataContext from "../../context/DataContext";
import api from "../../functions/api";
import Button from "../Button";
import styles from './style.module.css';


export default function DelCampaign({ campId, title, setPopUp }) {
  const nav = useNavigate();
  const { user, setUser, getAllCamps } = useContext(DataContext);


  const handleDelete = async () => {
    api.del(`/campaign/${campId}`)
      .then(() => {
        setPopUp(false);
        getAllCamps()
        nav("/")
      })
      .catch((error) => {
        toast.error('Error updating title:', error);
      });
  };

  const handleCancel = () => {
    setPopUp(false);
  };


  return (
    <div>
      <span>האם אתה בטוח שתרצה למחוק את הקמפיין '{title}'?</span>
      <div className={styles.buttons}>
        <Button
          onClick={handleCancel}
          className={"cancel"}
          content={"ביטול"}
        />
        <Button
          onClick={handleDelete}
          className={"save"}
          content={"מחיקה"}
        />
      </div>
    </div>
  );
}
