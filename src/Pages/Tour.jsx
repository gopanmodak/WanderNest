import { motion } from 'framer-motion';
import { useContext } from "react";
import { PuffLoader } from "react-spinners";
import TourPage from "../Components/TourPage";
import { AuthProvider } from "../Context/AuthContext";
import { FaArrowRight } from 'react-icons/fa';

const Tour = () => {

  const { tour, loading } = useContext(AuthProvider)
  console.log(tour)

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <PuffLoader color="#36d7b7" />
      </div>
    )
  }
  return (
    <div className="my-20">

       <motion.div 
      initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      
      className="max-w-6xl mx-auto my-10">
        <img src="https://images.unsplash.com/photo-1615277716590-d87d101caa70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRvdXJ8ZW58MHx8MHx8fDA%3D" alt="" className="h-80 w-full object- rounded-2xl"/>
      </motion.div>


      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}

        className="text-center text-3xl font-sans font-bold">Curated Travel Packages</motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-lg my-2 mb-10 font-sans p-3 text-gray-600">Explore our handpicked tour packages across popular destinations</motion.p>


      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 p-3 my-10">
        {tour.map((tour) => <TourPage tour={tour} key={tour.id} />)}
      </div>

      <div className="text-center mt-20 p-5 bg-gray-100 rounded-lg">
               <h1 className="text-2xl font-bold">Ready to Explore Our Services?</h1>
      
               <p className="my-3">Start your journey with SkyWay Travel and experience world-class service</p>
                    <button className="btn btn-primary my-2">Get Started <span><FaArrowRight /></span></button>
               </div>
    </div>
  )
}

export default Tour