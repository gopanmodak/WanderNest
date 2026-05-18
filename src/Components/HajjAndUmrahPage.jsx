import { useContext } from "react"
import { IoMdTime } from "react-icons/io"
import { useNavigate } from "react-router-dom"
import { AuthProvider } from "../Context/AuthContext"

const HajjAndUmrahPage = ({ hajj }) => {

    const {addToCart} =useContext(AuthProvider)

    const navigate = useNavigate()
           
    const handleOnHajjBook = () => {
         addToCart(hajj)
        
    }


    const handleOnReadMore = () => {
        navigate(`/hajj-umrah/${hajj.id}`)
    }
    return (
        <div>


            <div className="card bg-base-100 w-96 shadow-sm hover:shadow-lg transition-shadow duration-300 text-gray-600 my-20">
                <figure>
                    <img
                        src={hajj.img}
                        alt={hajj.title} 
                        height={300}
                        
                        className=" h-70 w-full object-cover hover:scale-105 transition-all duration-300"
                        />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {hajj.title}
                        <div className="badge badge-secondary absolute right-2 top-2">NEW</div>
                    </h2>
                    <div className="flex flex-col gap-2 text-gray-700 font-bold">
                        <p>Package Price : <span className="text-red-600">{hajj.package_details.price_per_person}</span></p>
                        <p>Package Price : <span className="text-red-600">{hajj.package_details.madinah_hotel}</span></p>
                        <p>Package Price : <span className="text-red-600">{hajj.package_details.makkah_hotel}</span></p>
                        <p>Starting Date : <span className="text-red-600">{hajj.package_details.starting_date}</span></p>
                        <p >Ending Date : <span className="text-red-600">{hajj.package_details.ending_date}</span></p>
                        <p>Room Type : <span className="text-red-600">{hajj.package_details.room_type}</span></p>
                        <p>Flight Departure : <span className="text-red-600">{hajj.package_details.flight_departure}</span></p>
                        <div className="flex items-center gap-2">
                            <IoMdTime className="text-gray-500 text-xl" />
                            <span className="text-gray-500">{hajj.duration}</span>
                        </div>




                    </div>
                    <div className="card-actions justify-between items-center mt-2 px-3">
                        <p className="text-blue-600 cursor-pointer hover:underline hover:text-red-700 transition-all duration-300" onClick={handleOnReadMore}>Read More</p>
                        <button className="btn btn-primary" onClick={handleOnHajjBook}>Book Now</ button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HajjAndUmrahPage