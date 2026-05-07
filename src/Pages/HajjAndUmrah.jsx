import { useContext } from "react"
import { PuffLoader } from "react-spinners"
import HajjAndUmrahPage from "../Components/HajjAndUmrahPage"
import HajjAndUmrahPageFooter from "../Components/HajjAndUmrahPageFooter"
import { AuthProvider } from "../Context/AuthContext"

const HajjAndUmrah = () => {

  const {hajjData,loading} =useContext(AuthProvider)

  if(loading){
    return (
      <div className="h-screen flex justify-center items-center">
        <PuffLoader color="#36d7b7" />
      </div>
    )
  }
  return (
    <div className="my-20 font-sans max-w-5xl mx-auto ">

      <figure className="max-w-6xl mx-auto ">
        <img src="https://cdn-bmkfm.nitrocdn.com/KjSXjNCPeuIbUQFOJrZAibaJvyDiQgwL/assets/images/optimized/rev-dac81ff/bakhlatours.com/wp-content/uploads/2022/06/06.webp" height={400} alt=""  className="rounded-2xl h-80 mb-10 w-full"/>
      </figure>

        <h1 className="text-gray-700 text-2xl md:text-4xl font-bold text-center">#1 Hajj And Umrah Agency In Bangladesh</h1>

        <p className="text-gray-600 text-center my-5 ">Tailored Hajj, Umrah, and travel experiences guided by decades of trust and experience</p>

      <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-25 p-5 max-w-6xl mx-auto">

        {hajjData.map((hajj)=> <HajjAndUmrahPage key={hajj.id} hajj={hajj}/>)}
      </div>

        <section>
          <HajjAndUmrahPageFooter />
        </section>

      
    </div>
  )
}

export default HajjAndUmrah