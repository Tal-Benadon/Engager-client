import styles from './style.module.css'

// Description : generic input text area 
// Props : value, onChange, placeholder, rows
// Creator : yehoshua preiser
export default function InputTextArea({ value, onChange, placeholder, rows=10 }) {
  return (
    <textarea className={styles.textarea}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    rows={rows}
  />
  )
}
