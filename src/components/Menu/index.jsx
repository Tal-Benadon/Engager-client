import React from 'react'
import Menu from './Menu'
import styles from './style.module.css'

// Description : 
// :מעבירים מערך של אובייקטים, לדוגמה
// let list = [{
//   text: "עריכה",
//   icon: "🖊️",
//   func: () => { console.log("כפתור עריכה") },
//   redColor: false
// }, {
//   text: "השהייה",
//   icon: "❌",
//   func: () => { console.log("כפתור השהייה") },
//   redColor: false
// }, {
//   text: "מחיקה",
//   icon: "🗑️",
//   func: () => { console.log("כפתור מחיקה") },
//   redColor: true
// }]
// Creator : ישראל

export default function ThreeDots({list}) {
    return (
        <button className={styles.threeDots}>
            🚦
            <div><Menu list={list}/></div>
        </button>
    )
}
