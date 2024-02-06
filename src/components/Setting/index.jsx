import React from 'react'
import styles from './style.module.css';
import InputWrapper from "../InputWrapper/index"
// import QRCode from 'react-qr-code'
// import io from 'socket.io-client'
// import qrcode from 'qrcode-terminal'
// import axios from 'axios';
export default function index() {
  // const qrcode = async () => {
  //   const qrAxios = axios.get('http://localhost:3636/qrcode').then(function (response) {
  //     console.log(response);
  //   }).catch(function (error) {
  //     console.log(error);
  //   })
  // }


  return (
    <>
      {/* <QRCode value={qrcode()} /> */}
      <InputWrapper label={"קוד QR לסריקה"} subLabel={"סרקו אותי לשליחת הודעת וואצפ"} />
    </>
  )
}
