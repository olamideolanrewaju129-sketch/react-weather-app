import React from 'react';
import { WeatherIcons } from './WeatherIcons';
import { getWeatherDescription } from '../services/weatherService';

const CurrentWeather = ({ data, location }) => {
  if (!data || !data.current) return null;

  const { current } = data;
  const isDay = current.is_day;
  const weatherCode = current.weather_code;
  const temp = Math.round(current.temperature_2m);
  const apparentTemp = Math.round(current.apparent_temperature);
  const humidity = current.relative_humidity_2m;
  const windSpeed = current.wind_speed_10m;
  const description = getWeatherDescription(weatherCode);

  return (
    <div className="current-weather glass-panel slide-up fade-in">
      <div className="weather-header">
        <h2 className="location-name">{location.name}</h2>
        <p className="location-country">{location.admin1 ? `${location.admin1}, ` : ''}{location.country}</p>
      </div>

      <div className="weather-main">
        <div className="weather-temp-container">
          <h1 className="weather-temp">{temp}°</h1>
          <p className="weather-desc">{description}</p>
        </div>
        <div className="weather-icon-container">
          <WeatherIcons code={weatherCode} isDay={isDay} className="main-weather-icon pulse" />
        </div>
      </div>

      <div className="weather-details">
        <div className="detail-item">
          <span className="detail-label">Feels Like</span>
          <span className="detail-value">{apparentTemp}°</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Humidity</span>
          <span className="detail-value">{humidity}%</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Wind</span>
          <span className="detail-value">{windSpeed} km/h</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
