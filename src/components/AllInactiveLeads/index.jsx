import React, { useContext, useEffect, useState } from 'react'
import DataContext from '../../context/DataContext';
import LeadsTable from '../LeadsTable';

export default function AllInactiveLeads() {
  const { formatedUsers, heads } = useContext(DataContext);
  const [inactiveLeads, setInactiveLeads] = useState([]);

  useEffect(() => {
   if (formatedUsers) {
    setInactiveLeads(formatedUsers.filter(lead => !lead.isOnline))
   }
  }, [formatedUsers])
  

  return (
    <LeadsTable filterdLeads={inactiveLeads} heads={heads} />
  )
}
