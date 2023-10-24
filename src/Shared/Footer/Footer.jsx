import React from 'react';
import logo from '../../assets/logo.png'
import './Footer.css'
import { BiSolidPhoneCall, BiLocationPlus } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className=" text-white ">
      <div className=" footer-image   py-20 ">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 pl-5 md:px-6 lg:pl-0 ">
          <div className="md:col-span-3 lg:col-span-1 space-y-4 text-gray-400 lg:pl-4">
            <img className='h-20 ' src={logo} alt="" />
            <p>Lorem ipsum dolor, sit amet earum consectetur adipisicing elit. Cupiditate rerum quidem fugiat sapiente! Iusto quae perspiciatis, repudiandae ipsam minus et ex, aliquid dolor molestias, earum enim officiis porro obcaecati.</p>
          </div>
          <div className="md:col-span-1 ">
            <h2 className="text-2xl font-bold mb-4  primary-text">Departments</h2>
            <ul className='space-y-3'>
              <li className="text-gray-400 hover:translate-x-1 duration-300 "><a href="/" >Surgery & Radiology</a></li>
              <li className="text-gray-400 hover:translate-x-1 duration-300 "><a href="/" >Children Care</a></li>
              <li className="text-gray-400 hover:translate-x-1 duration-300 "><a href="/" >Orthopedics</a></li>
              <li className="text-gray-400 hover:translate-x-1 duration-300 "><a href="/" >Nuclear Magnetic</a></li>
              <li className="text-gray-400 hover:translate-x-1 duration-300 "><a href="/" >Eye Treatment</a></li>
              <li className="text-gray-400 hover:translate-x-1 duration-300 "><a href="/" >X-Ray</a></li>
            </ul>
          </div>


          <div className="md:col-span-1 pr-2">
            <h2 className="text-2xl font-bold mb-4  primary-text">Opening Hours</h2>
            <div className='flex justify-between border-b-2 border-[#74d1c6] pb-4'>
              <p>Mon-Tue:</p>
              <p>6:00 AM - 10:00 PM</p>
            </div>
            <div className='flex justify-between border-b-2 border-[#74d1c6] py-4'>
              <p>Wed-Thu:</p>
              <p>6:00 AM - 10:00 PM</p>
            </div>
            <div className='flex justify-between border-b-2 border-[#74d1c6] py-4'>
              <p>Fri:</p>
              <p>6:00 AM - 04:00 PM</p>
            </div>
            <div className='flex justify-between border-b-2 border-[#74d1c6] py-4'>
              <p>Sun:</p>
              <p>closed</p>
            </div>
          </div>
          <div className='space-y-4'>
            <h1 className="text-2xl font-bold mb-4  primary-text">Get In Touch</h1>
            <div className='flex gap-1'>
              <BiSolidPhoneCall className='mt-1 text-lg primary-text' />
              <div>
                Hotline:<br />
                Phone: +8801331-5656565
              </div>
            </div>
            <div className='flex gap-1'>
              <AiOutlineMail className='mt-1 text-lg primary-text' />
              <div>
                Email:<br />
                doctorservicebd@gmail.com
              </div>
            </div>
            <div className='flex gap-1'>
              <BiLocationPlus className='mt-1 text-lg primary-text'  />
              <div>
                Address:<br />
                Islami Bank Hospital, Building-1,Rajshahi.
              </div>
            </div>
          </div>
        </div>

      </div>
      <p className="text-center text-sm bg-[#2f0a17ea] py-6">&copy; {new Date().getFullYear()} Doctor Service. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
