import React from 'react'
import { Route, Routes } from 'react-router';
import LoginPage from '../pages/LoginPage';
import Loading from '../components/Loading';

export default function Layout() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<LoginPage />} />

      </Routes>
    </div>
  )
}
