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
        <svg width={iconsPath[nameIcon].style.width} height={iconsPath[nameIcon].style.height} viewBox={iconsPath[nameIcon].style.viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
            {iconsPath[nameIcon].path.map(p => <path d={p} stroke={nameColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />)}
        </svg>
    </div>
}