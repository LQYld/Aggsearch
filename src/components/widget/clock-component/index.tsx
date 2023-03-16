import { useEffect, useRef } from 'react'
import styles from './styles.module.css'
export default function ClockComponent() {
  /*  clock */
  const hours = useRef(null)
  const minutes = useRef(null)
  const seconds = useRef(null)
  const rotation = (target, val) => {
    target.style.transform = `rotate(${val}deg)`
  }
  const clock = () => {
    if (!(hours.current && minutes.current && seconds.current)) {
      setTimeout(clock, 500)
      return
    }
    const today = new Date()
    let h = (today.getHours() % 12) + today.getMinutes() / 59 // 22 % 12 = 10pm
    let m = today.getMinutes() // 0 - 59
    let s = today.getSeconds() // 0 - 59

    h *= 30 // 12 * 30 = 360deg
    m *= 6
    s *= 6 // 60 * 6 = 360deg

    rotation(hours.current, h)
    rotation(minutes.current, m)
    rotation(seconds.current, s)

    // call every second
    setTimeout(clock, 500)
  }
  useEffect(() => {
    clock()
  }, [])
  return (
    <div>
      <div className={styles.clock}>
        <div className={`${styles.hand} ${styles.hours}`} ref={hours}></div>
        <div className={`${styles.hand} ${styles.minutes}`} ref={minutes}></div>
        <div className={`${styles.hand} ${styles.seconds}`} ref={seconds}></div>
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
