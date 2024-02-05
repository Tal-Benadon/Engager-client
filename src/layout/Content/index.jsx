import { Route, Router, Routes } from 'react-router-dom'
import styles from './style.module.css'
import Setting from '../../components/Setting'

export default function Content() {
  return (
    <div>
      חלכןחןאאןרעאןרנע
      <Routes>
      <Route path='/campsign/:id' element={<>campaign page</>} />
      <Route path='/settings' element={<Setting/>} />
      </Routes>
    </div>
  )
}
