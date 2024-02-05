import React, { useEffect, useState } from 'react'
import styles from './style.module.css'
import { Route, Routes, useParams } from 'react-router'
import api from '../../functions/api.js'
import { createContext } from 'vm';
import LeadsTab from '../../components/LeadsTab/index.jsx';
import MsgTab from '../../components/MsgTab/index.jsx';
import LeadsInfo from '../../components/LeadsInfo/index.jsx';
import MsgInfo from '../../components/MsgInfo/index.jsx';

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
      api.get("campaign/" + campId).then((res) => setCampaign(res.data));
    }
  }, [campId])


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
                <LeadsInfo />
              </>
            }
          />
          <Route path="/messages/:messageId"
            element={
              <>
                <MsgTab />
                <MsgInfo />
              </>
            }
          />
        </Routes>
      </CampaignContext.Provider>
    </div>
  )
}


