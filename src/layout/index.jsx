import React from 'react'
import { Route, Routes } from 'react-router';
import LoginPage from '../pages/LoginPage';
import { ManageContext } from '../context/ManageContext';
import Test from '../tests/A_MainTest';
import SideBar from './SideBar';

export default function Layout() {
  return (
    <div>
      <ManageContext>
        <Routes>
          <Route path='/login' element={<LoginPage />} />

        </Routes>

      <Test />


    <SideBar/>

      </ManageContext>
    </div>
  )
}
