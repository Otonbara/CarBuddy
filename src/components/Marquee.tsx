import Marquee from "react-fast-marquee";
import ShellLogo from "../assets/logos/Shell_logo.png";
import DangoteLogo from "../assets/logos/Dangote_logo.png";
import TotalLogo from "../assets/logos/TotalEnergies_logo.png";
import MobilLogo from "../assets/logos/ExxonMobil_Logo.png";
import ChevronLogo from "../assets/logos/Chevron_Logo.png";
import MTNLogo from "../assets/logos/MTN_logo.png";
import NLNGLogo from "../assets/logos/NLNG_Logo.png";

export default function MarqueeComponent() {
  return (
    <Marquee 
      className="p-8 overflow-hidden"
      pauseOnHover={true}
      speed={80}
      loop={0}
      >
      {[ShellLogo, DangoteLogo, TotalLogo, MobilLogo, ChevronLogo, MTNLogo, NLNGLogo].map((logo, idx) => (
        <img 
          key={idx}
          src={logo} 
          alt={`Company Logo ${idx + 1}`} 
          className="h-16 mx-8 object-contain"/>
      ))}
    </Marquee>
  );
}
