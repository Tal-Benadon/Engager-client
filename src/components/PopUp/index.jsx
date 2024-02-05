import React, { useState } from 'react';
import styles from './style.module.css';

export default function PopUp({ title, setIsOpen, isOpen }) {
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
                <svg width="14" height="12" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 1.59631L1 13.5963M1 1.59631L13 13.5963" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
            </div>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
