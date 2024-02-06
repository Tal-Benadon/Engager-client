import styles from './style.module.css';
import demo from '../../data/lead.data.json';
import LeadItem from '../LeadItem';
import formatDate from '../../functions/DateFormat';
import { useCampaign } from '../../pages/CampaignPage';

// Description : 
// Props : lead
// Creator : Yehoshua Preiser

export default function LeadList() {

  const campaign = useCampaign()
  const leadArray = campaign.leads

  return (
    <div className={styles.leadArray}>
      {leadArray.map((lead) => (
        <LeadItem
          campaignId={campaign._id}
          name={lead.lead.name}
          email={lead.lead.email}
          key={lead.lead._id}
          id={lead.lead._id}
          date={formatDate(lead.joinDate)}
        />
      ))}
    </div>
  );
}
