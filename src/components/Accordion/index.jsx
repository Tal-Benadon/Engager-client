import React, { useState } from 'react';
import styles from './style.module.css';
import Icon from '../Icon'

export default function Accordion({ title , children}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header} onClick={() => setIsOpen(!isOpen)}>
          <div>{isOpen ? <Icon nameIcon={'x'} nameColor={''}/> : <div className={styles.open}><Icon className={styles.icon} nameIcon={'enlarge'} nameColor={''}/>{'הצג הכל'}</div>}</div>
    <span className={styles.title}>{title}</span>

        </div>
        {isOpen && (
          
          <div className={styles.content}>
            {children.map((item, index) => (
              <div className={styles.single} key={index}>{item}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
