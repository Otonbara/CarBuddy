import { motion } from "framer-motion";
import HeroCity from "../assets/Hero_City.png"
import MovingCar from "../assets/Car.png"
import MovingCloud from "../assets/Cloud.png"

export default function Hero () {
    return (
        <main className="bg-[#87CEEB]/60 lg:px-[100px] lg:py-[30px] px-[30px] py-[30px]">
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
                {/* Road & Skyscraper */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="w-[80vw] relative mx-auto overflow-hidden">
                    <img 
                        src={HeroCity} 
                        alt="Hero City"
                        className="w-full h-full object-cover"/>
                    {/* Moving Car */}
                    <motion.div
                        initial={{opacity:0, x: -100 }}
                        whileInView={{opacity:1, x: 0 }}
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
                        initial={{opacity:0, x: 100 }}
                        whileInView={{opacity:1, x: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        viewport={{ once: true }}
                        className="absolute top-[-25px] right-[-10px] animate-cloud">
                        <img 
                            src={MovingCloud} 
                            alt="Moving Cloud"
                            className="w-[150px] object-cover"/>
                    </motion.div>
                </motion.div>
            </div>
            <div className="font-[DM_Sans] flex justify-center mt-8 gap-4">
                <button 
                    className="bg-[#696969] font-bold text-sm px-4 py-2 rounded-full hover:bg-[#696969]/70 
                    transition duration-300 ease-in-out">
                    <a href="">Book Now</a>
                </button>
                <button 
                    className="bg-[#696969] font-bold text-sm px-4 py-2 rounded-full hover:bg-[#696969]/70 
                    transition duration-300 ease-in-out">
                    <a href="">Browse Cars</a>
                </button>
            </div>
        </main>
    )
}