import styles from "./style.module.css";

import { useEffect, useRef, useState, forwardRef } from "react";
import { toast } from "react-toastify";
import api from "../../functions/api";
import Button from "../Button";
import InputText from "../InputText/InputText";
import InputTextArea from "../InputTextArea/index";
import InputWrapper from "../InputWrapper";
import ScheduleInput from "../ScheduleInput";

// Description :
// Props : ____________ , _________
// Creator : ________

export default function NewMassageForm({ setPopUp, campId, getCamp, campaign, }) {

  // TODO: ליישר את הכפתורים של הביטול והשמירה לפס של האינפוט של התוכן של ההודעה
  // TODO: להגביל את אורך שם ההודעה עם מספר תווים מקסימלי
  // TODO: לעשות שהשימרה תתן התראה שההודעה נשמרה בהצלחה ולא נשלחה בהצלחה
  // TODO - dont save the new message - YOSEF

  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [preContent, setPreContent] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [showSelect, setShowSelect] = useState(false);
  const textareaRef = useRef(null);
  const [time, setTime] = useState();
  const [date, setDate] = useState();


  const mainfields = Object.keys(campaign.leads[0]).slice(0, -3);

  const translations = {
    fullName: "שם",
    email: "אימייל",
    phone: "טלפון",
    notes: "הערות",
    joinDate: "הצטרפות",
  };

  const hebMainFields = mainfields.map((word) => translations[word]);

  const extraFields = Object.entries(campaign.leads[0]["extra"] ?? {}).map((ef) => ef[1].he);
  
  const fields = [...hebMainFields, ...extraFields];

  const preperText = (text) => {
    const reverseTranslations = {
      "שם": "fullName",
      "אימייל": "email",
      "טלפון": "phone",
      "הערות": "notes",
      "הצטרפות": "joinDate",
    };
    console.log("text:", text);
    // const regex = /@([\u0590-\u05FF\s]+)/g;
    const regex = /@([\u0590-\u05FF]+)\s?/g
    const matches = text.match(regex);
    console.log("matches", matches);
    if (matches) {
      matches.forEach((m) =>
        Object.keys(reverseTranslations).forEach((i) => {
          console.log("i", i);
          console.log("m", m);
          console.log(i, m.replace("@", ""));
          if (i == m.replace("@", "").trim()) {
            text = text.replace(m, `@${reverseTranslations[i.trim()]} `, 1);
          }
        })
      );
    }
    console.log("text:----", text);
    return text
  };

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setPreContent(inputText);
    setShowSelect(inputText.slice(-1) === "@" ? true : false)
  };


  const handleSelectChange = (e) => {
    const selectedKey = e.target.value;
    setSelectedOption(selectedKey);
    if (selectedKey) {
      // const selectedValue = fields[selectedKey];
      setPreContent((prevText) => prevText.concat(selectedKey + " "));
    } else {
      setPreContent((prevText) => prevText.slice(0, -1));
    }
    setShowSelect(false);
    setSelectedOption("");
    if (textareaRef.current) textareaRef.current.focus()
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const t = preperText(preContent)
    setContent(t);
    try {
      const submmit = { subject, content: t };
      const response = await api.post(`/campaign/${campId}/msg`, submmit);
      toast.success(response && "נשלח בהצלחה!");
      getCamp();
      setPopUp()
    } catch (error) {
      console.error("Error:", error);
      toast.error(Error?.response?.data?.msg || "something went wrong");
    }
  };

  // TODO - YOSEF - should it be save on typing?
  // useEffect(() => {
  //   if (content) {
  //     const submmit = { subject, content };
  //     console.log("submit", submmit);
  //     async () => {
  //       try {
  //         const response = await api.post(`/campaign/${campId}/msg`, submmit);
  //         toast.success(response && "נשלח בהצלחה!");
  //         getCamp();

  //       } catch (error) {
  //         console.error("Error:", error);
  //         toast.error(Error?.response?.data?.msg || "something went wrong");
  //       }
  //     }
  //   }
  // }, [content]);

  return (
    <div className={styles.InputWrapper}>
      <form onSubmit={handleSubmit}>
        <main className={styles.main}>
          <InputWrapper
            label="שם הודעה"
            subLabel="שם פנימי שיהיה חשוף רק לך"
            to={"msgName"}
            children={
              <InputText
                name={"msgName"}
                onChange={(e) => setSubject(e.target.value)}
              />
            }
            type="text"
          ></InputWrapper>
          {/* <br />
          <br /> */}
          <InputWrapper
            label="הודעה"
            subLabel="זוהי ההודעה שתשלח בתזמון הנבחר"
            to={"msgContent"}
            children={
              <InputTextAreaRef
                name={"msgContent"}
                ref={textareaRef}
                value={preContent}
                onChange={handleInputChange}
              />
            }
            type="text"
          />
          {showSelect && (
            <select value={selectedOption} onChange={handleSelectChange}>
              <option value="">בחר שדה דינמי</option>
              {fields.map((field) => (
                <option key={field} value={field}>
                  {field}
                </option>
              ))}
            </select>
          )}
        </main>
        {/* <br /> */}


        <div className={styles.timing}>
          <InputWrapper label="תזמון"
            subLabel='הזמן הנכון לשלוח את הודעה זו...'
            to="pickers">
            <ScheduleInput setDate={setDate} />
          </InputWrapper>
        </div>




        <div className={styles.actions}>
          <Button className={"save"} content={"שמירה"} />
          <Button className={"cancel"} content={"ביטול"} onClick={() => setPopUp(false)} />
        </div>
      </form>
    </div>
  );
}


const InputTextAreaRef = forwardRef(({ name, value, onChange }, ref) => (
  <InputTextArea
    name={name}
    value={value}
    onChange={onChange}
    fRef={ref}
  />
));

