import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";
import Logo from "../../assets/infotech.png";
export default function Footer() {
  return (
    <footer className="bg-[#222d47] text-gray-200 pt-12 pb-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-gray-700">
          {/* Logo and About */}
          <div>
             <div className="flex items-center h-18 ">
                        <img
                          src={Logo}
                          alt="Logo"
                            className="h-15 w-auto object-contain"
                        />
                        <span className="text-2xl font-bold text-text-text-primary font-poppins tracking-widest ml-2 select-none">
                          Vel <span className="text-[#005BAC]">InfoTech</span>
                        </span>
                      </div>
            <p className="text-gray-400 text-sm mt-3 mb-4">
              Empowering your career with industry-ready IT and tech skills. Learn from experts. Build your future.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              <a href="#" className="hover:text-blue-400"><FaFacebook size={22} /></a>
              <a href="#" className="hover:text-blue-300"><FaTwitter size={22} /></a>
              <a href="#" className="hover:text-blue-500"><FaLinkedin size={22} /></a>
              <a href="#" className="hover:text-pink-400"><FaInstagram size={22} /></a>
              <a href="#" className="hover:text-red-500"><FaYoutube size={22} /></a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/all-courses" className="hover:text-[#005BAC] transition">Courses</a></li>
              <li><a href="/about" className="hover:text-[#005BAC] transition">About</a></li>
              <li><a href="/client" className="hover:text-[#005BAC] transition">Clients</a></li>
              <li><a href="/contact-us" className="hover:text-[#005BAC] transition">Contact</a></li>
            </ul>
          </div>
          {/* Popular Courses */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Popular Courses</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="FullStackDevelopement" className="hover:text-[#005BAC] transition">Full Stack Development</a></li>
              <li><a href="SoftwareTesting" className="hover:text-[#005BAC] transition">Software Testing</a></li>
              <li><a href="DataScience" className="hover:text-[#005BAC] transition">Data Science</a></li>
              <li><a href="AWSTraining" className="hover:text-[#005BAC] transition">AWS</a></li>
              
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Contact</h3>
            <ul className="text-sm space-y-2">
              <li>
                <span className="block text-gray-400">Vel Infotech Private Limited</span>
                <span className="block text-gray-400">5/69, 3rd Main Rd, Kalaimagal Nagar,</span>
                <span className="block text-gray-400">Ekkatuthangal, Chennai, Tamil Nadu 600032</span>
              </li>
              <li>
                <a href="mailto:info@velinfotech.com" className="hover:text-[#005BAC] transition">
                  info@velinfotech.com
                </a>
              </li>
              <li>
                <a href="tel:+917669100251" className="hover:text-[#005BAC] transition">
                  +91-9600593838
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-6 text-xs text-gray-400">
          <span>
            &copy; {new Date().getFullYear()} Vel Infotech. All rights reserved.
          </span>
          <span className="mt-2 md:mt-0">
            Designed & Developed by Yaway Technologies
          </span>
        </div>
      </div>
    </footer>
  );
}
