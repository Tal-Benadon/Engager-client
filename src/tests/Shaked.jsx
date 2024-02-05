import React from 'react'
import PopUp from '../components/PopUp'
import { useState } from 'react';
// import Accordion from '../components/Accordion'
import NewMassageForm from '../components/NewMessageForm';

export default function Shaked() {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* <Accordion title={'הודעה חדשה'}>
       { ['hello', 'i', 'am', 'shaked', 'ben', 'hamo', 'guikh', 'gyhjbvh']}

      </Accordion> */}
      <PopUp title={'הודעה חדשה'}>
        bvfjdk
      </PopUp>
    </div>
  )
}
