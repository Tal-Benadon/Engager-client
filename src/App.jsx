import React, { useEffect } from 'react'
import Layout from './layout'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';
import api from './functions/api';

export default function App() {
  const notify = () => toast("Wow so easy!");
  let nav = useNavigate()

  useEffect(() => {
    if (!localStorage.token) {
      nav('/login');
      return;
    }

    // TODO: verify token and make request to map from token to user
    // and save in context
    // api.post('/user/verify', {token:ls.token})
  }, [])

  return (
    <div>
      <Layout />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      // transition: 'Bounce'
      />
    </div>
  )
}
