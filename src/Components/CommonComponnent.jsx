const features = [
    {
        "id": 1,
        "title": "Fast Booking",
        "icon": "https://img.freepik.com/free-vector/hotel-booking-concept-illustration_114360-27998.jpg?semt=ais_hybrid",
        "description": "Book your trips quickly with our simple and user-friendly interface.",
        "status": "active"
    },
    {
        "id": 2,
        "title": "Secure Payment",
        "icon": "https://static.vecteezy.com/system/resources/previews/003/622/079/original/secure-and-safe-payment-vector.jpg",
        "description": "We ensure 100% secure payment with multiple trusted gateways.",
        "status": "active"
    },
    {
        "id": 3,
        "title": "Best Prices",
        "icon": "https://static.vecteezy.com/system/resources/previews/005/851/404/large_2x/best-price-concepts-vector.jpg",
        "description": "Get the best deals and discounts on flights, hotels, and packages.",
        "status": "active"
    },
    {
        "id": 4,
        "title": " 24/7 Support",
        "icon": "https://static.vecteezy.com/system/resources/previews/002/935/460/original/24-hours-service-vector.jpg",
        "description": "Our support team is available 24/7 to assist you anytime.",
        "status": "active"
    },
    {
        "id": 5,
        "title": "Custom Packages",
        "icon": "https://tse2.mm.bing.net/th/id/OIP.kgrweJkGXKA8wyt8WI6P2gAAAA?r=0&pid=ImgDet&w=400&h=400&rs=1&o=7&rm=3",
        "description": "Create personalized travel packages based on your preferences.",
        "status": "active"
    },

    {
        "id": 6,
        "title": "Easy Cancellation",
        "icon": "https://static.vecteezy.com/system/resources/previews/024/255/788/original/free-cancellations-sign-level-bubble-speech-free-cancellation-free-vector.jpg",
        "description": "Cancel or modify your bookings easily with flexible policies.",
        "status": "active"
    },

]


const CommonComponnent = () => {
    return (
        <div className="my-20">


            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
                {features.map((fData) =>
                    <div className="bg-mauve-100 p-3 rounded-2xl gap-3 items-center flex justify-center flex-col shadow-lg hover:shadow-2xl hover:shadow-zinc-400 transition-transform duration-300  ">

                        <img src={fData.icon} alt="" className="h-20 w-40 object-cover rounded-2xl" />
                        <h2 className="text-xl font-bold text-zinc-700">{fData.title}</h2>
                        <p className="text-gray-600">{fData.description}</p>
                    </div>)}
            </div>
        </div>
    )
}

export default CommonComponnent