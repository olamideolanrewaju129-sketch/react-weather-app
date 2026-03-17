import React from 'react';
import { WeatherIcons } from './WeatherIcons';

const Forecast = ({ data }) => {
  if (!data || !data.daily) return null;

  const { daily } = data;
  const days = daily.time;
  const maxTemps = daily.temperature_2m_max;
  const minTemps = daily.temperature_2m_min;
  const weatherCodes = daily.weather_code;
  const precipitation = daily.precipitation_sum;

  // Next 7 days
  const upcomingDays = days.slice(1, 8); // Skip today (index 0)

  const formatDay = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  };

  return (
    <div className="forecast-container glass-panel slide-up fade-in delay-1">
      <h3 className="forecast-title">7-Day Forecast</h3>
      <div className="forecast-list">
        {upcomingDays.map((dateString, i) => {
          // Adjust index because we sliced the first element
          const index = i + 1;
          const maxTemp = Math.round(maxTemps[index]);
          const minTemp = Math.round(minTemps[index]);
          const code = weatherCodes[index];
          const precip = precipitation[index];

          return (
            <div key={dateString} className="forecast-item">
              <span className="forecast-day">{formatDay(dateString)}</span>
              <div className="forecast-icon-wrapper">
                <WeatherIcons code={code} isDay={true} className="forecast-icon" />
                {precip > 0 && <span className="precip-text">{precip}mm</span>}
              </div>
              <div className="forecast-temps">
                <span className="max-temp">{maxTemp}°</span>
                <span className="min-temp">{minTemp}°</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Forecast;
