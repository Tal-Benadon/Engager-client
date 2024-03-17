import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../functions/api';
import styles from './style.module.css'
import ActivationStatusBox from '../../components/ActivationStatusBox';

//This component is rendered when a user presses a link that he gets on what'sapp after he first registers his account. 
//logic in the server will make the user {isActive:True} if the token is not expired and information is correct.
export default function ActivateAccount() {

    const [checkActivation, setCheckActivation] = useState()
    const [account, setAccount] = useState(false)

    const { userToken } = useParams()
    console.log(userToken);
    useEffect(() => {

        const activateUserApiCall = async () => {
            try {
                const response = await api.post(`/user/activate/${userToken}`)
                setCheckActivation(response.successStatus)
                if (response.user) setAccount(response.user)
            } catch (error) {
                console.error(error);
            }
        }
        activateUserApiCall()

    }, [])

    //TODO - ADD LOADING ANIMATION? DECIDE ON THE 2.5 SECONDS OF WHAT THE USER SEES AFTER CONFIRMATION

    return (
        <div className={styles.pageContainer}>
            <div className={styles.circle}></div>
            <ActivationStatusBox successStatus={checkActivation} account={account} />
        </div>
    )
}
