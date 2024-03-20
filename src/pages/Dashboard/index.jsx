import React, { useContext, useEffect, useState } from 'react';
import { Doughnut, Line, Bar } from 'react-chartjs-2';
import { format, addMonths, subMonths } from 'date-fns';
import 'chart.js/auto';
import api from '../../functions/api';
import styles from './style.module.css';
import DataContext from '../../context/DataContext';
import formatDateTime from '../../functions/timeDateFormat';
import Plans from '../../components/Plans';
export default function Dashboard() {
  const [data, setData] = useState({
    broadcastMessages: {},
    campaignsPerUser: {},
    messagesPerCampaign: {},
    leadsPerCampaign: {},
    leadsPerUser: {},
    messagesPerUser: {},
    messagesSent: {},
    messagesReceived: {},
  });
  const { user } = useContext(DataContext);
  console.log("user",user)
  const fixCreatedDate = formatDateTime(user.createdDate)[0];

  const [plansData, setPlansData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const campaignRes = await api.get('/campaign');
        const userRes = await api.get('/user');
        console.log("userRes",userRes)
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
        const messagesSent = {};
        const messagesReceived = {};
        const broadcastMessages = {};
        campaignData.forEach((item) => {
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
            if (item.msg && Array.isArray(item.msg)) {
              let sentCount = 0;
              let receivedCount = 0;
              item.msg.forEach(msg => {
                if (msg.status === 'sent') {
                  sentCount++;
                } else if (msg.status === 'received') {
                  receivedCount++;
                }
              });
              messagesSent[item.title] = sentCount;
              messagesReceived[item.title] = receivedCount;
            }
            if (item && item.msg && Array.isArray(item.msg)) {
              item.msg.forEach(msg => {
                const messageDate = new Date(msg.creationDate);
                const messageYearMonth = format(messageDate, 'yyyy-MM');
                if (broadcastMessages[messageYearMonth]) {
                  broadcastMessages[messageYearMonth]++;
                } else {
                  broadcastMessages[messageYearMonth] = 1;
                }
              });
            }
          }
        });
        if (userData) {
          const userId = userData._id;
          campaignsPerUser[userId] = (userData.campaigns || []).length;
          messagesPerUser[userId] = userData.messagesSent || 0;
          leadsPerUser[userId] = (userData.campaigns || []).reduce((total, campaign) => total + (campaign.leads && Array.isArray(campaign.leads) ? campaign.leads.length : 0), 0);
          (userData.campaigns || []).forEach((campaign) => {
            if (campaign.title && campaign.msg && Array.isArray(campaign.msg)) {
              messagesPerCampaign[campaign.title] = campaign.msg.length;
            }
          });
          (userData.campaigns || []).forEach((campaign) => {
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
          messagesSent,
          messagesReceived,
          broadcastMessages,
        });
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };
    fetchData();
    const fetchPlansData = async () => {
      try {
        const plansRes = await api.get('/plans');
        if (!plansRes) {
          throw new Error('Failed to fetch data');
        }
        console.log("plansRes", plansRes)
        setPlansData(plansRes);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };
    fetchPlansData();
  }, []);

  console.log("data", plansData)
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
        }
      ],
    };
  };
  const createLineData = (data, title) => {
    const today = new Date();
    const sixMonthsAgo = subMonths(today, 6);
    const labels = Array.from({ length: 7 }, (_, i) => format(addMonths(sixMonthsAgo, i), 'MMM yyyy'));
    return {
      labels,
      datasets: [
        {
          label: title,
          data: labels.map(month => data[format(new Date(month), 'yyyy-MM')] || 0),
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
        },
      ],
    };
  };
  return (
    <div className={styles.main_container}>
      <div className={styles.user_details}>
        <h1>פרטי משתמש</h1>
        <br />
        <h2>שם משתמש: {user.name}</h2><img src={user.avatar} alt="User Image" />
        <h2>מספר הקמפיינים שלך: {data.campaignsPerUser ? data.campaignsPerUser[user._id] : 0}</h2>
        <h2>תאריך התחברות: {fixCreatedDate} </h2>
        <div className={styles.plansWrapper}>
          {/* <Plans/> */}
        <h2> ברשותך חבילה מסוג:</h2>
      <h2> תאריך הצטרפות: </h2>
     <h2> כמות הודעות אפס שנשארו: </h2>
       {/* {user.subscription.opening_msg_to_new_lids - campaigns.msg.isZeroMsg = true then campagins.recievedMsgs.length } */}
       <h2>   כמות הודעות תפוצה שנשארו החודש</h2>
          {/* {user.subscription.msg_number - user.messagesSent} */}
<h2>מספר קמפיינים שנשארו:</h2>
          <button >לשדרוג החבילה לחץ כאן</button>
        </div>
      </div>
      <div className={styles.charts_container}>
      <div className={styles.chart_wrapper}>
        <h2 className={styles.chart_title}>הודעות תפוצה שנשלחו</h2>
        <Line data={createLineData(data.broadcastMessages, 'Broadcast Messages Sent')} />
      </div>
      <div className={styles.chart_wrapper}>
        <h2 className={styles.chart_title}>כמה לידים לקמפיין</h2>
        <Bar data={createChartData(data.leadsPerCampaign, 'Leads per Campaign')} />
      </div>
      <div className={styles.chart_wrapper}>
        <h2 className={styles.chart_title}>הודעות לכל קמפיין</h2>
        <Doughnut data={createChartData(data.messagesPerCampaign, 'Messages per Campaign')} />
      </div>
      <div className={styles.chart_wrapper}>
        <h2 className={styles.chart_title}>הודעות בדרך</h2>
        <Bar
          data={{
            labels: Object.keys(data.messagesSent),
            datasets: [
              {
                label: 'Messages Sent',
                data: Object.values(data.messagesSent),
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
              },
              {
                label: 'Messages Received',
                data: Object.values(data.messagesReceived),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
              },
            ],
          }}
        />
      </div></div>
    </div>
  );
        }