import React from 'react'
import SideBar from './SideBar/index'
import Content from './Content/index'
import styles from './style.module.css'
import { Route, Routes } from 'react-router';
import LoginPage from '../pages/LoginPage';

export default function Layout() {
  return (
    <div className={styles.layout}>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
      </Routes>

      <SideBar />
      <Content />

    </div>


  )
}
