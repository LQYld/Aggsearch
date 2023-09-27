import { useRef, useState, useEffect } from 'react'
import { throttle } from 'lodash'
import { SEARCH_URL } from './enum'
import { currentEngine } from '@/jotai'
import type { ICurrentSearch } from '@/jotai/types'
import { useAtom } from 'jotai'
import styles from './styles.module.css'
interface IResponse extends Promise<any> {
  g?: unknown[]
}
export default function SearchCenterComponent() {
  const [searchHint, setSearchHint] = useState([])
  const [currentSearch] = useAtom(currentEngine)
  const inputValue = useRef('')
  const [currentInputValue, setCurrentInputValue] = useState('')
  const handleSearchEvent = throttle(async (event) => {
    const value = event.target.value
    const [valueArrayOne, ...valueArrayTwo] = value.split(': ')
    if (
      value ===
      `${
        (currentSearch as ICurrentSearch[]).filter((item) => item.checked)[0]
          .label
      }: `
    ) {
      inputValue.current = ''
      setCurrentInputValue('')
    } else {
      inputValue.current = valueArrayTwo.join(': ') || valueArrayOne[0]
      setCurrentInputValue(valueArrayTwo.join(': ') || valueArrayOne[0])
    }

    if (!value) {
      setSearchHint([])
      return
    }
    const resJsonFormat = await fetch(
      `/api/searchHintForBaidu?v=${inputValue.current}`
    )
    const response: IResponse = await resJsonFormat.json()
    response.g && inputValue.current
      ? setSearchHint(response.g)
      : setSearchHint([])
  }, 100)
  const handleSearchBtnClick = () => {
    if (!inputValue.current) return
    window.open(
      `${
        SEARCH_URL[
          (currentSearch as ICurrentSearch[]).filter((item) => item.checked)[0]
            .value
        ]
      }${inputValue.current}`
    )
    setSearchHint([])
  }
  const handleSearchHintItem = (value: string) => {
    window.open(
      `${
        SEARCH_URL[
          (currentSearch as ICurrentSearch[]).filter((item) => item.checked)[0]
            .value
        ]
      }${value}`
    )
    setSearchHint([])
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
            placeholder={`${[
              (currentSearch as ICurrentSearch[]).filter(
                (item) => item.checked
              )[0].label
            ]}: Please enter the search content`}
            onInput={(event) => handleSearchEvent(event)}
            value={`${
              currentInputValue
                ? `${
                    (currentSearch as ICurrentSearch[]).filter(
                      (item) => item.checked
                    )[0].label
                  }: ${currentInputValue}`
                : ''
            }`}
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
