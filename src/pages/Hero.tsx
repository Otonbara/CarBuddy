import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useSpring, useTime, useTransform } from "framer-motion";
import HeroCity from "../assets/Hero_City.png";
import MovingCar from "../assets/Car.png";
import MovingCar2 from "../assets/car_2.png";
import MovingCloud from "../assets/Cloud.png";
import MovingBirds from "../assets/birds.png";
import Sedan from "../assets/sedan_car.png";
import SUV from "../assets/suv_car.png";
import Truck from "../assets/truck_car.png";
import Van from "../assets/van_car.png";
import Coupe from "../assets/coupe_car.png";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState("Vehicle Type");

  const vehicles = [
    { label: "Sedan", img: Sedan },
    { label: "SUV", img: SUV },
    { label: "Truck", img: Truck },
    { label: "Van", img: Van },
    { label: "Coupe", img: Coupe },
  ];

  const dropdownRef = useRef(null);

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !(dropdownRef.current as HTMLElement).contains(event.target as Node)) {
      setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  interface Vehicle {
    label: string;
    img: string;
  }

  const handleSelect = (vehicle: Vehicle): void => {
    setSelectedVehicle(vehicle.label);
    setIsOpen(false);
  };

  const time = useTime()

  const rotate = useTransform(time, [0, 1000], [0, 360], { clamp: false });

  const rotatingBg = useTransform(rotate, (r) =>{
    return `conic-gradient(from ${r}deg, #2C2C2C, #282828, #242424, #202020, #1C1C1C, #181818, #141414, #101010, #0C0C0C, #080808)`
  })

  const pulse = useSpring(0, { damping: 0, mass: 5, stiffness: 5})
  const pulsingBg = useTransform(pulse, (p) => {
    return `blur(${p}px)`
  })

  useEffect(() => {
    pulse.set(5);
  }, []);

  return (
    <main>
      <div className="relative bg-[#87CEEB]/60 lg:px-[100px] lg:pt-[100px] px-[30px] py-[60px] z-20">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-y-10 lg:gap-2.5">
          {/* Hero Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}>
              <h1 className="text-center lg:text-left text-6xl font-extrabold font-[Poppins]">
                Hop In, Buddy — Your Next Adventure Awaits!
              </h1>
            </motion.div>
          </div>
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-[80vw] relative lg:mx-auto pt-[60px] overflow-hidden">
            {/* Road & Skyscraper */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}>
              <img
                src={HeroCity}
                alt="Hero City"
                className="w-full h-full object-cover"/>
            </motion.div>
            {/* Moving Cars */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
              className="absolute bottom-[-50px] left-[-10px] animate-car2">
              <img
                src={MovingCar2}
                alt="Moving Car2"
                className="w-[150px] object-cover"/>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
              className="absolute bottom-[-25px] left-[-10px] animate-car">
              <img
                src={MovingCar}
                alt="Moving Car"
                className="w-[150px] object-cover"/>
            </motion.div>
            {/* Moving Cloud */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
              className="absolute lg:top-[-20px] top-[20px] right-[-10px] animate-cloud">
              <img
                src={MovingCloud}
                alt="Moving Cloud"
                className="w-[150px] object-cover"/>
            </motion.div>
            {/* Moving Birds */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
              className="absolute lg:top-[25px] top-[40px] left-[-10px] animate-birds">
              <img
                src={MovingBirds}
                alt="Moving Birds"
                className="w-[150px] object-cover"/>
            </motion.div>
          </motion.div>
        </div>
        <div className="font-[DM_Sans] flex justify-center mt-10 gap-[50px]">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}>
            <button className="relative bg-[#696969] hover:bg-[#696969]/60 font-bold text-sm text-white px-4 py-2 rounded-full transition duration-300 ease-in-out z-10">
              <Link to="/Booking">Book Now</Link>
            </button>
            <motion.div className="absolute -inset-[2px] rounded-full" style={{ background: rotatingBg, filter: pulsingBg }}></motion.div>
          </motion.div>
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}>
            <button className="relative bg-[#696969] hover:bg-[#696969]/60 font-bold text-sm text-white px-4 py-2 rounded-full transition duration-300 ease-in-out z-10">
              <Link to="/Car">Browse Cars</Link>
            </button>
            <motion.div className="absolute -inset-[2px] rounded-full" style={{ background: rotatingBg, filter: pulsingBg }}></motion.div>
          </motion.div>
        </div>
      </div>

      {/* Transparent Platform */}
      <div className="relative flex flex-col items-center justify-center bg-white/50 backdrop-blur-md p-6 rounded-lg shadow-lg z-30 font-[Poppins] lg:px-[100px] px-[30px]">
        <h2 className="text-2xl font-bold text-center mb-6">Find Your Ride</h2>

        <form className="flex flex-col lg:flex-row md:items-center md:justify-between gap-4">

          {/* Type of Vehicle */}
          <div
            ref={dropdownRef}
            className="flex flex-col items-center w-full md:w-auto relative">
            <label className="text-sm font-semibold mb-1">
              Vehicle Type
            </label>
            <button
              type="button"
              onClick={toggleDropdown}
              className="p-3 w-full md:w-48 border border-gray-300 rounded-md bg-transparent focus:outline-none flex justify-between items-center">
              {selectedVehicle}
              <svg
                className={`w-5 h-5 ml-2 transition-transform ${isOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"/>
              </svg>
            </button>

            {isOpen && (
              <div className="absolute mt-2 w-full md:w-48 bg-white border border-gray-300 rounded-md shadow-md z-50">
                {vehicles.map((vehicle, index) => (
                  <div
                    key={index}
                    onClick={() => handleSelect(vehicle)}
                    className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
                    <img src={vehicle.img} alt={vehicle.label} className="w-[50px] h-[50px] mr-3"/>
                    <span>{vehicle.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Location */}
          <div className="flex flex-col items-center w-full md:w-auto">
            <label className="text-sm font-semibold mb-1">Select Location</label>
            <select className="p-3 w-full md:w-48 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#696969]">
              <option value="lagos">Lagos State</option>
              <option value="abuja">Abuja State</option>
              <option value="rivers">Rivers State</option>
              <option value="bayelsa">Bayelsa State</option>
            </select>
          </div>

          {/* Pickup Date and Time */}
          <div className="flex flex-col items-center w-full md:w-auto">
            <label className="text-sm font-semibold mb-1">Pickup Date & Time</label>
            <input
              type="datetime-local"
              className="p-3 w-full md:w-56 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#696969]"/>
          </div>

          {/* Return Date and Time */}
          <div className="flex flex-col items-center w-full md:w-auto">
            <label className="text-sm font-semibold mb-1">Return Date & Time</label>
            <input
              type="datetime-local"
              className="p-3 w-full md:w-56 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#696969]"
            />
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="bg-[#696969] font-bold text-sm p-3 w-full md:w-auto hover:bg-[#696969]/70 
                        transition duration-300 ease-in-out text-white rounded-md">
            Search
          </button>
        </form>
      </div>

      {/* Gradient Background */}
      <div className="w-[600px] h-[400px] bg-[#87CEEB] rounded-full 
                absolute lg:top-[50%] left-[50%] translate-x-[-50%] translate-y-[15%] blur-[150px] z-10 hidden md:block"></div>
      <div className="relative flex flex-col items-center justify-center lg:px-[100px] lg:py-[100px] px-[30px] py-[50px] z-20">
        {/* AVAILABLE CARS CAROUSEL */}
        <h2 className="text-center text-4xl font-bold font-[Poppins]">Available Cars</h2>
      </div>
    </main>
  );
}
