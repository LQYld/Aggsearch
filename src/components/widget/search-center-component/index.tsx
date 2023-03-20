import { useRef, useState } from 'react'
import styles from './styles.module.css'
interface IResponse extends Promise<any> {
  g?: unknown[]
}
export default function SearchCenterComponent() {
  const [searchHint, setSearchHint] = useState([])
  const inputValue = useRef('')
  const handleSearchEvent = async (event) => {
    const value = event.target.value
    inputValue.current = value
    if (!value) {
      setSearchHint([])
      return
    }
    const resJsonFormat = await fetch(`/api/searchHintForBaidu?v=${value}`)
    const response: IResponse = await resJsonFormat.json()
    response.g ? setSearchHint(response.g) : setSearchHint([])
  }
  const handleSearchBtnClick = () => {
    if (!inputValue.current) return
    window.open(`https://www.baidu.com/s?ie=utf-8&wd=${inputValue.current}`)
  }
  const handleSearchHintItem = (value: string) => {
    window.open(`https://www.baidu.com/s?ie=utf-8&wd=${value}`)
  }
  return (
    <div className="relative flex flex-col items-center">
      <div className="flex items-center relative">
        <div className={styles.form}>
          <input
            type="text"
            className={`${styles['form-input']}`}
            placeholder="Please enter the search content"
            onInput={(event) => handleSearchEvent(event)}
          />
        </div>
        <div
          className={`${styles.btn} ${styles['btn-primary']} absolute right-0`}
          onClick={() => handleSearchBtnClick()}
        >
          <p>Search</p>
        </div>
      </div>

      {searchHint.length !== 0 && (
        <div
          className={`z-1 mt-2 p-3 ${styles['search-list']} max-h-80 overflow-y-scroll`}
        >
          {searchHint.map((ele, eleIndex) => {
            return (
              ele.q && (
                <div
                  key={`search_hint-list_${eleIndex}`}
                  className={`${styles.chip} px-3 py-2.5 cursor-pointer ${
                    eleIndex === searchHint.length - 1 ? '' : 'mb-2.5'
                  }`}
                  onClick={() => handleSearchHintItem(ele.q)}
                >
                  <p className={`cursor-pointer`}>{ele.q}</p>
                </div>
              )
            )
          })}
        </div>
      )}
    </div>
  )
}
