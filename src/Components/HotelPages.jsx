import { useNavigate } from "react-router-dom";
const HotelPages = ({ hotel }) => {
  const navigate = useNavigate()

  const handleOnClick = () =>{
   navigate(`/hotels/${hotel.id}`)
  }
  return (


    <div className="border-2 border-gray-300 rounded-lg p-3 shadow-md hover:shadow-lg transition-shadow duration-300 space-y-2"
    >
      <img
        src={hotel.img}
        alt=""
        
        className="max-h-60 w-full object-cover rounded-2xl "
      />

      <h1 className="text-xl font-semibold mt-2 text-start font-sans">
        {hotel.title}
      </h1>
      <p className="text-sm text-start font-normal max-w-sm font-sans">
        {hotel.tagline}
      </p>

      <div className="flex justify-between">
        <p className="text-blue-600 text-start text-xl">
          {hotel.starting_price}
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm cursor-pointer" onClick={handleOnClick}>
          Details
        </button>
      </div>
    </div>
  );
};

export default HotelPages;
