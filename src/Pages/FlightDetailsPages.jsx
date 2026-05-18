import { useContext } from "react";
import { AuthProvider } from './../Context/AuthContext';
import { useNavigate, useParams } from "react-router-dom";
import { MdFlight, MdOutlineRemoveCircle, MdRemoveModerator } from "react-icons/md";
import { FcApproval, FcCheckmark } from "react-icons/fc";
import { IoIosPricetag } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";
import { RiRefund2Fill } from "react-icons/ri";

const FlightDetailsPages = () => {
   const navigate = useNavigate();
  const { id } =useParams();

  const { flight , loading } = useContext(AuthProvider);

  

  if(loading){
    return <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
    </div>
  }

   const flightDetails = flight.find(item => item.id == id);
   
  return (
    <div className="my-10 max-w-7xl mx-auto font-sans">

        <div className="card lg:card-side bg-base-100 shadow-sm">
  <figure className="w-full lg:w-1/2 flex flex-col gap-4">
    <img
      src={flightDetails.image_url}
      alt="Flight" 
      className=" max-h-150 w-full object-cover  "/>
    <img
      src={flightDetails.image_url}
      alt="Flight" 
      className=" max-h-150 w-full object-cover  "/>
    <img
      src={flightDetails.image_url}
      alt="Flight" 
      className=" max-h-150 w-full object-cover  "/>
    <img
      src={flightDetails.image_url}
      alt="Flight" 
      className=" max-h-150 w-full object-cover  "/>
  </figure>
  <div className="card-body">
    <h2 className="card-title items-center justify-center"> <span className="text-2xl text-blue-700"><MdFlight /></span> Flight Details</h2>
    
    <div className="flex flex-col gap-2 border p-4 rounded-lg bg-gray-100 mt-5">
      <p className="font-bold text-red-500"> <span className="font-bold text-gray-600 "> Flight Name : </span> {flightDetails.name} </p>
      <p> <span className="font-bold text-gray-600"> From : </span> {flightDetails.departure.airport} </p>
      <p> <span className="font-bold text-gray-600"> To : </span>{flightDetails.arrival.airport} </p>
      <p> <span  className="font-bold text-gray-600"> Aircraft Type : </span> {flightDetails.aircraft} </p>
      <p> <span className="font-bold text-gray-600"> Departure : </span> {flightDetails.departure.time} <span>({flightDetails.departure.timezone})</span> </p>
      <p> <span className="font-bold text-gray-600"> Arrival : </span> {flightDetails.arrival.time}  <span>({flightDetails.arrival.timezone})</span> </p>
    </div>
   
      <h4 className="flex items-center gap-2 font-semibold text-xl my-2 justify-center"> <span><FcApproval className="text-2xl"/></span> Usually those that include</h4>
    <div className="border p-4 rounded-lg bg-yellow-50">
       <p className="font-semibold text-lg my-2">Economy Class</p>

       <ul className="list-disc list-inside space-y-1 my-2">
        {flightDetails.included.economy_class.map((item,index)=><li key={index} className="flex items-center gap-2"> <span><FcCheckmark className="text-green-500 "/></span> {item} </li>)}
       </ul>
       <p className="font-semibold text-lg my-2">Business Class</p>

       <ul className="list-disc list-inside space-y-1 my-2">
        {flightDetails.included.business_class.map((item,index)=><li key={index} className="flex items-center gap-2"> <span><FcCheckmark className="text-green-500 "/></span> {item} </li>)}
       </ul>

    </div>

   <h4 className="flex items-center gap-2 font-semibold text-xl justify-center my-2"> <span><MdRemoveModerator className="text-red-500" /></span> Usually those that are not included</h4>
    <div className="border p-4 rounded-lg bg-red-50">
       <ul className="list-disc list-inside space-y-1 my-2">
        {flightDetails.not_included.map((item,index)=><li key={index} className="flex items-center gap-2"> <span><MdOutlineRemoveCircle  className="text-red-500 "/></span> {item} </li>)}
       </ul>
    </div>
    

    <h4 className="flex items-center text-xl justify-center font-semibold my-2 gap-2"><span><IoIosPricetag className="text-green-500 text-2xl" /></span> Estimated Ticket Price <span className="text-gray-600">({flightDetails.route})</span></h4>
        <div className="border p-4 rounded-lg bg-green-50 text-blue-700 font-bold">

          <p ><span className="font-bold text-gray-600" >Economy Saver :  </span> {flightDetails.prices.economy_saver} </p>
          <p><span className="font-bold text-gray-600">Economy Flex :  </span> {flightDetails.prices.economy_flex} </p>
          <p><span className="font-bold text-gray-600">Business Class :  </span> {flightDetails.prices.business_class} </p>
            <p className="text-sm text-red-600 mt-2">**Pricing varies with seasonality, booking schedule, and selected fare type</p>
        </div>


           <h4 className="flex items-center gap-2 font-semibold text-xl justify-center my-2">🧳 Extra Baggage Charges (Approx)</h4>
         <div className="border p-4 rounded-lg bg-gray-50">

          <div className="overflow-x-auto">
  <table className="table">

    <thead>
      <tr>
       
        <th>Weight</th>
        <th>Estimated Cost</th>
        
      </tr>
    </thead>
    <tbody>
      
      <tr>
        
        <td> Extra 5kg </td>
        <td>{flightDetails.extra_baggage_charges.extra_5kg}</td>
       
      </tr>
      <tr>
        
        <td> Extra 10kg </td>
        <td>{flightDetails.extra_baggage_charges.extra_10kg}</td>
       
      </tr>
    
     
    </tbody>
  </table>
</div>
         
         </div>


         <h4 className="flex items-center gap-2 font-semibold text-xl justify-center my-2">🍽️ What can be done on the flight?</h4>
    <div className="border p-4 rounded-lg bg-blue-50">

      <ul className="list-disc list-inside space-y-1 my-2">
        {flightDetails.allowed_activities.map((item,index)=><li key={index} className="flex items-center gap-2"> <span><FcCheckmark className="text-green-500 "/></span> {item} </li>)}
       </ul>

          <div className="my-2 ml-5 ">
      {flightDetails.wifi_available ? (
        <p className="text-green-600 font-medium">Wi‑Fi Available</p>
      ) : (
        <p className="text-red-600 font-medium">Wi‑Fi Not Available</p>
      )}
    </div>
    </div>
        
        
         <h4 className="flex items-center gap-2 font-semibold text-xl justify-center my-2">🚫 Which cannot be done</h4>
    <div className="border p-4 rounded-lg bg-blue-50">

      <ul className="list-disc list-inside space-y-1 my-2">
        {flightDetails.prohibited_activities.map((item,index)=><li key={index} className="flex items-center gap-2"> <span>❌ </span> {item} </li>)}
       </ul>
    </div>
       
       
         <h4 className="flex items-center gap-2 font-semibold text-xl justify-center my-2">📌 Important Notes
</h4>
    <div className="border p-4 rounded-lg bg-blue-50">

      <ul className="list-disc space-y-1 pl-5 my-2 ">
        {flightDetails.important_notes.map((item,index)=><li key={index} className="list-item"> {item} </li>)}
       </ul>
    </div>
       
       
       


        
    
  </div>
</div>

           <h4 className="flex items-center gap-2 font-semibold text-xl justify-center mt-10 my-2">❌ Ticket Cancellation Policy
</h4>
    <div className="border p-5 rounded-lg bg-orange-100 text-red-600 font-semibold ">

      <p><span className="font-bold text-gray-600"> 🚫 Free Cancellation Period : </span> {flightDetails.ticket_cancellation_policy.free_cancellation_period}</p>
      <p><span className="font-bold text-gray-600"> 🚫 Standard Cancellation Fee : </span> {flightDetails.ticket_cancellation_policy.standard_cancellation_fee}</p>
      <p><span className="font-bold text-gray-600"> ✅ No-Show Penalty : </span> {flightDetails.ticket_cancellation_policy.no_show_penalty}</p>
        <h4 className="flex items-center gap-2 font-semibold text-gray-900 mt-5 my-2">Refund Policy</h4>
      <p className="flex gap-2"><span className="font-bold text-gray-600 flex items-center gap-2"> <span><RiRefund2Fill className="text-yellow-400 text-2xl" /></span> Economy Class : </span> {flightDetails.ticket_cancellation_policy.refund_percentage.economy_saver}</p>
      <p className="flex gap-2"><span className="font-bold text-gray-600 flex items-center gap-2"> <span><RiRefund2Fill className="text-yellow-400 text-2xl" /></span> Economy Flex : </span> {flightDetails.ticket_cancellation_policy.refund_percentage.economy_flex}</p>
      <p className="flex gap-2"><span className="font-bold text-gray-600 flex items-center gap-2"> <span><RiRefund2Fill className="text-yellow-400 text-2xl" /></span> Business Class : </span> {flightDetails.ticket_cancellation_policy.refund_percentage.business_class}</p>
     <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={()=>navigate(-1)}> <span><FaArrowLeftLong /></span>Back To Hajj</button>
    </div>
    </div>

    </div>
  )
}

export default FlightDetailsPages