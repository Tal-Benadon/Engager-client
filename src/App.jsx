import React from 'react'
import Layout from './layout'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const notify = () => toast("Wow so easy!");

  return (
    <div>

      <Test />

    </div>
  )
}
