import { useEffect, useState } from 'react'
import { RADIO_TYPE } from './enum'
import Weather from '@/components/widget/weather-component'
import Clock from '@/components/widget/clock-component'
import InAword from '@/components/widget/inAword-component'
import styles from './styles.module.css'
export default function MenuTabComponent() {
  const [checked, setChecked] = useState(RADIO_TYPE.CLOCK)
  const handlerTabClick = (type: RADIO_TYPE) => {
    setChecked(type)
  }
  const getBorderBoxCssName = (type: RADIO_TYPE) => {
    switch (type) {
      case RADIO_TYPE.WEATHER:
        return 'segmented-control-color-weather'
      case RADIO_TYPE.CLOCK:
        return 'segmented-control-color-clock'
      case RADIO_TYPE.INAWORD:
        return 'segmented-control-color-in-a-word'
    }
  }
  const AdapterAssembly = (type: RADIO_TYPE) => {
    switch (type) {
      case RADIO_TYPE.WEATHER:
        return (
          <div
            key={RADIO_TYPE.WEATHER}
            className="animate__animated animate__fadeIn"
          >
            <Weather />
          </div>
        )
      case RADIO_TYPE.CLOCK:
        return (
          <div
            key={RADIO_TYPE.CLOCK}
            className="animate__animated animate__fadeIn"
          >
            <Clock />
          </div>
        )
      case RADIO_TYPE.INAWORD:
        return (
          <div
            key={RADIO_TYPE.INAWORD}
            className="animate__animated animate__fadeIn w-full"
          >
            <InAword />
          </div>
        )
      default:
        return null
    }
  }
  const getPosition = (position) => {
    console.log(
      '维度Latitude: ' +
        position.coords.latitude +
        '----经度Longitude: ' +
        position.coords.longitude
    )
  }
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getPosition)
    }
  }, [])
  return (
    <div className="relative">
      <div className={styles['segmented-control']}>
        <input
          type="radio"
          name="radio2"
          value={RADIO_TYPE.WEATHER}
          id={RADIO_TYPE.WEATHER}
          defaultChecked={checked == RADIO_TYPE.WEATHER}
        />
        <label
          className={styles['segmented-control-1']}
          htmlFor={RADIO_TYPE.WEATHER}
          onClick={() => {
            handlerTabClick(RADIO_TYPE.WEATHER)
          }}
        >
          <p>{RADIO_TYPE.WEATHER}</p>
        </label>

        <input
          type="radio"
          name="radio2"
          value={RADIO_TYPE.CLOCK}
          id={RADIO_TYPE.CLOCK}
          defaultChecked={checked == RADIO_TYPE.CLOCK}
        />
        <label
          className={styles['segmented-control-2']}
          htmlFor={RADIO_TYPE.CLOCK}
          onClick={() => {
            handlerTabClick(RADIO_TYPE.CLOCK)
          }}
        >
          <p>{RADIO_TYPE.CLOCK}</p>
        </label>

        <input
          type="radio"
          name="radio2"
          value={RADIO_TYPE.INAWORD}
          id={RADIO_TYPE.INAWORD}
          defaultChecked={checked == RADIO_TYPE.INAWORD}
        />
        <label
          className={styles['segmented-control-3']}
          htmlFor={RADIO_TYPE.INAWORD}
          onClick={() => {
            handlerTabClick(RADIO_TYPE.INAWORD)
          }}
        >
          <p>{RADIO_TYPE.INAWORD}</p>
        </label>

        <div
          className={`${styles['segmented-control-color']} ${
            styles[getBorderBoxCssName(checked)]
          }`}
        ></div>
      </div>
      <div className={`${styles.chip} w-full pt-14 pb-4`}>
        {AdapterAssembly(checked)}
      </div>
    </div>
  )
}
