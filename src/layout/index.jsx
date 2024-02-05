import React from 'react'
import SideBar from './SideBar/index'
import Content from './Content/index'
import styles from './style.module.css'

export default function Layout() {
  return (

    <div className={styles.layout}>
      <SideBar />
      <Content />
    </div>
    

  )
}
