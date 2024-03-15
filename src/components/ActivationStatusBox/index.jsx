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
 {delayFinished ? (
  delayedContent
) : (
  handleInitialText ? (
    <>
      <h1 className={styles.messageHeader}>{initialTextExpPass}</h1>
      <Loading />
    </>
  ) : (
    <h1 className={styles.messageHeader}>{initalTextActivation}</h1>
  )
)}
                    {delayFinished && additionalMessage && <p className={styles.additionalMessage}>{additionalMessage}</p>}
            </div> 
    )
                }


