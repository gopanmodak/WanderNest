/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react"

export const AuthProvider = createContext()

const AuthContext = ({children}) => {



    const [loading,setLoading] = useState(true)
    const [hotels,setHotesls] = useState([])


    useEffect(()=>{
        setTimeout(()=>{

        fetch('../../public/hotels.json')
        .then(res=> res.json())
        .then(data=>{
             setHotesls(data),
             setLoading(false)}
    
    )

        .catch(err=> console.log(err))
        
        },2000)

    },[])

    const authInfo = {
        hotels,
        loading
    }
  return (
    <AuthProvider.Provider value={authInfo}>


         {children}
    </AuthProvider.Provider>
  )
}

export default AuthContext