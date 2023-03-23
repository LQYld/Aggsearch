import './styles.css'
export default function WeatherComponent() {
  return (
    <div className="h-full">
      <div className="container">
        <div className="weather-side">
          <div className="weather-container h-full flex flex-col justify-between">
            <i className="weather-icon" data-feather="sun"></i>
            <h1 className="weather-temp">29°C</h1>
            <h3 className="weather-desc">Sunny</h3>
          </div>
          <div className="date-container h-full flex flex-col justify-between">
            <h2 className="date-dayname">Tuesday</h2>
            <span className="date-day">15 Jan 2019</span>
            <i className="location-icon" data-feather="map-pin"></i>
            <span className="location">Paris, FR</span>
          </div>
        </div>
        <div className="info-side">
          <div className="week-container">
            <ul className="week-list">
              <li className="active">
                <i className="day-icon" data-feather="sun"></i>
                <span className="day-name">Tue</span>
                <span className="day-temp">29°C</span>
              </li>
              <li>
                <i className="day-icon" data-feather="cloud"></i>
                <span className="day-name">Wed</span>
                <span className="day-temp">21°C</span>
              </li>
              <li>
                <i className="day-icon" data-feather="cloud-snow"></i>
                <span className="day-name">Thu</span>
                <span className="day-temp">08°C</span>
              </li>
              <li>
                <i className="day-icon" data-feather="cloud-rain"></i>
                <span className="day-name">Fry</span>
                <span className="day-temp">19°C</span>
              </li>
              <div className="clear"></div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
