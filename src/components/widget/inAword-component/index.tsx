import { useEffect, useState } from 'react'
import styles from './styles.module.css'
interface ILanguageArts {
  en?: any
  [`zh-cn`]?: any
}
export default function InAwordComponent() {
  const [languageArts, setLanguageArts] = useState<ILanguageArts>({})
  const getInAwordMessage = async () => {
    const resJsonFormat = await fetch(`/api/languageArts`)
    const response = await resJsonFormat.json()
    console.log(response, 'response')
    setLanguageArts(response || {})
  }
  useEffect(() => {
    getInAwordMessage()
  }, [])
  return (
    <div className={`px-4`}>
      {languageArts?.en && (
        <div
          className={`${styles.sentence} w-full animate__animated animate__fadeIn`}
        >
          <div>{languageArts?.en?.content || 'No content temporarily.'}</div>
          <div className={`text-right ${styles['come-from']}`}>
            -- English Today
          </div>
        </div>
      )}
      {languageArts[`zh-cn`] && (
        <div
          className={`${styles.sentence} w-full animate__animated animate__fadeIn`}
        >
          <div>{languageArts['zh-cn']?.data?.content || ''}</div>
          <div className={`text-right ${styles['come-from']}`}>
            --
            {` ${languageArts['zh-cn']?.data?.origin?.author}`}
          </div>
        </div>
      )}
    </div>
  )
}
