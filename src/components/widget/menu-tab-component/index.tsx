import { useState } from 'react'
import { RADIO_TYPE } from './enum'
import Clock from '@/components/widget/clock-component'
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
      case RADIO_TYPE.OTHER:
        return 'segmented-control-color-other'
    }
  }
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
          value={RADIO_TYPE.OTHER}
          id={RADIO_TYPE.OTHER}
          defaultChecked={checked == RADIO_TYPE.OTHER}
        />
        <label
          className={styles['segmented-control-3']}
          htmlFor={RADIO_TYPE.OTHER}
          onClick={() => {
            handlerTabClick(RADIO_TYPE.OTHER)
          }}
        >
          <p>{RADIO_TYPE.OTHER}</p>
        </label>

        <div
          className={`${styles['segmented-control-color']} ${
            styles[getBorderBoxCssName(checked)]
          }`}
        ></div>
      </div>
      <div className={`${styles.chip} w-full pt-14 pb-4`}>
        <Clock />
      </div>
    </div>
  )
}
