import React, { useContext, useState } from "react";
import styles from "./style.module.css";
import Icon from "../Icon";
import DataContext from "../../context/DataContext";

export default function PopUp() {
  const { setPopUp, PopUp } = useContext(DataContext);
  return (
    <div className={styles.allpopup}>
      {PopUp && (
        <div className={styles.container} onClick={() => setPopUp(false)}>
          <div
            dir="rtl"
            className={styles.popup}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className={styles.top}>
              <div>
                <h1>{PopUp.title}</h1>
              </div>
              <div className={styles.close} onClick={() => setPopUp(false)}>
                <Icon nameIcon={"x"} nameColor={""} />
              </div>
            </div>
            <div className={styles.content}>{PopUp.component}</div>
          </div>
        </div>
      )}
    </div>
  );
}
