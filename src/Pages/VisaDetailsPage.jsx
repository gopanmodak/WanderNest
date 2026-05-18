import { useContext } from "react";
import { BsCommand } from "react-icons/bs";
import { CgShoppingCart } from "react-icons/cg";
import { CiCircleCheck } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import CommonComponnent from "./../Components/CommonComponnent";
import { AuthProvider } from "./../Context/AuthContext";

const VisaDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { visa, loading, addToCart } = useContext(AuthProvider);



  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <PuffLoader color="#36d7b7" />
      </div>
    );
  }

  const visaDetails = visa.find(
    (item) => item.visaService.id == id,
  ).visaService;
  console.log(visaDetails + "visaDetails");

  const handleOnCart = () => {
    addToCart(visaDetails)
  };
  return (
    <div className="my-20 font-sans p-4 mx-auto">
      <div className="max-w-6xl mx-auto">
        <p
          className="btn items-center btn-ghost p-5 font-bold my-2  "
          onClick={() => navigate(-1)}
        >
          <span>
            <FaArrowLeft />
          </span>
          Back to Visa
        </p>
      </div>

      <div className=" max-w-6xl mx-auto bg-white/95 rounded-2xl relative">
        <img
          src={visaDetails.image}
          alt=""
          className="rounded-t-2xl h-120 w-full object-cover"
        />

        <div className="p-5">
          <h1 className="text-black font-bold text-2xl">{visaDetails.title}</h1>
          <p className="flex flex-col items-end gap-1 text-gray-700"> Processing fee <span className="badge badge-accent mt-2 text-blue-900 font-bold"> { visaDetails.processingFee}$</span></p>

          <p className="text-gray-600 mt-2">{visaDetails.shortDescription}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto my-10">
            <div className="bg-blue-100 p-5 rounded-2xl shadow-xl hover:shadow-zinc-400 transition-all duration-300 space-y-2">

               <h2 className="text-lg font-bold text-zinc-700 flex items-center gap-2">  <span><CiCircleCheck  className="text-green-500 text-2xl font-bold"/></span> What you will get</h2>
                <ul className="list-disc list-inside mt-3 text-gray-600">

                    {visaDetails.whatIncluded.map((feature) => <li className="flex items-center gap-2"><span ><FaCheck  className="text-green-500 text-lg"/></span>{feature}</li>)}
                </ul>
            </div>

            <div className="bg-fuchsia-50 p-5 rounded-2xl shadow-xl hover:shadow-zinc-400 transition-all duration-300 space-y-2 ">
             <h2 className="text-lg font-bold text-zinc-700 flex items-center gap-2"> <span> <MdOutlineDateRange  className="text-green-500 text-md" /></span> Processing Timeline</h2>
                <p className="flex items-center gap-2"> <span><IoMdTime className="text-green-500 text-lg" /></span> {visaDetails.processingTimeline.Application} </p>
                <p className="flex items-center gap-2"> <span><IoMdTime  className="text-green-500 text-lg"/></span> {visaDetails.processingTimeline.Processing} </p>
                <p className="flex items-center gap-2"> <span><IoMdTime  className="text-green-500 text-lg"/></span> {visaDetails.processingTimeline.Delivery} </p>
                <p className="flex items-center gap-2"> <span><IoMdTime  className="text-green-500 text-md"/></span>  {visaDetails.processingTimeline.Total} </p>
                <p className="flex items-center gap-2"> <span><FaCheck className="text-green-500 text-lg"/></span>  {visaDetails.processingTimeline.Guarantee} </p>


            </div>
          </div>

          <div className="bg-amber-50 max-w-4xl mx-auto rounded-2xl p-5  hover:shadow-zinc-400 transition-all duration-300 shadow-xl">


            <h1 className="text-lg font-bold text-zinc-700 flex items-center gap-2" > <span><BsCommand className="text-yellow-500 text-md" /></span>  {visaDetails.sessionBestDeal.title} </h1>
               
               <ul className="list-disc list-inside mt-3 text-gray-600">
                {visaDetails.sessionBestDeal.details.map((deal) => <li className="flex items-center gap-2"><span><FaCheck className="text-green-500 text-lg"/></span>{deal}</li>)}
               </ul>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
            <button></button>
            <button
              className="btn btn-primary my-5 font-bold rounded-2xl"
              onClick={handleOnCart}
            >
              {" "}
              <span>
                <CgShoppingCart className="text-2xl font-bold" />
              </span>
              Add to Card
            </button>
          </div>
        </div>
      </div>

      <section className="my-10 bg-white/95 rounded-2xl p-5">
        <CommonComponnent />
      </section>
    </div>
  );
};

export default VisaDetailsPage;
