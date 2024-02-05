import React from 'react'
import { Route, Routes } from 'react-router';
import Login from '../components/Login/Login';

export default function Layout() {
  return (
    <div>
     <Routes>
      <Route path='/login' elemants={<Login/>}/>
      <Route path='/singIn' elemants={<Login/>}/>
     </Routes>
      </div>
  )
}
