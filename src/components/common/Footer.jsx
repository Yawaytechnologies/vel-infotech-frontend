import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import Logo from "../../assets/Vel InfoTech.svg";
export default function Footer() {
  return (
    <footer className="relative bg-[#e9f1fb] text-black-200 pt-10 pb-3 border-t-4     border-[#005BAC]">

      {/* Top shadow separator */}
      <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-b from-black/20 to-transparent"></div>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-10 border-b border-gray-700 md:justify-items-center">
          {/* Logo and About */}
          <div>
            <div className="flex item s-center h-18 ">
              <img
                src={Logo}
                alt="Logo"
                className=" h-35 w-auto object-contain"
              />
             
            </div>
            <p className="text-black-400 text-md mt-8 mb-8 font-bold ">
              Empowering your career with industry-ready IT and tech skills.
              Learn from experts. Build your future.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              <a href="#" className="hover:text-blue-400">
                <FaFacebook size={22} />
              </a>
              <a href="#" className="hover:text-blue-300">
                <FaTwitter size={22} />
              </a>
              <a href="#" className="hover:text-blue-500">
                <FaLinkedin size={22} />
              </a>
              <a href="#" className="hover:text-pink-400">
                <FaInstagram size={22} />
              </a>
              <a href="#" className="hover:text-red-500">
                <FaYoutube size={22} />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-black font-bold text-lg mb-3 underline">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/all-courses"
                  className="hover:text-[#005BAC] transition font-bold "
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-[#005BAC] transition font-bold "
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/client"
                  className="hover:text-[#005BAC] transition font-bold "
                >
                  Clients
                </a>
              </li>
              <li>
                <a
                  href="/contact-us"
                  className="hover:text-[#005BAC] transition font-bold "
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/interview-questions"
                  className="hover:text-[#005BAC] transition font-bold "
                >
                  Interview Questions
                </a>
              </li>
              <li>
                <a
                  href="/resources"
                  className="hover:text-[#005BAC] transition font-bold "
                >
                  Tutorials
                </a>
              </li>
              <li>
                <a
                  href="/sample-resume"
                  className="hover:text-[#005BAC] transition font-bold "
                >
                  Sample Resume
                </a>
              </li>
              <li>
                <a
                  href="/internship"
                  className="hover:text-[#005BAC] transition font-bold "
                >
                  Internship
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h3 className="text-black font-bold text-lg mb-3 underline">
              Popular Courses
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/all-courses/FullStackDevelopement"
                  className="hover:text-[#005BAC] transition font-bold "
                >
                  Full Stack Development
                </a>
              </li>
              <li>
                <a
                  href="/all-courses/SoftwareTesting"
                  className="hover:text-[#005BAC] transition font-bold "
                >
                  Software Testing
                </a>
              </li>
              <li>
                <a
                  href="/all-courses/DataScience"
                  className="hover:text-[#005BAC] transition font-bold "
                >
                  Data Science
                </a>
              </li>
              <li>
                <a
                  href="/all-courses/AWSTraining"
                  className="hover:text-[#005BAC] transition font-bold "
                >
                  AWS
                </a>
              </li>
              <li>
                <a
                  href="/all-courses/Java"
                  className="hover:text-[#005BAC] transition font-bold "
                >
                  Java
                </a>
              </li>
              <li>
                <a
                  href="/all-courses/Python"
                  className="hover:text-[#005BAC] transition font-bold "
                >
                  Python
                </a>
              </li>
              <li>
                <a
                  href="/all-courses/SeleniumTesting"
                  className="hover:text-[#005BAC] transition font-bold "
                >
                  Selenium Testing
                </a>
              </li>
              <li>
                <a
                  href="/all-courses/EtlTesting"
                  className="hover:text-[#005BAC] transition font-bold "
                >
                  Etl Testing
                </a>
              </li>
            </ul>
          </div>
          {/* Company */}
          <div>
            <h3 className="text-black font-bold text-lg mb-3 underline">
              Courses
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/all-courses/Devops"
                  className="hover:text-[#005BAC] font-bold "
                >
                  Dev Ops
                </a>
              </li>
              <li>
                <a
                  href="/all-courses/AwaTraining"
                  className="hover:text-[#005BAC] font-bold "
                >
                  AWS Training
                </a>
              </li>
              <li>
                <a
                  href="/all-courses/BusinessAnalytics"
                  className="hover:text-[#005BAC] font-bold"
                >
                  Business Analytics
                </a>
              </li>
              <li>
                <a
                  href="/all-courses/Sql"
                  className="hover:text-[#005BAC] font-bold "
                >
                  Sql
                </a>
              </li>
              <li>
                <a
                  href="/all-courses/Plsql"
                  className="hover:text-[#005BAC] font-bold "
                >
                  Plsql
                </a>
              </li>
              <li>
                <a
                  href="/all-courses/RPA"
                  className="hover:text-[#005BAC] font-bold "
                >
                  RPA
                </a>
              </li>
              <li>
                <a
                  href="/all-courses/BigDataDeveloper"
                  className="hover:text-[#005BAC] font-bold "
                >
                  Big Data Developer
                </a>
              </li>
              <li>
                <a
                  href="/all-courses/CyberSecurity"
                  className="hover:text-[#005BAC] font-bold "
                >
                  Cyber Security
                </a>
              </li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h3 className="text-black font-bold text-lg mb-3 underline">
              Contact
            </h3>
            <ul className="text-sm space-y-2 font-bold ">
              <li>
                <span className="block text-black-400">
                  Vel Infotech Private Limited
                </span>
                <span className="block text-black-400">
                  KBS Towers, No:-50, Jawaharlal Nehru Road, Ekattuthangal,
                  (Near Jaya TV),Chennai-600032
                </span>
               
              </li>
              <li>
                <a
                  href="mailto:info@velinfotech.com"
                  className="hover:text-[#005BAC] transition "
                >
                  contact.velinfo@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+917669100251"
                  className="hover:text-[#005BAC] transition"
                >
                  +91-9600593838
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-6 text-xs text-black-400">
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

