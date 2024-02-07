import React from 'react'
import styles from './style.module.css'
import Icon from '../Icon'
import ThreeDots from '../ThreeDotsMenu'




export default function UserLogoutEdit({user={name:"user",avatar:undefined}}) {
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
                <div> <img src={user.avatar} className={styles.pictuare} /> </div>
                <div className={styles.user}> {user.name} </div>
              <div className={styles.icon} > <Icon nameIcon={'chevronDown'} nameColor={''} /></div> 
            </button>
        </>
    )
}
