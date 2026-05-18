import { useContext } from "react";
import { CgShoppingCart } from "react-icons/cg";
import { FaArrowLeft, FaCheck } from "react-icons/fa6";
import { FcApproval, FcCustomerSupport, FcElectricity, FcExport } from "react-icons/fc";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import { AuthProvider } from "../Context/AuthContext";
import CommonComponent from './../Components/CommonComponnent';

const TourDetailPages = () => {

  const navigate = useNavigate()
  const {id} =useParams()
  const {tour,loading,addToCart} = useContext(AuthProvider)

  if(loading){
    return (
      <div className="h-screen flex justify-center items-center">
        <PuffLoader color="#36d7b7" />
      </div>
    )
  }


  const tourDetails = tour.find(tour => tour.id == id)
  

  const handleOnCart =()=>{
    addToCart(tourDetails)
  }
  return (
    <div>

            <div className="my-20 font-sans p-4 mx-auto">


          <div className="max-w-6xl mx-auto" >
            <p className="btn items-center btn-ghost p-5 font-bold my-2  " onClick={()=>navigate(-1)}>
            <span><FaArrowLeft /></span>  Back to Explore
            </p>
          </div>


          <div className=" max-w-6xl mx-auto bg-white/95 rounded-2xl relative">

             <img src={tourDetails.image} alt=""  className="rounded-t-2xl h-120 w-full object-cover"/>



             <div className="p-5">

              <h1 className="text-black font-bold text-2xl">{tourDetails.title}</h1>

              <div className="flex justify-between  my-2">
                <p className="text-gray-600 flex items-center gap-2 "> <span className="flex items-center gap-2"><MdOutlineDateRange /> {tourDetails.duration}</span> <span className="flex items-center gap-2"> <IoLocationOutline />{tourDetails.location} </span></p>

                <p className="text-gray-600 flex flex-col items-center gap-2"> Per Person<span className="text-2xl font-bold text-blue-600"> {tourDetails.price}$ </span> </p>
              </div>

              <p className="text-gray-600 mt-2">
                {tourDetails.description}
              </p>


              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto my-10">


                <div className="bg-blue-100 p-5 rounded-2xl shadow-xl hover:shadow-zinc-400 transition-all duration-300">
                     <h4 className="text-xl font-bold flex items-center gap-2"><span><FcApproval  className="text-green-600 text-2xl items-center"/></span>Package Includes</h4>

                     <ul className="list-disc list-inside mt-3 text-gray-600">
                      {tourDetails.includes.map((item,index)=> <li key={index} className="flex items-center gap-2"><span><FaCheck className="text-green-600" /></span>{item}</li>)}
                     </ul>
                </div>


                <div className="bg-fuchsia-50 p-5 rounded-2xl shadow-xl hover:shadow-zinc-400 transition-all duration-300 ">
                          <h4 className="text-xl font-bold flex items-center gap-2"><span><MdOutlineDateRange  className="text-green-600 text-xl"/></span>Available Dates</h4>

                     <ul className="list-disc list-inside mt-3 text-gray-600">
                      {tourDetails.availableDates.map((item,index)=> <li key={index} className="flex items-center gap-2"><span><FcExport className="text-green-600" /></span>{item}</li>)}
                     </ul>
                </div>


              </div>


              <div className="bg-amber-50 max-w-4xl mx-auto rounded-2xl p-5  hover:shadow-zinc-400 transition-all duration-300 shadow-xl">
              <h4 className="text-xl font-bold flex items-center gap-2"> <span ><FcCustomerSupport className="text-2xl text-green-600" /></span>{tourDetails.specialDeals.title}</h4>
                   <ul className="list-disc list-inside mt-3 text-gray-600">
                    {tourDetails.specialDeals.offers.map((item,index) => <li key={index} className="flex items-center gap-2"> <span><FcElectricity className="text-green-600" /></span> {item}</li>)}
                   </ul>
              </div>


               <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
              
                                <button></button>
                                <button className="btn btn-primary my-5 font-bold rounded-2xl" onClick={handleOnCart}> <span><CgShoppingCart className="text-2xl font-bold" /></span>Add to Card</button>
                              </div>


             </div>

          </div>


          <section className="my-10 bg-white/95 rounded-2xl p-5">
            <CommonComponent />
          </section>
          
    </div>
    </div>
  )
}

export default TourDetailPages