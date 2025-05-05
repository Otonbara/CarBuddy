import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function PaymentSuccessPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingData = location.state?.bookingData;

  useEffect(() => {
    if (!bookingData) {
      navigate('/'); // Redirect if no booking data is available
    }
  }, [bookingData, navigate]);

  const handleContinue = () => {
    // Simulating a payment success, navigate to confirmation page
    navigate('/confirmation', { state: { bookingData } });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 font-[DM_Sans] py-[100px]">
      <h1 className="text-3xl font-bold mb-6 text-center font-[Poppins]">Payment Successful! 🎉</h1>
      
      <div className="bg-white shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Thank you for your payment!</h2>
        
        <p>Your booking is confirmed. Below are the details of your payment:</p>
        <ul className="space-y-2 mt-4">
          <li><strong>Payment Method:</strong> Card / Bank Transfer</li>
          <li><strong>Status:</strong> Successful</li>
          <li><strong>Total Paid:</strong> ₦{bookingData?.vehicle.price * 2} (simulated)</li>
        </ul>

        <div className="mt-6">
          <button
            onClick={handleContinue}
            className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-500 w-full">
            Proceed to Confirmation
          </button>
        </div>
      </div>
    </div>
  );
}
