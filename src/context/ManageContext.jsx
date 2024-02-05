import React, { useState } from 'react';
import DataContext from './DataContext';

export function ManageContext({ children }) {
  const [user, setUser] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  return (

    <DataContext.Provider value={{ user, setUser, isOpen, setIsOpen }}>
      {children}
    </DataContext.Provider>
  );
}
