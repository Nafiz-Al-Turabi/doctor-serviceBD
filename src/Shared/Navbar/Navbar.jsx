import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClass = isSticky ? "primary-bg p-4 fixed w-full z-50 top-0 animated shadow-2xl" : "primary-bg p-4 fixed w-full z-50";

  return (
    <nav className={navbarClass}>
      <div className=" flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 hover:" />
        </div>
        <div className="hidden md:hidden lg:flex  space-x-4 items-center">
          <Link to="/" className="text-white font-medium hover:text-[#e74e84] duration-300">
            Home
          </Link>
          <Link to="/" className="text-white font-medium hover:text-[#e74e84] duration-300">
            Find Doctors
          </Link>
          <Link to="/" className="text-white font-medium hover:text-[#e74e84] duration-300">
            Diagnostic
          </Link>
          <Link to="/" className="text-white font-medium hover:text-[#e74e84] duration-300">
            Hospital
          </Link>
          <Link to="/" className="text-white font-medium hover:text-[#e74e84] duration-300">
            Services
          </Link>
          <Link to="/" className="text-white font-medium hover:text-[#e74e84] duration-300">
            Find Blood
          </Link>
          <Link to="/" className="text-white font-medium hover:text-[#e74e84] duration-300">
            Ambulance
          </Link>
          <Link to="/" className="text-white font-medium hover:text-[#e74e84] duration-300">
            Offers
          </Link>
          <Link to="/" className="text-white font-medium hover:text-[#e74e84] duration-300">
            Community
          </Link>
          <Link to="/" className="text-white font-medium hover:text-[#e74e84] duration-300">
            About Us
          </Link>
          <Link to="/admin/dashboard" className="text-white font-medium hover:text-[#e74e84] duration-300">
            Admin
          </Link>
          <Link to="/login" className="bg-transparent border border-white hover:border-[#e74e84] hover:bg-[#e74e84] duration-300 ease-linear text-white px-4 py-2 rounded-lg">
            Login
          </Link>
        </div>
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden text-white">
          <Link to="/" className="block text-white font-medium hover:text-[#e74e84] duration-300">
            Home
          </Link>
          <Link to="/" className="block text-white font-medium hover:text-[#e74e84] duration-300">
            Find Doctors
          </Link>
          <Link to="/" className="block text-white font-medium hover:text-[#e74e84] duration-300">
            Diagnostic
          </Link>
          <Link to="/" className="block text-white font-medium hover:text-[#e74e84] duration-300">
            Hospital
          </Link>
          <Link to="/" className="block text-white font-medium hover:text-[#e74e84] duration-300">
            Services
          </Link>
          <Link to="/" className="block text-white font-medium hover:text-[#e74e84] duration-300">
            Find Blood
          </Link>
          <Link to="/" className="block text-white font-medium hover:text-[#e74e84] duration-300">
            Ambulance
          </Link>
          <Link to="/" className="block text-white font-medium hover:text-[#e74e84] duration-300">
            Offers
          </Link>
          <Link to="/" className="block text-white font-medium hover:text-[#e74e84] duration-300">
            Community
          </Link>
          <Link to="/" className="block text-white font-medium hover:text-[#e74e84] duration-300">
            About Us
          </Link>
          <Link to="/admin/dashboard" className="text-white font-medium hover:text-[#e74e84] duration-300">
            Admin
          </Link>
          <button className="bg-blue-500 text-white w-full py-2">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
