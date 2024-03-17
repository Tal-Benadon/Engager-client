import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import api from '../functions/api';
import './Orna.css';
export default function Orna() {
  const [data, setData] = useState({
    campaignsPerUser: {},
    messagesPerCampaign: {},
    leadsPerCampaign: {},
    leadsPerUser: {},
    messagesPerUser: {},
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const campaignRes = await api.get('/campaign' );
        console.log('campaignRes', campaignRes);
        const userRes = await api.get('/user');
        if (!campaignRes || !userRes) {
          throw new Error('Failed to fetch data');
        }
        const campaignData = campaignRes || [];
        const userData = userRes || null;
        const campaignsPerUser = {};
        const messagesPerCampaign = {};
        const leadsPerCampaign = {};
        const leadsPerUser = {};
        const messagesPerUser = {};
        campaignData.forEach(item => {
          if (item && item.user && item.title) {
            if (campaignsPerUser[item.user]) {
              campaignsPerUser[item.user]++;
            } else {
              campaignsPerUser[item.user] = 1;
            }
            if (item.msg && Array.isArray(item.msg)) {
              messagesPerCampaign[item.title] = item.msg.length;
            }
            if (item.leads && Array.isArray(item.leads)) {
              leadsPerCampaign[item.title] = item.leads.length;
            }
          }
        });
        if (userData) {
          const userId = userData._id;
          campaignsPerUser[userId] = (userData.campaigns || []).length;
          messagesPerUser[userId] = userData.messagesSent || 0;
          leadsPerUser[userId] = (userData.campaigns || []).reduce(
            (total, campaign) => total + ((campaign.leads && Array.isArray(campaign.leads)) ? campaign.leads.length : 0),
            0
          );
          (userData.campaigns || []).forEach(campaign => {
            if (campaign.title && campaign.msg && Array.isArray(campaign.msg)) {
              messagesPerCampaign[campaign.title] = campaign.msg.length;
            }
          });
          (userData.campaigns || []).forEach(campaign => {
            if (campaign.title && campaign.leads && Array.isArray(campaign.leads)) {
              leadsPerCampaign[campaign.title] = campaign.leads.length;
            }
          });
        }
        setData({
          campaignsPerUser,
          messagesPerCampaign,
          leadsPerCampaign,
          leadsPerUser,
          messagesPerUser,
        });
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };
    fetchData();
  }, []);
  const createChartData = (data, label) => {
    const colors = Object.keys(data).map(() => `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.5)`);
    return {
      labels: Object.keys(data),
      datasets: [
        {
          label: label,
          data: Object.values(data),
          backgroundColor: colors,
          borderColor: 'rgba(0, 0, 0, 0.5)',
          borderWidth: 1,
        },
      ],
    };
  };
  return (
    <div className="charts-container">
      <div className="chart-wrapper">
        <h2 className="chart-title">Campaigns per User</h2>
        <Doughnut data={createChartData(data.campaignsPerUser, 'Campaigns per User')} />
      </div>
      <div className="chart-wrapper">
        <h2 className="chart-title">Messages per Campaign</h2>
        <Doughnut data={createChartData(data.messagesPerCampaign, 'Messages per Campaign')} />
      </div>
      <div className="chart-wrapper">
        <h2 className="chart-title">Leads per Campaign</h2>
        <Doughnut data={createChartData(data.leadsPerCampaign, 'Leads per Campaign')} />
      </div>
      <div className="chart-wrapper">
        <h2 className="chart-title">Leads per User</h2>
        <Doughnut data={createChartData(data.leadsPerUser, 'Leads per User')} />
      </div>
      <div className="chart-wrapper">
        <h2 className="chart-title">Messages per User</h2>
        <Doughnut data={createChartData(data.messagesPerUser, 'Messages per User')} />
      </div>
    </div>
  );
}




