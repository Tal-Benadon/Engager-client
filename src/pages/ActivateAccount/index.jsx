import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../../functions/api';
import DataContext from '../../context/DataContext';
import styles from './style.module.css'

//This component is rendered when a user presses a link that he gets on what'sapp after he first registers his account. 
//logic in the server will make the user {isActive:True} if the token is not expired and information is correct.
export default function ActivateAccount() {
    nav = useNavigate()
    const { user } = useContext(DataContext)
    console.log(user);
    const { userToken } = useParams()
    console.log(userToken);
    useEffect(() => {
        const activateUserApiCall = async () => {
            const response = await api.post(`/user/activate/${userToken}`)
            console.log(response.success);
            if (response.success === true) {
                console.log(response.msg);
                // - activate when all checks are complete, for now we
                // setTimeout(() => {
                //     nav('/')
                // }, 2500);

                //OR

                //setTimeout(() => {
                //localStorage.removeItem("token");
                //nav('/login')
                //}, 2500)
            }
        }
        activateUserApiCall()
    }, [])

    //TODO - ADD LOADING ANIMATION? DECIDE ON THE 2.5 SECONDS OF WHAT THE USER SEES AFTER CONFIRMATION
    return (
        <div >
            Activating Account
        </div>
    )
}
