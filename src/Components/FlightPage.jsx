import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const FlightPage = ({ flight }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-white p-2 rounded-lg shadow-md border border-gray-300 mb-4 hover:shadow-lg transition-shadow duration-300 text-gray-700 hover:border-blue-700"
    >
      <Link  to={`/flight/${flight.id}`} className=" text-start">
        <figure>
          <img src={flight.image_url} alt={flight.name}  className="max-h-60 w-full object-cover hover:scale-105 transition-all duration-300 rounded-2xl"/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{flight.name}</h2>
          <p className=" text-md text-blue-700 font-bold">{flight.route}</p>
          <p className="text-start text-red-500 font-bold ">
            <span className="mr-4 text-gray-700">Flight :</span> {flight.flight_code}
          </p>
          <p> <span className="font-bold mr-4">From : </span> {flight.departure.airport}</p>
          <p> <span className="font-bold mr-9">To : </span> {flight.arrival.airport}</p>
          <p> <span className="font-bold mr-3">Status : </span> {flight.status}</p>
          <p> <span className="font-bold mr-1">Aircraft :</span> {flight.aircraft}</p>
          
        </div>
      </Link>
    </motion.div>
  );
};

export default FlightPage;
