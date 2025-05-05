import { useState, useEffect } from 'react';
import { Calendar, User, Phone, Mail, MapPin } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react'

export default function BookingPage() {
  const navigate = useNavigate();
  const selectedVehicle = JSON.parse(localStorage.getItem("selectedVehicle") || '{}');  // Get from localStorage

  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');  // New state for email
  const [userPhone, setUserPhone] = useState('');  // New state for phone number
  const [pickupLocation, setPickupLocation] = useState(''); // Pickup location

  useEffect(() => {
    if (!selectedVehicle || !selectedVehicle.name) {
      navigate('/cars');  // Redirect if no vehicle selected
    }
  }, [selectedVehicle, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const bookingData = {
      vehicle: selectedVehicle,
      pickupDate,
      returnDate,
      userName,
      userEmail,  // Include email in the booking data
      userPhone,  // Include phone number in the booking data
      pickupLocation,  // Include pickup location in the booking data
    };

    console.log('Booking data:', bookingData);

    // Optionally navigate to confirmation page or show a success message
    navigate('/confirmation', { state: { bookingData } });
  };

  if (!selectedVehicle.name) return null;  // Optional loading or error handling

  return (
    <div className="lg:px-[100px] lg:pt-[100px] px-[30px] py-[60px]">
      <h1 className="text-3xl font-bold mb-6 font-[Poppins]">Book Your Ride</h1>

      {/* Vehicle Details Section */}
      <motion.div 
        className="mb-6"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0 }}
        viewport={{ once: true }}>
        <h2 className="text-xl font-semibold mb-4">Selected Vehicle</h2>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-4 p-4 font-[DM_Sans] shadow-md">
          <img
            src={selectedVehicle.image}
            alt={selectedVehicle.name}
            className="w-[200px] h-[200px] object-contain rounded-md"/>
          <div>
            <h3 className="text-lg font-semibold">{selectedVehicle.name}</h3>
            <p className="text-sm text-gray-500">{selectedVehicle.category}</p>
            <p className="font-bold mt-2">₦{selectedVehicle.price.toLocaleString()} / per day</p>
          </div>
        </div>
      </motion.div>

      {/* Booking Form */}
      <motion.form 
        onSubmit={handleSubmit} 
        className="space-y-6 font-[Poppins] shadow-lg p-4"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        viewport={{ once: true }}>
        {/* Pickup Date & Time */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Pickup Date & Time</label>
          <div className="flex items-center space-x-2">
            <Calendar className="text-blue-600 w-5 h-5"/>
            <input
              type="datetime-local"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#696969] w-full"
              required/>
          </div>
        </div>

        {/* Return Date & Time */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Return Date & Time</label>
          <div className="flex items-center space-x-2">
            <Calendar className="text-blue-600 w-5 h-5"/>
            <input
              type="datetime-local"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#696969] w-full"
              required/>
          </div>
        </div>

        {/* User Name */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Your Name</label>
          <div className="flex items-center space-x-2">
            <User className="text-blue-600 w-5 h-5"/>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#696969] w-full"
              required/>
          </div>
        </div>

        {/* User Email */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Your Email</label>
          <div className="flex items-center space-x-2">
            <Mail className="text-blue-600 w-5 h-5"/>
            <input
              type="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#696969] w-full"
              required/>
          </div>
        </div>

        {/* User Phone Number */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Your Phone Number</label>
          <div className="flex items-center space-x-2">
            <Phone className="text-blue-600 w-5 h-5"/>
            <input
              type="tel"
              value={userPhone}
              onChange={(e) => setUserPhone(e.target.value)}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#696969] w-full"
              required/>
          </div>
        </div>

        {/* Pickup Location */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Pickup Location</label>
          <div className="flex items-center space-x-2">
            <MapPin className="text-blue-600 w-5 h-5" />
            <select
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#696969] w-full"
              required>
              <option value="" disabled>Select location</option>
              <option value="Lagos">Lagos State</option>
              <option value="Abuja">Abuja State</option>
              <option value="Rivers">Rivers State</option>
              <option value="Bayelsa">Bayelsa State</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 font-bold text-sm p-3 w-full md:w-auto hover:bg-blue-500 transition duration-300 ease-in-out text-white rounded-md">
          Confirm Booking
        </button>
      </motion.form>

      <div className='flex justify-end mt-4'>
        <Link 
          to="/cars"
          className='text-sm text-blue-600 underline hover:font-bold'>
          Back to cars
        </Link>
      </div>
    </div>
  );
}
