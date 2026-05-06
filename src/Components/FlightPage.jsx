
import { motion } from 'framer-motion';
const FlightPage = ({flight}) => {
  return (
    <motion.div 
    initial={{opacity:0,y:-60}}
    animate={{opacity:1,y:0}}
    transition={{duration:1}}
    className="bg-white p-4 rounded-lg shadow-md border border-gray-300 mb-4 hover:shadow-lg transition-shadow duration-300 text-gray-700 text-center">

        <h1 className="text-2xl font-semibold text-gray-700 mb-2">{flight.airline}</h1>
         <div className="mb-4 text-start">
        
        <p>Dimensions: {flight.baggage_policy.cabin_bag.dimensions_inches}</p>
        <p>Free Allowance: {flight.baggage_policy.cabin_bag.free_allowance}</p>
        <p>Excess Fee: {flight.baggage_policy.cabin_bag.excess_fee_usd}</p>
      </div>

      <div className="mb-4 text-start">
        <h3 className="text-lg font-semibold text-gray-700">Checked Baggage</h3>
        <p>Dimensions: {flight.baggage_policy.checked_baggage.dimensions_inches}</p>
      </div>

      <p className='border border-gray-400 p-2 rounded-2xl mt-2'> {flight.baggage_policy.full_policy_link}</p>
    </motion.div>
  )
}

export default FlightPage