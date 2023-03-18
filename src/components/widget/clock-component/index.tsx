import { useEffect, useState } from 'react'
import styles from './styles.module.css'
export default function ClockComponent() {
  /*  clock */
  const today = new Date()
  const initHours = (today.getHours() % 12) + today.getMinutes() / 59 // 22 % 12 = 10pm
  const initMinutes = today.getMinutes() // 0 - 59
  const initSeconds = today.getSeconds()
  const [hours, setHours] = useState(initHours * 30)
  const [minutes, setMinutes] = useState(initMinutes * 6)
  const [seconds, setSeconds] = useState(initSeconds * 6)
  const rotation = (target, val) => {
    target(val)
  }
  const clock = () => {
    const today = new Date()
    let h = (today.getHours() % 12) + today.getMinutes() / 59 // 22 % 12 = 10pm
    let m = today.getMinutes() // 0 - 59
    let s = today.getSeconds() // 0 - 59

    h *= 30 // 12 * 30 = 360deg
    m *= 6
    s *= 6 // 60 * 6 = 360deg

    rotation(setHours, h)
    rotation(setMinutes, m)
    rotation(setSeconds, s)

    // call every second
    setTimeout(clock, 500)
  }
  useEffect(() => {
    clock()
  }, [])
  return (
    <div>
      <div className={styles.clock}>
        <div
          className={`${styles.hand} ${styles.hours}`}
          style={{ transform: `rotate(${hours}deg)` }}
        ></div>
        <div
          className={`${styles.hand} ${styles.minutes}`}
          style={{ transform: `rotate(${minutes}deg)` }}
        ></div>
        <div
          className={`${styles.hand} ${styles.seconds}`}
          style={{ transform: `rotate(${seconds}deg)` }}
        ></div>
        <div className={styles.point}></div>
        <div className={styles.marker}>
          <span className={styles['marker-1']}></span>
          <span className={styles['marker-2']}></span>
          <span className={styles['marker-3']}></span>
          <span className={styles['marker-4']}></span>
        </div>
      </div>
    </div>
  )
}
