import { Modal, Tabs } from '@douyinfe/semi-ui'
import {
  IconSetting,
  IconClose,
  IconGlobe,
  IconHelpCircle,
  IconCheckList,
  IconTemplate
} from '@douyinfe/semi-icons'
import styles from './styles.module.css'
import { useState } from 'react'
const { TabPane } = Tabs
export default function SettingComponent({ visible, changeVisible }) {
  // 关闭弹框
  const closeModal = () => changeVisible(false)
  // TODO: 测试主体内容
  const TestContent = (
    <div style={{ padding: '0 24px' }}>
      <h3>文档</h3>
      <p style={{ lineHeight: 1.8 }}>
        Semi Design 是由互娱社区前端团队与 UED
        团队共同设计开发并维护的设计系统。设计系统包含设计语言以及一整套可复用的前端组件，帮助设计师与开发者更容易地打造高质量的、用户体验一致的、符合设计规范的
        Web 应用。
      </p>
      <p style={{ lineHeight: 1.8 }}>
        区别于其他的设计系统而言，Semi Design
        以用户中心、内容优先、设计人性化为设计理念，具有以下优势：
      </p>
    </div>
  )
  // tab栏设置
  const tabList = [
    {
      label: 'Search Settings',
      icon: <IconGlobe />,
      content: TestContent
    },
    {
      label: 'Theme Colors',
      icon: <IconTemplate />,
      content: TestContent
    },
    {
      label: 'Setting Todo',
      icon: <IconCheckList />,
      content: TestContent
    },
    {
      label: 'About',
      icon: <IconHelpCircle />,
      content: TestContent
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
        onClick={closeModal}
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
              tab={
                <span>
                  {node.icon}
                  {node.label}
                </span>
              }
              itemKey={`setting_component_tabList_${nodeIndex}`}
              key={`setting_component_tabList_${nodeIndex}`}
            >
              {node.content}
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
