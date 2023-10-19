import React from "react";
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiPaperPlane,BiTime,BiPhoneCall } from "react-icons/bi";

const HeaderContact = () => {
  return (
    <div className="container mx-auto hidden md:block lg:block py-2 px-4">
      <div className="flex justify-between items-center">
        <div className="flex space-x-10">
          <p className="secondary-text flex items-center space-x-2 hover:text-[#74d1c6] duration-300"><BiTime className="primary-bg text-white text-2xl rounded-full p-1 mr-2" /> Mon-Fri 9am-5pmCall</p>
          <p className="secondary-text flex items-center space-x-2 hover:text-[#74d1c6] duration-300"><BiPhoneCall className="primary-bg text-white text-2xl rounded-full p-1 mr-2" />Call Us: 01700-678909</p>
          <p className="secondary-text flex items-center space-x-2 hover:text-[#74d1c6] duration-300"><BiPaperPlane className="primary-bg text-white text-2xl rounded-full p-1 mr-2" />Email: doctorservice@gmail.com</p>
        </div>
        <div className="flex space-x-2">
          <a href="">
            < BiLogoFacebook className="text-2xl text-white hover:text-[#e74e84] hover:bg-slate-800 duration-300 primary-bg rounded-full p-1" />
          </a>
          <a href="">
            < BiLogoInstagram className="text-2xl text-white hover:text-[#e74e84] hover:bg-slate-800 duration-300 primary-bg rounded-full p-1" />
          </a>
          <a href="">
            < BiLogoTwitter className="text-2xl text-white hover:text-[#e74e84] hover:bg-slate-800 duration-300 primary-bg rounded-full p-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderContact;
