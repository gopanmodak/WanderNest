import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthProvider } from "../Context/AuthContext";
import { PuffLoader } from "react-spinners";
import { FaMoneyBill } from "react-icons/fa";
import { MdOutlineUpdate } from "react-icons/md";

const HajjAndUmrahDetailsPages = () => {

  const navigate = useNavigate()
  const { id } = useParams();
  const { hajjData, loading } = useContext(AuthProvider);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <PuffLoader color="#36d7b7" />
      </div>
    );
  }

  const hajjUmrah = hajjData.find((data) => data.id == id);

  return (
    <div className="my-20 font-sans max-w-7xl text-gray-700 font-bold mx-auto p-2">
      <div className="card bg-base-100 w-full shadow-sm ">
        <figure>
          <img src={hajjUmrah.img} alt="Shoes" />
        </figure>
        <div className="card-body">

          <h2 className="card-title justify-center my-5 md:text-4xl ">{hajjUmrah.title}</h2>
          
          
          <div className="flex flex-col gap-2 border p-5 rounded-lg max-w-3xl mx-auto">
           <p className="flex items-center gap-2"> <span className="font-bold flex items-center gap-2"><FaMoneyBill  className="text-green-500 text-xl"/> Per Person {hajjUmrah.package_details.price_per_person} </span> </p>
             <p className="badge badge-secondary">  {hajjUmrah.duration} Package </p>

             <p className="flex items-center gap-2"><span className="flex items-center gap-2"><MdOutlineUpdate className="text-green-500 text-xl" /> Starting Date : </span> {hajjUmrah.package_details.starting_date}</p>
             <p className="flex items-center gap-2"> <span className="flex items-center gap-2 "><MdOutlineUpdate className="text-green-500 text-xl" /> Ending Date : </span> {hajjUmrah.package_details.ending_date} </p>
             <p className="flex items-center gap-2"> <span className="flex items-center gap-2 "><MdOutlineUpdate className="text-green-500 text-xl" /> Modina Hotel : </span> {hajjUmrah.package_details.madinah_hotel} </p>
             <p className="flex items-center gap-2"> <span className="flex items-center gap-2 "><MdOutlineUpdate className="text-green-500 text-xl" /> Makkah Hotel : </span> {hajjUmrah.package_details.makkah_hotel} </p>
             <p className="flex items-center gap-2"> <span className="flex items-center gap-2 "><MdOutlineUpdate className="text-green-500 text-xl" /> Room Type : </span> {hajjUmrah.package_details.room_type} </p>
             <p className="flex items-center gap-2"> <span className="flex items-center gap-2 "><MdOutlineUpdate className="text-green-500 text-xl" /> Flight Departure : </span> {hajjUmrah.package_details.flight_departure} </p>

          </div>

     
     <div className="my-10 flex flex-col gap-2  p-5 rounded-lg max-w-3xl mx-auto">
        {hajjUmrah.daily_schedule.map((item)=>
        
        <div className="collapse bg-base-100 border border-base-300 w-3xl">
           <input type="checkbox" />
               <div className="collapse-title font-semibold justify-center items-center flex">Day  {item.day} <span className="px-5 text-zinc-300">(Click to view Details)</span></div>
             <div className="collapse-content text-sm">
                  <p className="font-normal p-2 border-l-4 border-blue-500 pl-4 bg-blue-50 rounded-lg">{item.activity}</p>
            </div>
            </div>
        )}
     </div>
               

    <div className="my-10 max-w-3xl mx-auto px-4">

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

   
    <div className="border border-green-200 bg-green-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition">

      <h4 className="text-2xl font-bold mb-4 text-green-700">
        ✔ Include
      </h4>

      <ul className="space-y-2">
        {hajjUmrah.includes.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-2 text-gray-700"
          >
            <span className="text-green-600 mt-1">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

    </div>

    {/* EXCLUDE */}
    <div className="border border-red-200 bg-red-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition">

      <h4 className="text-2xl font-bold mb-4 text-red-600">
        ✖ Exclude
      </h4>

      <ul className="space-y-2">
        {hajjUmrah.excludes.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-2 text-gray-700"
          >
            <span className="text-red-500 mt-1">✕</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

    </div>

  </div>

</div>



   <div className="my-10 max-w-3xl mx-auto  p-5 rounded-lg">
    <h1 className="text-2xl font-bold  text-black"> Cancellation Policy</h1>

    <p className="text-gray-600 text-md font-normal mt-5"> The package is fully Non-refundable, Non-changeable, and non-transferable as per Saudi & Bangladesh Hajj package policies.</p>
   </div>


       <div className="max-w-3xl mx-auto  p-5 rounded-lg space-y-5 gap-10">
        <h1 className="text-2xl font-bold text-black"> Passport Policies: </h1>

        <p className="font-normal">Upon arrival at KSA (Airport), the Saudi authorities will collect your passport, and the passport will be returned to you on the day of your return flight from KSA.</p>
      
       <h4 className="text-2xl font-bold my-3 text-black">Moyallen Activities:</h4>
       <p className="font-normal">.Moyallem will be available at the time of performing umrah and it is only for one time only. For ziyarah, a driver cum guide/any other tour guide will be available. The Guide / Driver is not liable to carry luggage to/from the hotel.</p>

<h4 className="text-2xl font-bold my-3 text-black">Food Policies:</h4>
<p className="font-normal">Subject to permission from Saudi authorities three times meals will be served under the supervision of Bangladeshi local chefs. Note that, if the superior and premium package’s hotel authorities do not allow food delivery inside the hotel, alternative arrangements will be made.</p>

<h4 className="text-2xl font-bold my-3 text-black">Ziyarah Timing:</h4>
<p className="font-normal">Usually, we provide all ziyarah service for Makkah or Madinah at 7 AM and the duration is 2-3 hours (maximum).</p>
       </div>


      </div>

            

<div className="card-actions justify-end p-5">
            <button className="btn btn-primary" onClick={()=>navigate(-1)}>Back</button>
          </div>
        </div>
    </div>
  );
};

export default HajjAndUmrahDetailsPages;
