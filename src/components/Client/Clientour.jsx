import React from 'react';

const OurClients = () => {
  return (
    <section className="bg-blue-200  w-full max-h-full mt-26 py-10 px-10 text-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className=" p-6 ">
          {/* Single page H1 */}
          <h1 className="text-4xl text-[#005BAC] font-bold mb-10">Our Clients</h1>

          <p className="text-2xl">
            Vel InfoTech partners with well-known global enterprises and fast-moving startups to
            deliver dependable, high-impact technology outcomes. By tackling complex, business-critical
            work, our teams help clients keep innovation on schedule and strengthen one of the most
            capable tech communities worldwide.
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <img
            src="public/images/clients (2).jpg"
            alt="Client collaborations at Vel InfoTech"
            className="w-full h-auto rounded"
          />
        </div>
      </div>
    </section>
  );
};

export default OurClients;
