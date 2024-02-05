import styles from './style.module.css'

import { LuUserCircle2 } from "react-icons/lu";

// Description: This component displays a Lead item based on the provided properties.
// Props: name, email, date, and the message ID
// Creator: Refael

export default function LeadItem({ name = "אלירז נבו", email = "eliraz@gmail.com", date = "04/12/2024", id}) {
  return (
    <div className={styles.lead}>
      <div className={styles.nameAndDetails}>
        <div className={styles.name}>{name}</div>
        <div className={styles.DateAndEmail}>
          <div className={styles.email}>{email}</div>
          <div className={styles.date}>{date}</div>
        </div>
      </div>
      <div className={styles.square}>
      <LuUserCircle2 className={styles.activeIcon} />
      </div>

    </div>
  )
}
