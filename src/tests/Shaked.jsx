import React, { useContext } from 'react'
import { useState } from 'react';
// import PopUp from '../components/PopUp'
import Accordion from '../components/Accordion'
// import NewMassageForm from '../components/NewMessageForm';
// import Accordion from '../components/Accordion';
// import DataContext from '../context/DataContext'
// import MsgListHolder from '../components/MsgListHolder';


export default function Shaked() {
  const { isOpen, setIsOpen } = useContext(DataContext);

    // const [isOpen, setIsOpen] = useState(false);

  return (
    <div>

      <Accordion title={'הודעה חדשה'}>
       { ['hello', 'i', 'am', 'shaked', 'ben', 'hamo', 'guikh', 'gyhjbvh']}
      </Accordion> 
      {/* <PopUp isOpen={isOpen} setIsOpen={setIsOpen}> 
      vnjzks
         <NewMassageForm/> 
      </PopUp> */}
      {/* <MsgListHolder/> */}

    </div>
  )
}
