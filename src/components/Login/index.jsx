import React, { useContext, useState } from "react";
import styles from "./style.module.css";
import InputText from "../InputText/InputText";
import Button from "../Button";
import InputWrapper from "../InputWrapper";
import axios from "axios";
import api from "../../functions/api";
import DataContext from "../../context/DataContext";
import { useNavigate } from "react-router";
import getGoogleOAuthURL from "../../functions/loginWithGoogle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

export default function Login() {
  const notify = () => toast(`Wrong username or password`);
  const [formState, setFormState] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const { user, setUser } = useContext(DataContext);
  const nav = useNavigate();

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const convertFormState = {
        ...formState,
        email: formState.email.toLowerCase(),
      };
      const { token, user } = await api.post("/login", convertFormState);
      setUser(user);
      localStorage.token = token;
      nav("/");
    } catch (err) {
      console.error(err);
      notify();
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((old) => {
      const newData = {
        ...old,
        [name]: value,
      };
      // localStorage.user = JSON.stringify({ ...newData, password: '' })
      if (newData.passwordConfirm != newData.password) {
      }
      return newData;
    });
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const toregister = () => {
    nav("/register");
  };

  const forgetPassword = () => {
    nav("/forgetPassword");
  };

  let root = "accout/signInGoogle";

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.inputSpace}>
        <div className={styles.title}>אנגייג'ר</div>
        <div className={styles.title2}>התחברות</div>
        <div>
          <InputWrapper label={"אימייל"} setIsVisible={true}>
            <InputText
              name={"email"}
              required={true}
              onChange={handleChange}
              value={formState.email}
              className={styles.input}
            />
          </InputWrapper>
        </div>

        <div className={styles.passwordWrapper}>
          <InputWrapper label={"סיסמה"} className={styles.nameinput}>
            <div className={styles.passwordContainer}>
              <InputText
                type={showPassword ? "text" : "password"}
                name={"password"}
                required={true}
                onChange={handleChange}
                value={formState.password}
                className={styles.input}
              />
              <button
                type="button"
                onClick={toggleShowPassword}
                className={styles.showPasswordButton}
              >
                {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </button>
            </div>
          </InputWrapper>
        </div>
        <div onClick={forgetPassword} className={styles.forget}>
          שכחתי סיסמה
        </div>
        <button className={styles.button} type="submit">
          התחברות
        </button>
      </form>
      <a href={getGoogleOAuthURL(root)} className={styles.buttongoogle}>
        <img
          src="https://www.deliverlogic.com/wp-content/uploads/2021/04/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
          alt=""
        />
        התחברות באמצעות גוגל
      </a>
      <div className={styles.notlogin}>
        <div className={styles.notlogin1}>עדיין לא רשומים?</div>
        <div onClick={toregister} className={styles.notlogin2}>
          הרשמה זה ממש כאן
        </div>
      </div>
    </div>
  );
}
