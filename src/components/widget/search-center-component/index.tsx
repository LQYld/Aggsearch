import styles from './styles.module.css'
export default function SearchCenterComponent() {
  return (
    <div className="relative flex flex-col items-center">
      <div className="flex items-center relative">
        <input
          placeholder="Please enter the search content"
          className={styles.input}
          type="text"
        />
        <button className={`${styles.button} absolute right-0`}>Search</button>
      </div>
      <div className={`z-1 mt-2 ${styles['search-list']}`}></div>
    </div>
  )
}
