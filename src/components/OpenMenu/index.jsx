import React from 'react'
import styles from './style.module.css'

export default function Menu({ list }) {
    return (
        <ul className={styles.menu}>
            {list.map(listItem =>
                <li
                    key={listItem.text}
                    onClick={listItem.func}
                    className={listItem.redColor ? styles.btnRed : styles.btn}>
                    <span>{listItem.icon}</span>
                    <p>{listItem.text}</p>
                </li>)}
        </ul>
    )
}
