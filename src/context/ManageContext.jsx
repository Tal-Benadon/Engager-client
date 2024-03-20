import React, { useEffect, useState } from 'react';
import DataContext from './DataContext';
import api from '../functions/api';
import { useNavigate } from 'react-router';

export function ManageContext({ children }) {

  const [user, setUser] = useState({});
  const [PopUp, setPopUp] = useState(false);
  const [allCamps, setAllCamps] = useState([]);

  const nav = useNavigate();
  const [socket, setSocket] = useState();
function createSocket(user){
    if (user){
      console.log({miriam: user});
      // setSocket(io('http://localhost:3000', {
      //   auth: {
      //     userData: {
      //       _id: "65ed9c525b51ed6b4bd16107",
      //       // _id: user.userId,
      //       name: 'אלירז',
      //     }
      //   }
      // })
      // )
    }
}
  useEffect(() => {
    if (localStorage.token && !user._id) {
      const tokenToUser = async () => {
        await api.get('/accout/tokenToUser').then(res => setUser(res))
        console.log(user);
        // createSocket(user)
      };
      tokenToUser();
    } else { }
  }, [])


  const getAllCamps = () => {

    api
      .get(`/campaign`)
      .then((res) => {
        setAllCamps(res)
      })
  };

  return (

    <DataContext.Provider value={{ user, setUser, PopUp, setPopUp, allCamps, setAllCamps, getAllCamps, socket }}>
      {children}
    </DataContext.Provider>
  );
}
