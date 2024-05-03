import React, { useEffect, useState } from "react"
import DataContext from "./DataContext"
import api from "../functions/api"
import { useNavigate } from "react-router"
import io from "socket.io-client"

export function ManageContext({ children }) {
  const [user, setUser] = useState({})
  const [PopUp, setPopUp] = useState(false)
  const [allCamps, setAllCamps] = useState([])
  const [usersObj, setUsersObj] = useState({})
  const [queueJob, setQueueJob] = useState()
  const [socket, setSocket] = useState()
  const nav = useNavigate()

  useEffect(() => {
    const tokenToUser = async () =>
      await api.get("/accout/tokenToUser").then((res) => setUser(res))
    if (localStorage.token && !user._id) tokenToUser()
  }, [])

  useEffect(() => {
    // TODO YOSEF - delete return
    return;
    let userId = user._id
    if (!userId) return;
    setSocket(io("http://localhost:3000", { auth: { userData: { _id: userId, name: user.name } } }))
  }, [user._id])
  
  useEffect(() => {
    // TODO YOSEF - delete return
    return;
    if (socket ) {
      socket.on('connect', () => {
        console.log('Connected to server of whatsapp');
        socket.emit('queue')
      });
      socket.on(`queue`, (queue) => {
        setQueueJob(queue)
      })
    }

    return () => {
      if (socket) socket.disconnect()
    }
  }, [socket])

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
        socket,
        queueJob,
        usersObj,
        setUsersObj,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
