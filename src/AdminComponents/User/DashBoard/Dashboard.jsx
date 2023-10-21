import React, { useState } from 'react';
import { FaUserGroup, FaUserDoctor, FaCalendarPlus } from "react-icons/fa6";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Chart from '../Chart';
import { Link } from 'react-router-dom';


const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div >
            <div className='flex justify-between'>
                <h2 className="text-gray-500 font-semibold mb-4">Dashboard / <span className='primary-text'>Home</span></h2>
                <div className="relative inline-block text-left z-40">
                    <button
                        onClick={toggleDropdown}
                        className="primary-text bg-gray-50 shadow-lg rounded-lg p-2 hover:bg-[#74d1c6] hover:text-white flex items-center text-xl gap-1 font-bold duration-300 ease-in-out"
                    >
                        Add <AiOutlinePlusCircle className="text-2xl" />
                    </button>

                    {isOpen && (
                        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                {/* Your dropdown items go here */}
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                    Add Doctor
                                </a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                    Add Hospital
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-5 mt-20'>
                <div className="bg-gray-50 h-[120%] shadow-lg rounded-lg relative  ">
                    <div className='float-right p-3 '>
                        <p className='text-gray-600 text-md font-semibold '>Total Patient</p>
                        <p className='float-right text-5xl font-bold text-emerald-500'>56</p>
                    </div>
                    <div className='flex justify-center pt-5 h-20 w-20 bg-emerald-500 absolute -top-10 left-4 shadow-lg shadow-emerald-500/50 rounded-lg'>
                        <FaUserGroup className='text-4xl text-white ' />
                    </div>
                </div>

                <div className="bg-gray-50 h-[120%] shadow-lg rounded-lg relative ">
                    <div className='float-right p-3 '>
                        <p className='text-gray-600 text-md font-semibold '>Total Doctors</p>
                        <p className='float-right text-5xl font-bold text-[#74d1c6] '>93</p>
                    </div>
                    <div className='flex justify-center pt-5 h-20 w-20 bg-[#74d1c6] absolute -top-10 left-4 shadow-lg shadow-[#74d1c6] rounded-lg'>
                        <FaUserDoctor className='text-4xl text-white ' />
                    </div>
                </div>

                <div className="bg-gray-50 h-[120%] shadow-lg rounded-lg relative ">
                    <div className='float-right p-3 '>
                        <p className='text-gray-600 text-md font-semibold '>Appointment</p>
                        <p className='float-right text-5xl font-bold text-rose-500'>56</p>
                    </div>
                    <div className='flex justify-center pt-5 h-20 w-20 bg-rose-500 absolute -top-10 left-4 shadow-lg shadow-rose-500/50 rounded-lg'>
                        <FaCalendarPlus className='text-4xl text-white ' />
                    </div>
                </div>
            </div>
            <Chart></Chart>

        </div>
    );
};

export default Dashboard;