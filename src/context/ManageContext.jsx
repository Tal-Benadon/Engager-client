import React, { useState } from 'react';
import DataContext from './DataContext';

export function ManageContext({ children }) {
  const [user, setUser] = useState({});
  const [PopUp, setPopUp] = useState(false);

  return (

    <DataContext.Provider value={{ user, setUser, PopUp, setPopUp }}>
      {children}
    </DataContext.Provider>
  );
}
