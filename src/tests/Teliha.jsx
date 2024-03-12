

import React from 'react'
import Popover from '../components/Popover'
import '../Index.css'
import Icon from '../components/Icon';

export default function Teliha() {
  let list = [
    { text: "הסר מהרשימה", icon:< Icon nameIcon={"trash"}/> , onClick: () => {} },

  ];

  return (

    <div className='mayanMain' >
      {/* <h1 >user pop</h1> */}
      <Popover list={list} fnName='onRight'  >
        click
      </Popover>

    </div>
  )
}

