
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { AuthProvider } from '../Context/AuthContext';
import { PuffLoader } from 'react-spinners';
import ExplorePage from '../Components/ExplorePage';
const Explore = () => {

  const {explore,loading} = useContext(AuthProvider);

  if(loading){
    return (
      <div className="h-screen flex justify-center items-center">
        <PuffLoader color="#36d7b7" />
      </div>
    )
  }
  return (
  <div className="my-20">


      <motion.h1 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center text-3xl font-sans font-bold">Explore Destinations</motion.h1>

      <motion.p
      
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center text-lg my-5 mb-10 font-sans text-gray-600">Discover amazing places around the world</motion.p>



      <div className='max-w-7xl mx-auto p-3 grid grid-cols-1 gap-5 md:grid-cols-3'>
        {explore.map((explore)=> <ExplorePage explore={explore} key={explore.id}/>)}

      </div>
    </div>
  )
}

export default Explore