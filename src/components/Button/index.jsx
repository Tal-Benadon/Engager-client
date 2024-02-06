import styles from './style.module.css'

// Description : A generic button, changed according to content, classname and onClick function
// Props : content , className,  onClick, create
// Creator : Refael
export default function Button({ content = "תוכן ", className = "save", onClick = () => { }, onsubmit = () => { } }) {
  return (
    <div>
      <button  className={`${styles[className]} ${className}`} onClick={onClick} >{content}</button>
    </div>
  )
}
