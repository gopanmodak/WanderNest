import { useContext } from "react"
import { AuthProvider } from "../Context/AuthContext"
import TourPage from "../Components/TourPage"
import { PuffLoader } from "react-spinners"
import { motion } from 'framer-motion';

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
    </div>
  )
}

export default Tour