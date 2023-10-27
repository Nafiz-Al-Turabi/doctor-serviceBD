import React, { useState } from 'react';
import { FaBars, FaHome, FaUser, FaCog, FaSignOutAlt, FaRegHospital } from 'react-icons/fa';
import { FaUserDoctor, FaHospital } from 'react-icons/fa6';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';

const Admin = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };

    const closeDrawer = () => {
        setDrawerOpen(false);
    };
    // TODO Admin
    // const isAdmin = true;
    const isAdmin = useAdmin()
    return (
        <div className="flex h-screen">
            {/* Sidebar/Drawer (shown on mobile and tablet screens) */}
            <nav
                className={`primary-bg h-screen  md:h-[98%] lg:h-[98%] fixed  md:ml-4 lg:ml-4 md:mt-2 lg:mt-2 md:rounded-lg lg:rounded-lg p-10 text-white py-4 transition-transform transform z-50 ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
                    } md:translate-x-0`}
            >
                {
                    isAdmin ? <>
                        <div className="pl-4 pr-8">
                            <h1 className="text-xl font-semibold">Admin Admin</h1>
                        </div>
                        <ul className="mt-6 space-y-3">
                            <li>
                                <Link to="/admin/dashboard" className="flex items-center p-3 rounded-lg hover:bg-[#e74e84] duration-300">
                                    <FaHome className="mr-2" />
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link to="/admin/user" className="flex items-center p-3 rounded-lg hover:bg-[#e74e84] duration-300">
                                    <FaUser className="mr-2" />
                                    Users
                                </Link>
                            </li>
                            <li>
                                <Link to="/admin/doctors" className="flex items-center p-3 rounded-lg hover:bg-[#e74e84] duration-300">
                                    <FaUserDoctor className="mr-2" />
                                    Doctors
                                </Link>
                            </li>
                            <li>
                                <Link to="/admin/user" className="flex items-center p-3 rounded-lg hover:bg-[#e74e84] duration-300">
                                    <FaHospital className="mr-2" />
                                    Hospitals
                                </Link>
                            </li>
                            <li>
                                <Link to="/admin/user" className="flex items-center p-3 rounded-lg hover:bg-[#e74e84] duration-300">
                                    <FaRegHospital className="mr-2" />
                                    Diagnostics
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="flex items-center p-3 rounded-lg hover:bg-[#e74e84] duration-300">
                                    <FaCog className="mr-2" />
                                    Settings
                                </Link>
                            </li>
                        </ul>
                    </> : <>
                        <div className="pl-4 pr-8">
                            <h1 className="text-xl font-semibold">Dashboard</h1>
                        </div>
                        <ul className="mt-6 space-y-3">
                            <li>
                                <Link to="/admin/userDashboard" className="flex items-center p-3 rounded-lg hover:bg-[#e74e84] duration-300">
                                    <FaHome className="mr-2" />
                                    User Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="flex items-center p-3 rounded-lg hover:bg-[#e74e84] duration-300">
                                    <FaCog className="mr-2" />
                                    Settings
                                </Link>
                            </li>
                        </ul>
                    </>
                }
                <button className="md:hidden fixed top-1 right-1 rotate-180 " onClick={closeDrawer}>
                    <FaSignOutAlt className="text-gray-700 text-2xl" />
                </button>
            </nav>

            {/* Content */}
            <div className="flex-1 p-4 md:pl-72 lg:pl-72">
                {/* Hamburger button (shown on mobile and tablet screens) */}
                <button className="md:hidden" onClick={toggleDrawer}>
                    <FaBars className="text-gray-700 text-2xl" />
                </button>
                {/* <h2 className="text-xl font-semibold mb-4">Dashboard</h2> */}
                <Outlet />
            </div>
        </div>
    );
};

export default Admin;
