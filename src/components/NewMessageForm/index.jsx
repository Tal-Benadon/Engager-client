import styles from './style.module.css'
import axios, { Axios } from 'axios';


import InputWrapper from '../InputWrapper';
import Button from '../Button';
import InputText from '../InputText/InputText';
import InputTextArea from '../InputTextArea/index';

import { FaTimes } from "react-icons/fa";
import { useState } from 'react';


// Description : 
// Props : ____________ , _________
// Creator : ________   


export default function NewMassageForm() {
    const [title, setTitle] = useState('')
    const [TextArea, setTextArea] = useState('')

    const handelDeletion = () => {

    }


    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(title, TextArea)
    }

    //post axios
    // const body = { title };
    //   axios.post('/api/yourEndpoint', body.title)
    //     .then((res) => {
    //       console.log(res.data); //  התשובה מהשרת
    //     })
    //     .catch((error) => {
    //       console.error('Error:', error);
    //     });
    // };

    //עדכון הממשק?

    return (
        <div className={styles.InputWrapper}  >
            {/* <header className={styles.header}>
       <exsit className={styles.exsit} onClick={() => handelDeletion()}><FaTimes /></exsit>
       <h2>
          הודעה חדשה
        </h2>
      </header> */}
            <hr />
            <form onSubmit={handleSubmit} >
                <main className={styles.main}>
                    <InputWrapper
                        label="שם הודעה"
                        subLabel="שם פנימי שיהיה חשוף רק לך"
                        to={"msgName"}
                        children={<InputText name={"msgName"} onChange={(e) => setTitle(e.target.value)}/>}
                        type="text"
                       
                    />

                    <InputWrapper
                        label="הודעה"
                        subLabel="זוהי ה הודעה שתשלח בתזמון הנבחר"
                        to={"msgContent"}
                 children={<InputTextArea name={"msgContent"} onChange={(e) => setTextArea(e.target.value)}/>}
                        type="text"
                       
                    />
                </main>
                <hr />

                <actions className={styles.actions}  >
                    <Button className={"save"} content={"שמירה"} />
                    <Button className={"cancel"} content={"ביטול"} />
                </actions>
            </form>
        </div>
    )

}