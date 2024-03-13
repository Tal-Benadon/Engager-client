import React, { useEffect, useState } from 'react';
import DataContext from './DataContext';
import api from '../functions/api';
import { useNavigate } from 'react-router';

export function ManageContext({ children }) {
<<<<<<< HEAD
  const [user, setUser] = useState();
  const [isOpen, setIsOpen] = useState(false);
=======
  const [user, setUser] = useState({});
  const [PopUp, setPopUp] = useState(false);
>>>>>>> 8e6abe328eeaf5de0779bad49f3f050cd45771f1

  const nav = useNavigate();

  useEffect(() => {
    if (localStorage.token && !user) {
      const tokenToUser = async () => {
        await api.get('/accout/tokenToUser').then(res => setUser(res))
      };
      tokenToUser();
    } else {
      nav('/')
    }
  }, [])

  return (

    <DataContext.Provider value={{ user, setUser, PopUp, setPopUp }}>
      {children}
    </DataContext.Provider>
  );
}
