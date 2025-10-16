import React from 'react';

const ContactHeader = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Left Column */}
      <div>
        {/* ✅ Page-level H1 */}
        <h1 className="text-[#005BAC] text-4xl font-bold mb-5 text-center">
          Contact Us
        </h1>
        <p className="text-gray-700 max-w-2xl text-2xl text-center">
          Wanna share something with us? Please reach out, we would love to help you!
        </p>
      </div>

      {/* Right Column */}
      <div>
        <div className="bg-white shadow-lg p-6 mr-8 mt-8">
          <img
            src="public/images/Contact.avif"
            alt="Contact illustration"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;
