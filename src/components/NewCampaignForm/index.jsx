import styles from "./style.module.css";
import axios, { Axios } from "axios";

import InputWrapper from "../InputWrapper";
import Button from "../Button";
import InputText from "../InputText/InputText";
import InputTextArea from "../InputTextArea/index";

import React, { useState } from "react";

export default function NewCampaigenForm({ setIsOpen }) {
  const [user, setUser] = useState("");
  const [campName, setCampName] = useState("");

  const handelSubmitNewCampaigen = async (e) => {
    e.preventDefault();
    const SubmmitNewCampaigen = {
      user: { _id: "65ba97e536d6af41e9beb0d1" },
      campName,
    };

    try {
      const response = await axios(
        "http://localhost:2000/campaign/",
        SubmmitNewCampaigen,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    //   setIsOpen(false);
      console.log(response.data);
      console.log(user, campName);
    } catch (Error) {
      console.error("Error:", Error);
    }
    console.log(user, campName);
  };

  return (
    <div className={styles.InputWrapper}>
    <form onSubmit={handelSubmitNewCampaigen}>
      <main>
        <InputWrapper
          label={(<span className={styles.asterisk}>'*'</span>, "שם רשימה")}
          subLabel={"שם פנימי שלא יהיה חשוף למצטרפים לרשימה"}
          to={"campaignMsg"}
          children={
            <InputText
              name="campaignMsg"
              onChange={(e) => setUser(e.target.value)}
            />
          }
          type="text"
        />
        

        <InputWrapper
          label={"הודעת אפס"}
          subLabel={"זוהי ההודעה שתשלח אוטומטית לכל מצטרף חדש לרשימה"}
          to={"campaignTextArea"}
          children={
            <InputTextArea
              name={"campaignTextArea"}
              onChange={(e) => setCampName(e.target.value)}
            />
          }
          type="text"
        />

        <div className={styles.actions}>
          <Button className={"save"} content={"שמירה"} />
          <Button className={"cancel"} content={"ביטול"} />
        </div>
      </main>
    </form>
    </div>
  );
}
