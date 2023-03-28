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
    () => <IconLanguage className="primary-color" size={size} />,
    () => <IconSun className="primary-color" size={size} />,
    () => <IconMoon className="primary-color" size={size} />,
    () => <IconGithubLogo className="primary-color" size={size} />,
    () => <IconHistory className="primary-color" size={size} />,
    () => <IconSetting className="primary-color" size={size} />
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
