import { NavLink } from 'react-router-dom';
import { Icon } from './icon.jsx';
import styles from './style.module.css';

// Description : רשימת הitem של הקמפיין
// Props : ____________ , _________
// Creator : gila

export default function CampaignItem({ id, title }) {
  const campId = location.pathname.split('/')[2]
  const active = (campId == id);

  return (
    <div className={styles.item} title={title}>
      {/* <div className={styles.hoverTitle}>{title}</div> */}
      <NavLink to={"/campaign/" + id + "/leads"} className={active ? styles.active : ""}>
        <div className={styles.iconitem}> <Icon/> </div>
        <div className={styles.nameitem}>
          <span>{title}</span>
        </div>
      </NavLink>
    </div>
  )
}
