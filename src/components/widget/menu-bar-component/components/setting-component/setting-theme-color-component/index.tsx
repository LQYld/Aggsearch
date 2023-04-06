import { Typography, Divider, Banner } from '@douyinfe/semi-ui'
import { colorConfigList } from './config'
import styles from './styles.module.css'
const { Title } = Typography
export default function SettingThemeColorComponent() {
  return (
    <div>
      <div className="mb-2">
        <Banner
          type="warning"
          description="This feature is currently under construction and cannot be used normally"
        />
      </div>
      <div>
        <Title type="secondary" heading={6}>
          {'Current settings'}
        </Title>
      </div>
      <Divider dashed={true} margin="12px" />
      <div
        className={`${styles['theme-box']} current-theme ml-2 ${styles['base-box']} text-gray-50`}
      >
        Primary
      </div>
      <Divider margin="12px" />
      <div className={`${styles['color-list']}`}>
        {colorConfigList.map((itemColor, itemColorIndex) => {
          return (
            <div
              key={`colorConfigList_${itemColorIndex}`}
              className={`mb-4 ml-2 flex flex-col items-center`}
            >
              {itemColor.colorList.map((node, nodeIndex) => {
                return (
                  <div
                    key={`colorConfigList_itemColor_${nodeIndex}`}
                    className={`${styles['base-box']} text-xs font-semibold ${
                      nodeIndex >= itemColor.lightNum
                        ? 'text-gray-50'
                        : 'text-gray-900'
                    }`}
                    style={{
                      backgroundColor: `${node.value}`
                    }}
                  >
                    {node.label}
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
      <Divider margin="12px" />
      <div>
        <Title type="secondary" heading={6}>
          {'Default settings'}
        </Title>
      </div>
      <Divider dashed={true} margin="12px" />
      <div
        className={`${styles['theme-box']} current-theme ml-2 ${styles['base-box']} text-gray-50`}
      >
        Primary
      </div>
    </div>
  )
}
