/* eslint-disable react-refresh/only-export-components */
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import auth from "../_firebase_Auth/firebaseAuth";

export const AuthProvider = createContext();

const AuthContext = ({ children }) => {

  const [hotels, setHotels] = useState([]);
  const [hotelLoading, setHotelLoading] = useState(true);
  
  const [visa, setVisa] = useState([]);
  const [visaLoading, setVisaLoading] = useState(true);

  const [tour, setTour] = useState([]);
  const [tourLoading, setTourLoading] = useState(true);

  const [services, setServices] = useState([]);
  const [servicesLoading, setServicesLoading] = useState(true);

  const [explore,setExplore] = useState([]);
  const [exploreLoading,setExploreLoading] = useState(true);

  const [hajjData,setHajjData] = useState([]);
  const [hajjLoading,setHajjLoading] = useState(true);

  const [flight, setflight] = useState([])
  const [flightLoading, setFlightLoading] = useState(true)

  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)



  const googleProvider = new GoogleAuthProvider();
  
  const [cart,setCart] =useState(()=>{
    const stored =localStorage.getItem('cart')
    return stored ? JSON.parse(stored): []
  })

  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(cart))
  })


  const removeOnCart =(id)=>{

   const remove =cart.filter((item)=>item.id !==id)
   setCart(remove) 
   toast.error("Delated Sucessfull")
  }

  useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser)
      setLoading(false)
     })
      return () => unsubscribe()
  },[])



  const addToCart = (item)=>{

    const data =

      item.visaService ||
      item.package_details ||
      item

    
    const cartItem ={
      id: item.id,
      title: item?.title || item?.city,
      image: item?.image || item?.img,
      price: data?.price_per_person || item?.starting_price || data?.processingFee,

    }

    const exist = cart.find(cartItem =>cartItem.id == item.id)
    if(exist){
      toast.info('Item already in cart')
      return
    }
    setCart([...cart,cartItem])
    toast.success('Item added to cart')
  }

  
  


  
 const loginWithGoogle = () =>{

 return signInWithPopup(auth,googleProvider)
  .then(result=>{
    console.log(result.user)
    toast.success('Login successful')
  })
  .catch(err=>{
    console.error(err)
    toast.error('Login failed')
  })
 }

 const signOut = () =>{

  return auth.signOut()
  .then(()=>{
    toast.success('Logout successful')
  })
  .catch(err=>{
    console.error(err)
    toast.error('Logout failed')
  })
 }


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


  useEffect(() => {

    fetch('/explore.json')
    .then(res=>res.json())
    .then(data =>{
      setExplore(data)
      setExploreLoading(false)
    })
    .catch(err => {
      console.error(err)
      setExploreLoading(false)
    })


  },[])



  useEffect(()=>{
     fetch('/HajjUmrah.json')
     .then(res=>res.json())
     .then(data=>{
      setHajjData(data)
      setHajjLoading(false)
     })
     .catch(err=>{
      console.error(err)
      setHajjLoading(false)
     })

  },[])


  useEffect(() => {
    fetch('/flight.json')
      .then(res => res.json())
      .then(data => setflight(data))
      .then(() => setFlightLoading(false))
      .catch(error => toast.error(error.message))

  }, [])

  

  const authInfo = {
    hotels,
    visa,
    tour,
    services,
    explore,
    hajjData,
    flight,
    user,
    removeOnCart,
    addToCart,
    cart,
    signOut,
    loginWithGoogle,
    loading: visaLoading || hotelLoading || tourLoading || servicesLoading  || exploreLoading || hajjLoading || flightLoading || loading
  };

  return (
    <AuthProvider.Provider value={authInfo}>
      {children}
    </AuthProvider.Provider>
  );
};

export default AuthContext;