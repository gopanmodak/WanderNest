import { motion } from "framer-motion";
import { useContext } from "react";
import { HiCheck } from "react-icons/hi";
import { PuffLoader } from "react-spinners";
import ServicesPage from "../Components/ServicesPage";
import { AuthProvider } from "../Context/AuthContext";

const Services = () => {
  const { services, loading } = useContext(AuthProvider);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <PuffLoader color="#36d7b7" />
      </div>
    );
  }
  return (
    <div className="my-20 font-sans">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center text-3xl font-sans font-bold"
      >
        Our Premium Services
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center text-lg my-3 mb-10 font-sans p-3 text-gray-600"
      >
        Everything you need for a seamless travel experience - from bookings to
        support
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto mt-10 px-5">
        {services.map((service) => (
          <ServicesPage service={service} key={service.id} />
        ))}
      </div>

      <div className="text-center mt-20 p-5 bg-gray-100 rounded-lg">
        <h1 className="text-2xl font-bold">Simple, Transparent Pricing</h1>
        <p className="my-3">
          No hidden fees, no surprises. Just great service at a fair price.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto mt-10">
          <div className="border border-gray-300 rounded-lg p-5 mt-5 hover:shadow-lg transition-shadow duration-300 hover:border-blue-400">
            <h3 className="text-xl font-bold text-start">Basic Plan</h3>
            <p className="text-gray-600 text-start">
              Perfect for occasional travelers
            </p>
            <ul className="text-md list-disc list-inside my-2">
              <li className="flex items-center gap-2">
                {" "}
                <span>
                  <HiCheck className="text-blue-400 " />
                </span>{" "}
                Flight booking
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <span>
                  <HiCheck className="text-blue-400 " />
                </span>{" "}
                Basic customer support
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <span>
                  <HiCheck className="text-blue-400 " />
                </span>{" "}
                Basic support
              </li>
            </ul>
            <button className="btn btn-outline btn-primary mt-2">
              Get Start
            </button>
          </div>

          <div className="border border-gray-300 rounded-lg p-5 mt-5 hover:shadow-lg transition-shadow duration-300 hover:border-blue-400">
            <h3 className="text-xl font-bold text-start">Corporate Plan</h3>
            <p className="text-gray-600 text-start">
              For businesses and organizations
            </p>
            <ul className="text-md list-disc list-inside my-2">
              <li className="flex items-center gap-2">
                {" "}
                <span>
                  <HiCheck className="text-blue-400 " />
                </span>
                All Premium features{" "}
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <span>
                  <HiCheck className="text-blue-400 " />
                </span>{" "}
                Bulk discounts
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <span>
                  <HiCheck className="text-blue-400 " />
                </span>{" "}
                Dedicated manager{" "}
              </li>
            </ul>
            <button className="btn btn-outline btn-warning mt-3">
              Get Start
            </button>
          </div>

          <div className="border border-gray-300 rounded-lg p-5 mt-5 hover:shadow-lg transition-shadow duration-300 hover:border-blue-400">
            <h3 className="text-xl font-bold text-start">Premium</h3>
            <p className="text-gray-600 text-start">Everything you need </p>
            <ul className="text-md list-disc list-inside my-2">
              <li className="flex items-center gap-2">
                {" "}
                <span>
                  <HiCheck className="text-blue-400 " />
                </span>{" "}
                All Premium features
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <span>
                  <HiCheck className="text-blue-400 " />
                </span>{" "}
                Priority support
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <span>
                  <HiCheck className="text-blue-400 " />
                </span>{" "}
                Dedicated manager
              </li>
            </ul>
            <button className="btn btn-outline btn-info mt-3">Get Start</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
