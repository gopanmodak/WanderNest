import imageOne from '../assets/homefooterimage1.webp'
import { IoIosRocket } from "react-icons/io";
import { CiCalculator2 } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { TfiCup } from "react-icons/tfi";
import { motion } from 'framer-motion';
import Reasons from './Reasons';



const HomeFooter = () => {
  return (

    <>  
    <div className='flex flex-col md:flex-row max-w-6xl mx-auto gap-5 md:gap-20 text-gray-100 font-sans p-5 my-30'>
      <div>
        <h1 className='text-3xl font-bold '>Plan your perfect trip today with Bangladesh’s most trusted Travel Portal</h1>
        <img src={imageOne} alt="" />
        <h1 className='text-3xl font-bold'>What are you waiting for?Get started with us Today!</h1>
      </div>


      <div >
        <h1 className='text-lg '>WanderNest brings you an all-in-one online travel platform designed for travelers in Bangladesh who love exploring the world with ease. Whether you're booking flights, hotels, or holiday packages, we make your travel simple, secure, and affordable. Our advanced portal gives you access to real-time deals, easy payment options, and 24/7 customer support — everything you need to travel smarter and better.</h1>

        <motion.div
        initial={{ opacity:0, x:100}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:1}}

        className='grid grid-cols-2 gap-5'>

            <div className='shadow-lg border border-zinc-400 p-3 flex flex-col items-center text-center rounded-lg mt-10 hover:shadow-blue-500 transition-shadow duration-300'>
                <p><IoIosRocket className='text-5xl text-orange-500 mb-3'/></p>
                <h2 className='font-bold text-2xl'>Amazing Travel Deals</h2>
                <p>Enjoy unbeatable offers on flights, hotels, and holiday packages — all in one place.</p>
            </div>
   

            <div className='shadow-lg border border-zinc-400 p-3 flex flex-col items-center text-center rounded-lg mt-10 hover:shadow-blue-500 transition-shadow duration-300'>
                <p><TfiCup  className='text-5xl text-orange-500 mb-3'/></p>
                <h2 className='font-bold text-2xl'>Best Travel Experience</h2>
                <p>Book faster, travel smarter, and get exclusive discounts designed just for you.</p>
            </div>


            <div className='shadow-lg border border-zinc-400 p-3 flex flex-col items-center text-center rounded-lg hover:shadow-blue-500 transition-shadow duration-300'>
                <p><FiPhoneCall className='text-5xl text-orange-500 mb-3'/></p>
                <h2 className='font-bold text-2xl'>24/7 Customer Support</h2>
                <p>Need help anytime? Our friendly team is here around the clock to assist you.</p>
            </div>


            <div className='shadow-lg border border-zinc-400 p-3 flex flex-col items-center text-center rounded-lg hover:shadow-blue-500 transition-shadow duration-300 '>
                <p><CiCalculator2 className='text-5xl text-orange-500 mb-3'/></p>
                <h2 className='font-bold text-2xl'>Exclusive Rewards & Savings</h2>
                <p>Earn cashback.</p>
            </div>

        </motion.div>
      </div>
    </div>


        <div>

        


        <Reasons />
      </div>

    </>
  )
}

export default HomeFooter