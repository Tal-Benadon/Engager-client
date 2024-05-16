import React, { useState, useEffect, useContext } from "react";
import QRCode from "react-qr-code";
import InputWrapper from "../InputWrapper/index";
import styles from "./style.module.css";
import Loading from "../Loading";
import DataContext from "../../context/DataContext";
import useSocket from "../../context/SocketContext";
import api_whatsapp from "../../functions/api_whatsapp";

export default function QRCodeComponent() {
  const [code, setCode] = useState("");
  const [isReady, setIsReady] = useState(false);
  const { socket, connect } = useSocket();

  useEffect(() => {
    if (!socket?.connected) {
      connect();
    }
  }, []);

  useEffect(() => {
    api_whatsapp.get(`/session`);

    // api_whatsapp.get(`/qr`)

    // api_whatsapp.get(`/session`).then(b => {
    //   if(!b){
    //     setIsReady(b)
    //     api_whatsapp.get(`/qr`)
    //   }
    // })

    if (!socket?.connected) return;
    socket.on(`qr`, (qr) => {
      setCode(qr);
    });

    // socket.on("ready", () => {
    //   debugger;
    //   setIsReady(true)
    //   setCode(qr);
    // });
  }, [socket]);

  return (
    <div className={styles.QrContainer}>
      <>
        {/* // <div className={styles.container}> */}
        {code.length < 2 ? <Loading className={styles.loading} /> : ""}
        {!isReady && code.length > 2 ? (
          <QRCode value={code} className={styles.qrCode} />
        ) : (
          ""
          // <div className={styles.text}>קיים Session!!!</div>
        )}
        <InputWrapper
          subLabel={"נא לא לרענן את העמוד"}
          className={styles.inputWrapper}
        />
        <div className={styles.text}>כיצד להשתמש ב-WhatsApp באינגייג'ר:</div>
        <div className={styles.text2}>
          1. פותחים את WhatsApp בטלפון.
          <br />
          2. מקישים על תפריט ב-Android או על הגדרות ב-iPhone.
          <br />
          3. להקיש על מכשירים מקושרים ואז על קישור מכשיר
          <br />
          4. מפנים את הטלפון לכיוון המסך וסורקים את קוד ה-QR.
        </div>
        {/* </div> */}
      </>
    </div>
  );
}
