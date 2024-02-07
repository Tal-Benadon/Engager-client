import styles from "./style.module.css"
import InputWrapper from '../InputWrapper'
import DatePicker from '../DatePicker'
import TimePicker from '../TimePicker'

export default function idex({style, ...props}) {
  return (
    <div className={styles.timing}>
      <InputWrapper label="תזמון"  subLabel='הזמן הנכון לשלוח את ההודעה זו...' to = "">
        <div className={styles.pickers}>
         <DatePicker/>
         <TimePicker/>
        </div>
      </InputWrapper>
        
      
    </div>
  )
}
