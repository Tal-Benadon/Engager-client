import React, { useContext, useEffect, useState } from "react";
import { useCampaign } from "../../pages/CampaignPage";
import HeadLine from "../HeadLine";
import TabSwitcher from "../TabSwitcher";
import LeadList from "../LeadList";
import SearchBar from "../SearchBar";
import styles from "./style.module.css";
import Popover from "../Popover";
import Icon from "../Icon";
import UpdateAndAddLead from "../UpdateAndAddLead";
import DataContext from "../../context/DataContext";
import CampaignInfo from "../CampInfo";
import { useNavigate } from "react-router-dom";
import DelCampaign from '../DelCampaign';
import { GrDocumentExcel } from "react-icons/gr";
import api from "../../functions/api";
import UploadExcel from "../UploadExcel";

export default function LeadsTab() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("date");
  const { setPopUp } = useContext(DataContext);
  const { campaign = {}, getCamp } = useCampaign();

  const handleDownloadExcel = async () => {
    try {
      const res = await api.get(`files/download/leads/${campaign._id}`, null, null, { responseType: "blob" });
      const blob = new Blob([res], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = `leads-${campaign.title}.xlsx`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.log(err);
    }
  }

  const listMenu = [
    {
      text: "עריכת רשימה",
      icon: <Icon nameIcon={"writing"} />,
      onClick: () =>
        setPopUp({
          title: "עריכת רשימה",
          component: (
            <CampaignInfo
              getCamp={getCamp}
              setPopUp={setPopUp}
              title={campaign.title}
              campId={campaign._id}
            />
          ),
        }),
    },
    {
      text: "הוספה ידנית",
      icon: <Icon nameIcon={"userWithPlus"} />,
      onClick: () =>
        setPopUp({
          title: "הוספת אדם לקמפיין",
          component: (
            <UpdateAndAddLead
              setPopUp={setPopUp}
              campaign={campaign}
              getCamp={getCamp}
              isEdit={false}
            />
          ),
        }),
    },
    {
      text: "ייבוא לידים",
      icon: <Icon nameIcon={"importList"} />,
      onClick: () =>
      setPopUp({
        title: "ייבוא לידים",
        component: (
          <UploadExcel
            setPopUp={setPopUp}
            title={campaign.title}
            campId={campaign._id}
            getCamp={getCamp}
          />
        ),
      }),
    },
    {
      text: "ייצוא לידים",
      icon: <GrDocumentExcel color="#6B6B6B" />,
      onClick: handleDownloadExcel
    },
    {
      text: "מחיקת רשימה",
      icon: <Icon nameIcon={"trash"} />,
      color: "red",
      onClick: () =>
        setPopUp({
          title: "מחיקת רשימה",
          component: (
            <DelCampaign
              setPopUp={setPopUp}
              title={campaign.title}
              campId={campaign._id}
            />
          ),
        }),
    },
  ]

  // debugger
  if (!Object.keys(campaign).length) return <></>;
  return (
    <div className={styles.leadsTab}>

      <div className={styles.headerContainer}>

        <div className={styles.titlesContainer}>
          <HeadLine
            title={campaign.title}
            subtitle={`${campaign.leads.length} נרשמים, ${campaign.msg.length} הודעות`}
          />
        </div>
        <div className={styles.popOverContainer}>
          <Popover fnName={"onClick"} list={listMenu}          >
            <Icon nameIcon={"menu"} />
          </Popover>
        </div>

      </div>
      <TabSwitcher rout={[
        { tab: `campaign/${campaign._id}/leads`, text: `נרשמים(${campaign.leads.length})` },
        { tab: `campaign/${campaign._id}/messages`, text: "הודעות" },
        { tab: `campaign/${campaign._id}/webhook`, text: "קישור" }
      ]} />

      <SearchBar
        sortType={sortType}
        setSortType={setSortType}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortButton={true}
      />
      <div className={styles.LeadListHolder}>
        <LeadList sortType={sortType} searchTerm={searchTerm} />
      </div>
    </div >
  );
}
