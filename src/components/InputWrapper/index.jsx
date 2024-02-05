import styles from './style.module.css'

// Description : labal input
// Props : label,h2,to
// Creator : yakov moshel   

// קריאה לפונקציה
// <InputWrapper label="שם:" to=""  h2=" " children={} type="text" value={name}/>


export default function InputWrapper({ label, subLabel, to="", children }) {
    return (
        <div className={styles.InputWrapper}>
            <label className={styles.h2} htmlFor={to} >{label}</label>
            <label className={styles.label} htmlFor={to}>{subLabel}</label>
            {children}
        </div>
    );
}