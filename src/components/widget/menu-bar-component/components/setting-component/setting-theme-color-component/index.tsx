import { Typography, Divider } from '@douyinfe/semi-ui'
import styles from './styles.module.css'
const { Title } = Typography
export default function SettingThemeColorComponent() {
  return (
    <div>
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
