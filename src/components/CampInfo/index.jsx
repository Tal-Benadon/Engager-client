import React, { useContext, useEffect, useState } from "react";
import styles from './style.module.css'
import api from "../../functions/api";
import InputWrapper from "../InputWrapper";
import InputText from "../InputText/InputText";
import Button from "../Button";
import { useCampaign } from "../../pages/CampaignPage";
import DataContext from "../../context/DataContext";


export default function CampaignInfo({ campId, title, setPopUp, setNewCampaign, getCamp }) {
  const [onecampId, setoneCampId] = useState("");
  const [newTitle, setnewTitle] = useState(title);
  const [isEditing, setIsEditing] = useState(false);
  const { getAllCamps } = useContext(DataContext);

  const handleEdit = (e) => {
    setnewTitle(e.target.value);
  };

  const handleSave = async () => {
    setPopUp(false)
    let nameMessage = { "title": newTitle }

    await api.put(`/campaign/${campId}`, { data: nameMessage }).then((res) => {
      if (getCamp) getCamp()
      getAllCamps()
    }).catch((error) => {
      console.error('Error updating title:', error);
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setnewTitle(title);
    setIsEditing(false);
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

      <>
        <InputWrapper
          label={"ערוך שם רשימה"}
          setIsVisible={true}
          to="campaignName"
          children={
            <InputText
              name="campaignName"
              onChange={handleEdit}
              value={newTitle}
            />
          }

        />
        <div className={styles.buttons}>
          <Button

            onClick={handleCancel}
            className={"cancel"}
            content={"ביטול"}
          />
          <Button
            onClick={handleSave}
            className={"save"}
            content={"שמירה"}
          />
        </div>
      </>
    </div>
  );
}
