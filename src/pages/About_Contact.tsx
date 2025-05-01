import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import TrustPilot from "../assets/Trustpilot_icon.png";
import GoogleIcon from "../assets/Google_Icon.png";
import ShellLogo from "../assets/logos/Shell_logo.png";
import ChevronLogo from "../assets/logos/Chevron_Logo.png"
import TotalLogo from "../assets/logos/TotalEnergies_logo.png"
import ExxonMobilLogo from "../assets/logos/ExxonMobil_Logo.png"
import NLNGLogo from "../assets/logos/NLNG_Logo.png"
import DangoteLogo from "../assets/logos/Dangote_logo.png"
import MTNLogo from "../assets/logos/MTN_logo.png"
import UBALogo from "../assets/logos/UBA_logo.png"
import NigerianBreweriesLogo from "../assets/logos/Nigerian_Breweries_logo.png"
import SeplatLogo from "../assets/logos/Seplat_Energy_logo.png"

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function About_Contact() {
  return (
    <div className="bg-white text-black font-['DM_Sans'] lg:px-[100px] lg:pt-[100px] px-[30px] py-[60px]">
      <div className="mx-auto px-6 py-12 space-y-20">
        
        {/* Header */}
        <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
          <h1 className="text-4xl font-bold font-['Poppins'] mb-4">About CarBuddy</h1>
          <p className="text-[#696969] max-w-3xl">
            CarBuddy is your trusted partner for safe, reliable, and affordable car rentals in Nigeria. With offices in Lagos, Abuja, Rivers, and Bayelsa, we’re committed to top-tier service, seamless booking, and nationwide accessibility.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div className="grid md:grid-cols-2 gap-10" initial="hidden" whileInView="visible" variants={fadeInUp} custom={1} viewport={{ once: true }}>
          <div>
            <h2 className="text-2xl font-semibold font-['Poppins'] mb-2">Our Mission</h2>
            <p className="text-[#696969]">To offer customers flexible, secure, and quality-driven car rental experiences across Nigeria.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold font-['Poppins'] mb-2">Our Vision</h2>
            <p className="text-[#696969]">To become Nigeria’s most dependable mobility partner—trusted by individuals and businesses nationwide.</p>
          </div>
        </motion.div>

        {/* Trust Section */}
        <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} custom={2} viewport={{ once: true }}>
          <h2 className="text-2xl font-semibold font-['Poppins'] mb-4">Why Customers Trust Us</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 p-6 shadow-md">
                <img src={GoogleIcon} alt="Google Icon" className="h-[100px] w-[100px]"/>
                <div>
                    <h3 className="text-lg font-medium mb-1">Google Reviews</h3>
                    <p className="text-[#696969]">⭐ 4.8/5 from 1,200+ happy customers.</p>
                </div>
            </div>
            <div className="flex items-center gap-4 p-6 shadow-md">
                <img src={TrustPilot} alt="Google Icon" className="h-[100px] w-[100px]"/>
                <div>
                    <h3 className="text-lg font-medium mb-1">Trustpilot</h3>
                    <p className="text-[#696969]">⭐ 4.6/5 rating on verified experiences.</p>
                </div>
            </div>
          </div>
        </motion.div>

        {/* Companies We Work With */}
        <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} custom={3} viewport={{ once: true }}>
            <h2 className="text-2xl font-semibold font-['Poppins'] mb-6 flex items-center gap-2">
                <FaBriefcase /> Companies We Work With
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                <div className="p-4 shadow-md flex flex-col items-center justify-center gap-y-2">
                    <img src={ShellLogo} alt="Shell Logo" className="h-12 object-contain"/>
                    <h4 className="font-bold">Shell</h4>
                </div>
                <div className="p-4 shadow-md flex flex-col items-center justify-center gap-y-2">
                    <img src={ChevronLogo} alt="Chevron Logo" className="h-12 object-contain"/>
                    <h4 className="font-bold">Chevron</h4>
                </div>
                <div className="p-4 shadow-md flex flex-col items-center justify-center gap-y-2">
                    <img src={TotalLogo} alt="TotalEnergies Logo" className="h-12 object-contain"/>
                    <h4 className="font-bold">Total Energies</h4>
                </div>
                <div className="p-4 shadow-md flex flex-col items-center justify-center gap-y-2">
                    <img src={ExxonMobilLogo} alt="ExxonMobil Logo" className="h-12 object-contain"/>
                    <h4 className="font-bold">ExxonMobil</h4>
                </div>
                <div className="p-4 shadow-md flex flex-col items-center justify-center gap-y-2">
                    <img src={NLNGLogo} alt="Nigerian LNG Logo" className="h-12 object-contain"/>
                    <h4 className="font-bold">NLNG</h4>
                </div>
                <div className="p-4 shadow-md flex flex-col items-center justify-center gap-y-2">
                    <img src={DangoteLogo} alt="Dangote Logo" className="h-12 object-contain"/>
                    <h4 className="font-bold">Dangote Group</h4>
                </div>
                <div className="p-4 shadow-md flex flex-col items-center justify-center gap-y-2">
                    <img src={MTNLogo} alt="MTN Logo" className="h-12 object-contain"/>
                    <h4 className="font-bold">MTN</h4>
                </div>
                <div className="p-4 shadow-md flex flex-col items-center justify-center gap-y-2">
                    <img src={UBALogo} alt="UBA Logo" className="h-12 object-contain"/>
                    <h4 className="font-bold">UBA</h4>
                </div>
                <div className="p-4 shadow-md flex flex-col items-center justify-center gap-y-2">
                    <img src={NigerianBreweriesLogo} alt="Nigerian Breweries Logo" className="h-12 object-contain"/>
                    <h4 className="font-bold">Nigerian Breweries</h4>
                </div>
                <div className="p-4 shadow-md flex flex-col items-center justify-center gap-y-2">
                    <img src={SeplatLogo} alt="Seplat Energy Logo" className="h-12 object-contain"/>
                    <h4 className="font-bold">Seplat Energy</h4>
                </div>
            </div>
        </motion.div>


        {/* Office Locations */}
        <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} custom={4} viewport={{ once: true }}>
          <h2 className="text-2xl font-semibold font-['Poppins'] mb-4">Our Offices</h2>
          <ul className="list-disc list-inside text-[#696969] space-y-2">
            <li>Lagos – 23 Admiralty Way, Lekki Phase 1</li>
            <li>Abuja – Plot 45 Gwarinpa Estate</li>
            <li>Rivers – 18 Old Aba Road, Port Harcourt</li>
            <li>Bayelsa – Yenagoa Mall Complex</li>
          </ul>
        </motion.div>

        {/* Contact Form */}
        <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} custom={5} viewport={{ once: true }}>
          <h2 className="text-2xl font-semibold font-['Poppins'] mb-4">Contact Us</h2>
          <form className="bg-white shadow-md p-6 w-full space-y-4 border border-gray-200">
            <input type="text" placeholder="Your Name" className="w-full border border-gray-300 p-3 text-sm outline-none" />
            <input type="email" placeholder="Your Email" className="w-full border border-gray-300 p-3 text-sm outline-none" />
            <textarea rows={5} placeholder="Your Message" className="w-full border border-gray-300 p-3 text-sm outline-none" />
            <button type="submit" onClick={() => alert("Your Message has been sent")} className="bg-blue-600 text-white px-6 py-3 text-sm font-medium uppercase tracking-wide">
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Map */}
        <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} custom={6} viewport={{ once: true }}>
            <h2 className="text-2xl font-semibold font-['Poppins'] mb-4">Find Us on the Map</h2>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5823401325606!2d3.4724123736695107!3d6.447633424043062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf44f34eb7db3%3A0x680e3de5e588158a!2s23%20Admiralty%20Wy%2C%20Eti-Osa%2C%20Lagos%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1746036435578!5m2!1sen!2sng" 
                width="100%" 
                height="450" 
                style={{ border:0 }} 
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </motion.div>
      </div>
    </div>
  );
}
