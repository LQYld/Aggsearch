import WeatherComponent from '@/components/widget/weather-component'
import MenuBarComponent from '@/components/widget/menu-bar-component'
import MenuTabComponent from '@/components/widget/menu-tab-component'
import './styles.css'
export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <MenuTabComponent />
      </div>
      <div>
        <MenuBarComponent />
      </div>
    </div>
  )
}
