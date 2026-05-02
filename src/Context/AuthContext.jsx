/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";

export const AuthProvider = createContext();

const AuthContext = ({ children }) => {
  const [visaLoading, setVisaLoading] = useState(true);
  const [hotels, setHotels] = useState([]);
  const [hotelLoading, setHotelLoading] = useState(true);

  const [visa, setVisa] = useState([]);

  const [tour, setTour] = useState([]);
  const [tourLoading, setTourLoading] = useState(true);

  const [services, setServices] = useState([]);
  const [servicesLoading, setServicesLoading] = useState(true);


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




  useEffect(() => {

    fetch('/tour.json')
      .then(res => {

        return res.json()
      })
      .then(data => {
        setTour(data)
        setTourLoading(false)
      })


  }, [])



  useEffect (() =>{
    fetch('/services.json')
    .then(res => {
      return res.json()
    })
    .then(data => {
      setServices(data)
      setServicesLoading(false)
    })
    .catch(err => {
      console.error(err)
    })


  },[])




  const authInfo = {
    hotels,
    visa,
    tour,
    services,

    
    loading: visaLoading || hotelLoading || tourLoading || servicesLoading,
  };

  return (
    <AuthProvider.Provider value={authInfo}>
      {children}
    </AuthProvider.Provider>
  );
};

export default AuthContext;