import WeatherIconAdapter from '../weather-icon-component'
import { WEATHER_MAP } from '../weather-icon-component/enum'
import './styles.css'
export default function WeatherComponent() {
  const weatherIconStyle = {
    width: '50px',
    height: '50px'
  }
  const weatherListIconStyle = {
    width: '20px',
    height: '20px'
  }
  return (
    <div className="h-full">
      <div className="container">
        <div className="weather-side">
          <div className="weather-container h-full flex flex-col justify-between">
            <div className="w-full flex justify-center">
              <WeatherIconAdapter
                type={WEATHER_MAP.ClearNight}
                style={weatherIconStyle}
              />
            </div>
            {/* <div className="flex-1 w-full h-full flex flex-col justify-center">
              <div className="weather-temp">29°C</div>
              <div className="weather-desc">Sunny</div>
            </div> */}
          </div>
          <div className="date-container h-full flex flex-col justify-between">
            <div className="flex items-center">
              <h2 className="date-dayname mr-4">Tuesday</h2>
              <span className="date-day">15 Jan 2019</span>
            </div>
            {/* <i className="location-icon" data-feather="map-pin"></i> */}
            <span className="location">Paris, FR</span>
            <div className="flex items-center">
              <div className="weather-temp mr-4">29°C</div>
              <div className="weather-desc">Sunny</div>
            </div>
          </div>
        </div>
        <div className="info-side">
          <div className="week-container">
            <ul className="week-list">
              <li className="active">
                <div className="flex-1 flex justify-center">
                  <WeatherIconAdapter
                    type={WEATHER_MAP.Sunny}
                    style={weatherListIconStyle}
                  />
                </div>
                <span className="day-name">Tue</span>
                <span className="day-temp">29°C</span>
              </li>
              <li>
                <div className="flex-1 flex justify-center">
                  <WeatherIconAdapter
                    type={WEATHER_MAP.ClearNight}
                    style={weatherListIconStyle}
                  />
                </div>
                <span className="day-name">Wed</span>
                <span className="day-temp">21°C</span>
              </li>
              <li>
                <div className="flex-1 flex justify-center">
                  <WeatherIconAdapter
                    type={WEATHER_MAP.Cloudy}
                    style={weatherListIconStyle}
                  />
                </div>
                <span className="day-name">Thu</span>
                <span className="day-temp">08°C</span>
              </li>
              <li>
                <div className="flex-1 flex justify-center">
                  <WeatherIconAdapter
                    type={WEATHER_MAP.CloudyWithRainAndLightning}
                    style={weatherListIconStyle}
                  />
                </div>
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
