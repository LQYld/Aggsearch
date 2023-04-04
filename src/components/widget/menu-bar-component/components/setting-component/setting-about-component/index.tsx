import LogoComponent from '@/components/widget/logo-component'
import { Typography, Divider, List } from '@douyinfe/semi-ui'
const { Title, Text } = Typography
export default function SettingAboutComponent() {
  // const data = ['版本 0.0.1（Beta版本）', '更新时间', 'Github 地址: ', '作者:']
  // 版本
  const Version = (
    <div className="flex items-center">
      <div className="font-medium w-16">Version: </div>
      <div className="ml-2">{'版本 0.0.1（Beta版本）'}</div>
    </div>
  )
  // 最近发版
  const Publish = (
    <div className="flex items-center">
      <div className="font-medium w-16">Publish: </div>
      <div className="ml-2">{'2 months ago'}</div>
    </div>
  )
  // 仓库地址
  const Address = (
    <div className="flex items-center">
      <div className="font-medium w-16">Address: </div>
      <div className="ml-2">
        <Text
          link={{
            href: 'https://github.com/LQYld/Aggsearch',
            target: '_blank'
          }}
        >
          https://github.com/LQYld/Aggsearch
        </Text>
      </div>
    </div>
  )
  // 作者
  const Author = (
    <div className="flex items-center">
      <div className="font-medium w-16">Author: </div>
      <div className="ml-2">
        <Text
          link={{
            href: 'https://github.com/LQYld',
            target: '_blank'
          }}
        >
          LQYld
        </Text>
      </div>
    </div>
  )
  const data = [Version, Publish, Address, Author]
  return (
    <div>
      <div>
        <Title type="secondary" heading={6}>
          {'About Aggsearch'}
        </Title>
      </div>
      <Divider dashed={true} margin="12px" />
      <div className="mb-4 scale-75">
        <LogoComponent />
      </div>
      <List
        size="small"
        bordered
        dataSource={data}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </div>
  )
}
