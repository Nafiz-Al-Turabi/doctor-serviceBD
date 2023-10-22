import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import logo from '../../assets/logo.svg';
import { Link } from "react-router-dom";

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
      <div className="container mx-auto flex justify-between items-center ">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 hover:" />
        </Link>
        <div className="hidden md:hidden lg:flex space-x-4">
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
          <button className="hidden md:block lg:block -mt-2">
            < BiUserCircle className="text-4xl text-white" />
          </button>
        </div>

        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white p-2 focus:outline-none"
          >
            {isOpen ? <AiOutlineClose className="text-3xl" /> : <RxHamburgerMenu className="text-3xl" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden">
          <div className="flex flex-col mt-2 space-y-2">
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
            <button className="hidden md:block lg:block -mt-2">
              < BiUserCircle className="text-4xl text-white" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
