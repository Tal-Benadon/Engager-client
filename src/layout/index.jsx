import React from 'react'
import { Route, Routes } from 'react-router';
import LoginPage from '../pages/LoginPage';


export default function Layout() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
      </Routes>
        
    </div>
  )
}
