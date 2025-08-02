import React, { useState } from "react";
import { FaLaptop, FaChalkboardTeacher } from "react-icons/fa";
import java from "../../assets/java.jpg";
import { motion } from "framer-motion";



export default function JavaCoursePage() {
  const [mode, setMode] = useState("classroom");

  return (
 <section className="w-full pt-32 bg-gradient-to-r from-[#005BAC] to-[#003c6a] text-white px-4 py-20">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
    {/* LEFT: Content */}
    <div className="flex-1">
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
        Join Our 100% Job Guaranteed <br />
        <span className="text-yellow-400">Cyber Security Program</span>
      </h2>

      <ul className="space-y-3 mt-6 text-lg">
        <li>✅ Enroll in the <strong>Top Cyber Security Institute</strong> to launch your career in ethical hacking and information security.</li>
        <li>✅ Learn core topics – <strong>Network Security, Ethical Hacking, Firewalls, Malware Analysis, Cryptography</strong>.</li>
        <li>✅ Build practical skills through <strong>real-time threat simulations, vulnerability scanning, and risk assessment labs</strong>.</li>
        <li>✅ Get deep insights into <strong>penetration testing, SOC operations, and incident response strategies</strong>.</li>
        <li>✅ Earn a globally recognized <strong>Cyber Security Certification</strong> like CEH or CompTIA Security+.</li>
        <li>✅ Career support: Live projects, resume building, mock interviews & placement assistance.</li>
      </ul>

      <button
        className="group relative bg-neutral-800 h-auto min-h-[64px] w-full sm:w-80 border border-white text-left p-4 text-gray-50 text-base font-bold rounded-lg overflow-hidden
                mt-8
                before:absolute before:w-12 before:h-12 before:content-[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg
                after:absolute after:z-10 after:w-20 after:h-20 after:content-[''] after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg
                hover:decoration-2 hover:text-rose-300
                duration-500 hover:duration-500 before:duration-500 after:duration-500
                group-hover:before:duration-500 group-hover:after:duration-500
                hover:border-rose-300 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:after:-right-8"
      >
        <div>
          <span className="text-lg font-extrabold text-violet-400 block">Freshers Salary:</span>
          ₹3 LPA to ₹8 LPA <br />
          <span className="text-sm text-gray-300">| ETL Testing | Duration: 3 Months</span>

        </div>
      </button>
    </div>

    {/* RIGHT: Call to Action */}
    <div className="flex-1 bg-white text-black p-6 rounded-xl shadow-lg max-w-md">
      <h3 className="text-2xl font-bold mb-4">WANT IT JOB?</h3>
     <p className="mb-4 text-lg">Become a Cyber Security Expert in Just 3 Months</p>



     <button
  type="button"
  onClick={() => {
    const formSection = document.getElementById("enquiry-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  }}
  className="relative mt-6 px-6 py-3 overflow-hidden rounded-full border-2 border-black bg-black text-white font-semibold text-base shadow-xl flex items-center justify-center gap-2 group transition-all duration-300 w-fit"
>
  {/* Expanding background on hover */}
  <span className="absolute inset-0 z-0 before:absolute before:w-full before:aspect-square before:-left-full before:-top-1/2 before:bg-emerald-500 before:rounded-full before:transition-all before:duration-700 before:ease-in-out group-hover:before:left-0 group-hover:before:scale-150 before:-z-10"></span>

  {/* Text */}
  <span className="relative z-10 group-hover:text-black transition-colors duration-300">Enquire Now</span>

  {/* Icon */}
  <span className="relative z-10">
    <svg
      className="w-8 h-8 p-2 rounded-full border border-white text-white transform rotate-45 transition-all duration-300 ease-linear group-hover:rotate-90 group-hover:bg-white group-hover:text-emerald-500 group-hover:border-white"
      viewBox="0 0 16 19"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
        fill="currentColor"
      ></path>
    </svg>
  </span>
</button>



        </div>
      </div>

      {/* Info Bar */}
      <div className="w-full mt-12 bg-[#1e88e5] py-5 rounded-md shadow-md">
        <h4 className="text-center text-white font-bold text-xl md:text-2xl">
          We Offer Both Online and Classroom Training in Chennai & Bangalore.
        </h4>
      </div>


{/* Course Partners Section */}
<section className="py-16 bg-[#002855]">
  <div className="max-w-7xl mx-auto px-4">
    {/* Header */}
    <div className="text-center mb-10">
      <h3 className="text-xl font-semibold uppercase tracking-wide text-white">
        <span className="text-purple-400">●</span> Our Course Partners <span className="text-purple-400">●</span>
      </h3>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {[
        {
          name: "HubSpot",
          logo: "https://cdn.worldvectorlogo.com/logos/hubspot.svg",
          link: "https://www.hubspot.com/",
        },
        {
          name: "GitLab",
          logo: "https://cdn.worldvectorlogo.com/logos/gitlab.svg",
          link: "https://about.gitlab.com/",
        },
        {
          name: "Monday.com",
          logo: "https://cdn.worldvectorlogo.com/logos/monday-1.svg",
          link: "https://monday.com/",
        },
        {
          name: "Google Cloud",
          logo: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg",
          link: "https://cloud.google.com/",
        },
        {
          name: "AWS",
          logo: "https://cdn.worldvectorlogo.com/logos/aws-2.svg",
          link: "https://aws.amazon.com/",
        },
        {
          name: "Salesforce",
          logo: "https://cdn.worldvectorlogo.com/logos/salesforce-2.svg",
          link: "https://www.salesforce.com/",
        },
      {
  name: "IBM",
  logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  link: "https://www.ibm.com/",
},
        {
          name: "Slack",
          logo: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg",
          link: "https://slack.com/",
        },
      ].map((partner, index) => (
       <motion.a
  key={index}
  href={partner.link}
  target="_blank"
  rel="noopener noreferrer"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.05 }}
  transition={{ type: "spring", stiffness: 200, damping: 20 }}
  className="bg-white rounded-xl p-4 flex items-center justify-center shadow-md"
>
  <img src={partner.logo} alt={partner.name} className="h-12 object-contain" />
</motion.a>
      ))}
    </div>
  </div>
</section>



{/* Cyber Security Overview */}
<section className="px-0 py-16 bg-">
  <div className="max-w-[100%] mx-auto px-4 md:px-10">
    <div className="bg-[#f7f9fb] rounded-3xl shadow-md p-6 md:p-10">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-5">
        Overview of Cyber Security Program
      </h2>
      <div className="w-28 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>

      {/* Description */}
      <p className="text-base md:text-lg text-gray-800 mb-8 leading-relaxed text-center md:text-left">
        Our Cyber Security Training program is designed to equip you with the skills to defend digital systems and networks from threats. Learn ethical hacking, vulnerability assessment, and security best practices to prepare for roles like Security Analyst, Penetration Tester, or SOC Engineer.
      </p>

      {/* What You’ll Learn */}
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-5">
        What You’ll Learn From Cyber Security Training
      </h3>
      <ul className="space-y-4 text-gray-800 text-base md:text-lg">
        <li className="flex items-start gap-3">
          <span className="text-purple-600 mt-1">➤</span>
          Understand the fundamentals of information security and threat landscapes.
        </li>
        <li className="flex items-start gap-3">
          <span className="text-purple-600 mt-1">➤</span>
          Learn ethical hacking, penetration testing, and vulnerability scanning techniques.
        </li>
        <li className="flex items-start gap-3">
          <span className="text-purple-600 mt-1">➤</span>
          Explore tools like Kali Linux, Wireshark, Metasploit, and Burp Suite.
        </li>
        <li className="flex items-start gap-3">
          <span className="text-purple-600 mt-1">➤</span>
          Gain hands-on experience with firewalls, IDS/IPS, and endpoint protection.
        </li>
        <li className="flex items-start gap-3">
          <span className="text-purple-600 mt-1">➤</span>
          Learn about SOC operations, incident response, and digital forensics.
        </li>
        <li className="flex items-start gap-3">
          <span className="text-purple-600 mt-1">➤</span>
          Get career support with resume building, certification prep, and placement assistance.
        </li>
      </ul>
    </div>
  </div>
</section>





{/* Cyber Security Training Section */}
<section className="w-full px-6 py-20 bg-gradient-to-b from-[#] to-[#] text-black">
  {/* Header */}
  <div className="max-w-7xl mx-auto text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-white">
      Become a Certified Cyber Security Professional
    </h2>
    <p className="text-lg md:text-xl text-white mb-6">
      Learn Ethical Hacking, Vulnerability Assessment, Network Defense, Security Tools, and Incident Handling with real-time labs and industry-focused training.
    </p>
    <div className="flex justify-center gap-4 flex-wrap">
      <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all">
        Get Started →
      </button>
    </div>
  </div>

  {/* Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">

    {/* Card 1 - Course Highlights */}
    <div
      data-aos="fade-up"
      data-aos-delay="0"
      className="bg-white rounded-3xl shadow-md p-6 text-left flex flex-col justify-between hover:shadow-xl hover:scale-[1.02] transition duration-300"
    >
      <div className="mb-4">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Course Highlights"
          className="w-10 h-10 mb-4"
        />
        <h3 className="text-lg font-extrabold text-black mb-2">Course Highlights</h3>
        <ul className="list-disc list-inside space-y-1 text-base text-gray-700">
          <li>✓ Ethical Hacking & Network Security Training</li>
          <li>✓ Real-time practical attack & defense simulations</li>
          <li>✓ Resume prep & mock interviews</li>
          <li>✓ Job-oriented modules with certification guidance</li>
        </ul>
      </div>
    </div>

    {/* Card 2 - Tools */}
    <div
      data-aos="fade-up"
      data-aos-delay="100"
      className="bg-white rounded-3xl shadow-md p-6 text-left flex flex-col justify-between hover:shadow-xl hover:scale-[1.02] transition duration-300">
      <div className="mb-4">
        <img
          src="https://cdn-icons-png.flaticon.com/512/942/942748.png"
          alt="Tools You’ll Master"
          className="w-10 h-10 mb-4"
        />
        <h3 className="text-lg font-extrabold text-black mb-2">Tools You’ll Master</h3>
        <div className="flex flex-wrap gap-2">
          {["Kali Linux", "Wireshark", "Nmap", "Metasploit", "Burp Suite", "Snort", "Splunk", "OWASP ZAP"].map((tool, i) => (
            <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-base font-medium">{tool}</span>
          ))}
        </div>
      </div>
    </div>

    {/* Card 3 - Topics Covered */}
    <div
      data-aos="fade-up"
      data-aos-delay="200"
      className="bg-white rounded-3xl shadow-md p-6 text-left flex flex-col justify-between hover:shadow-xl hover:scale-[1.02] transition duration-300"
    >
      <div className="mb-4">
        <img
          src="https://cdn-icons-png.flaticon.com/512/906/906343.png"
          alt="Topics Covered"
          className="w-10 h-10 mb-4"
        />
        <h3 className="text-lg font-extrabold text-black mb-2">Topics Covered</h3>
        <div className="flex flex-wrap gap-2">
          {["Cyber Threats", "Ethical Hacking", "Network Security", "Incident Response", "SOC Operations", "Vulnerability Scanning"].map((topic, i) => (
            <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-base font-medium">{topic}</span>
          ))}
        </div>
      </div>
    </div>

    {/* Card 4 - Key Skills */}
    <div
      data-aos="fade-up"
      data-aos-delay="300"
      className="bg-white rounded-3xl shadow-md p-6 text-left flex flex-col justify-between hover:shadow-xl hover:scale-[1.02] transition duration-300"
    >
      <div className="mb-4">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135710.png"
          alt="Key Skills You’ll Gain"
          className="w-10 h-10 mb-4"
        />
        <h3 className="text-lg font-extrabold text-black mb-2">Key Skills You’ll Gain</h3>
        <ul className="list-disc list-inside space-y-1 text-base text-gray-700">
          <li>Identify & mitigate cyber threats and vulnerabilities</li>
          <li>Conduct penetration testing & ethical hacking</li>
          <li>Monitor networks & analyze security events</li>
          <li>Respond to incidents and secure digital assets</li>
        </ul>
      </div>
    </div>

  </div>
</section>







      {/* ENQUIRY FORM - BELOW, moved right and fixed placeholders */}
      <section className="w-full px-6 py-20 bg-[#] text-white">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-10">

    {/* LEFT: Additional Info Boxes */}
    <div className="w-full lg:w-1/2 flex flex-col justify-between gap-4">
      {/* Box 1 */}
     <div className="bg-white rounded-2xl p-6 shadow-lg text-gray-900">
        <h4 className="text-xl font-bold mb-2">Comprehensive Curriculum</h4>
        <p className="text-balck/90">Master Java Full Stack with structured modules covering Core Java, Spring Boot, React, MySQL, and more.</p>
      </div>

      {/* Box 2 */}
      <div className="bg-white rounded-2xl p-6 shadow-lg text-gray-900">
        <h4 className="text-xl font-bold mb-2">Career-Oriented Training</h4>
        <p className="text-black/90">Learn from working professionals. Includes mock interviews, resume prep, and job assistance.</p>
      </div>

      {/* Box 3 */}
     <div className="bg-white rounded-2xl p-6 shadow-lg text-gray-900">
        <h4 className="text-xl font-bold mb-2">100% Job Guarantee</h4>
        <p className="text-black/90">We assure placement support post training with strong partner network and hiring drives.</p>
      </div>

      {/* Box 4 */}
     <div className="bg-white rounded-2xl p-6 shadow-lg text-gray-900">
        <h4 className="text-xl font-bold mb-2">Hands-On Projects</h4>
        <p className="text-black/90">Gain real-world experience with capstone projects and industry-based assignments included in every module.</p>
      </div>
    </div>

    {/* RIGHT: Form (unchanged) */}
    <div className="w-full lg:w-1/2 flex justify-end">
      <div className="w-full max-w-lg">
        <div className="relative backdrop-blur-[6px] bg-white/70 border border-white/60 shadow-2xl rounded-3xl p-8 transition-all hover:scale-[1.015] hover:shadow-2xl duration-300">
          <h3 className="text-2xl font-bold mb-5 text-center bg-gradient-to-r from-[#005BAC] to-[#003c6a] bg-clip-text text-transparent tracking-tight">
            Get a Free Training Quote
          </h3>

          {/* Mode Toggle */}
          <div className="flex justify-center mb-7 gap-2">
            <button
              onClick={() => setMode("classroom")}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 md:py-3 rounded-full text-lg font-semibold shadow transition-all duration-200
                ${mode === "classroom"
                  ? "bg-gradient-to-r from-[#005BAC] to-[#003c6a] text-white shadow-lg"
                  : "bg-white/60 text-black border border-[#a7f3d0]/40"
                }`}
            >
              <FaChalkboardTeacher className="text-xl" /> Class Room
            </button>
            <button
              onClick={() => setMode("online")}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 md:py-3 rounded-full text-lg font-semibold shadow transition-all duration-200
                ${mode === "online"
                  ? "bg-gradient-to-r from-[#005BAC] to-[#003c6a] text-white shadow-lg"
                  : "bg-white/60 text-black border border-[#a7f3d0]/40"
                }`}
            >
              <FaLaptop className="text-xl" /> Online
            </button>
          </div>

          {/* Form */}
          <form id="enquiry-form" className="flex flex-col gap-4">
            <input type="text" placeholder="Your Name" className="placeholder:text-black rounded-xl bg-white/80 px-5 py-3 border border-[#a7f3d0]/60 text-base font-medium focus:ring-2 focus:ring-[#16bca7] outline-none shadow" />
            <input type="email" placeholder="Your Email" className="placeholder:text-black rounded-xl bg-white/80 px-5 py-3 border border-[#a7f3d0]/60 text-base font-medium focus:ring-2 focus:ring-[#16bca7] outline-none shadow" />
            <div className="flex gap-3">
              <input type="tel" placeholder="Mobile Number" className="placeholder:text-black rounded-xl bg-white/80 px-5 py-3 border border-[#a7f3d0]/60 text-base font-medium w-1/2 focus:ring-2 focus:ring-[#16bca7] outline-none shadow" />
              <select className="rounded-xl bg-white/80 px-5 py-3 border border-[#a7f3d0]/60 text-base font-medium w-1/2 focus:ring-2 focus:ring-[#16bca7] outline-none shadow text-black" defaultValue="">
                <option value="" disabled>How & Where</option>
                <option>Morning Batch</option>
                <option>Evening Batch</option>
                <option>Weekend</option>
              </select>
            </div>
            <input type="text" placeholder="Type Course" className="placeholder:text-black rounded-xl bg-white/80 px-5 py-3 border border-[#a7f3d0]/60 text-base font-medium focus:ring-2 focus:ring-[#16bca7] outline-none shadow" />
            <textarea placeholder="Your Message" rows={2} className="placeholder:text-black rounded-xl bg-white/80 px-5 py-3 border border-[#a7f3d0]/60 text-base font-medium focus:ring-2 focus:ring-[#16bca7] outline-none resize-none shadow" />
            <button className="bg-gradient-to-r from-[#005BAC] to-[#003c6a] text-white font-extrabold py-3 rounded-xl hover:from-[#0891b2] hover:to-[#16bca7] transition shadow-lg mt-1">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>


    </section>
  );
}

