import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import BrowseCars from './pages/Car'
import Booking from './pages/Booking'
import Payment from './pages/PaymentPage'
import PaymentSuccessPage from './pages/PaymentSuccessPage'
import Confirmation from './pages/ConfirmationPage'
import CarDetails from './pages/CarDetails'
import About_Contact from './pages/About_Contact'
import Footer from './components/Footer'
import './index.css'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/cars' element={<BrowseCars/>}/>
        <Route path='/booking' element={<Booking/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='payment-success' element={<PaymentSuccessPage/>}/>
        <Route path='/confirmation' element={<Confirmation/>}/>
        <Route path='/cars/:name' element={<CarDetails/>}/>
        <Route path='/About_Contact' element={<About_Contact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}