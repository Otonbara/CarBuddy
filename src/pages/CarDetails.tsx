// src/pages/CarDetails.tsx
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {
  Fuel, Gauge, Calendar, Settings, Users
} from 'lucide-react';

export default function CarDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const car = location.state?.car;

  useEffect(() => {
    if (!car) navigate('/cars');
  }, [car, navigate]);

  if (!car) return null;

  return (
    <div className="lg:px-[100px] lg:pt-[100px] px-[30px] py-[60px]">
      <h1 className="text-3xl font-bold font-[Poppins] mb-6">{car.name}</h1>

      <img
        src={car.image}
        alt={car.name}
        className="w-full h-[250px] object-contain rounded mb-6"/>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-[DM_Sans] text-gray-800">
        <div className="space-y-3">
          <p><strong>Category:</strong> {car.category}</p>
          <p><strong>Rental Price:</strong> ₦{car.price.toLocaleString()}</p>
          <p><strong>Description:</strong> A top-tier rental car suitable for city and long trips.</p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Fuel className="w-5 h-5 text-blue-600"/> <span><strong>Fuel Type:</strong> {car.fuel}</span>
          </div>
          <div className="flex items-center gap-2">
            <Settings className="w-5 h-5 text-blue-600"/> <span><strong>Transmission:</strong> {car.transmission}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-600"/> <span><strong>Seats:</strong> {car.seats}</span>
          </div>
          <div className="flex items-center gap-2">
            <Gauge className="w-5 h-5 text-blue-600"/> <span><strong>Mileage:</strong> {car.mileage}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-600"/> <span><strong>Model Year:</strong> {car.year}</span>
          </div>
        </div>
      </div>
      
      <div className='flex justify-center gap-5 mt-10 font-bold'>
        <button
            onClick={() => {
              localStorage.setItem("selectedVehicle", JSON.stringify(car));
              navigate("/booking");
            }}
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-full font-[DM_Sans] cursor-pointer">
            Book Now
        </button>
        <button
            onClick={() => navigate("/cars")}
            className="bg-gray-600 hover:bg-gray-500 text-white px-6 py-2 rounded-full font-[DM_Sans] cursor-pointer">
            Back to Cars
        </button>
      </div>
    </div>
  );
}
