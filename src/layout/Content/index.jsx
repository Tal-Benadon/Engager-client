import { Route, Router, Routes } from 'react-router-dom'
import styles from './style.module.css'
import Setting from '../../components/Setting'
import CampaignPage from '../../pages/CampaignPage'

export default function Content() {
  return (
    <div>
      <Routes>
      <Route path='/campaign/:campId/*' element={<CampaignPage/>} />
      <Route path='/settings' element={<Setting/>} />
      </Routes>
    </div>
  )
}
