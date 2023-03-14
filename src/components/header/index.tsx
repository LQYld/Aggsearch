import WeatherComponent from '@/components/widget/weather-component'
import MenuBarComponent from '@/components/widget/menu-bar-component'
import './styles.css'
export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <WeatherComponent />
      </div>
      <div>
        <MenuBarComponent />
      </div>
    </div>
  )
}
