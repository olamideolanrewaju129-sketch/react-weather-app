export const fetchGeocode = async (city) => {
  try {
    const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`);
    const data = await response.json();
    if (data.results && data.results.length > 0) {
      return data.results[0];
    }
    throw new Error('City not found');
  } catch (error) {
    console.error("Geocoding error:", error);
    throw error;
  }
};

export const fetchWeather = async (lat, lon) => {
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,cloud_cover,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum&timezone=auto`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Weather fetch error:", error);
    throw error;
  }
};

export const getWeatherDescription = (code) => {
  // WMO Weather interpretation codes (WMO OMM/WMO 0168)
  const codeMap = {
    0: 'Clear sky',
    1: 'Mainly clear',
    2: 'Partly cloudy',
    3: 'Overcast',
    45: 'Fog',
    48: 'Depositing rime fog',
    51: 'Light drizzle',
    53: 'Moderate drizzle',
    55: 'Dense drizzle',
    56: 'Light freezing drizzle',
    57: 'Dense freezing drizzle',
    61: 'Slight rain',
    63: 'Moderate rain',
    65: 'Heavy rain',
    66: 'Light freezing rain',
    67: 'Heavy freezing rain',
    71: 'Slight snow fall',
    73: 'Moderate snow fall',
    75: 'Heavy snow fall',
    77: 'Snow grains',
    80: 'Slight rain showers',
    81: 'Moderate rain showers',
    82: 'Violent rain showers',
    85: 'Slight snow showers',
    86: 'Heavy snow showers',
    95: 'Thunderstorm',
    96: 'Thunderstorm with slight hail',
    99: 'Thunderstorm with heavy hail',
  };
  return codeMap[code] || 'Unknown weather';
};
