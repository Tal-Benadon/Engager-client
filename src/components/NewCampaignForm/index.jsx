import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import DataContext from "../../context/DataContext";
import api from '../../functions/api';
import Button from "../Button";
import InputText from "../InputText/InputText";
import InputTextArea from "../InputTextArea/index";
import InputWrapper from "../InputWrapper";
import styles from "./style.module.css";

export default function NewCampaigenForm({ setPopUp, getCamp }) {

  const { user, setUser } = useContext(DataContext);
  const [campName, setCampName] = useState("");
  const [starterMsg, setStarterMsg] = useState("");
  const nav = useNavigate()
  const [isVisible, setIsVisible] = useState(false);

  const handelSubmitNewCampaigen = async (e) => {
    e.preventDefault();
    const body = {
      "user": user,
      "title": campName,
      "starterMsg": starterMsg
    };
    setPopUp(false);
    try {
      const response = await api.post("/campaign",
        body
      );
      toast.success(response && "נשלח בהצלחה!");
      getCamp();
      nav(`/campaign/${response._id}/webhook`)
    } catch (Error) {
      console.error("Error:", Error);
      toast.error(Error?.response?.data?.msg || "somthing want worng");
    }
  };

  return (
    <div className={styles.InputWrapper}>
      <form onSubmit={handelSubmitNewCampaigen}>
        <div>
          {/* <h1>רשימה חדשה</h1> */}
        </div>
        <main>
          <InputWrapper
            label={"שם רשימה"}
            subLabel={"שם פנימי שלא יהיה חשוף למצטרפים לרשימה"}
            to={"campaignMsg"}
            setIsVisible={true}
            children={
              <InputText
                maxLength={100}
                name="campaignMsg"
                onChange={(e) => setCampName(e.target.value)}
              />
            }
            type="text"
          />
          <br />
          <br />
          <InputWrapper
            label={"הודעת אפס"}
            subLabel={"זוהי ההודעה שתשלח אוטומטית לכל מצטרף חדש לרשימה"}
            to={"campaignTextArea"}
            children={
              <InputTextArea
                name={"campaignTextArea"}
                onChange={(e) => setStarterMsg(e.target.value)}
              />
            }
            type="text"
          />
          <div className={styles.actions}>
            <Button type={"submit"} className={"save"} content={"שמירה"} />
            <Button className={"cancel"} content={"ביטול"} onClick={()=>setPopUp(false)}/>
          </div>
        </main>
      </form>
    </div>
  );
}
