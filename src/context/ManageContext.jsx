import React, { useEffect, useState } from "react"
import DataContext from "./DataContext"
import api from "../functions/api"
import { useNavigate } from "react-router"
// import io from "socket.io-client"
import { SocketProvider } from "./SocketContext"

export function ManageContext({ children }) {
  const [user, setUser] = useState({})
  const [PopUp, setPopUp] = useState(false)
  const [allCamps, setAllCamps] = useState([])
  const [usersObj, setUsersObj] = useState({})
  const [queueJob, setQueueJob] = useState([])
  // const [socket, setSocket] = useState()
  const nav = useNavigate()

  useEffect(() => {
    const tokenToUser = async () => api.get("/accout/tokenToUser").then((res) => setUser(res))

    if (localStorage.token && !user._id) tokenToUser()
  }, [])

  //   useEffect(() => {
  // console.log("useEffect socket");
  //     if (socket) {
  //       socket.on('connect', () => {
  //         console.log('Connected to server of whatsapp');
  //         socket.emit('queue')
  //       });
  //       socket.on(`queue`, (queue) => {
  //         setQueueJob(queue)
  //       })
  //     }

  //     return () => {
  //       if (socket) socket.disconnect()
  //     }
  //   }, [socket])

  const getAllCamps = () =>
    api.get(`/campaign`).then((res) => setAllCamps(res))


  return (
    <DataContext.Provider
      value={{
        user,
        setUser,
        PopUp,
        setPopUp,
        allCamps,
        setAllCamps,
        getAllCamps,
        // socket,
        queueJob,
        setQueueJob,
        usersObj,
        setUsersObj,
      }}
    >
      <SocketProvider>
        {children}
      </SocketProvider>
    </DataContext.Provider>
  )
}
