import React, { useState } from 'react';
import styles from './style.module.css';
import Icon from '../Icon'

export default function PopUp({ title , setIsOpen, isOpen, children}) {
//the function needs to recive title and children and need to recive isOpen and setIsOpen in the props and render them
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open</button>
      {isOpen && (
        <div className={styles.container} onClick={() => setIsOpen(false)}>
          <div dir='rtl' className={styles.popup} onClick={(e) => { e.stopPropagation() }}>
            <div className={styles.top}>
              <span className={styles.title}>{title}</span>
              <span className={styles.close} onClick={() => setIsOpen(false)}>
                <Icon nameIcon={'x'} nameColor={''}/>
              </span>
            </div>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
