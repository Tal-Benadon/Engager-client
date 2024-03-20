import React, { useEffect, useState } from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { format, addMonths, subMonths } from "date-fns";
import "chart.js/auto";
import api from "../functions/api";
import styles from "./style.module.css";
export default function Orna() {
  const [data, setData] = useState({
    nonPayingCustomers: {},
    customersByPlan: {},
    customersByPrice: {},
    plansNames: {},
    payingCustomers: {},
    planPrice: {},
    customersByJoinDate: {},
  });
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRes = await api.get("/user");
        setUserInfo(userRes);
        const plans = await api.get("/plans");
        if (!userRes || !plans) {
          throw new Error("Failed to fetch data");
        }
        const userData = userRes.filter((user) => user.isActive === true) || null;
        const nonPayingCustomers = {};
        const customersByPlan = {};
        const customersByPrice = {};
        const plansNames = {};
        const planPrice = {};
        const customersByJoinDate = {}; // Added state for customers by join date
        for (const plan of plans) {
          plansNames[plan._id] = plan.name;
          planPrice[plan._id] = plan.price;
          customersByPrice[plan.price] = 0; // Initialize customer count for each price
        }
        for (const user of userData) {
          if (user.subscription) {
            customersByPlan[user.subscription] ? customersByPlan[user.subscription] += 1 : customersByPlan[user.subscription] = 1;
            user.paying = true; // Assuming paying is true if user has a subscription
          } else {
            nonPayingCustomers[user._id] = user.name;
            user.paying = false;
          }
          // Count customers by price
          const userPlan = plans.find((plan) => plan._id === user.subscription && plan.name === "חינמי");
          if (userPlan) {
            customersByPrice[userPlan.price] ? customersByPrice[userPlan.price] += 1 : customersByPrice[userPlan.price] = 1;
          }
          if (user.createdDate) {
            const date = new Date(user.createdDate);
            const month = format(date, "MMMM");
            const year = format(date, "yyyy");
            const key = `${month} ${year}`;
            if (customersByJoinDate[key]) {
              customersByJoinDate[key] += 1;
            } else {
              customersByJoinDate[key] = 1;
            }
          }
        }
        setData({
          nonPayingCustomers,
          customersByPlan,
          customersByPrice,
          plansNames,
          planPrice,
          customersByJoinDate, // Set the state for customers by join date
        });
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchData();
  }, []);
  const createChartData = (data, labels) => {
    const colors = Object.keys(data).map(
      () =>
        `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
          Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)}, 0.5)`
    );
    return {
      labels,
      datasets: [
        {
          label: "לקוחות לפי תשלום",
          data: Object.values(data),
          backgroundColor: colors,
          borderColor: "rgba(0, 0, 0, 0.5)",
          borderWidth: 1,
        },
      ],
    };
  };

  const customersPerMonthYear = Object.entries(data.customersByJoinDate)
  .map(([monthYear, count]) => {
    const [month, year] = monthYear.split(' ');
    return { month, year, count };
  })
  .sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    }
    return new Date(`${a.month} 1, ${a.year}`) - new Date(`${b.month} 1, ${b.year}`);
  });
  const createLineDataForRecentCustomers = () => {
    // Set the number of recent months you want to display
    const recentMonths = 12; // Change this number to display a different number of recent months
    
    // Get the current date
    const currentDate = new Date();
    
    // Create an array to store the labels and data for the recent months
    const labels = [];
    const data = [];
    
    // Iterate over the recent months
    for (let i = recentMonths - 1; i >= 0; i--) {
      // Get the date of the current month
      const monthDate = subMonths(currentDate, i);
      const monthYear = format(monthDate, 'MMMM yyyy');
      
      // Check if there are customers for the current month
      const customersForMonth = customersPerMonthYear.find(({ month, year }) => {
        return month === format(monthDate, 'MMMM') && year === format(monthDate, 'yyyy');
      });
      
      // If there are customers for the current month, add them to the data array
      if (customersForMonth) {
        labels.push(monthYear);
        data.push(customersForMonth.count);
      } else {
        labels.push(monthYear);
        data.push(0);
      }
    }
    
    // Return the chart data
    return {
      labels,
      datasets: [
        {
          label: 'לקוחות חדשים',
          data,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          fill: false, // Do not fill the area under the line
          pointStyle: 'circle', // Set the point style to circle
        },
      ],
    };
  };

  
  return (
    <div className={styles.main_container}>
      <div className={styles.chart_wrapper}>
        <div className={styles.chart_container}>
          <h2 className={styles.chart_title}>לקוחות לפי תוכנית</h2>
          <Doughnut
            data={createChartData(data.customersByPlan, Object.values(data.plansNames))}
          />
        </div>
      </div>
      <div className={styles.chart_wrapper}>
        <div className={styles.chart_container}>
          <h2 className={styles.chart_title}>לקוחות לפי תשלום</h2>
          <Bar
            data={createChartData({ 'משלמים': userInfo.filter(user => user.paying).length, 'לא משלמים': Object.keys(data.nonPayingCustomers).length }, ['משלמים', 'לא משלמים'])}
            options={{
              plugins: {
                legend: {
                  display: false // מסתיר את התוויות
                }
              }
            }}
          />
        </div>
      </div>
      <div className={styles.chart_wrapper}>
        <div className={styles.chart_container}>
          <h2 className={styles.chart_title}>לקוחות לפי תאריך הצטרפות</h2>
          <Line data={createLineDataForRecentCustomers()} />

        </div>
      </div>
    </div>
  );
}