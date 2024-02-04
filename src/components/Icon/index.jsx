import styles from "./style.module.css"
import iconsPath from './iconsPath'

export default function Icon({ nameIcon, nameColor }) {

  if (nameColor == "active") {
    nameColor = "#D11B1B"
  }
  else if (nameColor == 'danger') {
    nameColor = "#0E9D85"
  }
  else {
    nameColor = "#6B6B6B"
  }

  return <div className={styles.icon}>
    <svg width="20" height="20" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      {iconsPath[nameIcon].map(p=><path d={p} stroke={nameColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
)}
    </svg>
  </div>
}