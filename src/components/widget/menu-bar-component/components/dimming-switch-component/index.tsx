import { useState } from 'react'
import styles from './styles.module.css'
export default function DimmingSwitchComponent() {
  const [checked, setChecked] = useState(false)
  return (
    <div className="relative">
      <div
        className={`${styles.switch} ${
          checked ? styles['switch-checked'] : ''
        }`}
        onClick={() => {
          console.log('点击了')
          setChecked(!checked)
        }}
      >
        <label></label>
      </div>
    </div>
  )
}
