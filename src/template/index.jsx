import styles from "./style.module.css"

// Details : the componneta get object array with 3 parametr 1)color 2)icon 3)function or url(for wahtsapp)
// color option--> gray,lite,orenge,green
// icon  option--> + , 1to2 , 2to1 , 3points , whatsapp, V , triangle ,pencil
// Creator: bezalel 0542188938
function Name({ style = {}, ...props }) {

   return (
      <div className={styles.Name} style={style} {...props} >

      </div>
   )
}

export default Name