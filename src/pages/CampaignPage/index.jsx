import React, { useContext, useEffect, useState } from 'react'
import styles from './style.module.css'
import { Route, Routes, useParams } from 'react-router'
import { createContext } from 'react';
import LeadsTab from '../../components/LeadsTab/index.jsx';
import MsgTab from '../../components/MsgTab/index.jsx';
import MessagePage from '../../components/MessagePage/index.jsx';
import LeadInfoPage from '../LeadInfoPage/index.jsx';
import axios from 'axios';
import { toast } from 'react-toastify';
import api from '../../functions/api.js';

// Description : 
// Props : ____________ , _________
// Creator : ________


// יצירת קונטקסט לקמפיין
const CampaignContext = createContext();

export const useCampaign = () => {
  return useContext(CampaignContext);
};

// ככה אמורים להשתמש בזה
// const campaign = useCampaign();

// ---------------------------------------------
export default function CampaignPage() {

  const { campId } = useParams();

  const [campaign, setCampaign] = useState({});


  useEffect(() => {
    if (campId) {
        api.get("/campaign/" + campId).then(setCampaign)
        .catch((error) => {
          toast.error(error?.response?.data?.msg|| "somthing want worng");
        });

    }
  }, [campId]);


  console.log("campaign", campaign);
  return (
    <div className={styles.campaignPage}>
      <CampaignContext.Provider value={campaign}>
        <Routes>
          <Route path="/leads"
            element={<LeadsTab />}
          />
          <Route path="/messages"
            element={<MsgTab />}
          />
          <Route path="/leads/:leadId"
            element={
              <div className={styles.tabs}>
                <LeadsTab />
                <LeadInfoPage />
              </div>
            }
          />
          <Route path="/messages/:messageId"
            element={
              <div className={styles.tabs}>
                <MsgTab />
                <MessagePage />
              </div>
            }
          />
        </Routes>
      </CampaignContext.Provider>
    </div>
  )
}

