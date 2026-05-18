import { useContext } from "react";
import { CgShoppingCart } from "react-icons/cg";
import { CiCircleCheck, CiCircleInfo, CiHeart } from "react-icons/ci";
import { FaCheck, FaGift } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FiZap } from "react-icons/fi";
import { IoMdTime } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import CommonComponnent from "../Components/CommonComponnent";
import { AuthProvider } from './../Context/AuthContext';

const HotelDetailsPage = () => {

  const { id } = useParams();

  const { hotels, loading, addToCart } = useContext(AuthProvider);

  const hotelDetails = hotels?.find((hotel) => hotel.id == id)

  const navigate = useNavigate();


  const handleOnCart =()=>{
    addToCart(hotelDetails)
 
  }

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <PuffLoader color="#36d7b7" />
      </div>
    )
  }
  return (

    <div className="my-20 font-sans mx-auto p-2">

      <div className="max-w-5xl p-2 mx-auto my-20 font-sans text-gray-700">
      <p className="btn btn-ghost p-5 font-bold my-2" onClick={() => navigate(-1)}> <span><FaArrowLeftLong className="text-md" /></span> Back to Hotel</p>
      <div className=" bg-zinc-50 border border-zinc-200 rounded-2xl  max-w-6xl mx-auto  shadow-md ">

        <div><img src={hotelDetails?.img} alt="" className="w-full h-120 object-cover rounded-t-2xl" /></div>

        <div className="p-8">

          <div className=" flex justify-between items-center ">
            <h1 className="text-2xl font-bold font-sans text-black">
              {hotelDetails?.title}
            </h1>

            <p className="flex items-center flex-col gap-1">
              <span className="text-sm text-gray-600">Price per night</span>
              <span className="text-2xl font-bold text-blue-600">{hotelDetails?.starting_price}</span>
            </p>
          </div>

          <p className="flex items-center gap-1"> {hotelDetails.rating_value} <span>({hotelDetails.review_count} reviews)</span> </p>


          <section className="my-5 leading-7 text-gray-600 text-justify">
            {hotelDetails?.description}
          </section>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto my-10">


            <div className="bg-blue-100 p-5 rounded-2xl shadow-xl hover:shadow-zinc-400 transition-all duration-300 ">
              <h4 className="text-lg font-bold p-2 px-4 flex items-center gap-2"> <span><CiCircleCheck className="text-green-600 text-2xl" /></span> Best Features</h4>
              <ul className="list-disc list-inside px-5">
                {hotelDetails.best_features.map((feature) => <li className="flex items-center gap-2"><span className=" items-center text-sm"><FaCheck className="text-green-600" /></span>{feature}</li>)}
              </ul>


            </div>
            <div className="bg-fuchsia-50 p-5 rounded-2xl shadow-xl hover:shadow-zinc-400 transition-all duration-300 ">
              <h4 className="text-lg font-bold p-2 px-4 flex items-center gap-2"> <span><CiCircleInfo className="text-purple-700 text-2xl" /></span> Room Details </h4>


              <ul className="space-y-2 text-gray-700 px-5">
                <li>🏠 Suite Size : {hotelDetails.suite_size_sqft} sq ft</li>
                <li>🛏 King Bed & Sofa : {hotelDetails.king_bed_and_sofa ? " Yes" : "No"}</li>
                <li>🛁 Luxury Bathroom : {hotelDetails.luxury_bathroom ? " Yes" : "No"}</li>
                <li>🌊 Sea View Balcony : {hotelDetails.sea_view_balcony ? " Yes" : "No"}</li>
                <li>📶 High-Speed WiFi : {hotelDetails.free_high_speed_wifi ? " Free" : "Not Included"}</li>
              </ul>


            </div>
          </div>



          <div className="bg-amber-50 max-w-4xl mx-auto rounded-2xl p-5  hover:shadow-zinc-400 transition-all duration-300 shadow-xl">
            <h1 className="text-lg font-bold p-2 px-4 flex items-center gap-2"><span><FiZap className="text-red-600 text-xl" /></span>{hotelDetails.best_deal_title}</h1>
            <p className="text-gray-700 px-4 ">Book now and get :</p>


            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="px-4 my-3">
                <p className="flex items-center gap-2"><span><FaGift className="text-red-600 " /></span>{hotelDetails.offer_1}</p>
                <p className="flex items-center gap-2"><span><FaGift className="text-red-600" /></span>{hotelDetails.offer_2}</p>
              </div>

              <div className="px-4 my-3">
                <p className="flex items-center gap-2"><span><CiHeart className="text-red-600 text-lg" /></span>{hotelDetails.free_breakfast}</p>
                <p className="flex items-center gap-2"><span><IoMdTime className="text-red-600 text-lg" /></span>{hotelDetails.late_checkout}</p>
              </div>

            </div>
          </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">

                  <button></button>
                  <button className="btn btn-primary my-5 font-bold rounded-2xl" onClick={handleOnCart}> <span><CgShoppingCart className="text-2xl font-bold" /></span>Add to Card</button>
                </div>
        </div>
      </div>
    </div>
          <section className="my-10 bg-white/95 rounded-2xl p-5">
            <CommonComponnent />
          </section>


    </div>
  )
}

export default HotelDetailsPage