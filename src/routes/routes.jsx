import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Flight from "../Pages/Flight";
import Hotel from "../Pages/Hotel";
import Visa from "../Pages/Visa";
import Tour from "../Pages/Tour";
import Services from "../Pages/Services";
import Explore from "../Pages/Explore";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import TermsConditions from "../Pages/TermsConditions";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import RefundsReturn from "../Pages/RefundsReturn";
import About from "../Pages/About";
import HajjAndUmrah from "../Pages/HajjAndUmrah";
import EMIPage from "../Components/EMIPage";
import HotelDetailsPage from "../Pages/HotelDetailsPage";
import TourDetailPages from "../Pages/TourDetailPages";
import VisaDetailsPage from "../Pages/VisaDetailsPage";
import ExploreDetailsPages from "../Pages/ExploreDetailsPages";
import HajjAndUmrahDetailsPages from "../Pages/HajjAndUmrahDetailsPages";
import FlightDetailsPages from "../Pages/FlightDetailsPages";

export const router = createBrowserRouter ([

    {
        path: "/",
        element: <App />,
        children:[

            {
                index:true,
                element: <Home />
            },
            {
                path: "flights",
                element: <Flight />
            },
            {
                path: "flight/:id",
                element: <FlightDetailsPages />
            },
            {
                path: "hotels",
                element: <Hotel />,
            },
            {
                path: "hotels/:id",
                element: <HotelDetailsPage />
            },
            {
                path: "visa",
                element:<Visa />
            },
            {
                path: "visa/:id",
                element: <VisaDetailsPage />
            },
            {
                path: "tours",
                element: <Tour />
            },
            {
                path: "tours/:id",
                element: <TourDetailPages />
            },
            {
                path: "services",
                element:<Services />
            },
            {
                path: "explore",
                element: <Explore />
            },
            {
                path: "explore/:id",
                element: <ExploreDetailsPages />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "signup",
                element: <Signup />
            },
            {
                path:"terms-conditions",
                element: <TermsConditions />
            },
            {
                path: "privacy-policy",
                element: <PrivacyPolicy />
            },
            {
                path: "refunds-return",
                element: <RefundsReturn />
            },
            {
                path: "about",
                element: <About />
            },
        {

            path: "hajj-umrah",
            element: <HajjAndUmrah />
        },
        {
            path: "hajj-umrah/:id",
            element: <HajjAndUmrahDetailsPages />
        },
        {
            path:"emi",
            element: <EMIPage />
        }
            
        ]
    }
])
            