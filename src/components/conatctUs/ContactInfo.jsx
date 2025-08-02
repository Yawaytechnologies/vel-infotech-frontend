// ContactInfo.jsx
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <div className="w-full px-4 py-10 bg-white">
      <hr className="border-t-2 border-[#005BAC] my-6" />
      <h1 className="bg-white text-[#005BAC] text-4xl font-bold mt-2 text-center mx-auto">
  Reach Us Directly
</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-8">
  
  {/* Phone */}
  <div className="border border-gray-300 rounded-lg p-6">
    <div className="flex justify-center mb-4 text-4xl text-blue-500">
      <FaPhoneAlt />
    </div>
    <h2 className="text-xl font-bold mb-2">Phone</h2>
    <p className="text-gray-600">Please call us and we will be happy to assist you.</p>
    <p className="text-gray-600">We work with you, not for you.</p>
    <p className="mt-3 font-bold text-black">
      <a href="tel:7667662428" className="hover:underline">+91-7669 100 251</a>
    </p>
  </div>

  {/* Email */}
  <div className="border border-gray-300 rounded-lg p-6">
    <div className="flex justify-center mb-4 text-4xl text-orange-500">
      <FaEnvelope />
    </div>
    <h2 className="text-xl font-bold mb-2">Email</h2>
    <p className="text-gray-600">Please email contact form and we will be happy to assist you.</p>
    <p className="text-gray-600">We work with you, not for you.</p>
    <p className="mt-3 font-bold text-black">
      <a href="mailto:info@velinfotech.com" className="hover:underline">
        info@velinfotech.com
      </a>
    </p>
  </div>

  {/* Location */}
  <div className="border border-gray-300 rounded-lg p-6">
    <div className="flex justify-center mb-4 text-4xl text-yellow-500">
      <FaMapMarkerAlt />
    </div>
    <h2 className="text-xl font-bold mb-2">Location</h2>
    <p className="text-gray-600">Vel Infotech Private Limited</p>
    <p className="text-gray-600">5/69, 3rd Main Rd, Kalaimagal Nagar,</p>
    <p className="text-gray-600">Ekkatuthangal, Chennai, Tamil Nadu 600032</p>
    <p className="mt-3 font-bold text-black underline">
      <a href="https://maps.app.goo.gl/hUTPZSHPgUJAKbu39" className="hover:underline" target="_blank" rel="noopener noreferrer">
        View On Google Map
      </a>
    </p>
  </div>

</div>

    </div>
  );
};

export default ContactInfo;
