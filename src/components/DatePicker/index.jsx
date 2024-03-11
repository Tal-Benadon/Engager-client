import {useState } from 'react';
import styles from "./style.module.css"
import Icon from '../Icon';

// Details : the componneta is input type date.!need to limit the year!
// Creator: shir


export default function DatePicker({style={}, name,date,setDate}) {
   const [mode,setMode] = useState("placeholder")

  return (
    <div className={styles.datePicker}>
              
        <label className={styles.text}
        style={{display:mode==="placeholder"?"block":"none"}} 
        onClick={()=>{
          setMode("edit")
        }}
        htmlFor='datepicker'
        >
          בחירת תאריך
        </label>
        
        {/* {document.getElementById('datePicker').valueAsDate = new Date()} */}
        <input  type='date' className={styles.Calendar}
        style={{display:mode==="placeholder"?"none":"block ",...style}} id={'datePicker'}  
        onBlur={(e)=>{
          if (!e.currentTarget.value){
            setMode("placeholder")
          }
        }}
       min={'2024-01-01'} 
        max={'2035-01-01'}
        name={name}
        
         onChange={(e) => setDate(e.target.value)}
       
        />          
        
        
        <span className={styles.icon} style={{display:mode==="placeholder"?"block":"block"}} 
        onClick={()=>{
          setMode("edit")
        }}
        htmlFor='datepicker' >
        <Icon nameIcon={'Calendar'} />
        </span>
       
      </div>
  );
}


