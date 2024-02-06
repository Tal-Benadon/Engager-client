import React from 'react'
import Popover from '../components/Popover'
import '../Index.css'
export default function Maayan() {
  let list = [
    { text: "get out", icon: '💢' },
    { text: "change profile", icon: '💨' },
    { text: "deleted", icon: '🗑' },
    { text: "get d", icon: '💢' },
    { text: "change profdile", icon: '💨' },
    { text: "delete", icon: '🗑' }
  ];

  return (

    <div className='mayanMain' >
      {/* <h1 >user pop</h1> */}
      <Popover list={list} >
        click
      </Popover>

    </div>
  )
}
