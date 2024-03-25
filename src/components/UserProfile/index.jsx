import React, { useContext } from 'react'
import styles from './style.module.css'
import DataContext from '../../context/DataContext';
import Icon from "../../components/Icon";
import Popover from "../../components/Popover";
import ConfirmLogOut from "../../components/ConfirmLogOut";
import { FaWhatsapp } from "react-icons/fa";


export default function UserProfile() {
    const { user, setUser } = useContext(DataContext);
    const { setPopUp } = useContext(DataContext);

  return (
    <div className={styles.user}>
        <div className={styles.nameAndImg}>
          <div>
            <Popover
            fnName={"onClick"}
            list={
              [{
                text: "התנתקות",
                icon: <Icon nameIcon={"logout"} nameColor={""}/>,
                onClick: () =>
                  setPopUp(              
                    {
                      title: 'התנתקות',
                      component: <ConfirmLogOut setPopUp={setPopUp} title={'התנתקות'}/>
                    }
                  )
              }
              ]
            }>
            <img className={styles.userCircle} src={user.avatar}/>
            </Popover>
          </div>
          <div>{user.name}</div>
        </div>
        <div className={styles.userCircle}>
        <FaWhatsapp className={styles.whatsappIcon}/>
        </div>
      </div>
  )
}
