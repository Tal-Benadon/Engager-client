import { useContext, useState, useRef, forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import DataContext from "../../context/DataContext";
import api from "../../functions/api";
import Button from "../Button";
import InputText from "../InputText/InputText";
import InputTextArea from "../InputTextArea/index";
import InputWrapper from "../InputWrapper";
import styles from "./style.module.css";

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

export default function NewCampaigenForm({ setPopUp, getCamp }) {
  const [content, setContent] = useState("");
  const { user } = useContext(DataContext);
  const [campName, setCampName] = useState("");
  const [starterMsg, setStarterMsg] = useState("");
  const [preContent, setPreContent] = useState("");
  const [selectStart, setSelectStart] = useState();
  const [showSelect, setShowSelect] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const textareaRef = useRef(null);
  const nav = useNavigate();

  const preperText = (text) => {
    let newContent = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] === "@") {
        let f = "";
        i++;
        while (text[i] !== " " && i < text.length) {
          f += text[i++];
        }
        newContent += "@" + heFields[f] || f;
      } else {
        newContent += text[i];
      }
    }
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
          .concat(" @", selectedKey, " ", prevText.slice(selectStart))
      );

      setShowSelect(false);
      setSelectStart();
    }

    if (textareaRef.current) textareaRef.current.focus();
  };

  const handelSubmitNewCampaigen = async (e) => {
    e.preventDefault();
    const contentBined = preperText(preContent);
    setContent(contentBined);
    const body = {
      user: user,
      title: campName,
      starterMsg: preContent,
    };
    setPopUp(false);
    try {
      const response = await api.post("/campaign", body);
      toast.success(response && "נשלח בהצלחה!");
      getCamp();
      nav(`/campaign/${response._id}/webhook`);
    } catch (Error) {
      console.error("Error:", Error);
      toast.error(Error?.response?.data?.msg || "something went wrong");
    }
  };

  return (
    <div className={styles.InputWrapper}>
      <form onSubmit={handelSubmitNewCampaigen}>
        <div>{/* <h1>רשימה חדשה</h1> */}</div>
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
              <InputTextAreaRef
                name={"campaignTextArea"}
                value={preContent}
                onChange={handleInputChange}
                ref={textareaRef}
              />
            }
            type="text"
          />

          {showSelect && (
            <div>
              <select value={selectedOption} onChange={handleSelectChange}>
                <option value="">בחר שדה דינמי</option>
                {Object.entries(fields).map(([en, he]) => (
                  <option key={en} value={he}>
                    {he}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className={styles.actions}>
            <Button type={"submit"} className={"save"} content={"שמירה"} />
            <Button
              className={"cancel"}
              content={"ביטול"}
              onClick={() => setPopUp(false)}
            />
          </div>
        </main>
      </form>
    </div>
  );
}

const InputTextAreaRef = forwardRef(({ name, value, onChange }, ref) => (
  <InputTextArea name={name} value={value} onChange={onChange} fRef={ref} />
));
