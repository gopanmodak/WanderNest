
const faq = [
    {
        "question": "What is Travel EMI?",
        "answer": "Travel EMI allows you to book now and pay later in easy monthly installments instead of paying the full amount upfront."
    },
    {
        "question": "Who can avail EMI for travel?",
        "answer": "Anyone with a valid credit card or eligible debit card can use EMI, depending on bank approval and provider terms."
    },
    {
        "question": "What bookings are eligible for EMI?",
        "answer": "EMI is usually available for flights, hotels, holiday packages, and complete tour deals."
    },
    {
        "question": "Is there a minimum amount required for EMI?",
        "answer": "Yes, EMI is available only if your booking meets the minimum amount set by the provider or bank."
    },
    {
        "question": "What EMI tenures are available?",
        "answer": "Tenure options usually range from 3 to 12 months, depending on the bank or financing partner."
    },
    {
        "question": "Is EMI interest-free?",
        "answer": "Some EMI options are interest-free, while others may include interest based on bank policies and tenure."
    },
    {
        "question": "Are there any extra charges?",
        "answer": "Additional charges like processing fees or taxes may apply depending on the EMI provider."
    },
    {
        "question": "Which banks/cards are supported?",
        "answer": "Supported banks vary by provider but often include major local and international banks. You should check the available bank list at checkout."
    },
    {
        "question": "Can I cancel a booking made on EMI?",
        "answer": "Yes, but cancellation policies apply, and EMI payments may continue as per the lender’s terms."
    },
    {
        "question": "What happens if I miss an EMI payment?",
        "answer": "Missing payments may lead to late fees and can affect your credit score."
    }
]

const EMIPage = () => {




    return (
        <div className="my-20 font-sans max-w-7xl mx-auto p-2">

            <figure className="max-w-6xl mx-auto ">
                <img src="https://ik.imagekit.io/w13m3d3rhif/web/homepage/emi-lg.jpg?tr=f-auto,pr-true" alt="" className="rounded-2xl p-2" />
            </figure>


            <div>
                <h1 className="text-start text-2xl font-sans font-bold mt-20">Available Banks</h1>
            </div>

            <div className="my-10 space-y-3">
                <h1 className="text-start text-2xl font-sans font-bold mt-20">Terms & Conditions</h1>

                <p >EMI is available on Flight, Hotel & Tour.
                    The payable amount must be equal to or greater than BDT 5,000 to avail the EMI facility.To avail EMI facility, you must use eligible credit cards of the selected banks only.You can get up to 12 months tenure depending on your card issuing bank.It might take 3 to 5 working days to reflect the installment on your credit card depending on your bank.Once you make the transaction, the full amount will be blocked until the installment repayments have been completed.A minimal service fee named Convenience Fee may apply depending on the tenure, and it is non-refundable.WanderNest will follow the Bank/ Payment service provider's policy to resolve any issue.</p>
            </div>



            <div className="my-10 space-y-1">

                {
                    faq.map((item, index) =>


                        <div key={index} tabIndex={0}

                            className="collapse collapse-plus bg-base-100 border-base-300 border">
                            <div className="collapse-title font-semibold">{item.question}</div>
                            <div className="collapse-content text-sm">
                                <p>{item.answer}</p>
                            </div>
                        </div>)
                }
            </div>
        </div>
    )
}

export default EMIPage