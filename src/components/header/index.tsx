import WeatherComponent from '@/components/widget/weather-component'
import './styles.css'
export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="header-card"></div>
      <div>
        <WeatherComponent />
      </div>
    </div>
  )
}
