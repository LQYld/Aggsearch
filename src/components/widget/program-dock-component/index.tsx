import { useEffect, useRef, useState } from 'react'
import { pushWindow } from '@/utils'
import styles from './styles.module.css'
export default function ProgramDockComponent() {
  const content = useRef(null)
  const [logoList] = useState([
    {
      imageUrl: '/bilibili.png',
      value: 'bilibili',
      url: 'https://www.bilibili.com/'
    },
    {
      imageUrl: '/boss.png',
      value: 'boss',
      url: 'https://www.zhipin.com/'
    },
    {
      imageUrl: '/gaode.png',
      value: 'gaode',
      url: 'https://www.amap.com/'
    },
    {
      imageUrl: '/juejin.png',
      value: 'juejin',
      url: 'https://juejin.cn/'
    },
    {
      imageUrl: '/leetcode.png',
      value: 'leetcode',
      url: 'https://leetcode.cn/'
    },
    {
      imageUrl: '/weibo.png',
      value: 'weibo',
      url: 'https://weibo.com/'
    },
    {
      imageUrl: '/xiecheng.png',
      value: 'xiecheng',
      url: 'https://www.ctrip.com/'
    },
    {
      imageUrl: '/dongchedi.png',
      value: 'dongchedi',
      url: 'https://www.dongchedi.com/'
    },
    {
      imageUrl: '/douban.png',
      value: 'douban',
      url: 'https://www.douban.com/'
    },
    {
      imageUrl: '/zhihu.png',
      value: 'zhihu',
      url: 'https://www.zhihu.com/'
    }
  ])
  const mousemoverFunc = (e) => {
    const { clientX, clientY } = e
    const dds: HTMLElement[] =
      Array.from(document.querySelectorAll(`.${styles.content} dd img`)) || []
    dds.forEach((dd) => {
      const x = dd.offsetLeft + dd.offsetWidth / 2
      const y = dd.offsetTop + dd.offsetHeight / 2 + content.current.offsetTop
      const gapX = clientX - x
      const gapY = clientY - y
      const gap = Math.sqrt(Math.pow(gapX, 2) + Math.pow(gapY, 2))
      let val = 1 - gap / (dd.offsetWidth * logoList.length)
      if (val < 0.6) {
        val = 0.6
      }
      dd.style.width = 40 * val + 'px'
      dd.style.height = 40 * val + 'px'
    })
  }
  useEffect(() => {
    document.addEventListener('mousemove', mousemoverFunc)
    return () => {
      document.removeEventListener('mousemove', mousemoverFunc)
    }
  })
  return (
    <dl className={styles.content} ref={content}>
      <div className={styles['content-div']}>
        {logoList.map((el, elIndex) => {
          return (
            <dd
              key={`program-dock-component_${elIndex}`}
              onClick={() => {
                pushWindow(el.url)
              }}
            >
              <img src={el.imageUrl} />
            </dd>
          )
        })}
      </div>
    </dl>
  )
}
