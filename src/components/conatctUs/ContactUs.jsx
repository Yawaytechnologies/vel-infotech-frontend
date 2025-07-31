import React from 'react';

const ContactHeader = () => {
  return (
    <div className="w-full bg-white flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-[#005BAC] text-4xl font-bold mb-5">
        Contact Us
      </h1>
      <p className="text-gray-700 max-w-2xl text-2xl ">
        Wanna share something with us? Please reach out, we would love to help you!
      </p>
    </div>
  );
};

export default ContactHeader;
