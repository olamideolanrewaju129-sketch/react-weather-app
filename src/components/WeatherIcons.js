export const WeatherIcons = ({ code, isDay, className = '' }) => {
  // Map weather codes to icon components (simplified SVGs)
  // 0: Clear
  // 1-3: Cloudy
  // 45-48: Fog
  // 51-67, 80-82: Rain
  // 71-77, 85-86: Snow
  // 95-99: Thunderstorm

  let Icon = null;

  if (code === 0) {
    Icon = isDay ? SunIcon : MoonIcon;
  } else if (code >= 1 && code <= 3) {
    Icon = isDay ? CloudSunIcon : CloudMoonIcon;
  } else if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) {
    Icon = RainIcon;
  } else if ((code >= 71 && code <= 77) || (code >= 85 && code <= 86)) {
    Icon = SnowIcon;
  } else if (code >= 95 && code <= 99) {
    Icon = ThunderIcon;
  } else {
    Icon = CloudIcon; // Default
  }

  return <Icon className={className} />;
};

// --- SVG Definitions ---
const SunIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" fill="#FFD700" stroke="none" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="#E0E0E0" stroke="none" />
  </svg>
);

const CloudSunIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    <path d="M10 11a4 4 0 0 1 7.2-2 4 4 0 1 1-6.1 5H9a3 3 0 0 1-3-3 3 3 0 0 1 4-6" fill="#F0F8FF" stroke="none" />
  </svg>
);

const CloudMoonIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 11a4 4 0 0 1 7.2-2 4 4 0 1 1-6.1 5H9a3 3 0 0 1-3-3 3 3 0 0 1 4-6" fill="#F0F8FF" stroke="none" />
    <path d="M17 10A9 9 0 0 1 8 5" />
  </svg>
);

const CloudIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" fill="#F0F8FF" stroke="none" />
  </svg>
);

const RainIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" fill="#B0C4DE" stroke="none" />
    <line x1="8" y1="19" x2="8" y2="21" stroke="#00BFFF" />
    <line x1="12" y1="19" x2="12" y2="22" stroke="#00BFFF" />
    <line x1="16" y1="19" x2="16" y2="21" stroke="#00BFFF" />
  </svg>
);

const SnowIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" fill="#E6E6FA" stroke="none" />
    <line x1="8" y1="19" x2="8" y2="19.01" stroke="#FFFFFF" strokeWidth="3" />
    <line x1="12" y1="20" x2="12" y2="20.01" stroke="#FFFFFF" strokeWidth="3" />
    <line x1="16" y1="19" x2="16" y2="19.01" stroke="#FFFFFF" strokeWidth="3" />
  </svg>
);

const ThunderIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" fill="#778899" stroke="none" />
    <polygon points="13 19 11 24 15 24 13 29" fill="#FFD700" stroke="#FFD700" strokeWidth="1" />
  </svg>
);
