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

const fields = {
  fullName: "שם",
  email: "אימייל",
  phone: "טלפון",
  notes: "הערות",
  joinDate: "הצטרפות",
  age: "גיל",
  class: "כיתה",
};
const heFields = {};
Object.entries(fields).forEach(([key, value]) => (heFields[value] = key));
// const enFields = Object.keys(fields);
// const heFields = Object.values(fields);

export default function NewMassageForm({
  setPopUp,
  campId,
  getCamp,
  campaign,
}) {
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [preContent, setPreContent] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectStart, setSelectStart] = useState();
  const [showSelect, setShowSelect] = useState(false);
  const textareaRef = useRef(null);
  const [time, setTime] = useState();
  const [date, setDate] = useState();

  const preperText = (text) => {
    console.log("text:", text);
    // const regex = /@([\u0590-\u05FF\s]+)/g;
    // const regex = /@([\u0590-\u05FF]+)\s?/g
    // const matches = text.match(regex);
    // console.log("matches", matches);
    // if (matches) {
    // matches.forEach((m) => {
    let newContent = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] == "@") {
        let f = "";
        i++;
        while (text[i] != " " && i < text.length) {
          f += text[i++];
        }
        newContent += "@" + heFields[f];
      } else {
        newContent += text[i];
      }
    }
    console.log("newContent:", newContent);
    return newContent;
  };

  const handleInputChange = (e) => {
    setPreContent(e.target.value);

    let c = e.nativeEvent?.data;
    if (c === "@") {
      setShowSelect(true);
      setSelectStart(e.target.selectionStart);
    }
  };

  const handleSelectChange = (e) => {
    const selectedKey = e.target.value;
    if (selectedKey) {
      setPreContent((prevText) =>
        prevText
          .slice(0, selectStart - 1)
          .concat(" @", fields[selectedKey], " ", prevText.slice(selectStart))
      );

      setShowSelect(false);
      setSelectStart();
    }

    if (textareaRef.current) textareaRef.current.focus();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const contentBined = preperText(preContent);
    setContent(contentBined);
    const data = { subject, content: preContent };
    api
      .post(`/campaign/${campId}/msg`, data)
      .then((response) => {
        toast.success(response && "נשלח בהצלחה!");
        getCamp();
        setPopUp();
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error(error?.response?.data?.msg || "something went wrong");
      });
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
                maxLength={100}
                name={"msgName"}
                onChange={(e) => setSubject(e.target.value)}
              />
            }
            type="text"
          />
          <InputWrapper
            label="הודעה"
            subLabel="זוהי ההודעה שתשלח בתזמון הנבחר"
            type="text"
            to={"msgContent"}
            children={
              <InputTextAreaRef
                name={"msgContent"}
                ref={textareaRef}
                value={preContent}
                onChange={handleInputChange}
              />
            }
          />

          {showSelect && (
            <div>
              <select value={selectedOption} onChange={handleSelectChange}>
                <option value="">בחר שדה דינמי</option>
                {Object.entries(fields).map(([en, he]) => (
                  <option key={en} value={en}>
                    {he}
                  </option>
                ))}
              </select>
            </div>
          )}
        </main>
        {/* <br /> */}

        <div className={styles.timing}>
          <InputWrapper
            label="תזמון"
            subLabel="הזמן הנכון לשלוח את הודעה זו..."
            to="pickers"
          >
            <ScheduleInput setDate={setDate} />
          </InputWrapper>
        </div>

        <div className={styles.actions}>
          <Button type={"submit"} className={"save"} content={"שמירה"} />
          <Button
            className={"cancel"}
            content={"ביטול"}
            onClick={() => setPopUp(false)}
          />
        </div>
      </form>
    </div>
  );
}

const InputTextAreaRef = forwardRef(({ name, value, onChange }, ref) => (
  <InputTextArea name={name} value={value} onChange={onChange} fRef={ref} />
));
