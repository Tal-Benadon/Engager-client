import React, { useEffect, useState } from 'react'
import styles from './style.module.css'
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading';

export default function ActivationStatusBox({ successStatus }) {
    const nav = useNavigate()
    // 'Expired''AlreadyActive''Activated''ActivationFailed'
    const [delayedContent, setDelayedContent] = useState('');
    const [delayFinished, setDelayFinished] = useState(false);
    const [additionalMessage, setAdditionalMessage] = useState('')
    const [navHandler, setNavHandler] = useState()
    const [handleInitialText, setHandleInitialText] = useState(false)

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
        setTimeout(() => {
            nav(navHandler)
        }, 3000);
    }, [navHandler])

    const switchCase = (status) => {
        let content = ''
        let additional = ''

        switch (status) {

            case 'Activated':
                content = 'המשתמש הופעל בהצלחה :)'
                additional = 'מעולה, עכשיו אתה יכול להתחבר...'
                setNavHandler('/login')
                break;
                case 'Expired':
                    content = 'הקישור פג תוקף, תכף תקבל קישור חדש'
                    break;
                    case 'ExpiredPass':
                        content = 'שינוי הסיסמא פג תוקף'
                        setHandleInitialText(true)
                    setNavHandler('/login')
                    break;
            case 'AlreadyActive':
                content = 'נמצאת פעיל במערכת שלנו, ברוך הבא'
                additional = 'כבר תגיע אל דף הבית...'
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
<<<<<<< HEAD
            <h1 className={styles.messageHeader}>
                {delayFinished ? delayedContent : handleInitialText ? initialTextExpPass : initalTextActivation }
            </h1>
=======

            {delayFinished ?
                <h1 className={styles.messageHeader}>{delayedContent}</h1> :
                <>
                    <h1 className={styles.messageHeaderWithLoader}>מפעיל את המשתמש שלך, נא להמתין...</h1> <Loading />
                </>}


>>>>>>> 0bad6709a4d063a03555aa6ea4b0106c0d3a7bdb

            {delayFinished && additionalMessage && <p className={styles.additionalMessage}>{additionalMessage}</p>}

        </div>
    )
}


