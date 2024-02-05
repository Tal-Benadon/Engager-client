import styles from './style.module.css';
import demo from '../../data/lead.data.json';
import LeadItem from '../LeadItem';
import formatDate from '../../functions/DateFormat';

// Description : 
// Props : lead
// Creator : Yehoshua Preiser

export default function LeadList({ leadArray = demo }) {

const campaign  = useCampaign()
const leadArray = campaign.leads

  return (
    <div className={styles.leadArray}>
      {leadArray.map((lead) => (
        <LeadItem
          name={lead.lead.name}
          email={lead.lead.email}
          key={lead.lead._id}
          date={formatDate(lead.joinDate)}
        />
      ))}
    </div>
  );
}
