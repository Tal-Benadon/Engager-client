import React, { useContext, useEffect, useState } from 'react'
import styles from './style.module.css'
import { Route, Routes, useParams } from 'react-router'
import api from '../../functions/api.js'
import { createContext } from 'react';
import LeadsTab from '../../components/LeadsTab/index.jsx';
import MsgTab from '../../components/MsgTab/index.jsx';
import LeadsInfo from '../../components/LeadsInfo/index.jsx';
import MsgInfo from '../../components/MsgInfo/index.jsx';
import MessagePage from '../../components/MessagePage/index.jsx';
import LeadInfoPage from '../LeadInfoPage/index.jsx';
import axios from 'axios';
import { toast } from 'react-toastify';

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
      axios.get("http://localhost:2500/campaign/" + campId)
        .then((res) => {
          setCampaign(res.data)
          toast.success('wowwwww')
        })
        .catch((error) => {
          toast.error('Error making request');
        });
    }
  }, [campId]);


console.log("campaign", campaign);
return (
  <div>
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
            <>
              <LeadsTab />
              <LeadInfoPage />
            </>
          }
        />
        <Route path="/messages/:messageId"
          element={
            <>
              <MsgTab />
              <MessagePage />
            </>
          }
        />
      </Routes>
    </CampaignContext.Provider>
  </div>
)
}

