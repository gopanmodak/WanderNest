/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";


import logo from "../assets/logo.webp";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-white shadow-md backdrop-blur-xl fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center px-4 md:px-10">
          <img src={logo} alt="" className="h-24 object-cover rounded-2xl" />
        </div>

        <div className="hidden md:flex items-center gap-10">
          <NavLink to = "/" >Home</NavLink>
          <NavLink to = "/flights">Flights</NavLink>
          <NavLink to = "/hotels">Hotels</NavLink>
          <NavLink to = "/visa">Visa</NavLink>
          <NavLink to = "/tours">Tours</NavLink>
          <NavLink to = "/services">Services</NavLink>
          <NavLink to = "/hajj-umrah">Hajj And Umrah</NavLink>
          <NavLink to = "/explore">Explore</NavLink>
        </div>

        <div className="hidden md:flex">
          <Link to="/login" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Login
          </Link>
         
        </div>

        <div className="md:hidden px-40">
            <button onClick={()=>setMenuOpen(!menuOpen)} > <RxHamburgerMenu className="text-4xl"/> </button>
        </div>

        




        {menuOpen && <div className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center gap-5 py-5 pb-2 md:hidden duration-300 transition-all ease-in-out">

          <NavLink to = "/" onClick={()=>setMenuOpen(false)}>Home</NavLink>
          <NavLink to = "/flights" onClick={()=>setMenuOpen(false)}>Flights</NavLink>
          <NavLink to = "/hotels" onClick={()=>setMenuOpen(false)}>Hotels</NavLink>
          <NavLink to = "/visa" onClick={()=>setMenuOpen(false)}>Visa</NavLink>
          <NavLink to = "/tours" onClick={()=>setMenuOpen(false)}>Tours</NavLink>
          <NavLink to = "/services" onClick={()=>setMenuOpen(false)}>Services</NavLink>
          <NavLink to = "/hajj-umrah" onClick={()=>setMenuOpen(false)}>Hajj And Umrah</NavLink>
          <NavLink to = "/explore" onClick={()=>setMenuOpen(false)}>Explore</NavLink>
           <Link to="/login" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Login
          </Link>
            
        </div>}

        


      </div>
    </div>
  );
};

export default Navbar;
