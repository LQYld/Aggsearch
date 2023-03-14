import styles from './styles.module.css'
export default function MenuBarComponent() {
  return (
    <>
      <label className={styles.label}>
        <div className={styles.toggle}>
          <input
            className={styles['toggle-state']}
            type="checkbox"
            name="check"
            value="check"
          />
          <div className={styles.indicator}></div>
        </div>
      </label>
    </>
  )
}
