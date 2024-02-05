import styles from './style.module.css'
import TabSwitcher from '../../components/TabSwitcher'

export default function LoginPage() {
  return (
    <div className='container'>
       
      <TabSwitcher  rout ={ [{tab:"login",text:"התחברות"}]} />
      <TabSwitcher  rout ={ [{tab:"singIn",text:"הרשמה"}]} />

    </div>
  )
}
