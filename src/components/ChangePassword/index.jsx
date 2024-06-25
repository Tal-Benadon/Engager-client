import React, { useEffect, useState } from "react";
import InputText from "../InputText/InputText";
import styles from "./style.module.css";
import Button from "../Button";
import InputWrapper from "../InputWrapper";
import axios from "axios";
import api from "../../functions/api";
import TabSwitcher from "../../components/TabSwitcher";
import { useNavigate, useParams } from "react-router-dom";
import CheckBox from "../CheckBox";

export default function ChangePassword({ setTokenExpired }) {
  const [isChecked, setIsChecked] = useState(false);

  const fromtemplet = { password: "", passwordConfirm: "" };
  const [formState, setFormState] = useState(fromtemplet);
  const [errorForm, setErrorForm] = useState(fromtemplet);
  const params = useParams();
  const [phone, setPhone] = useState();
  const pass = { password: formState.password };

  //ברגע שעולה הדף הטוקן נשלח לבדיקה האם תקף אם כן מציג את הדף אם לא שולח ללוגאין
  useEffect(() => {
    async function controlToken() {
      const token = params.passwordToken;
      console.log(token);
      api
        .get(`user/controlToken/${token}`)
        .then((res) => {
          console.log("הטוקן בתוקף", res);
          setPhone(res.phone);
          if (res.successStatus === "ExpiredPass") {
            setTokenExpired(true);
          }
        })
        .catch((res) => {
          console.log("עבר תוקף התוקן", res);
        });
    }
    controlToken();
  }, []);

  // //ברג
  // async function updateNewPassword() {
  //     const token = params.passwordToken
  //     console.log(token);
  //     const pass=formState.password
  //     console.log(pass);
  //     api.put(`user/controlToken/${token}`).
  //         then(res => {
  //             console.log("הטוקן בתוקף", res)

  //             if (res.successStatus === 'ExpiredPass') {
  //                 setTokenExpired(true)
  //             }
  //         })
  //         .catch((res) => {
  //             console.log("עבר תוקף התוקן", res)
  //         })
  // }

  async function handleSubmit(e) {
    e.preventDefault();
    const data = phone;
    console.log(data);
    console.log(pass);
    api
      .put(`user/updatePass/${data}`, pass)
      .then((res) => console.log("הצליח", res))
      .catch((res) => {
        console.log("התחברות נכשלה", res);
      });
  }

  const checkInput = (newData = "", name) => {
    const pas = newData.password;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;

    if ([name] == "passwordConfirm" && newData.passwordConfirm != pas) {
      //עובד נפלא
      setErrorForm((old) => ({ ...old, [name]: "סיסמה לא תואמת" }));
    } else if ([name] == "password" && !passwordRegex.test(pas)) {
      //עובד נפלא
      setErrorForm((old) => ({
        ...old,
        [name]: " סיסמה כוללת אות ומספר ו8 תווים לפחות",
      }));
    } else {
      setErrorForm(0);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((old) => {
      const newData = { ...old, [name]: value };
      checkInput(newData, [name]);
      setFormState(newData);
      return newData;
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.circle}></div>
      <div className={styles.allin}>
        <form className={styles.inputSpace} onSubmit={handleSubmit}>
          <img src="/engager.svg" alt=""></img>
          <div className={styles.title2}>עדכון סיסמה</div>

          <InputWrapper label={"סיסמה"} setIsVisible={true}>
            <InputText
              type={"password"}
              name={"password"}
              required={true}
              onChange={handleChange}
              value={formState.password}
              className={styles.input}
            />
            {errorForm.password && (
              <div className={styles.error}>{errorForm.password}</div>
            )}
          </InputWrapper>

          <InputWrapper label={"אימות סיסמה"} setIsVisible={true}>
            <InputText
              type={"password"}
              name={"passwordConfirm"}
              required={true}
              onChange={handleChange}
              value={formState.passwordConfirm}
              className={styles.input}
            />
          </InputWrapper>
          {errorForm.passwordConfirm && (
            <div className={styles.error}>{errorForm.passwordConfirm}</div>
          )}

          <button className={styles.button} type="submit">
            עדכון סיסמה
          </button>
        </form>
      </div>
    </div>
  );
}
