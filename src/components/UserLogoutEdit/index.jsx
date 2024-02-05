import React from 'react'
import styles from './style.module.css'
import Icon from '../Icon'




export default function UserLogoutEdit({ props }) {
    return (

        <>
            <button className={styles.userInfo} >
                <div className={styles.user}>רפאל בן זקרי</div>
                <div><img src='.//public/user.jfif' className={styles.pictuare} /></div>
                <Icon nameIcon={'chevronDown'} nameColor={''} />
            </button>
        </>
    )
}
