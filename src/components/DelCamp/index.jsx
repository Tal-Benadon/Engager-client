
import { useParams } from 'react-router'
import api from '../../functions/api'
import Button from '../Button'
import styles from './style.module.css'

// Description : 
// Props : ____________ , _________
// Creator : ________
export default function DelCamp() {
    const campId = location.pathname.split('/')[2]
    console.log({campId})
    const delCampaign=()=>{
        api.del( `/campaign/${campId}`)
        .then(res=>setIsOpen(false))

    }
    return (
        <div>
            "האם אתה בטוח שברצונך למחוק רשימה זו לצמיתות?"
            <div className={styles.actions}>
                <Button className={"cancel"} content={"ביטול" } onClick={() => setIsOpen(false)}/>
                <Button className={"save"} content={"שמירה"} onClick={delCampaign}/>
            </div>
        </div>
    )
}
