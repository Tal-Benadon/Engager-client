import React, { useContext, useEffect, useState } from 'react'
import TabSwitcher from '../TabSwitcher'
import { Outlet, useNavigate } from 'react-router-dom'
import DataContext from '../../context/DataContext';
import styles from "./style.module.css"
import api from '../../functions/api';
import {  toast } from 'react-toastify';



export default function MyLeads() {

    const nav = useNavigate();
    const [leadsObj, setLeadsObj] = useState({});
    const [activeNum, setActiveNum] = useState(0);
   
    const {user} = useContext(DataContext);
    useEffect(() => {
        if (location.pathname === '/myLeads') {
            nav('/myLeads/all');
        }

        api.get(`/user/${user._id}/leads`)
            .then(setLeadsObj)
            .catch((error) => {
                toast.error(error?.response?.data?.msg || "somthing want worng");
            });
    }, [])

    useEffect(() => {
        if (leadsObj.leads) {
            const actives = leadsObj.leads.filter(lead => lead.isOnline).length;
            setActiveNum(actives);
        }
    }, [leadsObj])

    return (
        <DataContext.Provider value={{ formatedUsers: leadsObj.leads, heads: leadsObj.heads }}>
            <div className={styles.myLeads}>
                <h2 className={styles.title}>הלידים שלי</h2>
                <p className={styles.info}>{leadsObj.leads?.length} לידים, {activeNum} פעילים</p>
                <div className={styles.tabSwitcher}>
                    <TabSwitcher rout={[
                        { tab: `myLeads/active`, text: `פעילים` },
                        { tab: `myLeads/inactive`, text: "לא פעילים" },
                        { tab: `myLeads/all`, text: "כל הלידים" }
                    ]} />
                </div>
                <Outlet />
            </div>
        </DataContext.Provider>
    )
}
