import { motion } from 'framer-motion';
import { useContext } from "react";
import { PuffLoader } from "react-spinners";
import HotelPages from "../Components/HotelPages";
import { AuthProvider } from "../Context/AuthContext";

const Hotel = () => {
  const { hotels, loading } = useContext(AuthProvider);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <PuffLoader color="#36d7b7" />
      </div>
    );
  }

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="mt-20">


      <motion.div 
      variants={fadeIn}
      initial="initial"
      animate="animate"
      transition={{ duration: 1 }}
      
      className="max-w-6xl mx-auto">
        <img src="https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1320&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="h-80 w-full object-cover rounded-2xl"/>
      </motion.div>

      <motion.h1
        variants={fadeIn}
        initial="initial"
        animate="animate"
        transition={{ duration: 1 }}
        className="text-3xl font-bold text-center mt-10 font-sans"
      >
        Find Your Perfect Hotel
      </motion.h1>

      <motion.p
        variants={fadeIn}
        initial="initial"
        animate="animate"
        transition={{ duration: 1, delay: 0.2 }}
        className="text-center text-lg my-5 mb-10 font-sans text-gray-700"
      >
        Discover luxury accommodations across 150+ destinations worldwide
      </motion.p>

      <motion.div
        variants={fadeIn}
        initial="initial"
        animate="animate"
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-7xl mx-auto mt-10 px-5"
      >
        {hotels?.map((hotel) => (
          <HotelPages hotel={hotel} key={hotel.id} />
        ))}
      </motion.div>


    </div>
  );
};

export default Hotel;
