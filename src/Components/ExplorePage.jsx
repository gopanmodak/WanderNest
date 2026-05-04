import { FaStar, FaUserGroup } from "react-icons/fa6"
import { IoMdTime } from "react-icons/io"
import { PiThermometerHotLight } from "react-icons/pi"
import { Link } from "react-router-dom"

const ExplorePage = ({ explore }) => {
  return (
    <Link>
      <div className="card bg-base-100 w-96 shadow-sm font-sans hover:shadow-lg transition-shadow duration-300 text-gray-600">
        <figure>
          <img
            src={explore.image}
            alt={`${explore.city} tour image`}
            className="h-60 w-full object-cover hover:scale-105 transition-all duration-300"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-black">
            {explore.city}
            <div className="badge badge-secondary ml-2">{explore.category}</div>
          </h2>

          <p>{explore.tagline}</p>

          <p className="flex items-center gap-2 mt-3">
            <PiThermometerHotLight className="text-lg text-red-600" />
            <span>{explore.climate}</span>
          </p>

          <p className="flex items-center gap-2">
            <FaUserGroup  className="text-lg text-blue-600" />
            <span>{explore.bestFor}</span>
          </p>

          <p className="flex items-center gap-2">
            <IoMdTime className="text-lg text-purple-600" />
            <span>{explore.bestSeason}</span>
          </p>

          <div className="border-t-gray-100 border-t-2 mt-2">
            
          </div>

          <div className="flex justify-between mt-2">
            <p className="flex items-center gap-2">
            <span><FaStar  className="text-lg text-yellow-400"/></span>
            {explore.rating}
            </p>

            <p className="text-end">
                ({explore.details.reviews} reviews)
            </p>

          </div>


        </div>
      </div>
    </Link>
  )
}

export default ExplorePage
