import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import { AuthContext } from "../../Provider/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";

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

  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.error(error.message));
  };

  const navbarClass = isSticky
    ? "primary-bg p-4 fixed w-full z-50 top-0 animated shadow-2xl"
    : "primary-bg p-4 fixed w-full z-50";

  // TODO admin
  const isAdmin =useAdmin();
  // console.log("isAdmin:", isAdmin);

  return (
    <nav className={navbarClass}>
      <div className="flex items-center justify-between">
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
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
        <div className="flex items-center mr-4">
          <img src={logo} alt="Logo" className="h-12   hover:" />
        </div>

        <div className="hidden md:hidden lg:flex space-x-4 items-center">
          <Link to="/" className="text-white font-medium hover:text-[#e74e84] duration-300">
            Home
          </Link>
          <Link to="/finddoctor" className="text-white font-medium hover:text-[#e74e84] duration-300">
            Find Doctors
          </Link>
          <Link to="/" className="text-white font-medium hover:text-[#e74e84] duration-300">
            Diagnostic
          </Link>
          <Link to="/doctorDetails" className="text-white font-medium hover:text-[#e74e84] duration-300">
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

        </div>
        <div className="lg:flex items-center space-x-4 ml-auto">
          {user ? (
            <div className="relative">
              <button onClick={toggleContent}>
                <img
                  className="h-10 w-10 rounded-full border-2 border-"
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
                          src={
                            user ? user.photoURL : 'https://simgbb.com/avatar/WvCpKNmrzHrJ.jpg'
                          }
                          alt={user ? user.displayName : 'Default Alt Text'}
                        />
                        <p className="pt-2 text-lg font-semibold">
                          {user ? user.displayName : "User name"}
                        </p>
                        <p className="text-sm text-gray-600">{user.email}</p>
                        <div className="mt-5">
                          {
                            isAdmin ?
                              <Link to="/admin/dashboard"
                                className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-700"
                              >
                                Manage Admin Account
                              </Link>
                              :
                              <Link to="/admin/userDashboard"
                                className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-700"
                              >
                                Manage your Account
                              </Link>
                          }
                        </div>
                      </div>
                      <div className="border-b">
                        {/* User profile dropdown options */}
                      </div>
                      <div className="">
                        <a href="#" className="px-4 py-2 pb-4 hover-bg-gray-100 flex">
                          <p onClick={handleSignOut} className="text-sm font-medium text-gray-800 leading-none">
                            Logout
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-transparent border border-white hover-border-[#e74e84] hover-bg-[#e74e84] duration-300 ease-linear text-white px-4 py-2 rounded-lg"
            >
              Login
            </Link>
          )}
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
