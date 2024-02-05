import styles from './style.module.css'

// Description : labal input
// Props : label,h2,to
// Creator : yakov moshel   

// קריאה לפונקציה
// <InputWrapper label="שם:" to=""  h2=" " children={} type="text" value={name}/>


export default function InputWrapper({ label, h2, to, children }) {
    return (
        <div className={styles.InputWrapper}>
            <h2 className={styles.h2} >{h2}</h2>
            <label className={styles.label} to={to}>{label}</label>
            {children}
        </div>
    );
}