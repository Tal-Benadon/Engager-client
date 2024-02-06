import React from 'react'
import styles from './style.module.css'
import Icon from '../Icon'
import ThreeDots from '../ThreeDotsMenu'




export default function UserLogoutEdit({ props }) {
    let list = [{
        text: "עריכה",
        icon: "🖊️",
        func: () => { console.log("כפתור עריכה") },
        redColor: false
    }, {
        text: "התנתקות",
        icon: '❌',
        func: () => { console.log("כפתור התנתקות") },
        redColor: false
    }]
    return (

        <>
            <button className={styles.userInfo}  >
                <Icon nameIcon={'chevronDown'} nameColor={''} />
                <div className={styles.user}>רפאל בן זקרי</div>
                <div> <img src='.//public/user.jfif' className={styles.pictuare} /> </div>
            </button>
        </>
    )
}
