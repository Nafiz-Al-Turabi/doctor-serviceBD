import React from 'react';
import doctor from '../../assets/doctors/doctor5.jpg'
import { BsCheck2Square } from "react-icons/bs";
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className='py-20'>
            <div className='grid grid-cols-0 md:grid-cols-1 lg:grid-cols-2 w-[90%] mx-auto md:gap-6 lg:gap-20'>
                <div className='hidden md:block lg:block'>
                    <img className='md:h-full lg:h-[600px] ' src={doctor} alt="" />
                </div>
                <div>
                    <p className='primary-text font-semibold mb-4'>About us</p>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-2'>We are trusted The Best Certificate Healthcare</h1>
                    <p className='secondary-text mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    <div className='space-y-5 mb-16'>
                        <p className='about-item flex items-center font-bold secondary-text'> <BsCheck2Square className='about-icon mr-2'/> Scientific skills for getting a better result </p>
                        <p className='about-item flex items-center font-bold secondary-text'> <BsCheck2Square className='about-icon mr-2'/> A good environment for work </p>
                        <p className='about-item flex items-center font-bold secondary-text'> <BsCheck2Square className='about-icon mr-2'/> Professional doctors </p>
                        <p className='about-item flex items-center font-bold secondary-text'> <BsCheck2Square className='about-icon mr-2'/> Digital laboratory </p>
                        <p className='about-item flex items-center font-bold secondary-text'> <BsCheck2Square className='about-icon mr-2'/> Emergency services </p>
                    </div>
                    <a href="" className='text-white font-bold primary-bg px-5 py-3 rounded-lg hover:bg-[#e74e84] hover:text-white duration-300  ' >About Us</a>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;