import styles from './styles.module.css'
export default function SearchCenterComponent() {
  // https://www.baidu.com/sugrec?ie=utf-8&json=1&prod=pc&wd=b
  return (
    <div className="relative flex flex-col items-center">
      <div className="flex items-center relative">
        <div className={styles.form}>
          <input
            type="text"
            className={`${styles['form-input']}`}
            placeholder="Please enter the search content"
          />
        </div>
        <div
          className={`${styles.btn} ${styles['btn-primary']} absolute right-0`}
        >
          <p>Search</p>
        </div>
      </div>

      <div className={`z-1 mt-2 ${styles['search-list']}`}></div>
    </div>
  )
}
