import React, { useEffect, useState } from 'react';
import DataContext from './DataContext';
import api from '../functions/api';
import { useNavigate } from 'react-router';

export function ManageContext({ children }) {

  const [user, setUser] = useState({});
<<<<<<< HEAD
  const [isOpen, setIsOpen] = useState(false);
  
=======
  const [PopUp, setPopUp] = useState(false);


  const nav = useNavigate();

  useEffect(() => {
    if (localStorage.token && !user) {
      const tokenToUser = async () => {
        await api.get('/accout/tokenToUser').then(res => setUser(res))
      };
      tokenToUser();
    } else {}
  }, [])
>>>>>>> cb120a77c8e929e85a695a0f591a74cc0b87be05

  return (

    <DataContext.Provider value={{ user, setUser, PopUp, setPopUp }}>
      {children}
    </DataContext.Provider>
  );
}
