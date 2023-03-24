import styles from './styles.module.css'
export default function InAwordComponent() {
  return (
    <div className={`px-4`}>
      <div className={`${styles.sentence} w-full`}>
        <div>不知江月待何人，但见长江送流水</div>
        <div className={`text-right`}>-- 今日诗词</div>
      </div>
      <div className={`${styles.sentence} w-full`}>
        <div>
          I have spent my entire life putting off things that I thought there’d
          be time for later.
        </div>
        <div className={`text-right`}>-- 金山词霸</div>
      </div>
    </div>
  )
}
