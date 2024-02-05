import React, { createContext, useState, useContext } from 'react';
import DataContext from './DataContext';

export function ManageContext({ children }) {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    
    <DataContext.Provider value={{ user, setUser, isOpen, setIsOpen }}>
      {children}
    </DataContext.Provider>
  );
}
