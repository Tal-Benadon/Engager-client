import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout'
import Test from './tests/A_MainTest'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/*' element={<Test />} />
      </Routes>

     


    </div>
  )
}
