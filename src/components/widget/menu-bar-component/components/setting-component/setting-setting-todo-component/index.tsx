import { Typography, Divider } from '@douyinfe/semi-ui'
const { Title } = Typography
export default function SettingSettingTodoComponent() {
  return (
    <div>
      <div>
        <Title type="secondary" heading={6}>
          {'Setting Todo'}
        </Title>
      </div>
      <Divider dashed={true} margin="12px" />
    </div>
  )
}
