
import Seo from "../seo/Seo";
import HiringPartners from "../components/Client/ClientLogos";
// import JobOpeningsScroll from "../components/Client/ClientJobPortal";
import OurClients from "../components/Client/Clientour";
// import TestimonialsSection from "../components/Client/WhatClientsSay";

function Clientpage() {


  return (
    <>
      <Seo
        title="Our Hiring Partners & Clients | Vell InfoTech"
        description="Vell InfoTech's trained students are placed at top IT companies across India. Explore our hiring partners and placement network in Chennai."
        keywords="Vell InfoTech hiring partners, IT placement companies Chennai, software training placement companies"
        canonical="https://www.vellinfotech.com/client"
      />
      <OurClients />
      <div className="">
      <HiringPartners />
      </div>
      

    </>
  );
}

export default Clientpage;
