import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg';
import { AuthContext } from "../../Provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };

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

  const { user, logOut } = useContext(AuthContext)

  const handleSignOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.error(error.message))
  }

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
          <div>
            {
              user ? <div className="relative">
                <button onClick={toggleContent}>
                  <img className="h-10 w-10 rounded-full border-2 border-"
                    src={user.photoURL}
                    alt={user.displayName}
                  />
                </button>
                {isVisible && (
                  <div className="my-10 absolute top-2 right-0">
                    <div className="">
                      <div className="bg-white rounded overflow-hidden shadow-lg w-56">
                        <div className="text-center p-6  border-b">
                          <img
                            className="h-24 w-24 rounded-full mx-auto"
                            src={user ? user.photoURL : 'https://simgbb.com/avatar/WvCpKNmrzHrJ.jpg'}
                            alt={user ? user.displayName : 'Default Alt Text'}
                          />
                          <p className="pt-2 text-lg font-semibold">{
                            user ? user.displayName : "User name"
                          }</p>
                          <p className="text-sm text-gray-600">
                            {
                              user.email
                            }
                          </p>
                          <div className="mt-5">
                            <a
                              href="#"
                              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-700"
                            >
                              Manage your Account
                            </a>
                          </div>
                        </div>
                        <div className="border-b">
                          <a href="#" className="px-4 py-2 hover:bg-gray-100 flex">
                            <div className="text-gray-800">
                              <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1"
                                viewBox="0 0 24 24"
                                className="w-5 h-5"
                              >
                                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            </div>
                            <div className="pl-3">
                              <p className="text-sm font-medium text-gray-800 leading-none">Add members</p>
                              <p className="text-xs text-gray-500">Add/manage users &amp; teams</p>
                            </div>
                          </a>
                          <a href="#" className="px-4 py-2 hover:bg-gray-100 flex">
                            <div className="text-gray-800">
                              <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1"
                                viewBox="0 0 24 24"
                                className="w-5 h-5"
                              >
                                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            </div>
                            <div className="pl-3">
                              <p className="text-sm font-medium text-gray-800 leading-none">Account settings</p>
                              <p className="text-xs text-gray-500">Usage, billing, branding, teams</p>
                            </div>
                          </a>
                          <a href="#" className="px-4 py-2 hover:bg-gray-100 flex">
                            <div className="text-gray-800">
                              <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1"
                                viewBox="0 0 24 24"
                                className="w-5 h-5"
                              >
                                <path d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div className="pl-3">
                              <p className="text-sm font-medium text-gray-800 leading-none">Personal settings</p>
                              <p className="text-xs text-gray-500">Email, profile, notifications</p>
                            </div>
                          </a>
                          <a href="#" className="px-4 py-2 hover:bg-gray-100 flex">
                            <div className="text-green-600">
                              <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1"
                                viewBox="0 0 24 24"
                                className="w-5 h-5"
                              >
                                <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                              </svg>
                            </div>
                            <div className="pl-3">
                              <p className="text-sm font-medium text-gray-800 leading-none">
                                Apps &amp; integrations
                              </p>
                              <p className="text-xs text-gray-500">Google, slack, mail</p>
                            </div>
                          </a>
                        </div>

                        <div className="">

                          <a href="#" className="px-4 py-2 pb-4 hover:bg-gray-100 flex">
                            <p onClick={handleSignOut} className="text-sm font-medium text-gray-800 leading-none">Logout</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
                : <Link to="/login" className="bg-transparent border border-white hover:border-[#e74e84] hover:bg-[#e74e84] duration-300 ease-linear text-white px-4 py-2 rounded-lg">
                  Login
                </Link>
            }
          </div>
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
