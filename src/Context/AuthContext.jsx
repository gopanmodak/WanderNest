/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";

export const AuthProvider = createContext();

const AuthContext = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [hotels, setHotels] = useState([]);

 useEffect(() => {
 fetch("/hotels.json")
   .then(res => res.json())
   .then(data => {
      setHotels(data);
      setLoading(false);
   })
   .catch(err => {
      console.error(err);
      setLoading(false); 
   });
}, []);




  const authInfo = {
    hotels,
    loading,
  };


  
  return (
    <AuthProvider.Provider value={authInfo}>{children}</AuthProvider.Provider>
  );
};

export default AuthContext;
