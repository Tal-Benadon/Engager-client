import React, { useContext, useEffect, useState } from "react";
import styles from './style.module.css'
import api from "../../functions/api";
import InputWrapper from "../InputWrapper";
import InputText from "../InputText/InputText";
import Button from "../Button";
import { redirect, useNavigate } from "react-router-dom";
import DataContext from "../../context/DataContext";
import { toast } from "react-toastify";


export default function DelCampaign({ campId, title,  setPopUp }) {
  const [onecampId, setoneCampId] = useState("");
  const nav = useNavigate();
  const { user, setUser } = useContext(DataContext);


  const handleDelete = async () => {
    api.del(`/campaign/${campId}`)
      .then(() => {
        setPopUp(false);
        window.location.href= '/'
      })
      .catch((error) => {
        toast.error('Error updating title:', error);
      });
  };

  const handleCancel = () => {
    setPopUp(false);
  };

  useEffect(() => {
    if (campId) {
      api.get(`/campaign/${campId}`).then((res) => {
        setoneCampId(res.data);
      });
    }
  }, [campId]);

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
