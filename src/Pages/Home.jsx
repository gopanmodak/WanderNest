import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen bg-linear-to-r from-black to-gray-600 py-10">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-white text-4xl font-bold text-center mt-10 max-w-md mx-auto font-sans"
      >
        Discover Your Next{" "}
        <span class="text-4xl font-bold bg-linear-to-r from-orange-700 via-blue-400 to-green-400 text-transparent bg-clip-text animate-gradient">
          Adventure
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center text-lg font-sans mt-5 text-gray-200 max-w-md mx-auto"
      >
        Book flights, hotels & visa services with the best prices guaranteed
      </motion.p>
    </div>
  );
};

export default Home;
