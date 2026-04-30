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
                path: "hotels",
                element: <Hotel />,
                loader:async ()=> {
                    const response = await fetch('/hotels.json');
                    return response.json();
                }
            },
            {
                path: "visa",
                element:<Visa />
            },
            {
                path: "tours",
                element: <Tour />
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
                path: "login",
                element: <Login />
            },
            {
                path: "signup",
                element: <Signup />
            }
        ]
    }
])
            