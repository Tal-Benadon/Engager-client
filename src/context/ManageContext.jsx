import React, { useEffect, useState } from 'react';
import DataContext from './DataContext';
import api from '../functions/api';
import { useNavigate } from 'react-router';

export function ManageContext({ children }) {

  const [user, setUser] = useState({});
  const [PopUp, setPopUp] = useState(false);
  const [allCamps, setAllCamps] = useState([]);

  const nav = useNavigate();

  useEffect(() => {
    if (localStorage.token && !user) {
      const tokenToUser = async () => {
        await api.get('/accout/tokenToUser').then(res => setUser(res))
      };
      tokenToUser();
    } else {}
  }, [])

  const getAllCamps = () => {
    api
      .get(`/campaign`)
      .then((res) => {
        setAllCamps(res)
      })
  };

  return (

    <DataContext.Provider value={{ user, setUser, PopUp, setPopUp ,allCamps, setAllCamps,getAllCamps}}>
      {children}
    </DataContext.Provider>
  );
}
