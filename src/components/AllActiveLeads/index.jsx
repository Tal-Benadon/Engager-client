import React, { useContext, useEffect, useState } from 'react'
import DataContext from '../../context/DataContext';
import LeadsTable from '../LeadsTable';

export default function AllActiveLeads() {
  const { formatedUsers, heads } = useContext(DataContext);
  const [activeLeads, setActiveLeads] = useState([]);

  useEffect(() => {
    if (formatedUsers) {
      setActiveLeads(formatedUsers.filter(lead => lead.isOnline))
    }
  }, [formatedUsers])

  return (
    <LeadsTable filterdLeads={activeLeads} heads={heads} />
  )
}
