import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import carData from '../data/carData';
import CarCard from './CarCard';

export default function Avail_Car_Carousel() {
  const [randomCars, setRandomCars] = useState<typeof carData>([]);

  useEffect(() => {
    const shuffled = [...carData].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 10);
    setRandomCars(selected);
  }, []);

  return (
    <div className="w-full px-4 py-8">
      
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true} // Looping enabled
        autoplay={{
          delay: 3000, // 3 seconds autoplay
          pauseOnMouseEnter: true, // Autoplay doesn't stop when interacting
        }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        navigation={{
          prevEl: '.custom-prev',  // Custom previous button
          nextEl: '.custom-next',  // Custom next button
        }}
        pagination={true}>
        {randomCars.map((car, index) => (
          <SwiperSlide 
            key={index}
            className='my-4 pb-8'>
            <CarCard car={car}/>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="flex justify-center mt-4 gap-4">
        <button className="custom-prev px-2 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full cursor-pointer">
          <ChevronLeft/>
        </button>
        <button className="custom-next px-2 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full cursor-pointer">
          <ChevronRight/>
        </button>
      </div>
    </div>
  );
}
