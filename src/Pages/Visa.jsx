import { useContext } from "react"
import { AuthProvider } from "../Context/AuthContext"
import VisaPage from "../Components/VisaPage"
import { PuffLoader } from "react-spinners"
import { motion } from 'framer-motion';

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
    </div>
  )
}

export default Visa