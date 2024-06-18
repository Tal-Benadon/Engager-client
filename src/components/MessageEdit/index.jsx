import styles from "./style.module.css";
import InputWrapper from "../InputWrapper";
import Button from "../Button";
import InputTextArea from "../InputTextArea/index";
import { useState, useRef, forwardRef } from "react";
import InputText from "../InputText/InputText";
import api from "../../functions/api";

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

export default function MessageEdit({
  setPopUp,
  message,
  campaignId,
  getCamp,
}) {
  const [formData, setFormData] = useState(message || {});
  const [content, setContent] = useState("");
  const [preContent, setPreContent] = useState(message.content || "");
  const [selectStart, setSelectStart] = useState("");
  const [showSelect, setShowSelect] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const textareaRef = useRef(null);

  const preperText = (text) => {
    let newContent = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] == "@") {
        let f = "";
        i++;
        while (text[i] != " " && i < text.length) {
          f += text[i++];
        }
        newContent += "@" + heFields[f]; // משתמש במפה של השדות בעברית
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
      console.log("e.target.selectionStart ", e.target.selectionStart);
      setSelectStart(e.target.selectionStart);
    }
  };

  const handleSelectChange = (e) => {
    const selectedKey = e.target.value;
    if (selectedKey) {
      console.log("selectedKey ", selectedKey);
      setPreContent(
        (prevText) =>
          prevText
            .slice(0, selectStart - 1)
            .concat("@", selectedKey, " ", prevText.slice(selectStart)) // מכניס את הערך בעברית
      );
      console.log("preContent", preContent);
      setShowSelect(false);
      setSelectStart();
    }

    if (textareaRef.current) textareaRef.current.focus();
  };

  const handleChange = (e) =>
    setFormData((old) => ({ ...old, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const contentBined = preperText(preContent);
    setContent(contentBined);
    const dataToUpdate = {
      content: preContent,
      subject: formData.subject,
    };
    try {
      await api.put(`/campaign/${campaignId}/msg/${message._id}`, dataToUpdate);
      await getCamp();
      setPopUp(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={styles.InputWrapper}>
      <hr />
      <form onSubmit={handleSubmit}>
        <InputWrapper
          label={"שם ההודעה"}
          subLabel={"שם פנימי שיהיה גלוי רק לך"}
        >
          <InputText
            style={{ margin: "10px 0" }}
            name="subject"
            onChange={handleChange}
            value={formData.subject}
          />
        </InputWrapper>

        <InputWrapper
          label={"תוכן ההודעה"}
          subLabel={"זוהי ההודעה שתשלח בתזמון הנבחר"}
        >
          <InputTextAreaRef
            name="content"
            value={preContent}
            onChange={handleInputChange}
            ref={textareaRef}
          />
        </InputWrapper>

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
          <Button
            className={"cancel"}
            content={"ביטול"}
            onClick={() => setPopUp(false)}
          />
          <Button className={"save"} content={"שמירה"} />
        </div>
      </form>
    </div>
  );
}

const InputTextAreaRef = forwardRef(({ name, value, onChange }, ref) => (
  <InputTextArea name={name} value={value} onChange={onChange} fRef={ref} />
));
