import { useState, useEffect } from 'react';
import carData from '../data/carData';
import CarCard from '../components/CarCard';
import SearchForm from '../components/SearchForm';
import { useLocation } from 'react-router-dom';

export default function CarPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState('');

  const categories = Array.from(new Set(carData.map((car) => car.category)));

  const filteredCars = carData.filter((car) => {
    const matchesName = car.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter ? car.category === categoryFilter : true;
    const matchesVehicleType = selectedVehicle ? car.category === selectedVehicle : true;  // Filter by vehicle type
    return matchesName && matchesCategory && matchesVehicleType;
  });

  // Access the selected vehicle from the location state
  const location = useLocation();
  useEffect(() => {
    if (location.state?.selectedVehicle) {
      setSelectedVehicle(location.state.selectedVehicle);
    }
  }, [location.state]);

  // Group cars by category
  const groupedCars = categories.map((category) => ({
    category,
    cars: filteredCars.filter((car) => car.category === category),
  }));

  return (
    <div className="lg:px-[100px] lg:pt-[100px] px-[30px] py-[60px]">
      <h1 className="text-3xl font-bold mb-6 font-[Poppins]">Browse Cars</h1>

      <SearchForm
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        categoryFilter={categoryFilter}
        onCategoryChange={setCategoryFilter}
        categories={categories}/>

      {groupedCars.length === 0 ? (
        <p className="text-gray-500">No cars match your search.</p>
      ) : (
        groupedCars.map((group) => (
          <div key={group.category}>
            <h2 className="text-3xl font-bold mt-8 mb-4 font-[DM_Sans]">{group.category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {group.cars.map((car) => (
                <CarCard key={car.id} car={car}/>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
