import WeatherIconAdapter from '../weather-icon-component'
import {
  reservedInteger,
  theCurrentDayOfTheWeek_abbreviation,
  theCurrentDay
} from '@/utils'
import { skycon_bgc_map, skycon_icon_map } from './enum'
import { IconInbox } from '@douyinfe/semi-icons/lib/es'
import './styles.css'
export default function WeatherComponent({
  weatherValue
}: {
  weatherValue: any
}) {
  const weatherIconStyle = {
    width: '50px',
    height: '50px'
  }
  const weatherListIconStyle = {
    width: '20px',
    height: '20px'
  }
  const daily = weatherValue?.result?.daily || null
  return (
    <div className="h-full">
      {daily ? (
        <div className="container">
          <div
            className="weather-side"
            style={{
              backgroundImage: `url('${
                skycon_bgc_map[daily?.skycon[0]?.value]
              }')`
            }}
          >
            <div className="weather-container h-full flex flex-col justify-between">
              <div className="w-full h-full flex justify-center items-center">
                <WeatherIconAdapter
                  type={skycon_icon_map[daily?.skycon[0]?.value]}
                  style={weatherIconStyle}
                />
              </div>
            </div>
            <div className="date-container h-full flex flex-col justify-between">
              <div className="flex items-center">
                <h2 className="date-dayname mr-4">
                  {theCurrentDayOfTheWeek_abbreviation(
                    daily?.temperature[0]?.date
                  )}
                </h2>
                <span className="date-day">
                  {theCurrentDay(daily?.temperature[0]?.date)}
                </span>
              </div>
              {/* <i className="location-icon" data-feather="map-pin"></i> */}
              <span className="location">ChongQing, China</span>
              <div className="flex items-center">
                <div className="weather-temp mr-4">
                  {reservedInteger(daily?.temperature[0]?.avg)}°C
                </div>
                {/* <div className="weather-desc">Sunny</div> */}
              </div>
            </div>
          </div>
          <div className="info-side">
            <div className="week-container">
              <ul className="week-list">
                {(daily?.skycon || []).map((node, nodeIndex) => {
                  return (
                    <li
                      className={`${nodeIndex === 0 ? 'active' : ''}`}
                      key={`weather_component_li_${nodeIndex}`}
                    >
                      <div className="flex-1 flex justify-center">
                        <WeatherIconAdapter
                          type={skycon_icon_map[node?.value]}
                          style={weatherListIconStyle}
                        />
                      </div>
                      <span className="day-name">
                        {theCurrentDayOfTheWeek_abbreviation(
                          daily?.temperature[nodeIndex]?.date
                        )}
                      </span>
                      <span className="day-temp">
                        {reservedInteger(daily?.temperature[nodeIndex]?.avg)}°C
                      </span>
                    </li>
                  )
                })}
                <div className="clear"></div>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="no-empty">
          <div>
            <IconInbox size="extra-large" />
          </div>
          <div>Pause Weather widget .</div>
        </div>
      )}
    </div>
  )
}
