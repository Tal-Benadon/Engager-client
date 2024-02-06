import styles from './style.module.css';
import demo from '../../data/lead.data.json';
import LeadItem from '../LeadItem';
import formatDate from '../../functions/DateFormat';
import { useCampaign } from '../../pages/CampaignPage';

// Description : gets a leads array from context, maps it to LeadItem component, with filter by seach.
// Props : searchTerm from usestate of seachbar
// Creator : Yehoshua Preiser

export default function LeadList({ searchTerm }) {

  const campaign = useCampaign()
  const leadArray = campaign.leads

  return (
    <div className={styles.leadArray}>
      {leadArray
        .filter(l => l.lead.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .map((lead) => (
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
