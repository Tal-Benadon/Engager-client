import styles from "./style.module.css";
import axios, { Axios } from "axios";

import InputWrapper from "../InputWrapper";
import Button from "../Button";
import InputText from "../InputText/InputText";
import InputTextArea from "../InputTextArea/index";
import DatePicker from "../DatePicker";
import TimePicker from "../TimePicker";
import { useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import api from "../../functions/api";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { useCampaign } from "../../pages/CampaignPage/index";


// Description :
// Props : ____________ , _________
// Creator : ________

export default function NewMassageForm({
  setIsOpen,
  campId,
  getCamp,
  campaign,
}) {
  // TODO: ליישר את הכפתורים של הביטול והשמירה לפס של האינפוט של התוכן של ההודעה
  // TODO: להגביל את אורך שם ההודעה עם מספר תווים מקסימלי
  // TODO: לעשות שהשימרה תתן התראה שההודעה נשמרה בהצלחה ולא נשלחה בהצלחה

  const [subject, setSubject] = useState("");

  const [content, setContent] = useState("");
  const leadKeys = Object.keys(campaign.leads[0]);
  const [selectedOp, setSelectedOp] = useState("");
  const [text, setText] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [showSelect, setShowSelect] = useState(false);
  const  textareaRef = useRef(null)
  const [time, setTime] = useState();
  const [date, setDate] = useState();

  

  const fields = Object.keys(campaign.leads[0]);

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setContent(inputText);

    if (inputText.slice(-1) === '@') {
      setShowSelect(true);
    } else {
      setShowSelect(false);
    }
  };
  // useEffect(()=>{
  //   console.log(text);
  // },[text])

  const handleSelectChange = (e) => {
    const selectedKey = e.target.value;
    setSelectedOption(selectedKey);
    if (selectedKey) {
      // const selectedValue = fields[selectedKey];
      setContent((prevText) => prevText.concat( selectedKey+' ')) 
     
    } else {
      setContent((prevText) => prevText.slice(0, -1));
    }
  
    setShowSelect(false);
    setSelectedOption ('')
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
      };
  // const dinamicFiled = ()=>{
  //   let newText = content.replace(/([\^@])/g, `<select onClick="(e)=>setSelectedOp(e)" ><option value="">בחר שדה דינמי</option><option` +
  //    leadKeys.map(option => `<option value="${'^^'+option}">${option}</option>`).join('') +`</select>`);
  //    console.log("op",selectedOp);
  //    return newText;
  // }
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    // setContent(text)
    // console.log("content == = = ", text);
    const submmit = { subject, content };
    console.log("submmit == = = ",submmit);

    setIsOpen(false);

    // try {
    //   const response = await api.post(`/campaign/${campId}/msg`, submmit);
    //   toast.success(response && "נשלח בהצלחה!");
    //   getCamp();
    // } catch (error) {
    //   console.error("Error:", error);
    //   toast.error(Error?.response?.data?.msg || "something went wrong");
    // }
  };

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
          <br />
          <br />
          <InputWrapper
          label="הודעה"
          subLabel="זוהי ההודעה שתשלח בתזמון הנבחר"
          to={"msgContent"}
          children={
            <InputTextArea name={"msgContent"} ref={textareaRef} value={content} onChange={handleInputChange} />
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
        <br />

        <div className={styles.timing}>
          <InputWrapper
            label="תזמון"
            subLabel="הזמן הנכון לשלוח את ההודעה זו..."
            to="pickers"
          >
            <div className={styles.pickers}>
              <DatePicker name={"date"} date={date} setDate={setDate} />
              <TimePicker name={"time"} time={time} setTime={setTime} />
            </div>
          </InputWrapper>
        </div>

        <div className={styles.actions}>
          <Button type={"submit"} className={"save"} content={"שמירה"} />
          <Button
            className={"cancel"}
            content={"ביטול"}
            onClick={() => setIsOpen(false)}
          />
        </div>
      </form>
    </div>
  );
}

// const user = {
//   name: 'John Doe',
//   email: 'john@example.com',
//   age: 25,
//   city: 'New York',
// };

// import React, { useState } from 'react';


  
  

  // return (
  //   <div>
  //     <input
  //       type="text"
  //       value={text}
  //       onChange={handleInputChange}
  //       placeholder="Type @ to select a field"
  //     />
  //     {showSelect && (
  //       <select value={selectedOption} onChange={handleSelectChange}>
  //         <option value="">Select a field</option>
  //         {fields.map((field) => (
  //           <option key={field} value={field}>
  //             {field}
  //           </option>
  //         ))}
  //       </select>
  //     )}
  //   </div>
  // );


// export default DynamicTextInput;