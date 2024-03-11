import { useRef, useState } from 'react';
import styles from "./style.module.css"
import Icon from '../Icon';

// Details : the componneta is input type time between div of text and div of icon.
// Creator: shir

export default function TimePicker({style = {},name ,time,setTime  }) {

   const [mode,setMode] = useState("placeholder")
  return (
    <div className={styles.timePicker}>
              
        <label className={styles.text}
        style={{display:mode==="placeholder"?"block":"none"}} 
        onClick={()=>{
          setMode("edit")
        }}
        htmlFor='timePicker'
        >
          בחירת שעה
        </label>
        
        <input  type='time' className={styles.clock}
        style={{display:mode==="placeholder"?"none":"block ",...style}} id={'timePicker'}  
        onBlur={(e)=>{
          if (!e.currentTarget.value){
            setMode("placeholder")
          }
        }}
        name={name}  
         //value={ time}
         onChange={(e) => setTime(e.target.value)}
         
        // {...props}
        />
                    
        <span className={styles.icon} 
        style={{display:mode==="placeholder"?"block":"block"}} 
        onClick={()=>{
          setMode("edit")
        }}
        htmlFor='timePicker' >
        <Icon nameIcon={'clock'} />
        </span>
       
      </div>
  );
}


