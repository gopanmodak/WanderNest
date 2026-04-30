import imageOne from '../assets/pngreason.webp'
const Reasons = () => {
    return (
        <div className="my-30 text-gray-100">

            <h1 className="text-4xl text-center font-bold my-20 font-sans">
                5 reasons to plan your next trip with us
            </h1>



            <div className='max-w-7xl mx-auto font-sans grid grid-cols-1 md:grid-cols-2 gap-5 my-20'>
                <div className='space-y-3 p-2'>
                   

                    <div tabIndex={0} className="collapse collapse-arrow border-gray-400 border w-full">
                        <div className="collapse-title font-bold text-2xl text-gray-100">Quick Flight Search</div>
                        <div className="collapse-content text-md">
                            Find the best flight deals in seconds. Our smart search tool compares fares from hundreds of airlines to get you the lowest prices, fast.

                        </div>
                    </div>


                    <div tabIndex={0} className="collapse collapse-arrow border-gray-400 border w-full">
                        <div className="collapse-title font-bold text-2xl  text-gray-100">Seamless Checkout</div>
                        <div className="collapse-content text-md">
                            Enjoy a smooth and secure payment experience with all popular payment methods supported — no hidden fees, no surprises.

                        </div>
                    </div>




                    <div tabIndex={0} className="collapse collapse-arrow border-gray-400 border w-full">
                        <div className="collapse-title font-bold text-2xl  text-gray-100">Easy Changes in One Click</div>
                        <div className="collapse-content text-md">
                            Plans changed? No problem! Modify or cancel your bookings instantly through our simple online system.

                        </div>
                    </div>



                    <div tabIndex={0} className="collapse collapse-arrow border-gray-400 border w-full">
                        <div className="collapse-title font-bold text-2xl  text-gray-100">Hassle-Free Payments


                        </div>
                        <div className="collapse-content text-md">
                            Make one secure payment and confirm your travel instantly—simple, transparent, and reliable.

                        </div>
                    </div>


                    <div tabIndex={0} className="collapse collapse-arrow border-gray-400 border w-full">
                        <div className="collapse-title font-bold text-2xl  text-gray-100">Smart Account Dashboard</div>
                        <div className="collapse-content text-md">
                            Track all your trips, bookings, and travel rewards from one easy-to-use dashboard, available anytime on web or mobile.

                        </div>
                    </div>

                </div>

                <div className='flex justify-end '>
                    <img src={imageOne} alt="" loading="lazy" className='w-4/5' />
                </div>
            </div>


            <div className='bg-linear-to-l from-mist-600 to-blue-800 max-w-6xl mx-auto p-10 rounded-2xl font-sans text-gray-200 '>
          <p className='text-center text-lg mt-5'>Our Coverage</p>
          <h2 className='text-center text-3xl font-bold'>WanderNest office location</h2>


          <div className='flex flex-col md:flex-row gap-5 justify-center mt-10'>

            <div className='bg-zinc-300 text-black text-center space-y-4 rounded-2xl p-5'>
              <h2 className='text-2xl font-semibold'>Dhaka Office</h2>
              <p>info@wandernest.com  |  +8801709200099  | <span className='text-orange-600'> wandernest.com</span></p>
              <p className='max-w-md'>Plot 48, Road 11, Block F, Banani, Dhaka 1213, Bangladesh</p>
              <button className='p-2 rounded-md text-gray-100 font-semibold bg-olive-400'>Get Direction</button>
            </div>

            <div className='bg-zinc-300 text-black text-center space-y-2 rounded-2xl p-5'>
              <h2 className='text-2xl font-semibold'> Chattogram Office</h2>
              <p>info@wandernest.com  |  +8801625500971  | <span className='text-orange-600'> wandernest.com</span></p>
              <p className='max-w-md'>Joy Bangla Tower, 8th Floor, 36, Agrabad C/A, Chattogram 4100, Bangladesh</p>
              <button className='p-2 rounded-md text-gray-100 font-semibold bg-olive-400'>Get Direction</button>
            </div>
          </div>


        </div>

        </div>
    )
}

export default Reasons