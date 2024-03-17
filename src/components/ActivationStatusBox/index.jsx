import React, { useContext, useEffect, useState } from 'react'
import styles from './style.module.css'
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading';
import api from '../../functions/api';
import DataContext from '../../context/DataContext';


export default function ActivationStatusBox({ successStatus, account }) {
    const nav = useNavigate()
    const [delayedContent, setDelayedContent] = useState('');
    const [delayFinished, setDelayFinished] = useState(false);
    const [additionalMessage, setAdditionalMessage] = useState('')
    const [navHandler, setNavHandler] = useState()
    const [handleInitialText, setHandleInitialText] = useState(false)
    const { user, setUser } = useContext(DataContext)

    useEffect(() => {
        if (successStatus === "ExpiredPass") {
            setHandleInitialText(true)
        }
    }, [])

    useEffect(() => {
        const delayTimer = setTimeout(() => {
            const { content, additional } = switchCase(successStatus);
            setDelayedContent(content);
            setAdditionalMessage(additional)
            setDelayFinished(true); // Update the state to indicate that the delay has finished
        }, 3000);

        return () => clearTimeout(delayTimer);
    }, [successStatus]);

    useEffect(() => {
        const loginUser = async () => {
            console.log(account);
            if (account) {
                console.log("im in");
                const data = { phone: account.phone }

                try {
                    ;
                    const { token, user } = await api.post("/login/confirmed", data)
                    console.log("hi");
                    setUser(user)
                    console.log(token);
                    localStorage.token = token

                } catch (error) {
                    console.error(error);
                }
            }
        }
        loginUser()
        // what if someone has a really slow internet? (makes login/confirm request not fast enough)
        setTimeout(() => {
            nav(navHandler)
        }, 4000);
    }, [navHandler])

    const switchCase = (status) => {
        let content = ''
        let additional = ''

        switch (status) {

            case 'Activated':
                content = 'המשתמש הופעל בהצלחה :)'
                additional = 'מעולה, עכשיו נותר לבחור את התוכנית המתאימה...'
                setNavHandler('/first-plan')
                break;
            case 'Expired':
                content = 'הקישור פג תוקף, תכף תקבל קישור חדש'
                break;
            case 'ExpiredPass':
                content = 'שינוי הסיסמא פג תוקף'
                setNavHandler('/login')
                break;
            case 'AlreadyActive':
                content = 'נמצאת פעיל במערכת שלנו, ברוך הבא'
                additional = 'כבר תגיע אל דף הבית...' // if user already active, he shouldnt have a way to get that link anyway?
                setNavHandler('/') // set nav to home and send user to homepage(add logic that logs him in automatically?)
                break;
            case 'ActivationFailed':
                content = 'ההפעלה נכשלה, יש לנסות להירשם שנית'
                additional = 'משהו קרה, ייתכן שזה אנחנו ולא אתה'
                setNavHandler('/register')
                break;
            default:
                break;
        }
        return { content, additional }
    }

    const initalTextActivation = 'מפעיל את המשתמש שלך, נא להמתין...'
    const initialTextExpPass = 'בודק את לינק הסיסמא שלך'

    return (
        <div className={styles.mainMessageContainer}>
            {delayFinished ? (
                <h1 className={styles.finalText}>
                    {delayedContent}
                </h1>
            ) : (
                handleInitialText ? (
                    <>
                        <h1 className={styles.messageHeaderWithLoader}>{initialTextExpPass}</h1>
                        <Loading />
                    </>
                ) : (
                    <>
                        <h1 className={styles.messageHeaderWithLoader}>{initalTextActivation}</h1>
                        <Loading />
                    </>
                )
            )}
            {delayFinished && additionalMessage && <p className={styles.additionalMessage}>{additionalMessage}</p>}
        </div>
    )
}


