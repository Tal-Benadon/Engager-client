import React, { useState, useEffect } from "react"
import QRCode from "react-qr-code"
import InputWrapper from "../InputWrapper/index"
import styles from "./style.module.css"
import Loading from "../Loading"
import DataContext from "../../context/DataContext"
import useSocket from "../../context/SocketContext"
import api_whatsapp from "../../functions/api_whatsapp"
import Button from "../Button"

export default function QRCodeComponent() {
  const [code, setCode] = useState("")
  const [status, setStatus] = useState(0)
  const { socket, connect } = useSocket()

  useEffect(() => {
    if (!socket?.connected) {
      connect()
    }
    else {
      api_whatsapp.get(`/session`)
    }
  }, [])


  useEffect(() => {
    if (!socket) return;
    socket.on("connect", () => {
      api_whatsapp.get(`/session`)
    });

    console.log("status:", status, "code:", code);

    socket.on('session', ({ code }) => {
      setStatus(code)
      setCode("")
    })

    socket.on('qr', (qr) => {
      setCode(qr)
      setStatus(13)
    })
  }, [socket])


  const msg = {
    0: "נא לא לרענן את העמוד",
    10: "טוען את הבוט",
    11: "הבוט נטען בהצלחה, ניתן לשלוח הודעות דרך הוואצאפ",
    13: "להתחברות המערכת עם הוואצאפ, אנא סרוק קוד QR",
    14: "מייצר QR, נא לא לרענן את העמוד",
    15: "שגיאה בעת טעינת הבוט, מייצר QR מחדש",
    16: "חשבון הוואצאפ נותק מהמערכת, להתחברות מחדש יש לרענן את הדף",

  }
  return (
    <div className={styles.QrContainer}>
      <>
        {/* // <div className={styles.container}> */}
        {status != 11 && status != 13 && <Loading className={styles.loading} />}


        <InputWrapper
          subLabel={msg[status]}
          className={styles.inputWrapper}
        />

        {status == 11 && <Button content='התנתק' onClick={() => api_whatsapp.post('/disconnect')} />}
        
        {code.length > 2 && <>
          <QRCode value={code} className={styles.qrCode} />
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
        </>}
      </>
    </div>
  )
}
