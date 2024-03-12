import React, { useEffect, useState } from "react";
import styles from './style.module.css'
import api from "../../functions/api";
import InputWrapper from "../InputWrapper";
import InputText from "../InputText/InputText";
import Button from "../Button";


export default function CampaignInfo({ campId, title ,setIsOpen }) {
    const [onecampId, setoneCampId] = useState("");
    const [newTitle, setnewTitle] = useState(title);
    const [isEditing, setIsEditing] = useState(false);
  
    const handleEdit = (e) => {
      setnewTitle(e.target.value);
    };
  
    const handleSave = async () => {
      setIsOpen (false)
    let nameMessage = { "title": newTitle }

      await api.put(`/campaign/${campId}`,{data: nameMessage}).then(() => {
      }).catch((error) => {
        console.error('Error updating title:', error);
      });
      setIsEditing(false);
    };
  
    const handleCancel = () => {
      setnewTitle(title);
      setIsEditing(false);
      setIsOpen(false);
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
