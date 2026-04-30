import { useLoaderData, useNavigation,  } from "react-router-dom";

import HotelPages from "../Components/HotelPages";
import { motion } from 'framer-motion';

const Hotel = () => {
  

  const hotels = useLoaderData();


 const navigation = useNavigation();

  if (navigation.state === "loading") {
    return (
      <div className="h-screen flex justify-center items-center">
        <p className="text-2xl font-bold text-gray-500">Loading...</p>
      </div>
    );
  }

 
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1  }}
      transition={{ duration: 1}}  
    
    
    className="text-3xl font-bold text-center mt-30">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto mt-10 px-5">
        {hotels?.map((hotel) => (
          <HotelPages hotel={hotel} key={hotel.id} />
        ))}
      </div>
    </motion.div>
  );
};

export default Hotel;
