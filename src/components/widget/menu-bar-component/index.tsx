import { Tooltip } from '@douyinfe/semi-ui'
import {
  IconLanguage,
  IconSetting,
  IconGithubLogo,
  IconSun,
  IconMoon,
  IconHistory
} from '@douyinfe/semi-icons/lib/es'
import './styles.css'
export default function MenuBarComponent() {
  const size = 'large'
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
        <IconGithubLogo className="primary-color" size={size} />
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
        <IconSetting className="primary-color" size={size} />
      </Tooltip>
    )
  ]
  return (
    <div className="flex items-center justify-center cursor-pointer">
      {menuBarList.map((node, nodeIndex) => {
        return (
          <div className="mx-2" key={`menuBarList_${nodeIndex}`}>
            {node()}
          </div>
        )
      })}
    </div>
  )
}
