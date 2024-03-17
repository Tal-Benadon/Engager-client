

import React, { useContext } from 'react'
import Popover from '../../components/Popover'
import styles from './style.module.css'
import Icon from '../../components/Icon';
import DataContext from '../../context/DataContext';
export default function Teliha({ fullName, phone, email, notes, extra }) {
  const { setPopup } = useContext(DataContext)
  return (
    <div className={styles.detailsFrame}>
      <div className={styles.allFields}>
        <div className={styles.detailsFrame}>
          <div className={styles.infoCol}>
            <div className={styles.infoBlock}>
              <div className={styles.miniTitle}>שם</div>
              <div className={styles.content}>{fullName}</div>

            </div>
            <div className={styles.infoBlock}>
              <div className={styles.miniTitle}>טלפון</div>
              <div className={styles.content}>{phone}</div>
            </div>
          </div>
          <div className={styles.infoCol}>
            <div className={styles.infoBlock}>
              <div className={styles.miniTitle}>אימייל</div>
              <div className={styles.content}>{email}</div>
            </div>
          </div>
          <div className={styles.infoFullCol}>
            <div>
              <div colSpan="2" className={styles.miniTitle}>הערות</div>
              <div colSpan="2" >{notes}</div>
            </div>
          </div>
          { extra && extra.map((item, index) => {
            console.log(item.info);
            return <div key={index} className={styles.infoCol}>
              <div className={styles.infoBlock}>
                <div className={styles.miniTitle}>{item?.info?.he}</div>
                <div className={styles.content}>{item?.info?.value}</div>
              </div>
            </div>
          })}


        </div>
      </div>
    </div>
  )



}

