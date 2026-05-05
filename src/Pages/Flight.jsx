import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import FlightPage from "../Components/FlightPage"
import { motion } from 'framer-motion';

const Flight = () => {
  const [flight, setflight] = useState([])


  useEffect(() => {
    fetch('/flight.json')
      .then(res => res.json())
      .then(data => setflight(data))
      .catch(error => toast.error(error.message))

  }, [])


  return (
    <div className="my-20 font-sans">

      <figure className="max-w-7xl mx-auto">
        <img src="https://utility-assets.s3.ap-southeast-1.amazonaws.com/homepage-banner-ads-4.png" alt="picture" className="rounded-2xl p-2" />
      </figure>


      <h1 className="text-center text-3xl font-sans font-bold mt-20">Compare Major Airlines</h1>
      <p className="text-center text-lg my-3 mb-10 font-sans text-gray-600 max-w-2xl mx-auto">Check baggage policies and fees from airlines we partner with. Always verify the latest information directly with your airline.</p>


          <div className="flex justify-center items-center my-10">
            <span className="w-1/2 h-full p-5 bg-gray-500 flex justify-between px-10  ">

            <p className="border border-gray-50 p-2">Hajj And Umrah</p>

            <p className="border border-gray-50 p-2">Popular Destinations</p>

            </span>
          </div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
        {flight.map((flight) => <FlightPage flight={flight} key={flight.id} />)}
      </motion.div>

      <div className="max-w-7xl mx-auto bg-orange-700 p-10 flex justify-between items-center rounded-2xl mt-20">

        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-white">Members can save on lifestyle</h1>
          <p className="text-white max-w-md text-center">Enjoy privileges such as exclusive flight prices, unbelievable discounts on thousands of hotels, and much more</p>
        </div>

        <p className="text-white max-w-md text-center border border-white p-3 rounded-lg hover:bg-white hover:text-orange-700 transition-all duration-300">Find the best flight deals</p>
      </div>




    </div>
  )
}

export default Flight