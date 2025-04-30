import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, CarFront, CalendarCheck, Phone } from "lucide-react";
import Logo from "../assets/CarBuddy_Logo_nobg.png";
import WeatherWidget from "./WeatherWidget";

const navLinks = [
  { label: "Home", path: "/", icon: <Home size={18} /> },
  { label: "Browse Cars", path: "/cars", icon: <CarFront size={18} /> },
  { label: "Booking", path: "/booking", icon: <CalendarCheck size={18} /> },
  { label: "About/Contact", path: "/About_Contact", icon: <Phone size={18} /> },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
        <div className="flex items-center justify-between lg:px-24 px-6 py-4">
            {/* Logo */}
            <Link to="/" className="w-[100px] h-[50px] flex items-center">
            <img src={Logo} alt="CarBuddy Logo" />
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden md:flex gap-8 text-slate-700 font-medium">
                {navLinks.map((link) => (
                    <li key={link.path}>
                        <Link
                            to={link.path}
                            className={`flex items-center gap-2 hover:text-blue-700 transition ${
                            pathname === link.path ? "text-blue-700 font-bold" : ""}`}>
                            {link.icon}
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Hamburger Icon */}
            <button
                className="md:hidden text-slate-700"
                onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Weather Widget */}
            <div className="hidden md:block">
                <WeatherWidget/>
            </div>
        </div>

        {/* Mobile Menu */}
        <div
            className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-40 ${
            isOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <div className="flex items-center justify-between p-4 border-b">
                <div className="w-[80px]">
                    <img src={Logo} alt="CarBuddy Logo"/>
                </div>
                <button className="text-slate-700" onClick={() => setIsOpen(false)}>
                    <X size={28}/>
                </button>
            </div>

            <ul className="flex flex-col gap-6 mt-6 px-6 text-slate-700 font-semibold">
                {navLinks.map((link) => (
                    <li key={link.path}>
                        <Link
                            to={link.path}
                            className={`flex items-center gap-2 hover:text-blue-700 transition ${
                            pathname === link.path ? "text-blue-700 font-bold" : ""}`}
                            onClick={() => setIsOpen(false)}>
                            {link.icon}
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="mt-6 px-6">
                <WeatherWidget/>
            </div>
        </div>

        {/* Background Overlay */}
        {isOpen && (
            <div
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden"
                onClick={() => setIsOpen(false)}/>
        )}
    </nav>
  );
}