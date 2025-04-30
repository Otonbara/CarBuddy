/* eslint-disable react-hooks/rules-of-hooks */
import { useNavigate } from 'react-router-dom';

interface Car {
    id: number;
    name: string;
    image: string;
    category: string;
    price: number;
}

export default function carCard({ car }: {car: Car}) {
    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate(`/cars/${car.name}`, { state: { car } });
    };

    const handleBookNow = () => {
        localStorage.setItem("selectedVehicle", JSON.stringify(car));  // Store the selected car
        navigate("/booking");
    };
    

    return (
        <div className='p-4 shadow-md hover:scale-105 transition-all duration-300'>
                <img 
                    src={car.image}  
                    alt={car.name}
                    className='w-full h-40 object-contain mb-3'/>

                <h2 className='text-xl font-semibold font-[Poppins]'>{car.name}</h2>
                <p className='font-[DM_Sans]'>{car.category}</p>
                <p className='font-[DM_Sans] font-semibold text-green-500'>₦{car.price.toLocaleString()}<span className='text-black text-sm font-[Poppins] font-normal'>/Per Day</span></p>

                <div className='mt-4 flex justify-center gap-2'>
                    <button
                        onClick={handleViewDetails}
                        className='px-4 py-2 text-[11px] text-white font-[DM_Sans] font-bold bg-[#696969] hover:bg-[#696969]/70 rounded-full cursor-pointer'>
                        View Details
                    </button>
                    <button
                        onClick={handleBookNow}
                        className='px-4 py-2 text-[11px] text-white font-[DM_Sans] font-bold bg-blue-600 hover:bg-blue-600/70 rounded-full cursor-pointer'>
                        Book Now
                    </button>
                </div>
            </div>
    )
}