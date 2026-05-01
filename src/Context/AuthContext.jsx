/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";

export const AuthProvider = createContext();

const AuthContext = ({ children }) => {
  const [loading, setLoading] = useState(true);   // moved inside
  const [hotels, setHotels] = useState([]);       // moved inside

  useEffect(() => {
    fetch('/hotels.json')
      .then(res => {
        if (!res.ok) throw new Error('HTTP error ' + res.status);
        return res.json();
      })
      .then(data => {
        setHotels(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);  
      });
  }, []);

useEffect(() => {


},[])




  const authInfo = {
    hotels,
    loading,
  };

  return (
    <AuthProvider.Provider value={authInfo}>
      {children}
    </AuthProvider.Provider>
  );
};

export default AuthContext;