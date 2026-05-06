

const packages = {
    "hajj_obligation": "Hajj is Mandatory once in a lifetime for every financially and physically capable Muslim",
    "hajj_timing": "8th–12th Dhul-Hijjah (Islamic calendar)",
    "hajj_duration_days": 5,
    "hajj_rituals": [
        "Entering the sacred state with special clothing (Ihram)",
        "Circumambulation of the Kaaba (Tawaf)",
        "Walking between Safa and Marwah (Sa’i)",
        "Standing at Arafat on 9th Dhul-Hijjah (Wuquf)",
        "Overnight stays, collecting pebbles (Mina & Muzdalifah)",
        "Stoning of pillars and animal sacrifice (Jamarat & Qurbani)",
        "Shaving or trimming hair (Halq/Taqsir)"
    ],
    "hajj_reward": "Complete forgiveness of sins and renewal of faith",

    "umrah_obligation": " Umrah is Optional (Sunnah), highly recommended",
    "umrah_timing": "Any time of the year except during Hajj days",
    "umrah_duration_hours": "Few hours",
    "umrah_rituals": [
        "Entering the sacred state with special clothing (Ihram)",
        "Circumambulation of the Kaaba (Tawaf)",
        "Walking between Safa and Marwah (Sa’i)",
        "Shaving or trimming hair (Halq/Taqsir)"
    ],
    "umrah_reward": "Spiritual purification, forgiveness, closeness to Allah",

    "nusuk_card": "In Saudi Arabia, the Nusuk Card serves as the official identification for pilgrims. It is mandatory for entry into Makkah, Mina, and Arafat, ensuring that only registered pilgrims can access the sacred sites during Hajj. Pilgrims must keep this card safe at all times, as losing it can cause serious administrative complications, including restricted movement or delays in performing rituals. The Nusuk Card is Mandatory for entry into Makkah, Mina, and Arafat during Hajj",

    "registration_pre": [
        "National ID or Passport (18+)",
        "Birth certificate (under 18)",
        "For expatriates: Passport, work permit, or driving license"
    ],
    "registration_final": [
        "Payment of package fee",
        "Biometric verification",
        "Medical check-up and vaccinations"
    ],

    "health_guidelines": [
        "Vaccination against meningitis, influenza, etc.",
        "Carry prescribed medicines",
        "Emergency medical services available via Bangladesh Hajj Mission"
    ],

    "travel_guidelines": [
        "Passport valid for at least 6 months",
        "Flights arranged under government/private packages"
    ],

    "conduct_guidelines": [
        "Maintain discipline and cleanliness",
        "No business activities during Hajj/Umrah"
    ]
}


const HajjAndUmrahPageFooter = () => {
    return (
        <div>
            <div className="card bg-base-100 shadow-md p-10">
        
                <h2 className="text-xl font-bold my-2"> {packages.hajj_obligation}</h2>
                <h2 className="my-1"> <strong>Timing :</strong>  {packages.hajj_timing}.</h2>
                <h2 className="my-1"> <strong>Duration :</strong> {packages.hajj_duration_days} days</h2>
                <h2> <strong>Reward :</strong> {packages.hajj_reward}</h2>
                <ul className="list-disc list-inside mt-2 text-md">
                    {packages.hajj_rituals.map((ritual, index) => (
                        <li key={index}>{ritual}</li>
                    ))}
                </ul>


                    <h2 className="text-xl font-bold my-2 mt-10"> {packages.umrah_obligation}</h2>
                <h2 className="my-1"> <strong>Timing :</strong>  {packages.umrah_timing}</h2>
                <h2 className="my-1"> <strong>Duration :</strong> {packages.umrah_duration_hours} </h2>
                <h2> <strong>Reward :</strong> {packages.umrah_reward}</h2>
                <ul className="list-disc list-inside mt-2 text-md">
                    {packages.umrah_rituals.map((ritual, index) => (
                        <li key={index}>{ritual}</li>
                    ))}
                </ul>



                <h1 className="text-xl font-bold my-2 mt-10">Travel & Identification</h1>

                <p className="my-1 text-red-600"><strong>Nusuk Card :</strong> {packages.nusuk_card}</p>

                <h2 className="text-xl font-bold my-2 mt-10">
                    Hajj & Umrah Registration Process
                </h2>
                
                <ul className="list-disc list-inside mt-2 text-md">
                     <h2 className="my-1"><strong>Pre-Registration :</strong></h2>
                        {packages.registration_pre.map((pre, index) => (
                            <li key={index}>{pre}</li>
                        ))}
                </ul>

                <ul className="list-disc list-inside mt-2 text-md">
                     <h2 className="my-1"><strong>Final Registration :</strong></h2>
                        {packages.registration_final.map((final, index) => (
                            <li key={index}>{final}</li>
                        ))}
                </ul>

                <h1 className="text-xl font-bold my-2 mt-10">Health Guidelines</h1>
                <ul className="list-disc list-inside mt-2 text-md">
                    {packages.health_guidelines.map((guideline, index) => (
                        <li key={index}>{guideline}</li>
                    ))}
                </ul>

                <h1 className="text-xl font-bold my-2 mt-10">Travel Guidelines</h1>
                <ul className="list-disc list-inside mt-2 text-md">
                    {packages.travel_guidelines.map((guideline, index) => (
                        <li key={index}>{guideline}</li>
                    ))}
                </ul>
                <h1 className="text-xl font-bold my-2 mt-10">Conduct Guidelines</h1>
                <ul className="list-disc list-inside mt-2 text-md">
                    {packages.conduct_guidelines.map((guideline, index) => (
                        <li key={index}>{guideline}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default HajjAndUmrahPageFooter