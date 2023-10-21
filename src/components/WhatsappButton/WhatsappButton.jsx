import React from 'react';

const WhatsappButton = () => {
  const handleWhatsAppButtonClick = () => {
    const phoneNumber = '+8801747206719'; // Replace with the actual phone number
    const message = 'Hello, I have a question.';

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, '_blank');
  };

  return (
    <button
      className="fixed bottom-32 -right-2 p-4 cursor-pointer "
      onClick={handleWhatsAppButtonClick}
    >
      <img className='w-16 h-16' src="https://i.ibb.co/pPWxwKh/whatsapp.gif" alt="" />
    </button>
  );
};

export default WhatsappButton;
