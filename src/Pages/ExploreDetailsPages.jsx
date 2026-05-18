import { useContext } from "react";
import { CgShoppingCart } from "react-icons/cg";
import { CiCircleInfo } from "react-icons/ci";
import { FaArrowLeft, FaCheck, FaStar } from "react-icons/fa";
import { FcProcess } from "react-icons/fc";
import { GrCommand } from "react-icons/gr";
import { PiMedalLight } from "react-icons/pi";
import { useNavigate, useParams } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import CommonComponnent from "../Components/CommonComponnent";
import { AuthProvider } from "../Context/AuthContext";

const ExploreDetailsPages = () => {
  const navigate = useNavigate()
  const { id } = useParams();

  const { explore, loading ,addToCart } = useContext(AuthProvider);

  if (loading || !explore || explore.length === 0) {
    return (
      <div className="h-screen flex justify-center items-center">
        <PuffLoader color="#36d7b7" />
      </div>
    );
  }

  const exploreDetails = explore.find(
    (item) => item.id == id
  );

  const handleOnCart = () => {

    addToCart(exploreDetails)
  }

  return (
    <div className="my-20 font-sans p-4 mx-auto">


      <div className="max-w-6xl mx-auto" >
        <p className="btn items-center btn-ghost p-5 font-bold my-2  " onClick={() => navigate(-1)}>
          <span><FaArrowLeft /></span>  Back to Explore
        </p>
      </div>


      <div className=" max-w-6xl mx-auto bg-white/95 rounded-2xl relative">

        <img src={exploreDetails.image} alt="" className="rounded-t-2xl h-120 w-full object-cover" />

        <span className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 rounded-full">{exploreDetails.category}</span>


        <div className="p-5">

          <h1 className="text-black font-bold text-2xl">{exploreDetails.city}</h1>

          <div className="flex justify-between bg-orange-200 p-3 rounded-2xl items-center my-10">
            <p className="flex items-center gap-1">  <span><FaStar className="text-yellow-400" /></span> {exploreDetails.rating} Out of 5</p>

            <p>{exploreDetails.details.reviews} Reviews</p>
          </div>

          <p className="text-gray-600 mt-2">
            {exploreDetails.details.description}
          </p>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto my-10">


            <div className="bg-blue-100 p-5 rounded-2xl shadow-xl hover:shadow-zinc-400 transition-all duration-300">

              <p className="flex items-center gap-1 font-bold"><span><CiCircleInfo className="text-lg font-bold text-blue-600" /></span> Climate & Details</p>


              <div className="flex flex-col mt-3 px-5">
                <p>{exploreDetails.details.climate.averageTemp}</p>
                <p>{exploreDetails.details.climate.bestFor}</p>
                <p> Best : {exploreDetails.details.climate.bestSeason}</p>
              </div>

            </div>


            <div className="bg-fuchsia-50 p-5 rounded-2xl shadow-xl hover:shadow-zinc-400 transition-all duration-300 ">

              <p className="flex items-center gap-1 font-bold">
                <span><GrCommand className="text-green-600" /></span>
                Top Activities
              </p>


              <ul className="space-y-1 mt-3">

                {exploreDetails.details.topActivities.map((activity) => <li className="flex items-center gap-2"><span className="text-green-500 text-sm"><FaCheck /></span>{activity}</li>)}
              </ul>

            </div>
          </div>


          <div className="bg-amber-50 max-w-4xl mx-auto rounded-2xl p-5  hover:shadow-zinc-400 transition-all duration-300 shadow-xl">

            <p className="flex items-center gap-1 font-bold my-3"> <span><PiMedalLight className="text-amber-400 text-xl" /></span> Highlights</p>
            {exploreDetails.details.highlights.map((highlight) => <li className="flex items-center gap-2"><span className="text-amber-300 text-sm"><FaCheck /></span>{highlight}</li>)}
          </div>





          <div className="bg-zinc-200 max-w-4xl mx-auto rounded-2xl p-5  hover:shadow-red-100 my-10  transition-all duration-300 shadow-xl space-y-2">

            <p className="flex items-center gap-1 text-xl font-bold my-3 justify-center"> <span><FcProcess className=" text-2xl" /></span> Visa Details</p>
            <p className="flex items-center gap-2"><span><FaCheck className="text-green-600" /></span>Visa Name : <span className="font-bold text-zinc-800">{exploreDetails.visaService.title}</span></p>
            <p className="flex items-center gap-2"><span><FaCheck className="text-green-600" /></span> {exploreDetails.visaService.shortDescription}</p>
            <p className="flex items-center gap-2 font-bold text-zinc-800"><span><FaCheck className="text-green-600" /></span>  {exploreDetails.visaService.processingFee}$</p>
            <p className="flex items-center gap-2"><span><FaCheck className="text-green-600" /></span> Processing Time : {exploreDetails.visaService.processingTimeline}</p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">

            <button></button>
            <button className="btn btn-primary my-5 font-bold rounded-2xl" onClick={handleOnCart}> <span><CgShoppingCart className="text-2xl font-bold" /></span>Add to Card</button>
          </div>






        </div>

      </div>


      <section className="my-10 bg-white/95 rounded-2xl p-5">
        <CommonComponnent />
      </section>

    </div>
  );
};

export default ExploreDetailsPages;