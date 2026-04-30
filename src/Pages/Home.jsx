import { motion } from "framer-motion";
import SliderImages from "../Components/SliderImages";
import WhyChoice from "../Components/WhyChoice";
import HomeFooter from "../Components/HomeFooter";

const Home = () => {
  return (
    <div className="min-h-screen bg-linear-to-r from-[#232526] to-[#414345] py-10">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, y: 50 }}
        className="text-white text-4xl md:text-5xl font-bold text-center max-w-md mx-auto font-sans"
      >
        Discover Your Next{" "}
        <span className="text-4xl md:text-5xl font-bold bg-linear-to-r from-orange-700 via-blue-400 to-green-400 text-transparent bg-clip-text animate-gradient">
          Adventure
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, y: 50 }}
        className="text-center text-lg font-sans mt-5 text-gray-200 max-w-md mx-auto"
      >
        Book flights, hotels & visa services with the best prices guaranteed
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20">
        <SliderImages />
      </motion.div>


      <div className="max-w-7xl mx-auto my-20 p-2" >
        <img src="https://storage.googleapis.com/gz-main-prod-main/media/campaign/img_8f9421a3-8390-4a0a-9a47-98a798b0b6e8.jpg" alt="" className="rounded-2xl mt-10"/>
      </div>


      <WhyChoice />

      


      <motion.div
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-blue-700 p-10  my-30 ">
        <div className="max-w-7xl mx-auto grid-cols-2 grid md:grid-cols-4 gap-5 text-gray-200 font-sans p-3 text-center">

          <div>
            <p className="text-3xl font-extrabold">10+</p>
            <p>Years Experience</p>
          </div>

          <div>
            <p className="text-3xl font-extrabold">300K+</p>
            <p>Happy Clients</p>
          </div>


          <div>
            <p className="text-3xl font-extrabold">150+</p>
            <p>Travelers Served</p>
          </div>

          <div>
            <p className="text-3xl font-extrabold">2M+</p>
            <p>Travelers Served</p>
          </div>
        </div>

      </motion.div>



<HomeFooter />


    </div>
  );
};

export default Home;
