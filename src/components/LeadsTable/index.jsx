import React from 'react'
import { useState } from 'react'
import styles from "./style.module.css"
import Translet from '../../functions/translate';

export default function LeadsTable({ filterdLeads = [] }) {

    const [heads, setHeads] = useState(Object.keys(filterdLeads[1]));
    console.log(heads)

    return (
        <table className={styles.leadsTable}>
            <thead><tr id={styles.heads}>{heads.map(h => <th>{h}</th>)}</tr></thead>
            <tbody>
                <tr id={styles.heads} className={styles.filters}>
                {heads.map(h => <td><input type="text" /></td>)}
                </tr>
                {filterdLeads.map(lead => <tr>{heads.map(h => {
                    return (
                        h == 'isOnline' ? <td className={lead[h] ? styles.online : styles.offline}>
                            {lead[h] ? "פעיל" : "לא פעיל"}</td> : <td>{Translet(lead[h])}</td>
                    )
                })}</tr>)}
            </tbody>
        </table>
    )
}
