import React from 'react';

const OurClients = () => {
  return (
    <section className="bg-blue-200  w-full max-h-full mt-26 py-10 px-10 text-center">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className=" p-6 ">
      <h1 className="text-4xl text-[#005BAC] font-bold mb-10">Our Clients</h1>
      <p className='text-2xl'>Toptal connects world-class talent with the most exciting companies in the world, including leading Fortune 500 brands and innovative Silicon Valley startups. Our focus on challenging, tier-one projects powers the world’s largest high-skilled workforce.</p>
    </div>

    <div className="bg-white p-6 rounded shadow">
  <img src="public/images/clients (2).jpg" alt="Team" className="w-full h-auto rounded" />
</div>

  </div>
</section>

  );
};

export default OurClients;
