import { CiCalendar } from "react-icons/ci";

const TourPage = ({ tour }) => {
    return (
        <div className="bg-emerald-200 rounded-2xl font-sans hover:shadow-2xl hover:shadow-zinc-400 duration-300 hover:scale-105 transition-transform">
            <img src={tour.image} alt="" className="h-60 w-full rounded-t-2xl" />

 
            <div className="p-5 space-y-2">
            <h1 className="text-gray-700 font-bold text-lg">{tour.title}</h1>
            <p>{tour.shortDescription}</p>

            <p className="flex items-center gap-2"> <span><CiCalendar className="text-2xl"/></span>{tour.duration}</p>
          <div className="flex justify-between it">
              <p className="flex flex-col text-2xl text-blue-700 font-bold">${tour.price} <span className="text-sm text-gray-700">per person</span> </p>
               <button className="bg-green-500 text-white p-3 font-semibold rounded-b-2xl w-fit hover:bg-green-600 transition-all duration-300">Book Now</button>
          </div>
            </div>

        </div>
    )
}

export default TourPage