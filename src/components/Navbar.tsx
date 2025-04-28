import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/CarBuddy_Logo_nobg.png";
import WeatherWidget from "./WeatherWidget";

const navLinks = [
    { label: "Home", path: "/" },
    { label: "Browse Cars", path: "/Car" },
    { label: "Book Now", path: "/Booking" },
    { label: "About/Contact", path: "/About_Contact" }
];

export default function Navbar() {
    const { pathname } = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
            isScrolled ? "bg-[#87CEEB]/60 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
            <div className="flex items-center justify-between lg:px-[100px] px-[30px] py-4">
                {/* Logo */}
                <div className="w-[100px] h-[50px] flex items-center justify-center">
                    <img src={Logo} alt="CarBuddy Logo"/>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 font-normal font-[DM_Sans] text-slate-700">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                className={`hover:text-slate-900 transition ${
                                    pathname === link.path ? "text-slate-900 font-bold" : ""}`}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Weather Widget */}
                <div className="md:flex items-center">
                    <WeatherWidget/>
                </div>

                {/* Mobile Hamburger */}
                <button 
                    className="block md:hidden text-slate-700" 
                    onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Slide Menu */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-[#87CEEB]/60 backdrop-blur-lg shadow-lg transform transition-transform duration-300 z-40 ${
                isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="flex items-center justify-between p-4">
                    <div className="w-[80px]">
                        <img src={Logo} alt="CarBuddy Logo"/>
                    </div>
                    <button
                        className="text-slate-700"
                        onClick={() => setIsOpen(false)}>
                        <X size={28} />
                    </button>
                </div>

                <ul className="flex flex-col gap-6 mt-8 px-6 font-semibold font-[DM_Sans] text-slate-700">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                className={`hover:text-slate-900 transition ${
                                    pathname === link.path ? "text-slate-900 font-bold" : ""}`}
                                onClick={() => setIsOpen(false)}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Background Overlay when mobile menu open */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden"
                    onClick={() => setIsOpen(false)}/>
            )}
        </nav>
    );
}
