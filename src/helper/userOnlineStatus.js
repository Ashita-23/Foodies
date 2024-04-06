import { useEffect, useState } from "react"

const UserOnlineStatus = ()=>{
    const [IsOnline , setIsOnline] = useState(true)
    const OnlineHandler = () =>{
        setIsOnline(true)
    }
    const OfflineHandler = () =>{
  setIsOnline(false)
    }
    useEffect(()=>{

       window.addEventListener("online",OnlineHandler)
       window.addEventListener("offline",OfflineHandler)

       return(()=>{
        window.removeEventListener("online",OnlineHandler)
       window.removeEventListener("offline",OfflineHandler)
       })

    },[])
    return IsOnline
}

export default UserOnlineStatus