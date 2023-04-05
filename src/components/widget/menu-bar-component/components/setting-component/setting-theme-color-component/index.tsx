import { Typography, Divider, Banner } from '@douyinfe/semi-ui'
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
      <div className={`${styles['theme-box']} current-theme`}></div>
      <Divider margin="12px" />
    </div>
  )
}
