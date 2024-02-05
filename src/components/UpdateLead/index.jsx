import React from 'react'
import InputWrapper from '../InputWrapper'
import Icon from '../Icon';
export default function UpdateLead(props) {
    let {firstName,lastName, phoneNumber, email , notes, signUpDate, isActive, userId} = props
    let luli = { firstName : "נוי", lastName : "כהן", phoneNumber : "054-8104093", email : "email@gmail.com", notes : "-", signUpDate : "12/03/22", isActive : false }
  return <div>
    <InputWrapper label={luli.firstName}/>
    <Icon nameIcon={'pause'} nameColor={'danger'}/>
    {/* // { label, subLabel, to="", children } */}
    </div>
}
