
import { motion } from 'framer-motion';
import { LuShieldCheck } from "react-icons/lu";
import { SiBookingdotcom } from "react-icons/si";

import { FaMobileScreen } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { FiCommand } from "react-icons/fi";
import { IoBookmarksOutline } from "react-icons/io5";




const WhyChoice = () => {
    return (
        <div className='bg-linear-to-br from-gray-800 to-gray-600'>
            <div className="max-w-7xl mx-auto mt-20 p-5 rounded-lg shadow-md">

                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    transition={{ duration: .8, }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center text-gray-50 font-sans my-10">
                    Why Choose WanderNest?

                </motion.h1>


                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    transition={{ duration: 1, }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-15 font-sans'>

                    <div className='border-2 border-gray-300 flex flex-col p-5 shadow-sm bg-zinc-700 shadow-zinc-400 hover:scale-105 transition-transform duration-300 hover:shadow-white hover:shadow-md rounded-2xl space-y-5'>

                        <div className='flex gap-5 text-center items-center'>
                            <p>  <LuShieldCheck className='text-orange-600 text-4xl' /></p>
                            <p className='text-xl text-gray-50 font-bold'>Secure & Easy Payments</p>
                        </div>
                        <p className='text-gray-50'>Book your flights or hotels in seconds with multiple safe and convenient payment options.</p>
                    </div>



                    <div className='border-2 border-gray-300 flex flex-col p-5 shadow-sm bg-zinc-700 shadow-zinc-400 hover:scale-105 transition-transform duration-300 hover:shadow-white hover:shadow-md rounded-2xl space-y-5'>

                        <div className='flex gap-5 text-center items-center'>
                            <p>  <SiBookingdotcom className='text-orange-600 text-4xl' /></p>
                            <p className='text-xl text-gray-50 font-bold text-start'>Instant Booking & Confirmation</p>
                        </div>
                        <p className='text-gray-50'>Get your tickets and hotel confirmations instantly. No waiting, no hassle — just travel made easy.</p>
                    </div>


                    <div className='border-2 border-gray-300 flex flex-col p-5 shadow-sm bg-zinc-700 shadow-zinc-400 hover:scale-105 transition-transform duration-300 hover:shadow-white hover:shadow-md rounded-2xl space-y-5'>

                        <div className='flex gap-5 text-center items-center'>
                            <p>  <FaMobileScreen className='text-orange-600 text-4xl' /></p>
                            <p className='text-xl text-gray-50 font-bold text-start'>Mobile-Friendly Experience</p>
                        </div>
                        <p className='text-gray-50'>Plan, book, and manage your trips effortlessly from any device — anytime, anywhere.</p>
                    </div>


                    <div className='border-2 border-gray-300 flex flex-col p-5 shadow-sm bg-zinc-700 shadow-zinc-400 hover:scale-105 transition-transform duration-300 hover:shadow-white hover:shadow-md rounded-2xl space-y-5'>

                        <div className='flex gap-5 text-center items-center'>
                            <p>  <TbWorld className='text-orange-600 text-4xl' /></p>
                            <p className='text-xl text-gray-50 font-bold'>Global Travel Access</p>
                        </div>
                        <p className='text-gray-50'>Explore fares from over 50+ countries and grab amazing flight and hotel deals worldwide.</p>
                    </div>


                    <div className='border-2 border-gray-300 flex flex-col p-5 shadow-sm bg-zinc-700 shadow-zinc-400 hover:scale-105 transition-transform duration-300 hover:shadow-white hover:shadow-md rounded-2xl space-y-5'>

                        <div className='flex gap-5 text-center  items-center'>
                            <p>  <FiCommand className='text-orange-600 text-4xl' /></p>
                            <p className='text-xl text-gray-50 font-bold text-start'>Full Post-Booking Support</p>
                        </div>
                        <p className='text-gray-50'>Change, cancel, or modify your bookings online — with quick assistance whenever you need it.</p>
                    </div>


                    <div className='border-2 border-gray-300 flex flex-col p-5 shadow-sm bg-zinc-700 shadow-zinc-400 hover:scale-105 transition-transform duration-300 hover:shadow-white hover:shadow-md rounded-2xl space-y-5'>

                        <div className='flex gap-5 text-center justify-start items-center'>
                            <p>  <IoBookmarksOutline className='text-orange-600 text-4xl' /></p>
                            <p className='text-xl text-gray-50 font-bold text-start'>Exclusive Deals & Rewards</p>
                        </div>
                        <p className='text-gray-50'>Enjoy special discounts, cashback, and travel rewards designed to make every journey affordable.</p>
                    </div>

                </motion.div>

            </div>
        </div>
    )
}

export default WhyChoice