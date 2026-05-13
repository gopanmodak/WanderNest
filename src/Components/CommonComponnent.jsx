import { useState } from 'react';
import {
  FaPlaneDeparture,
  FaPassport,
  FaHotel,
  FaCcVisa,
  FaCcMastercard,
  FaMoneyBillWave,
  FaRocket,
  FaMapMarkedAlt,
  FaExchangeAlt
} from 'react-icons/fa';

import {
  MdSecurity,
  MdVerified,
  MdSupportAgent,
  MdFlightTakeoff,
  MdTravelExplore
} from 'react-icons/md';

import {
  HiShieldCheck,
  HiTruck
} from 'react-icons/hi';

import {
  AiOutlineBank
} from 'react-icons/ai';

import {
  IoWalletOutline
} from 'react-icons/io5';

const CommonComponent = () => {

 
  const faqData = [
    {
      id: 1,
      question: "How do I book a tour package?",
      answer:
        "You can book directly from our website by selecting your preferred package, travel date, and completing the payment process."
    },
    {
      id: 2,
      question: "Do you provide visa assistance?",
      answer:
        "Yes, we provide visa processing support for selected countries along with documentation guidance."
    },
    {
      id: 3,
      question: "Can I customize my travel package?",
      answer:
        "Absolutely! We offer fully customizable travel packages based on your budget, destination, and travel preferences."
    },
    {
      id: 4,
      question: "What payment methods do you accept?",
      answer:
        "We accept Cash, bKash, Nagad, Rocket, Visa, MasterCard, and online bank transfers."
    },
    {
      id: 5,
      question: "Do you offer group discounts?",
      answer:
        "Yes. We provide special discounts for family tours, corporate trips, and large travel groups."
    },
    {
      id: 6,
      question: "How can I contact support during travel?",
      answer:
        "Our support team is available 24/7 via phone, WhatsApp, and email during your journey."
    }
  ];

  
  const travelServices = {
    domesticTours: {
      title: "Domestic Tours",
      description: "Explore beautiful destinations across Bangladesh.",
      icon: <FaMapMarkedAlt className="w-8 h-8 text-blue-500" />
    },

    internationalTours: {
      title: "International Tours",
      description: "Travel the world with affordable packages.",
      icon: <FaPlaneDeparture className="w-8 h-8 text-purple-500" />
    },

    visaSupport: {
      title: "Visa Assistance",
      description: "Professional visa processing and documentation support.",
      icon: <FaPassport className="w-8 h-8 text-green-500" />
    },

    hotelBooking: {
      title: "Hotel Booking",
      description: "Luxury and budget hotel reservations worldwide.",
      icon: <FaHotel className="w-8 h-8 text-orange-500" />
    }
  };

  
  const trustBadges = [
    {
      id: 1,
      title: "Secure Booking",
      description:
        "Your payments and booking information are fully protected.",
      icon: <MdSecurity className="w-10 h-10 text-blue-600" />,
      highlight: "SSL Protected"
    },

    {
      id: 2,
      title: "Best Price Guarantee",
      description:
        "We provide affordable tour packages with no hidden charges.",
      icon: <IoWalletOutline className="w-10 h-10 text-green-600" />,
      highlight: "Affordable Packages"
    },

    {
      id: 3,
      title: "Verified Travel Agency",
      description:
        "Trusted by thousands of happy travelers across Bangladesh.",
      icon: <MdVerified className="w-10 h-10 text-purple-600" />,
      highlight: "Trusted Service"
    },

    {
      id: 4,
      title: "24/7 Travel Support",
      description:
        "Our support team is always ready to assist you anytime.",
      icon: <MdSupportAgent className="w-10 h-10 text-orange-600" />,
      highlight: "Always Available"
    }
  ];

  
  const paymentMethods = [
    {
      name: "Cash Payment",
      icon: <FaMoneyBillWave className="w-6 h-6" />,
      bg: "bg-green-100",
      color: "text-green-600"
    },

    {
      name: "bKash",
      icon: <AiOutlineBank className="w-6 h-6" />,
      bg: "bg-pink-100",
      color: "text-pink-600"
    },

    {
      name: "Rocket",
      icon: <FaRocket className="w-6 h-6" />,
      bg: "bg-blue-100",
      color: "text-blue-600"
    },

    {
      name: "Visa",
      icon: <FaCcVisa className="w-6 h-6" />,
      bg: "bg-indigo-100",
      color: "text-indigo-600"
    },

    {
      name: "MasterCard",
      icon: <FaCcMastercard className="w-6 h-6" />,
      bg: "bg-purple-100",
      color: "text-purple-600"
    }
  ];

  const [openFaqId, setOpenFaqId] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-sky-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">

      <div className="max-w-7xl mx-auto">

      
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Travel & Tour Services
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover amazing destinations, affordable tour packages,
            visa assistance, and unforgettable travel experiences.
          </p>

          <div className="w-28 h-1 bg-linear-to-r from-sky-500 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </div>

        
        <div className="mb-16">

          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Why Travel With Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {trustBadges.map((badge) => (
              <div
                key={badge.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center hover:-translate-y-1"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 bg-linear-gradient-to-br from-sky-50 to-purple-50 rounded-full flex items-center justify-center">
                    {badge.icon}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {badge.title}
                </h3>

                <p className="text-sm text-gray-600 mb-3">
                  {badge.description}
                </p>

                <span className="inline-block text-xs font-medium text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
                  {badge.highlight}
                </span>
              </div>
            ))}
          </div>
        </div>

       
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">

         
          <div className="bg-white rounded-2xl shadow-lg p-6">

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <MdTravelExplore className="w-7 h-7 text-sky-600" />
              Our Services
            </h2>

            <div className="space-y-4">

              {Object.values(travelServices).map((service, idx) => (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-4">

                    <div className="w-14 h-14 bg-sky-50 rounded-lg flex items-center justify-center">
                      {service.icon}
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {service.title}
                      </h3>

                      <p className="text-sm text-gray-600">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          
          <div className="bg-white rounded-2xl shadow-lg p-6">

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <HiShieldCheck className="w-7 h-7 text-purple-600" />
              Travel Support
            </h2>

            <div className="space-y-4">

              <div className="border border-gray-200 rounded-xl p-4">
                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
                    <MdFlightTakeoff className="w-7 h-7 text-purple-500" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Flight Assistance
                    </h3>

                    <p className="text-sm text-gray-600">
                      Get the best deals on domestic and international flights.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-xl p-4">
                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center">
                    <FaExchangeAlt className="w-7 h-7 text-indigo-500" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Flexible Rescheduling
                    </h3>

                    <p className="text-sm text-gray-600">
                      Easy date changes and package rescheduling options.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-xl p-4">
                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                    <HiTruck className="w-7 h-7 text-green-500" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Fast Booking Confirmation
                    </h3>

                    <p className="text-sm text-gray-600">
                      Instant booking confirmation through email and SMS.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">

          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <HiShieldCheck className="w-7 h-7 text-sky-600" />
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">

            {faqData.map((faq) => (
              <div
                key={faq.id}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">
                    {faq.question}
                  </span>

                  <span className="text-2xl text-gray-400">
                    {openFaqId === faq.id ? "−" : "+"}
                  </span>
                </button>

                {openFaqId === faq.id && (
                  <div className="px-6 pb-4 pt-0 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

       
        <div className="bg-linear-to-r from-sky-600 to-indigo-700 rounded-2xl shadow-xl p-8 text-white">

          <h2 className="text-2xl font-bold mb-6 text-center">
            Flexible Payment Options
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

            {paymentMethods.map((method, idx) => (
              <div
                key={idx}
                className="bg-white/20 backdrop-blur-md rounded-xl p-4 text-center hover:bg-white/30 transition-all"
              >
                <div className={`${method.color} flex justify-center mb-2`}>
                  {method.icon}
                </div>

                <p className="text-sm font-medium">
                  {method.name}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-sm mt-6 text-sky-100">
            🔒 Safe, Secure & Trusted Payment System
          </p>
        </div>

      </div>
    </div>
  );
};

export default CommonComponent;



