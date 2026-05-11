
import { useState } from 'react';
import { AiOutlineBank } from 'react-icons/ai';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { FaCcMastercard, FaCcVisa, FaExchangeAlt, FaMoneyBillWave, FaRocket } from 'react-icons/fa';
import { GiReturnArrow } from 'react-icons/gi';
import { HiShieldCheck, HiTruck } from 'react-icons/hi';
import { IoWalletOutline } from 'react-icons/io5';
import { MdBookOnline, MdLocalShipping, MdSecurity, MdVerified } from 'react-icons/md';

const CommonComponnent = () => {
  // FAQ Data
  const faqData = [
    {
      id: 1,
      question: "How long does delivery take?",
      answer: "Orders inside Dhaka are usually delivered within 1-2 business days. Outside Dhaka delivery may take 3-5 business days depending on the courier service and location."
    },
    {
      id: 2,
      question: "What is your return and exchange policy?",
      answer: "Customers can request a return or exchange within 7 days of receiving the product. The item must be unused, in original packaging, and accompanied by proof of purchase."
    },
    {
      id: 3,
      question: "Do your products come with warranty coverage?",
      answer: "Yes. Most electronic and premium products include an official manufacturer warranty ranging from 6 months to 12 months. Warranty details are mentioned on each product page."
    },
    {
      id: 4,
      question: "How can I track my order?",
      answer: "Once your order is shipped, you will receive an SMS and email with a tracking number and courier details."
    },
    {
      id: 5,
      question: "Are your products authentic?",
      answer: "Yes. We source products directly from authorized distributors and verified suppliers to ensure 100% authenticity."
    },
    {
      id: 6,
      question: "Which payment methods do you accept?",
      answer: "We accept Cash on Delivery, bKash, Nagad, Rocket, Visa, MasterCard, and online banking payments."
    }
  ];

  const shippingReturnData = {
    delivery: {
      inside_dhaka: {
        charge: 60,
        estimated_time: "1-2 business days",
        icon: <HiTruck className="w-8 h-8 text-blue-500" />
      },
      outside_dhaka: {
        charge: 120,
        estimated_time: "3-5 business days",
        icon: <HiTruck className="w-8 h-8 text-green-500" />
      }
    },
    same_day_delivery: {
      available: true,
      charge: 150,
      conditions: "Available only in selected areas inside Dhaka for orders confirmed before 1 PM.",
      icon: <MdLocalShipping className="w-8 h-8 text-orange-500" />
    },
    return_policy: {
      return_window: "7 days",
      conditions: [
        "Product must be unused",
        "Original packaging must be intact",
        "Invoice or proof of purchase is required"
      ],
      icon: <BsArrowReturnLeft  className="w-8 h-8 text-purple-500" />
    },
    exchange_policy: {
      available: true,
      processing_time: "2-3 business days",
      icon: <FaExchangeAlt  className="w-8 h-8 text-indigo-500" />
    }
  };

  const trustBadges = [
    {
      id: 1,
      title: "100% Secure Payment",
      description: "All transactions are encrypted and protected with SSL security protocols.",
      icon: <MdSecurity className="w-10 h-10 text-blue-600" />,
      highlight: "SSL Secured Checkout"
    },
    {
      id: 2,
      title: "Money Back Guarantee",
      description: "Eligible orders are covered by our 7-day money back guarantee policy.",
      icon: <IoWalletOutline className="w-10 h-10 text-green-600" />,
      highlight: "Hassle-Free Refund"
    },
    {
      id: 3,
      title: "Authentic Products",
      description: "We only sell genuine products sourced from authorized suppliers and brands.",
      icon: <MdVerified className="w-10 h-10 text-purple-600" />,
      highlight: "Verified Original Products"
    },
    {
      id: 4,
      title: "Fast Nationwide Delivery",
      description: "Reliable delivery service available across all districts in Bangladesh.",
      icon: <HiTruck className="w-10 h-10 text-orange-600" />,
      highlight: "Trusted Courier Partners"
    }
  ];

  const [openFaqId, setOpenFaqId] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  // Updated payment methods with React Icons
  const paymentMethods = [
    { name: "Cash on Delivery", icon: <FaMoneyBillWave className="w-6 h-6" />, bg: "bg-green-100", color: "text-green-600" },
    { name: "bKash", icon: <AiOutlineBank  className="w-6 h-6" />, bg: "bg-red-100", color: "text-red-600" },
    { name: "Nagad", icon: <MdBookOnline  className="w-6 h-6" />, bg: "bg-orange-100", color: "text-orange-600" },
    { name: "Rocket", icon: <FaRocket className="w-6 h-6" />, bg: "bg-blue-100", color: "text-blue-600" },
    { name: "Visa", icon: <FaCcVisa className="w-6 h-6" />, bg: "bg-indigo-100", color: "text-indigo-600" },
    { name: "MasterCard", icon: <FaCcMastercard className="w-6 h-6" />, bg: "bg-purple-100", color: "text-purple-600" }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Help & Information
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our shipping, returns, and policies
          </p>
          <div className="w-24 h-1 bg-linrar-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Trust Badges Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Shop With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((badge) => (
              <div key={badge.id} className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center hover:-translate-y-1">
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 bg-linear-to-br from-blue-50 to-purple-50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {badge.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{badge.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{badge.description}</p>
                <span className="inline-block text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {badge.highlight}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Shipping Information */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <HiTruck className="w-7 h-7 text-blue-600" />
              Shipping Information
            </h2>
            
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                    {shippingReturnData.delivery.inside_dhaka.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Inside Dhaka</h3>
                    <p className="text-sm text-gray-600">Delivery Charge: ৳{shippingReturnData.delivery.inside_dhaka.charge}</p>
                    <p className="text-xs text-green-600">⏱ {shippingReturnData.delivery.inside_dhaka.estimated_time}</p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                    {shippingReturnData.delivery.outside_dhaka.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Outside Dhaka</h3>
                    <p className="text-sm text-gray-600">Delivery Charge: ৳{shippingReturnData.delivery.outside_dhaka.charge}</p>
                    <p className="text-xs text-green-600">⏱ {shippingReturnData.delivery.outside_dhaka.estimated_time}</p>
                  </div>
                </div>
              </div>

              {shippingReturnData.same_day_delivery.available && (
                <div className="border-2 border-blue-200 bg-blue-50 rounded-xl p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      {shippingReturnData.same_day_delivery.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-blue-900">Same Day Delivery</h3>
                      <p className="text-sm text-blue-700">Charge: ৳{shippingReturnData.same_day_delivery.charge}</p>
                      <p className="text-xs text-blue-600">{shippingReturnData.same_day_delivery.conditions}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Return & Exchange Policy */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <GiReturnArrow className="w-7 h-7 text-purple-600" />
              Return & Exchange
            </h2>
            
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-xl p-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
                    {shippingReturnData.return_policy.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Return Policy</h3>
                    <p className="text-sm text-gray-600">Return Window: <span className="font-medium">{shippingReturnData.return_policy.return_window}</span></p>
                    <ul className="mt-2 space-y-1">
                      {shippingReturnData.return_policy.conditions.map((condition, idx) => (
                        <li key={idx} className="text-xs text-gray-500 flex items-center gap-1">
                          <span className="text-green-500">✓</span> {condition}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-xl p-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center">
                    {shippingReturnData.exchange_policy.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Exchange Policy</h3>
                    <p className="text-sm text-gray-600">
                      Available: {shippingReturnData.exchange_policy.available ? "✅ Yes" : "❌ No"}
                    </p>
                    <p className="text-xs text-gray-500">Processing: {shippingReturnData.exchange_policy.processing_time}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <HiShieldCheck className="w-7 h-7 text-blue-600" />
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-3">
            {faqData.map((faq) => (
              <div key={faq.id} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <span className="text-2xl text-gray-400">
                    {openFaqId === faq.id ? "−" : "+"}
                  </span>
                </button>
                {openFaqId === faq.id && (
                  <div className="px-6 pb-4 pt-0 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-6 text-center">We Accept All Major Payment Methods</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {paymentMethods.map((method, idx) => (
              <div key={idx} className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-3 text-center text-blue-800 hover:bg-opacity-30 transition-all group">
                <div className={`${method.color} mb-2 flex justify-center`}>
                  {method.icon}
                </div>
                <p className="text-sm font-medium">{method.name}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm mt-6 text-blue-100">
            🔒 All transactions are 100% secure and encrypted
          </p>
        </div>

        {/* Footer Note */}
        
      </div>
    </div>
  );
};

export default CommonComponnent;
