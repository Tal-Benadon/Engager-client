import { createContext, useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import DataContext from './DataContext';

const SocketContext = createContext(io({autoConnect:false}));

export const SocketProvider = ({  children }) => {
    const [socket, setSocket] = useState()
    
    const {user}=useContext(DataContext)

    // useEffect(() => {
    //     if (!user._id) return;
    //     setSocket(io('http://localhost:3000', { auth: { userData: { _id: user._id, name: user.name } } }))
    // }, [user])
    
    const connect=()=>{
        if (!user._id) return;
        setSocket(io('http://localhost:3000', { auth: { userData: { _id: user._id, name: user.name } } }))
        console.log("####### Socket - START ########");
    }

    // if (!user._id) return <></>
    return <SocketContext.Provider value={{ socket, setSocket, connect }}>{children}</SocketContext.Provider>
}
const useSocket = () => useContext(SocketContext)

export default useSocket;
