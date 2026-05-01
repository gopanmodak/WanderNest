/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";

export const AuthProvider = createContext();

const AuthContext = ({ children }) => {
  const [visaLoading, setVisaLoading] = useState(true); 
  const [hotels, setHotels] = useState([]); 
  const [hotelLoading, setHotelLoading] = useState(true);   
  
  const [visa, setVisa] = useState([]);


  useEffect(() => {
    fetch('/hotels.json')
      .then(res => {
        if (!res.ok) throw new Error('HTTP error ' + res.status);
        return res.json();
      })
      .then(data => {
        setHotels(data);
        setHotelLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setHotelLoading(false);  
      });
  }, []);

useEffect(() => {
  fetch('/visa.json')
    .then(res => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    })
    .then(data => {
      setVisa(data);
    
    })
    .catch(err => {
      console.error(err);
      
    })
    .finally(() => {
      setVisaLoading(false);
    });
}, []);




  const authInfo = {
    hotels,
    visaLoading,
    visa,
    hotelLoading,
    loading: visaLoading || hotelLoading,
  };

  return (
    <AuthProvider.Provider value={authInfo}>
      {children}
    </AuthProvider.Provider>
  );
};

export default AuthContext;