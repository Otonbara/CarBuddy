import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function PaymentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingData = location.state?.bookingData;

  const [paymentMethod, setPaymentMethod] = useState<'card' | 'transfer'>('card');

  useEffect(() => {
    if (!bookingData) {
      navigate('/cars'); // redirect if user accessed directly
    }
  }, [bookingData, navigate]);

  const handleFakePayment = () => {
    // Simulate payment
    setTimeout(() => {
      navigate('/payment-success', { state: { bookingData } });
    }, 1000);
  };

  if (!bookingData) return null;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-10 font-[Poppins]">
      <h1 className="text-3xl font-bold mb-6">CarBuddy Payment</h1>

      <div className="mb-6 w-full max-w-md">
        <label className="block font-semibold mb-2">Choose Payment Method</label>
        <div className="flex space-x-4">
          <button
            onClick={() => setPaymentMethod('card')}
            className={`px-4 py-2 rounded-md border ${
              paymentMethod === 'card' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'
            }`}>
            Pay with Card
          </button>
          <button
            onClick={() => setPaymentMethod('transfer')}
            className={`px-4 py-2 rounded-md border ${
              paymentMethod === 'transfer' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'
            }`}>
            Pay with Transfer
          </button>
        </div>
      </div>

      {/* Payment Details */}
      <div className="w-full max-w-md p-4 bg-white mb-6 shadow-lg">
        {paymentMethod === 'card' ? (
          <div className="space-y-4">
            <div>
              <label className="text-sm block mb-1">Card Number</label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="flex space-x-2">
              <div className="w-1/2">
                <label className="text-sm block mb-1">Expiry Date</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div className="w-1/2">
                <label className="text-sm block mb-1">CVV</label>
                <input
                  type="password"
                  placeholder="123"
                  className="w-full p-2 border rounded-md"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-2 text-left text-sm text-gray-800">
            <p><strong>Account Name:</strong> CarBuddy Rentals Ltd.</p>
            <p><strong>Bank:</strong> Zenith Bank</p>
            <p><strong>Account Number:</strong> 1234567890</p>
            <p className="mt-2 text-xs text-gray-500">
              After making a transfer, click “Complete Payment” to confirm.
            </p>
          </div>
        )}
      </div>

      {/* Confirm Button */}
      <button
        onClick={handleFakePayment}
        className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-md font-semibold transition">
        Complete Payment
      </button>
    </div>
  );
}
