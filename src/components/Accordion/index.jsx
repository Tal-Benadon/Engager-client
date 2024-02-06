import React, { useState } from 'react';
import styles from './style.module.css';
import Icon from '../Icon'
import LeadItem from '../LeadItem';
import formatDate from '../../functions/DateFormat';

export default function Accordion({ title, children, campaignId }) {
  const [isOpenAcord, setIsOpenAcord] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header} onClick={() => setIsOpenAcord(!isOpenAcord)}>
          <div>{isOpenAcord ? <Icon nameIcon={'x'} nameColor={''} /> : <div className={styles.open}><Icon className={styles.icon} nameIcon={'enlarge'} nameColor={''} />{'הצג הכל'}</div>}</div>
          <span className={styles.title}>{title}</span>
        </div>
        {isOpenAcord && (
          <div className={styles.content}>
            {children.map((lead, index) => (
              <div className={styles.single} key={index}>
                <LeadItem
                  campaignId={campaignId}
                  name={lead.name}
                  email={lead.email}
                  date={formatDate(lead.receptionDate)}
                  id={lead._id} />
              </div>
            )
            )}
          </div>
        )}
      </div>
    // </div>
  );
}
