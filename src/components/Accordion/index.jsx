
import  { useState } from 'react';
import formatDate from '../../functions/dateFormat';
import Icon from '../Icon';
import LeadItem from '../LeadItem';
import styles from './style.module.css';

export default function Accordion({ title, leadList = [], campaignId }) {
  const [isOpenAcord, setIsOpenAcord] = useState(false);
  const toggleAccordion = () =>  setIsOpenAcord(prevState => !prevState); 
  
  if (!leadList.length) return;

  return (
    <div className={isOpenAcord ? styles.wrapper : styles.closeWrapper}>
      <div className={styles.container}>
        <div className={styles.header} onClick={toggleAccordion}>
          <span className={styles.title}>{title}</span>
          <div className={styles.iconContainer}>
            {isOpenAcord ? <Icon nameIcon={'x'} nameColor={''} /> : <div className={styles.open}><Icon className={styles.icon} nameIcon={'enlarge'} nameColor={''} />{'הצג הכל'}</div>}
          </div>
        </div>
        <div className={styles.content}>
          {leadList?.map((lead, index) => (
            <div className={styles.single} key={index}>
              <LeadItem
                campaignId={campaignId}
                name={lead.fullName}
                email={lead.email}
                date={formatDate(lead.receptionDate)}
                id={lead._id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
