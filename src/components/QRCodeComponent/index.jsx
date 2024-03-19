import React, { useState, useEffect, useContext } from 'react';
import QRCode from 'react-qr-code';
import io from 'socket.io-client';
import InputWrapper from '../InputWrapper/index';
import styles from './style.module.css';
import Loading from '../Loading'
import DataContext from '../../context/DataContext';
import api from "../../functions/api";

export default function QRCodeComponent() {
  const [socket, setSocket] = useState();
  const [code, setCode] = useState('');
  const [isReady, setIsReady] = useState(false);

  const { user } = useContext(DataContext);

  useEffect(() => {
    const temp =io('http://localhost:3000', {
      auth: {
        userData: {
          _id: "123456789",
          name: 'אלירז',
        }
      }
  
    })
    temp.on('connect', () => {
      console.log('Connected to server');
    });
    
    temp.on(`qr`, (qr) => {
      console.log(qr)
      setCode(qr);
    });
    
    temp.on('ready', () => {
      setIsReady(true);
    })
  },[])
  
  return (
    <div className={styles.QrContainer}>
    <>
    {/* // <div className={styles.container}> */}
      {(code.length < 2) ? <Loading className={styles.loading} /> : ""}
      {(!isReady && code.length > 2) ? <QRCode value={code} className={styles.qrCode} /> : ""}
      <InputWrapper subLabel={"נא לא לרענן את העמוד"} className={styles.inputWrapper} />
      <div className={styles.text}>
        כיצד להשתמש ב-WhatsApp באינגייג'ר:
      </div>
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
