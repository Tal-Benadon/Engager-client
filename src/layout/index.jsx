import { Outlet, Route, Routes } from "react-router";
import AllActiveLeads from "../components/AllActiveLeads";
import AllInactiveLeads from "../components/AllInactiveLeads";
import AllLeads from "../components/AllLeads";
import AllUsers from "../components/AllUsers";
import FeedBack from "../components/FeedBack";
import ForgetPassword from "../components/ForgetPassword";
import LeadsTab from "../components/LeadsTab";
import MessagePage from "../components/MessagePage";
import MsgTab from "../components/MsgTab";
import MyLeads from "../components/MyLeads";
import MyUsers from "../components/MyUsers";
import PopUp from "../components/PopUp";
import QRCodeComponent from "../components/QRCodeComponent";
import Register from "../components/Register";
import SettingsTab from "../components/SettingsTab";
import WebHookPage from "../components/WebHookPage";
import WebHookTab from "../components/WebHookTab";
import { ManageContext } from "../context/ManageContext";
import ActivateAccount from "../pages/ActivateAccount";
import CampaignPage from "../pages/CampaignPage";
import ChangePasswordPage from "../pages/ChangePasswordPage";
import CheckOut from "../pages/CheckOut";
import CompleteDetails from "../pages/CompleteDetails/CompleteDetails";
import Dashboard from "../pages/Dashboard";
import GoogleRegisterRedirectPage from "../pages/GoogleRegisterRedirectPage";
import LeadInfoPage from "../pages/LeadInfoPage";
import LoginPage from "../pages/LoginPage";
import PaymentPage from "../pages/PaymentPage";
import Plans from "../pages/Plans";
import RedirectGoogle from "../pages/RedirectGoogle/RedirectGoogle";
import UserDetails from "../pages/UserDetails";
import Test from "../tests/A_MainTest";
import DashboardLayout from "./DashboardLayout";
import styles from "./style.module.css";
import MsgNotReceived from "../pages/MsgNotReceived";
import MsgQueue from "../components/MsgQueue";
export default function Layout() {
  return (
    <div className={styles.layout}>
      <ManageContext>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route
            path="changePassword/:passwordToken"
            element={<ChangePasswordPage />}
          />
          <Route path="register" element={<Register />} />
          <Route path="forgetPassword" element={<ForgetPassword />} />
          <Route path="completeDetails/:email" element={<CompleteDetails />} />
          <Route path="redircetGoogle/:token" element={<RedirectGoogle />} />
          <Route
            path="user-doesnt-exists"
            element={<GoogleRegisterRedirectPage />}
          />
          <Route
            path="activate-user/:userToken"
            element={<ActivateAccount />}
          />
          <Route path="first-plan" element={<Plans />} />
          <Route element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="msgqueue" element={<MsgNotReceived />} />
            <Route path="checkOut" element={<CheckOut />} />
            <Route path="myLeads" element={<MyLeads />}>
              <Route path="all" element={<AllLeads />} />
              <Route path="active" element={<AllActiveLeads />} />
              <Route path="inactive" element={<AllInactiveLeads />} />
            </Route>
            <Route path="myUsers" element={<MyUsers />}>
              <Route path="all" element={<AllUsers />} />
              {/* <Route path="active" element={<AllActiveLeads />} /> */}
              {/* <Route path="inactive" element={<AllInactiveLeads />} /> */}
            </Route>
            <Route path="campaign/:campId" element={<CampaignPage />}>
              <Route
                path="leads"
                element={
                  <>
                    <LeadsTab />
                    <Outlet />
                  </>
                }
              >
                <Route
                  index
                  element={
                    <>
                      {/* TODO: להוסיף מסך פתיחה בכניסה ללידים כשאין ראוט לליד ספציפי */}{" "}
                    </>
                  }
                />
                <Route path=":leadId" element={<LeadInfoPage />} />
              </Route>
              <Route
                path="messages"
                element={
                  <>
                    <MsgTab />
                    <Outlet />
                  </>
                }
              >
                <Route
                  index
                  element={
                    <>
                      {/* TODO: להוסיף מסך פתיחה בכניסה להודעות כשאין ראוט להודעה ספציפית */}{" "}
                    </>
                  }
                />
                <Route path=":messageId" element={<MessagePage />} />
              </Route>
              <Route
                path="webhook"
                element={
                  <>
                    <WebHookTab />
                    <WebHookPage />
                  </>
                }
              />
            </Route>
            <Route path="settings" element={<QRCodeComponent />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* <Route path='msgqueue' element={<MsgQueue arr={arr} />} /> */}
            <Route path="feedback" element={<FeedBack />} />
            <Route path="payment" element={<PaymentPage />} />
            <Route
              path="settings"
              element={
                <>
                  <SettingsTab />
                  <Outlet />
                </>
              }
            >
              <Route
                index
                element={
                  <>
                    {" "}
                    {/*להוסיף פרטי יוזר או משהו תלוי מה רוצים במסך הראשוני כשלוחצים על הגדרות*/}{" "}
                  </>
                }
              />
              <Route path="QrCode" element={<QRCodeComponent />} />
              <Route path="plans" element={<Plans />} />
              <Route path="userDetails" element={<UserDetails />} />
            </Route>
            <Route path="feedback" element={<FeedBack />} />
            <Route path="payment" element={<PaymentPage />} />
          </Route>
        </Routes>
        <Test />
        <PopUp />
        <MsgQueue />
      </ManageContext>
    </div>
  );
}
