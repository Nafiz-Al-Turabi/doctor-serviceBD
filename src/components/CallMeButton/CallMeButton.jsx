import React from 'react';
import { BiPhoneCall } from "react-icons/bi";

const CallMeButton = () => {
  const handleCallMeButtonClick = () => {
    const phoneNumber = '+8801747206719';
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="fixed bottom-16 right-0 p-4 ">
      <button
        className="primary-bg hover:bg-[#e74e84] duration-500 rounded-full text-white font-bold py-2 px-2"
        onClick={handleCallMeButtonClick}
      >
        <BiPhoneCall className='w-8 h-8 '/>
      </button>
      <div className='w-8 h-8 bottom-[87px] fixed right-6 rounded-full p-4 secondary-bg animate-ping -z-10 '></div>
    </div>
  );
};

export default CallMeButton;

