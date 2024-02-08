
import { useParams } from 'react-router'
import api from '../../functions/api'
import Button from '../Button'
import styles from './style.module.css'
import { useContext, useState } from 'react';
import DataContext from '../../context/DataContext'


// Description : 
// Props : ____________ , _________
// Creator : ________
export default function DelCamp() {
    const { isOpen, setIsOpen } = useContext(DataContext);
    //   const [campaign, setCampaign] = useState([])
    //   const getCamp = () => {
    //       api.get("/campaign")
    //         .then(res => {
    //           console.log("campaign:", res)
    //           // nav(`campaign/${res[0]._id}`)
    //           setCampaign(res)
    //         })
    //         .then()
    //     }

    const campId = location.pathname.split('/')[2]
    console.log({ campId })
    const url = `/campaign/${campId}`;
    const delCampaign = () => {
        api.del(url)
            .then(res => setIsOpen(false))

        // .then(getCamp())

    }

    return (
        <div>
            "האם אתה בטוח שברצונך למחוק רשימה זו לצמיתות?"
            <div className={styles.actions}>
                <Button className={"cancel"} content={"ביטול"} onClick={() => setIsOpen(false)} />
                <Button className={"save"} content={"שמירה"} onClick={delCampaign} />
            </div>
        </div>
    )
}
