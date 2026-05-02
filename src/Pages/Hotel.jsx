import { PuffLoader } from "react-spinners";


import HotelPages from "../Components/HotelPages";
import { motion } from 'framer-motion';
import { useContext } from "react";
import { AuthProvider } from "../Context/AuthContext";




const Hotel = () => {

  const { hotels, loading } = useContext(AuthProvider)

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <PuffLoader color="#36d7b7" />
      </div>
    );
  }


  return (
    <div className="mt-20">

      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}

        viewport={{ once: true }}
        className="text-3xl font-bold text-center mt-10 font-sans">Find Your Perfect Hotel</motion.h1>
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}

        viewport={{ once: true }}
        className="text-center text-lg my-5 mb-10 font-sans text-gray-700">Discover luxury accommodations across 150+ destinations worldwide</motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}

        viewport={{ once: true }}

        className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto mt-10 px-5">
        {hotels?.map((hotel) => (
          <HotelPages hotel={hotel} key={hotel.id} />
        ))}
      </motion.div>
    </div>
  );
};

export default Hotel;
