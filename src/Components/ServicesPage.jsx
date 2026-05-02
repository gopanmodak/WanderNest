
const ServicesPage = ({service}) => {
  return (
    <div className="font-sans flex flex-col items-center border-2 border-gray-300 rounded-lg p-3 space-y-4 hover:shadow-2xl transition-shadow duration-300">

        <img src={service.image} alt=""  className="h-30  hover:scale-105 transition-all duration-300"/>

        <h3 className="text-lg font-bold ">{service.title}</h3>
        <ul>
            {service.features.map((feature) => <li className="flex items-center gap-2 text-gray-700"><span className="text-green-500 text-sm">✔</span>{feature}</li>)}
        </ul>

        <button className="bg-green-500 text-white p-3 rounded-b-2xl w-full hover:bg-green-600 transition-all duration-300">Learn More</button>
    </div>
  )
}

export default ServicesPage