import React from 'react'
import InputWrapper from '../InputWrapper'
export default function UpdateLead(props) {
    let {firstName,lastName, phoneNumber, email , notes, signUpDate, isActive, userId} = props
    let luli = { firstName : "נוי", lastName : "כהן", phoneNumber : "054-8104093", email : "email@gmail.com", notes : "-", signUpDate : "12/03/22", isActive : false }
  console.log(luli);
  return <div>
    <InputWrapper label={luli.firstName}/>
    UpdateLead
    {/* // { label, subLabel, to="", children } */}
    </div>
}
