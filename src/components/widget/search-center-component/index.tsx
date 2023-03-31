import { useRef, useState, useEffect } from 'react'
import { throttle } from 'lodash'
import styles from './styles.module.css'
interface IResponse extends Promise<any> {
  g?: unknown[]
}
export default function SearchCenterComponent() {
  const [searchHint, setSearchHint] = useState([])
  const inputValue = useRef('')
  const handleSearchEvent = throttle(async (event) => {
    const value = event.target.value
    inputValue.current = value
    if (!value) {
      setSearchHint([])
      return
    }
    const resJsonFormat = await fetch(`/api/searchHintForBaidu?v=${value}`)
    const response: IResponse = await resJsonFormat.json()
    response.g && inputValue.current
      ? setSearchHint(response.g)
      : setSearchHint([])
  }, 100)
  const handleSearchBtnClick = () => {
    if (!inputValue.current) return
    window.open(`https://www.baidu.com/s?ie=utf-8&wd=${inputValue.current}`)
  }
  const handleSearchHintItem = (value: string) => {
    window.open(`https://www.baidu.com/s?ie=utf-8&wd=${value}`)
  }
  const [languageArts, setLanguageArts] = useState<any>(null)
  // 获取 每日语言艺术
  const getInAwordMessage = async () => {
    const resJsonFormat = await fetch(`/api/languageArts`)
    const response = await resJsonFormat.json()
    setLanguageArts(response || {})
  }
  useEffect(() => {
    getInAwordMessage()
  }, [])
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
      {searchHint.length !== 0 ? (
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
      ) : (
        languageArts && (
          <div
            className={`flex items-center ${styles.sentence} mt-10 animate__animated animate__fadeIn`}
          >
            <div className="mr-6">
              {`${languageArts?.en?.content || 'No content temporarily.'}`}
            </div>
            <div className={`${styles['sentence-title']}`}>
              -- English Today
            </div>
          </div>
        )
      )}
    </div>
  )
}
