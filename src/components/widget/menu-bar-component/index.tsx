import { Tooltip } from '@douyinfe/semi-ui'
import SettingComponent from './components/setting-component'
import {
  IconLanguage,
  IconSetting,
  IconGithubLogo,
  IconSun,
  IconMoon,
  IconHistory
} from '@douyinfe/semi-icons/lib/es'
import './styles.css'
import { useState } from 'react'
export default function MenuBarComponent() {
  const [visible, setVisible] = useState(false)
  const changeVisible = (bool: boolean) => {
    setVisible(bool)
  }
  const size = 'large'
  const goToGithub = () => window.open('https://github.com/LQYld/Aggsearch')
  const menuBarList = [
    () => (
      <Tooltip
        content={
          <article>
            <p>Switch to English</p>
          </article>
        }
      >
        <IconLanguage className="primary-color" size={size} />
      </Tooltip>
    ),
    () => (
      <Tooltip
        content={
          <article>
            <p>Switch to dark mode</p>
          </article>
        }
      >
        <IconSun className="primary-color" size={size} />
      </Tooltip>
    ),
    () => (
      <Tooltip
        content={
          <article>
            <p>Jump to GitHub</p>
          </article>
        }
      >
        <IconGithubLogo
          className="primary-color"
          size={size}
          onClick={goToGithub}
        />
      </Tooltip>
    ),
    () => (
      <Tooltip
        content={
          <article>
            <p>View update records</p>
          </article>
        }
      >
        <IconHistory className="primary-color" size={size} />
      </Tooltip>
    ),
    () => (
      <Tooltip
        content={
          <article>
            <p>Change setting</p>
          </article>
        }
      >
        <IconSetting
          className="primary-color"
          size={size}
          onClick={() => changeVisible(true)}
        />
      </Tooltip>
    )
  ]
  return (
    <>
      <div className="flex items-center justify-center cursor-pointer">
        {menuBarList.map((node, nodeIndex) => {
          return (
            <div className="mx-2" key={`menuBarList_${nodeIndex}`}>
              {node()}
            </div>
          )
        })}
      </div>
      <SettingComponent visible={visible} changeVisible={changeVisible} />
    </>
  )
}
