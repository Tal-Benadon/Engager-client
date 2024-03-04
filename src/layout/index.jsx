import React from 'react'
import SideBar from './SideBar/index'
import Content from './Content/index'
import styles from './style.module.css'
import { Outlet, Route, Routes } from 'react-router';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import { ManageContext } from '../context/ManageContext';
import Test from '../tests/A_MainTest';
import PopUp from '../components/PopUp';
import Register from '../components/Register';
import DashboardLayout from './DashboardLayout';
import CampaignPage from '../pages/CampaignPage';
import QRCodeComponent from '../components/Setting';
import PaymentPage from '../pages/PaymentPage';
import LeadsTab from '../components/LeadsTab';
import LeadInfoPage from '../pages/LeadInfoPage';
import MsgTab from '../components/MsgTab';
import MessagePage from '../components/MessagePage';

export default function Layout() {
  return (
    <div className={styles.layout}>
      <ManageContext>
        <Routes>
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<Register />} />
          <Route element={<DashboardLayout />} >
            <Route index element={<>DashboardLayout</>} />
            <Route path='campaign/:campId' element={<CampaignPage />}>
              <Route path="leads" element={<><LeadsTab /><Outlet /></>}>
                <Route index element={<></>} />
                <Route path=":leadId" element={<LeadInfoPage />} />
              </Route>
              <Route path="messages" element={<><MsgTab /><Outlet /></>}>
                <Route index element={<></>} />
                <Route path=":messageId"
                  element={<MessagePage />}
                />
              </Route>
            </Route>
            <Route path='settings' element={<QRCodeComponent />} />
            <Route path='payment' element={<PaymentPage />} />
          </Route>

          {/* <Route path='*' element={
            <>
              <SideBar />
              <Content />
            
            </>} /> */}
        </Routes>

        <Test />




        <PopUp />

      </ManageContext>
    </div>


  )
}
