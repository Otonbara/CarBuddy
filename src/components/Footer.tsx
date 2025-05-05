import {
    PhoneIcon,
    EnvelopeIcon,
    MapPinIcon,
  } from "@heroicons/react/24/outline";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
  } from "react-icons/fa";

import { Link } from "react-router-dom";

  export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white lg:px-[100px] lg:py-[50px] px-[30px] py-[50px]">
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center lg:items-start">
          {/* Company Info */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-2xl font-bold font-[Poppins] mb-4">CarBuddy</h3>
            <p className="text-sm font-[Arial] opacity-80">
              CarBuddy offers reliable car rental services across Nigeria,
              providing comfort, flexibility, and unbeatable convenience. Your
              journey starts with us.
            </p>
            <div className="flex gap-4 mt-4 text-white">
              <a href="#"><FaFacebookF className="hover:text-blue-500 transition" /></a>
              <a href="#"><FaTwitter className="hover:text-sky-400 transition" /></a>
              <a href="#"><FaInstagram className="hover:text-pink-400 transition" /></a>
              <a href="#"><FaLinkedinIn className="hover:text-blue-400 transition" /></a>
            </div>
          </div>
  
          {/* Quick Links */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-xl font-semibold font-[DM_Sans] mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm font-[Arial] opacity-90 flex flex-col items-center lg:items-start">
              <li><Link to="/" className="hover:text-blue-600 hover:font-semibold transition">Home</Link></li>
              <li><Link to="/cars" className="hover:text-blue-600 hover:font-semibold transition">Available Cars</Link></li>
              <li><Link to="/About_Contact" className="hover:text-blue-600 hover:font-semibold transition">About Us</Link></li>
            </ul>
          </div>
  
          {/* Services */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-xl font-semibold font-[DM_Sans] mb-4">Services</h4>
            <ul className="space-y-2 text-sm font-[Arial] opacity-90 flex flex-col items-center lg:items-start">
              <li>Daily & Weekly Rentals</li>
              <li>Corporate Car Hire</li>
              <li>Airport Pickup & Drop-off</li>
              <li>Chauffeur Services</li>
              <li>Luxury & Premium Rentals</li>
              <li>Long-Term Leasing</li>
            </ul>
          </div>
  
          {/* Contact Info */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-xl font-semibold font-[DM_Sans] mb-4">Contact</h4>
            <ul className="space-y-3 text-sm font-[Arial] opacity-90 flex flex-col items-center lg:items-start">
              <li className="flex items-start gap-2">
                <PhoneIcon className="w-5 h-5 text-blue-400" />
                +234 800 123 4567
              </li>
              <li className="flex items-start gap-2">
                <EnvelopeIcon className="w-5 h-5 text-yellow-400" />
                support@carbuddy.ng
              </li>
              <li className="flex items-start gap-2">
                <MapPinIcon className="w-5 h-5 text-red-400" />
                Lagos | Abuja | Rivers | Bayelsa
              </li>
            </ul>
          </div>
        </div>
  
        <div className="text-center text-sm font-[Arial] mt-10 border-t border-gray-700 pt-6 opacity-70">
          © {new Date().getFullYear()} CarBuddy. All rights reserved.
        </div>
      </footer>
    );
  }
  