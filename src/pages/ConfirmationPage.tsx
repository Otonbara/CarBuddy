import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import Logo from '../assets/CarBuddy_Logo_nobg.png'

export default function ConfirmationPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingData = location.state?.bookingData;

  useEffect(() => {
    if (!bookingData) {
      navigate('/'); // Redirect if no booking data
    }
  }, [bookingData, navigate]);

  if (!bookingData) return null;

  const {
    vehicle,
    pickupDate,
    returnDate,
    userName,
    userEmail,
    userPhone,
    pickupLocation
  } = bookingData;

  const days = Math.ceil((new Date(returnDate).getTime() - new Date(pickupDate).getTime()) / (1000 * 60 * 60 * 24));
  const totalPrice = days * vehicle.price;

  const handlePrint = () => window.print();

  const handleDownload = () => {
    const doc = new jsPDF();
  
    // Load logo
    const img = new Image();
    img.src = Logo;
  
    img.onload = () => {
      doc.addImage(img, 'PNG', 80, 10, 50, 30); // center logo
      doc.setFontSize(16);
      doc.text('CarBuddy Booking Receipt', 75, 50);
  
      autoTable(doc, {
        startY: 60,
        head: [['Field', 'Details']],
        body: [
          ['Name', userName],
          ['Email', userEmail],
          ['Phone', userPhone],
          ['Pickup Location', pickupLocation],
          ['Vehicle', `${vehicle.name} (${vehicle.category})`],
          ['Pickup Date', new Date(pickupDate).toLocaleString()],
          ['Return Date', new Date(returnDate).toLocaleString()],
          ['Total Days', days.toString()],
          ['Total Cost', `₦${totalPrice.toLocaleString()}`],
        ],
        theme: 'striped',
      });
  
      doc.save(`${userName}_CarBuddy_Receipt.pdf`);
    };
  };

  const handleSendEmail = () => {
    alert(`📧 Receipt sent to ${userEmail} (simulated).`);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 font-[DM_Sans] py-[100px]">
      <h1 className="text-3xl font-bold mb-6 text-center font-[Poppins]">Booking Confirmed 🎉</h1>
      
      <div className="flex flex-col items-center bg-white shadow-lg p-6 print:border print:shadow-none printable">
        <img src={Logo} alt="CarBuddy Logo" className="w-32 mb-4"/>
        <h2 className="text-xl font-semibold mb-4">Receipt Details</h2>
        <div className="space-y-2">
          <p><strong>Name:</strong> {userName}</p>
          <p><strong>Email:</strong> {userEmail}</p>
          <p><strong>Phone:</strong> {userPhone}</p>
          <p><strong>Pickup Location:</strong> {pickupLocation}</p>
          <p><strong>Vehicle:</strong> {vehicle.name} ({vehicle.category})</p>
          <p><strong>Pickup Date:</strong> {new Date(pickupDate).toLocaleString()}</p>
          <p><strong>Return Date:</strong> {new Date(returnDate).toLocaleString()}</p>
          <p><strong>Total Days:</strong> {days}</p>
          <p><strong>Total Cost:</strong> ₦{totalPrice.toLocaleString()}</p>
        </div>
      </div>

      <div className="flex gap-4 mt-6 flex-wrap justify-center">
        <button
          onClick={handlePrint}
          className="bg-gray-800 text-white px-5 py-2 rounded-md hover:bg-gray-700">
          🖨️ Print Receipt
        </button>

        <button
          onClick={handleDownload}
          className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-500">
          📥 Download Receipt
        </button>

        <button
          onClick={handleSendEmail}
          className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-500">
          📧 Send to Email
        </button>
      </div>
    </div>
  );
}
