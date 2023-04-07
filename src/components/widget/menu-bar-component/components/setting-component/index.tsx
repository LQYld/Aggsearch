import { Modal, Tabs, Toast } from '@douyinfe/semi-ui'
import {
  IconSetting,
  IconClose,
  IconGlobe,
  IconHelpCircle,
  IconCheckList,
  IconTemplate
} from '@douyinfe/semi-icons'
import SettingAboutComponent from './setting-about-component'
import SettingSearchSettingComponent from './setting-search-setting-component'
import SettingSettingTodoComponent from './setting-setting-todo-component'
import SettingThemeColorComponent from './setting-theme-color-component'
import styles from './styles.module.css'
const { TabPane } = Tabs
export default function SettingComponent({ visible, changeVisible }) {
  // 关闭弹框
  const closeModal = () => changeVisible(false)
  // 确定设置
  const setUp = () => {
    Toast.success({
      content: 'Settings updated successfully',
      duration: 3
    })
    closeModal()
  }
  // tab栏设置
  const tabList = [
    {
      label: 'Search Settings',
      icon: <IconGlobe />,
      content: <SettingSearchSettingComponent />
    },
    {
      label: 'Theme Colors',
      icon: <IconTemplate />,
      content: <SettingThemeColorComponent />
    },
    {
      label: 'Setting Todo',
      icon: <IconCheckList />,
      content: <SettingSettingTodoComponent />
    },
    {
      label: 'About',
      icon: <IconHelpCircle />,
      content: <SettingAboutComponent />
    }
  ]
  // 页头
  const header = (
    <div className="w-full flex items-center justify-between pt-4">
      <div className={`flex items-center ${styles.header} h-full`}>
        <IconSetting size={'extra-large'} />
        <div className="font-semibold text-xl ml-2">Setting</div>
      </div>
      <div
        className={`${styles.header} h-full flex items-center cursor-pointer`}
        onClick={closeModal}
      >
        <IconClose size={'extra-large'} />
      </div>
    </div>
  )
  // 页脚
  const footer = (
    <div className="flex items-center w-full justify-end">
      <div
        className={`${styles['btn']} ${styles['btn-primary']} mr-4`}
        onClick={setUp}
      >
        <p>Set up</p>
      </div>
      <div
        className={`${styles['btn']} ${styles['btn-secondary']}`}
        onClick={closeModal}
      >
        <p>Cancel</p>
      </div>
    </div>
  )
  // 主体
  const Main = () => {
    return (
      <Tabs tabPosition="left" type={'button'}>
        {tabList.map((node, nodeIndex) => {
          return (
            <TabPane
              className="px-4"
              tab={
                <span>
                  {node.icon}
                  {node.label}
                </span>
              }
              itemKey={`setting_component_tabList_${nodeIndex}`}
              key={`setting_component_tabList_${nodeIndex}`}
            >
              <div
                className={`overflow-y-auto max-h-96 ${styles['setting-list']}`}
              >
                {node.content}
              </div>
            </TabPane>
          )
        })}
      </Tabs>
    )
  }
  return (
    <Modal visible={visible} header={header} footer={footer} width={800}>
      <div className={`py-4`}>
        <Main />
      </div>
    </Modal>
  )
}
