import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../functions/api';
import DataContext from '../../context/DataContext';

//This component is rendered when a user presses a link that he gets on what'sapp after he first registers his account. 
//logic in the server will make the user {isActive:True} if the token is not expired and information is correct.
export default function ActivateAccount() {
    const { user } = useContext(DataContext)
    console.log(user);
    const { userToken } = useParams()
    console.log(userToken);
    useEffect(() => {
        const response = api.post(`/user/activate/${userToken}`)
    }, [])

    return (
        <div>
            Activating Account
        </div>
    )
}
