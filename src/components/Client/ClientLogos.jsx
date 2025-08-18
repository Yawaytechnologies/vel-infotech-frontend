import React from "react";

const logos = [
  { src: "public/clientlogo/capgemini.png", alt: "Capgemini" },
  { src: "public/clientlogo/accenture-logo.png", alt: "Accenture" },
  { src: "public/clientlogo/cognizant-logo_brandlogos.net_u6t45.png", alt: "Cognizant" },
  { src: "public/clientlogo/intel_2006-logo_brandlogos.net_vatnn.png", alt: "Intel" },
  { src: "public/clientlogo/hcl-technologies-vector-logo.png", alt: "HCL" },
  { src: "public/clientlogo/zoho-logo_brandlogos.net_kduhg.png", alt: "Zoho" },
  { src: "public/clientlogo/encore-cs6-vector-logo.png", alt: "Encore IT" },
  { src: "public/clientlogo/wily.png", alt: "Wily IT Services" },
  { src: "public/clientlogo/transworld.png", alt: "Transworld" },
  { src: "public/clientlogo/dmi-digital-management-seeklogo.png", alt: "DMI" },
  { src: "public/clientlogo/astra--eps--vector-logo.png", alt: "Adastra" },
  { src: "public/clientlogo/datamatics.png", alt: "Data Matics" },
];

const featuredLogos = [
  { src: "public/clientlogo/google.png", alt: "Google" },
  { src: "public/clientlogo/microsoft.png", alt: "Microsoft" },
  { src: "public/clientlogo/amazon.png", alt: "Amazon" },
  { src: "public/clientlogo/meta.png", alt: "Meta" },
];

const startupLogos = [
  { src: "public/clientlogo/freshworks-seeklogo.png", alt: "Freshworks" },
  { src: "public/clientlogo/chargebee.png", alt: "Chargebee" },
  { src: "public/clientlogo/zoho-logo_brandlogos.net_kduhg.png", alt: "Zoho" },
  { src: "public/clientlogo/grayorane.png", alt: "GreyOrange" },
];

const HiringPartners = () => {
  return (
    <section className="bg-white py-8 px-4 sm:px-8 lg:px-20 text-center mt-4">
      <h2 className="text-4xl font-bold text-[#005BAC] mb-10">
        Our Hiring Partners
      </h2>
      <p>
        Being the Best Placement Training Institute in Chennai, Softlogic Systems offers
        Unlimited lifelong FREE Placement support for all the programs. Our support doesn’t
        stop with just unlimited Interviews but we offer free placement training until a student
        gets placed. We have partnered with 500+ IT MNCs who hire our students and the list
        keeps growing day by day.
      </p>

      {/* Regular Hiring Partners */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 pt-6">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-6 flex items-center justify-center min-h-[100px]"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-h-16 object-contain"
            />
          </div>
        ))}
      </div>

      {/* Featured Hiring Partners */}
      <h2 className="text-4xl font-bold text-[#005BAC] mt-16 mb-10">
        Featured Hiring Partners
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 pt-4">
        {featuredLogos.map((logo, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-6 flex items-center justify-center min-h-[100px]"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-h-16 object-contain"
            />
          </div>
        ))}
      </div>

      {/* Startup Hiring Partners */}
      <h2 className="text-4xl font-bold text-[#005BAC] mt-16 mb-10">
        Startup Hiring Partners
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 pt-4">
        {startupLogos.map((logo, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-6 flex items-center justify-center min-h-[100px]"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-h-16 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HiringPartners;
