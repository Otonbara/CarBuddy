import { useEffect, useState } from "react";

interface WeatherData {
  main: {
    temp: number;
  };
  weather: {
    main: string;
    icon: string;
  }[];
  name: string;
}

const WeatherWidget = () => {
  const [time, setTime] = useState<string>("");
  const [weather, setWeather] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [iconUrl, setIconUrl] = useState<string>("");

  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
  console.log(API_KEY);

  useEffect(() => {
    // Update time every second
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Fetch user's location
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
          );
          const data: WeatherData = await response.json();
          setWeather(`${Math.round(data.main.temp)}°C, ${data.weather[0].main}`);
          setIconUrl(`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
          setCity(data.name);
        } catch (error) {
          console.error("Error fetching weather:", error);
        }
      },
      (error) => {
        console.error("Error getting location:", error);
      }
    );
  }, [API_KEY]);

  return (
    <div className="flex md:flex-col lg:flex-row items-center gap-3 bg-white/20 backdrop-blur-md px-3 py-1 lg:rounded-full md:rounded-none rounded-full shadow-sm text-slate-700 text-xs font-semibold">
      <span>{time}</span>
      {iconUrl && (
        <img src={iconUrl} alt="Weather Icon" className="w-6 h-6" />
      )}
      <div className="flex flex-col items-start">
        <span>{weather}</span>
        <span className="text-[10px] text-slate-500">{city}</span>
      </div>
    </div>
  );
};

export default WeatherWidget;