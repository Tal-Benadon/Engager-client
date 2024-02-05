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
    const [subgect, setSubgect] = useState('')
    const [content, setContent] = useState('')
    const [isPeding, setIsPeding] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()
        const submmit = { subgect, content }

          axios.create("",{
          METHODS:'POST',
          Headers,
          body:JSON.stringify()
            })
        console.log(subgect, content)
    }

    //עדכון הממשק?

    return (
        <div className={styles.InputWrapper}  >
            <hr />
            <form onSubmit={handleSubmit} >
                <main className={styles.main}>
                    <InputWrapper
                        label="שם הודעה"
                        subLabel="שם פנימי שיהיה חשוף רק לך"
                        to={"msgName"}

                        children={<InputText name={"msgName"} onChange={(e) => setSubgect(e.target.value)} />}
                        type="text"

                    />

                    <InputWrapper
                        label="הודעה"
                        subLabel="זוהי  ההודעה שתשלח בתזמון הנבחר"
                        to={"msgContent"}
                        children={<InputTextArea name={"msgContent"} onChange={(e) => setContent(e.target.value)} />}
                        type="text"

                    />
                </main>
                <hr />

                <div className={styles.actions}  >
                  {!  <Button className={"save"} content={"שמירה"} />}
                    <Button className={"cancel"} content={"ביטול"} />
                </div>
            </form>
        </div>
    )

}