import React, { useState, useEffect } from 'react';
import './App.css';
import { fetchGeocode, fetchWeather } from './services/weatherService';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';

function App() {
  const [location, setLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [bgClass, setBgClass] = useState('bg-default');

  const getWeatherData = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const geoResult = await fetchGeocode(city);
      setLocation({
        name: geoResult.name,
        country: geoResult.country,
        admin1: geoResult.admin1,
        lat: geoResult.latitude,
        lon: geoResult.longitude,
      });

      const weather = await fetchWeather(geoResult.latitude, geoResult.longitude);
      setWeatherData(weather);
      
      // Determine background dynamically
      const currentCode = weather.current.weather_code;
      const isDay = weather.current.is_day;
      
      let newBgClass = 'bg-default';
      if (!isDay) newBgClass = 'bg-night';
      else if (currentCode === 0 || currentCode === 1) newBgClass = 'bg-sunny';
      else if (currentCode >= 50 && currentCode <= 67) newBgClass = 'bg-rainy';
      else if (currentCode >= 71 && currentCode <= 86) newBgClass = 'bg-snowy';
      else if (currentCode >= 2 && currentCode <= 48) newBgClass = 'bg-cloudy';
      else if (currentCode >= 95) newBgClass = 'bg-stormy';
      
      setBgClass(newBgClass);
    } catch (err) {
      setError('Could not fetch weather data. Try another city.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Initial load
    getWeatherData('London');
  }, []);

  return (
    <div className={`App ${bgClass}`}>
      <div className="main-container">
        <header className="app-header">
          <h1>Clima</h1>
        </header>
        
        <SearchBar onSearch={getWeatherData} />

        {loading && <div className="loader glass-panel">Loading conditions...</div>}
        
        {error && <div className="error glass-panel">{error}</div>}
        
        {!loading && !error && weatherData && location && (
          <div className="weather-dashboard">
            <CurrentWeather data={weatherData} location={location} />
            <Forecast data={weatherData} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;