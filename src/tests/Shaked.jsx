import React from 'react'
// import PopUp from '../components/PopUp'
import Accordion from '../components/Accordion'

export default function Shaked() {
  
  return (
    <div>
      <Accordion title={'הודעה חדשה'}>
       { ['hello', 'i', 'am', 'shaked', 'ben', 'hamo', 'guikh', 'gyhjbvh']}

      </Accordion>
      {/* <PopUp title={'הודעה חדשה'}>
        children
      </PopUp> */}
    </div>
  )
}
