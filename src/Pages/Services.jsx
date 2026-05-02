import { useContext } from "react"
import { AuthProvider } from "../Context/AuthContext"
import { PuffLoader } from "react-spinners"
import ServicesPage from "../Components/ServicesPage"
import { motion } from 'framer-motion';

const Services = () => {

  const { services, loading } = useContext(AuthProvider)

if(loading) {
  return (
    <div className="h-screen flex justify-center items-center">
      <PuffLoader color="#36d7b7" />
    </div>
  )
}
  return (
    <div className="my-20">


      <motion.h1 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}

      viewport={{ once: true }}
      className="text-center text-3xl font-sans font-bold">Our Premium Services</motion.h1>
      <motion.p 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}

      viewport={{ once: true }}
      className="text-center text-lg my-3 mb-10 font-sans p-3 text-gray-600">Everything you need for a seamless travel experience - from bookings to support</motion.p>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto mt-10 px-5">

        {services.map((service) => <ServicesPage service={service} key={service.id}/>)}
      </div>
    </div>
  )
}

export default Services