
const VisaPage = ({ visa }) => {


    return (
        <div className="bg-zinc-200 rounded-2xl font-sans hover:shadow-2xl transition-shadow duration-300">

            <img src={visa.image} alt="" className="object-cover h-60 w-full rounded-t-2xl" />



            <div className="p-5">

                <h1 className="text-gray-600 font-bold text-lg">{visa.cardSummary.title}</h1>
                <p>{visa.cardSummary.shortDescription}</p>

                <ul className="list-disc space-y-2 mt-5">
                    {visa.cardSummary.features.map((feature) => <li className="flex items-center gap-2"><span className="text-green-500 text-sm">✔</span>{feature}</li>)}
                </ul>
            </div>

            <div>
                <button className="bg-green-500 text-white p-3 rounded-b-2xl w-full hover:bg-green-600 transition-all duration-300">{visa.cardSummary.buttonText}</button>
            </div>


        </div>
    )
}

export default VisaPage