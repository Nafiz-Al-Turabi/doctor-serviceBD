import React from 'react';
import doctor from '../../assets/doctors/doctor1.png'
import { HiNewspaper, HiAcademicCap } from "react-icons/hi2";
import { BiSolidMoviePlay } from "react-icons/bi";

const DoctorDetails = () => {
    return (
        <div className='py-36'>
            <div className='w-[90%] mx-auto'>
                <div className='mb-5 lg:w-[60%] shadow-xl rounded-xl'>
                    <div className='primary-bg p-2 rounded-tl-lg rounded-tr-lg'>
                        <p className='text-lg font-bold text-white'>General info</p>
                    </div>
                    <div className=' flex p-10 gap-5 '>
                        <div>
                            <img className='w-64 h-64 border-2' src={doctor} alt="" />
                        </div>
                        <div className='space-y-3'>
                            <div>
                                <p className='text-slate-300 font-bold uppercase'>Specialist: Cancer</p>
                                <h1 className='text-3xl primary-text font-semibold'>Dr. Helena Haque</h1>
                            </div>
                            <div>
                                <p className='text-gray-600 font-semibold'>Address</p>
                                <p className='secondary-text'>2726 Shinn Street, Rajshahi </p>
                            </div>
                            <div>
                                <p className='text-gray-600 font-semibold'>Phone</p>
                                <p className='text-[#e74e84]'>+8801755-659841 - +881656-232548</p>
                            </div>
                        </div>
                    </div>
                    <hr className='my-5 ' />
                    <div className='px-10'>
                        <p className='text-gray-500 text-lg font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure eaque error aliquid autem incidunt qui maxime impedit temporibus. Voluptatibus, quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum facere quasi praesentium architecto molestiae quia beatae! Blanditiis ut nobis odit!</p>
                    </div>
                    <div className='p-10'>
                        <div className='flex  space-x-4'>
                            <HiNewspaper className='text-6xl text-gray-400' />
                            <div>
                                <h2 className='text-3xl'>Education</h2>
                                <p className='secondary-text'>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className='pl-[76px] mt-4'>
                            <p className='flex items-center text-gray-500'> <HiAcademicCap />New York Medical College - Doctor of Medicine</p>
                            <p className='flex items-center text-gray-500'> <HiAcademicCap />Montefiore Medical Center - Residency in Internal Medicine</p>
                            <p className='flex items-center text-gray-500'> <HiAcademicCap />New York Medical College - Master Internal Medicine</p>
                        </div>
                    </div>
                    <div className='p-10'>
                        <div className='flex  space-x-4'>
                            <BiSolidMoviePlay className='text-6xl text-gray-400' />
                            <div>
                                <h2 className='text-3xl'>Video Intro</h2>
                            </div>
                        </div>
                        <div className='flex justify-center '>
                            <iframe className='h-[300px] w-[600px] rounded-xl' src="https://www.youtube.com/embed/jsbeelgD2rQ?list=RDjsbeelgD2rQ" title="Fifth Harmony - All In My Head (Flex) (Official Video) ft. Fetty Wap" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>

                    </div>
                </div>
                <div className='bg-white lg:w-[33%] lg:fixed top-[183px] right-[76px] shadow-xl rounded-xl'>
                    <div className='primary-bg p-4 rounded-tl-lg rounded-tr-lg'>
                        <h1 className='text-3xl font-bold text-white '>Book a Visit</h1>
                        <p className='text-gray-100'>Monday to Friday 09.00am-06.00pm</p>
                    </div>
                    <div>
                        <h1 className='text-xl text-[#e74e84] p-4 font-bold '><span className='text-gray-600'>Appointment charge: </span>
                            New Patient: 500tk
                        </h1>
                        <h1 className='text-xl text-[#e74e84] p-4 font-bold '><span className='text-gray-600'>Appointment charge: </span>
                            Old Patient: 500tk
                        </h1>
                    </div>
                    <hr />
                    <div className='flex justify-center my-5 py-5'>
                        <button className='bg-[#e74e84] text-xl text-white font-bold w-[95%] hover:bg-[#74d1c6] duration-300 p-3 rounded-full'>Appointment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorDetails;