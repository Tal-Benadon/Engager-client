import { useRef } from 'react'
import styles from './style.module.css'

// Description : generic input text area 
// Props : value, onChange, placeholder, rows
// Creator : yehoshua preiser
export default function InputTextArea({ style = {},name={}, ...props }) {
  const textareaRef = useRef(null);
  // console.log("ref: - " , textareaRef);
  return (
    <textarea className={styles.textarea} ref={textareaRef}  name={name} id={name} style={style} {...props}  />
    
  )
}
