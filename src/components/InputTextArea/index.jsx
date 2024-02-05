import styles from './style.module.css'

// Description : generic input text area 
// Props : value, onChange, placeholder, rows
// Creator : yehoshua preiser
export default function InputTextArea({ style = {},value = {},name={}, ...props }) {
  return (
    <textarea className={styles.textarea} placeholder='באמת שניסינו ,דחפנו והצקנו-ואתה עסוק בטיקטוק שך' name={name} id={name} style={style} {...props} />
    
  )
}
