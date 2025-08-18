import React from "react";
import { motion } from 'framer-motion';
import Logo from "../../assets/infotech.svg";
import {
  FaThumbsUp,
  FaUniversity,
  FaHandshake,
  FaClock,
  FaBookOpen,
  FaProjectDiagram,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


export default function Info() {
  const navigate = useNavigate();

  return (
    <section
      className="py-16 px-4 bg-gradient-to-br from-[#f5f8ff] to-[#ffffff] relative overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(circle at 10% 10%, rgba(0, 91, 172, 0.05) 10%, transparent 11%),
          radial-gradient(circle at 90% 90%, rgba(0, 91, 172, 0.05) 10%, transparent 11%)
        `,
        backgroundSize: "20px 20px",
        backgroundRepeat: "repeat",
      }}
    >
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-10 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-[#1a2650] mb-4"
        >
          Why should you choose Vel InfoTech?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-700 text-lg md:text-xl"
        >
          The courses in Chennai are crafted with world-class curriculum and hands-on methodology.
        </motion.p>
      </div>

      {/* 3-Column Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 items-start relative z-10">
        {/* Left Features */}
        <div className="flex flex-col gap-4 pl-4 md:pl-12">
          <Feature icon={<FaThumbsUp />} text="Award Winner for Best Training Institute by Silicon India." delay={0} />
          <Feature icon={<FaUniversity />} text="Jain University Certification" delay={0.1} />
          <Feature icon={<FaHandshake />} text="On-Job Training and 100% Placement Support Program" delay={0.2} />
        </div>

        {/* Center Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center py-4"
        >
          <img
            src={Logo}
            alt="Vel InfoTech Logo"
            className="w-48 md:w-[220px] max-w-[80%] h-auto object-contain"
          />
        </motion.div>

        {/* Right Features */}
        <div className="flex flex-col gap-4 pr-4 md:pr-12">
          <Feature icon={<FaClock />} text="Regular & Part-time Batches." delay={0.1} />
          <Feature icon={<FaBookOpen />} text="Easy-to-Understand Study Materials." delay={0.2} />
          <Feature icon={<FaProjectDiagram />} text="Live Project based Training" delay={0.3} />
        </div>
      </div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center mt-6 relative z-10"
      >
        <button
          onClick={() => navigate("/about")}
          className="bg-[#4f3cc9] hover:bg-[#372ba5] text-white font-bold py-3 px-6 rounded-full text-base shadow transition"
        >
          Know More →
        </button>
      </motion.div>
    </section>
  );
}

// 🔹 Feature Card Component
const Feature = ({ icon, text, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay }}
    viewport={{ once: true }}
    className="flex items-start gap-3 px-5 py-3 rounded-xl border border-gray-200 bg-white hover:shadow-md transition-all duration-200 group w-full min-h-[68px]"
  >
    <div className="text-[#1a2650] text-xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:text-[#005BAC]">
      {icon}
    </div>
    <p className="text-base text-gray-800 leading-snug">{text}</p>
  </motion.div>
);
