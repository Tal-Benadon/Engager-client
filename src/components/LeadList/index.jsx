import styles from './style.module.css';
import demo from '../../data/lead.data.json';
import LeadItem from '../LeadItem';
import formatDate from '../../functions/DateFormat';
import { useCampaign } from '../../pages/CampaignPage';
import { useEffect, useState } from 'react';

// Description : gets a leads array from context, maps it to LeadItem component, with filter by search and sorting function.
// Props : sortType and searchTerm from usestate of searchbar
// Creator : Yehoshua Preiser

export default function LeadList({ searchTerm, sortType }) {
  const { campaign } = useCampaign()
  const [sortedLeadArray, setSortedLeadArray] = useState([]);

  useEffect(() => {

    let sortedArray = [...campaign.leads];
    if (sortType === 'name') {
      sortedArray.sort((a, b) => {
        if (a.name && b.name) {
          return a.name.localeCompare(b.name);
        }
        return 0;
      });
    } else if (sortType === 'date') {
      sortedArray.sort((a, b) => {
        if (a.joinDate && b.joinDate) {
          return a.joinDate.localeCompare(b.joinDate);
        }
        return 0;
      });
    }
    setSortedLeadArray(sortedArray);

  }, [sortType, campaign.leads]);


  return (
    <div className={styles.leadArray}>
      {searchTerm.trim() !== "" ?
        sortedLeadArray
          .filter(l => l.fullName?.toLowerCase().includes(searchTerm?.trim().toLowerCase()))
          .map((lead) => (
            <LeadItem
              campaignId={campaign._id}
              name={lead.fullName}
              email={lead.email}
              key={lead._id}
              id={lead._id}
              date={formatDate(lead.joinDate)}
            />
          ))
        : sortedLeadArray.map((lead) => (
          <LeadItem
            campaignId={campaign._id}
            name={lead.fullName}
            email={lead.email}
            key={lead._id}
            id={lead._id}
            date={formatDate(lead.joinDate)}
          />
        ))

      }
    </div>
  );
}
