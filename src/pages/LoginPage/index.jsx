import styles from './style.module.css'
import { Route, Routes } from 'react-router'
import TabSwitcher from '../../components/TabSwitcher'
import Login from '../../components/Login/Login'
import Loading from '../../components/Loading'

export default function LoginPage() {
    // TODO: state >> choose
    // render by condition (state)
  return (
    <div className={styles.container}  >
       
      <TabSwitcher  rout ={ [{tab:"login",text:"התחברות"},{tab:"signin",text:"הרשמה"}]} />
      {true ? <Login/> : <Loading />}
     {/* <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signIn' element={<Loading />} />
     </Routes> */}

    </div>
  )
}
