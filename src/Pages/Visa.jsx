import { motion } from 'framer-motion';
import { useContext } from "react";
import { PuffLoader } from "react-spinners";
import VisaPage from "../Components/VisaPage";
import { AuthProvider } from "../Context/AuthContext";
import { FaArrowRight } from 'react-icons/fa';

const Visa = () => {

  const { visa, loading } = useContext(AuthProvider)



  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <PuffLoader color="#36d7b7" />
      </div>
    );
  }
  return (
    <div className="my-20 font-sans text-gray-700">


    <motion.div 
       initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      
      className="max-w-6xl mx-auto">
        <img src="https://www.navyaimmigration.com/wp-content/uploads/2023/03/tourist-visa-banner.jpg" alt="" className="h-80 w-full  rounded-2xl"/>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}

      
       className="text-3xl font-bold text-center mt-10 text-black">Visa Services</motion.h1>
      <motion.p 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center text-lg my-5 mb-10">We offer a wide range of visa services to meet your travel needs</motion.p>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto mt-10 px-5">


        {visa.map((visa) => <VisaPage visa={visa.visaService} key={visa.id} />)}
      </div>


       <div className="flex justify-center items-center max-w-6xl mx-auto mt-10">
      <video src="https://www.pexels.com/download/video/37084033/" autoPlay loop muted className="rounded-2xl opacity-80 h-80 w-full object-cover"></video>
    </div>
          <div className="text-center mt-20 p-5 bg-gray-100 rounded-lg">
                   <h1 className="text-2xl font-bold">Ready to Explore Our Services?</h1>
          
                   <p className="my-3">Start your journey with SkyWay Travel and experience world-class service</p>
                        <button className="btn btn-primary my-2">Get Started <span><FaArrowRight /></span></button>
                   </div>
    </div>
  )
}

export default Visa