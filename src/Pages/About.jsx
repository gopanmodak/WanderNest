
import { motion } from 'framer-motion';
const About = () => {
  return (
    <div className='my-20 font-sans text-gray-700'>

        <motion.h1
        initial={{opacity:0,y:-20}}
        animate={{opacity:1,y:0}}
        transition={{duration:1}}
        className='text-4xl text-center font-bold text-black'
        >  About WanderNest</motion.h1>

        <p className='text-center text-lg my-5 mb-10'>Connecting Bangladesh to the world with excellence, reliability, and innovation.</p>


        <div className='max-w-7xl mx-auto border border-gray-300 p-10 shadow-lg rounded-2xl mt-10 space-y-5'>

            <p>WanderNest is a proud wing of Wander Resources Limited (WRL), one of Bangladesh’s largest and most respected conglomerates. Since its inception, WanderNest has carried WRL’s legacy of quality, trust, and innovation into the travel industry.</p>

            <p>We are more than just an Online Travel Aggregator, we are a platform built to make travel simpler, smarter, and more meaningful. From flights, hotels, visa, holiday umrah & hajj packages to corporate travel solutions, WanderNest brings everything travelers need under one roof.</p>

            <p>With 24/7 customer support, transparent pricing, and seamless technology, we ensure every journey is smooth and worry-free. Our mission is to connect Bangladesh with the world while making travel accessible, affordable, and hassle-free.</p>

            <p>We aspire to be the benchmark of customer choice in the aviation and travel industry. With every flight booked, every journey planned, and every destination reached, our goal is to create experiences that reflect our promise: making travel easy and accessible for all.</p>

            <p>At the heart of WanderNest, there are values that define who we are, putting your journey first, always, ensuring accountability and care, making travel simple and affordable. These values, combined with our quality-driven, process-oriented approach, help us deliver services that stand out in today’s fast-paced travel landscape.</p>

            <p>As we grow, we continue to explore new horizons, create new possibilities, and set higher standards in the travel industry. Join us on this journey, as WanderNest turns travel into a story of connection, freedom, and dreams fulfilled.</p>

            <div className='flex justify-center items-center bg-orange-600 w-40 h-1 my-10'></div>

        </div>

    </div>
  )
}

export default About