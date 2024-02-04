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

<<<<<<< HEAD
     
=======
<<<<<<< HEAD
=======
>>>>>>> b261a92d93f2c075bfe624f246932936ea706518

>>>>>>> ef3993ffe7abda90fbe3d4494d98669481f5a7da

    </div>
  )
}
