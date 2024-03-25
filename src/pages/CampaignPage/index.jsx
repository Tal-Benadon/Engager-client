import React, { useContext, useEffect, useState } from "react";
import { Outlet, Route, Routes, useParams } from "react-router";
import { createContext } from "react";
import api from "../../functions/api.js";
import { toast } from "react-toastify";

// Description :
// Props : ____________ , _________
// Creator : ________

// יצירת קונטקסט לקמפיין
const CampaignContext = createContext();

export const useCampaign = () => {
  return useContext(CampaignContext);
};

// ככה אמורים להשתמש בזה
// const { campaign } =useCampaign();

// ---------------------------------------------
export default function CampaignPage() {
  const { campId } = useParams();
  // const [campName, setCampName] = useState('');
  const [campaign, setCampaign] = useState({});

  const getCamp = () => {
    api.get(`/campaign/${campId}`).then(setCampaign)
      .catch((error) => {
        toast.error(error?.response?.data?.msg || "something went wrong");
      });
  }

  // אולי למחוק
  // const getName = () => {api.get("/campaign/" + campId).then(res => setCampName(res.title))
  // .catch((error) => {
  //   toast.error(error?.response?.data?.msg || "somthing want worng");
  // })}


  useEffect(() => {
    if (campId) {

      getCamp()
      // getName()
    }
  }, [campId]);
// }, [campId, campName]);



  return (
    <>
      <CampaignContext.Provider value={{ campaign, getCamp, setCampaign}}>
        <Outlet />
      </CampaignContext.Provider>
    </>
  );
}
