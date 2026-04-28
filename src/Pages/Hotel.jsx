import { useContext } from "react";
import { AuthProvider } from "../Context/AuthContext";
import HotelPages from "../Components/HotelPages";
import { PulseLoader } from "react-spinners";

const Hotel = () => {
  const { hotels, loading } = useContext(AuthProvider);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span>
          <PulseLoader size={20} color="#2563eb" />
        </span>
      </div>
    );
  }
  return (
    <div className="text-3xl font-bold text-center mt-30">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto mt-10 px-5">
        {hotels.map((hotel) => (
          <HotelPages hotel={hotel} key={hotel.id} />
        ))}
      </div>
    </div>
  );
};

export default Hotel;
