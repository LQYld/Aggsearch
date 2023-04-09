import {
  CheckboxGroup,
  Checkbox,
  Banner,
  Typography,
  Divider
} from '@douyinfe/semi-ui'
import {
  SimpleIconsBaidu,
  CibSogou,
  SimpleIconsMicrosoftbing,
  SimpleIconsGooglechrome,
  FluentCodeCircle20Filled,
  ClarityBetaSolid
} from './enum'
import {
  currentEngine,
  localStorageCurrentEngineName,
  isBrowser
} from '@/jotai'
import type { ICurrentSearch } from '@/jotai/types'
import { useAtom } from 'jotai'
import { useState } from 'react'
import styles from './styles.module.css'
const { Title } = Typography

const iconClassName = `w-7 h-7 ${styles['primary-color']}`
const betaIconClassName = `w-7 h-7 ${styles['red-color']}`
const SEARCH_LOGO_ICON = {
  Baidu: <SimpleIconsBaidu className={iconClassName} />,
  DEVS_Baidu: <FluentCodeCircle20Filled className={iconClassName} />,
  Sogou: <CibSogou className={iconClassName} />,
  Bing: <SimpleIconsMicrosoftbing className={iconClassName} />,
  Google: <SimpleIconsGooglechrome className={iconClassName} />
}
export default function SettingSearchSettingComponent() {
  const [searchList, setSearchList] = useAtom(currentEngine)
  const [checkSearchList, setCheckSearchList] = useState(
    (searchList as ICurrentSearch[])
      .filter((item) => item.checked)
      .map((item) => item.value)
  )
  const searchItemOnChange = (event, index) => {
    const copySearchList = JSON.parse(
      JSON.stringify(
        (searchList as ICurrentSearch[]).map((item) => ({
          ...item,
          checked: false
        }))
      )
    )
    copySearchList[index].checked = event.target.checked
    setSearchList(copySearchList)
    if (isBrowser()) {
      window.localStorage.setItem(
        localStorageCurrentEngineName,
        JSON.stringify(copySearchList)
      )
    }
    setCheckSearchList(
      copySearchList.filter((item) => item.checked).map((item) => item.value)
    )
  }
  return (
    <div>
      <div className="mb-2">
        <Banner
          type="info"
          description="The Beta label indicates that it is still in the development stage and has not yet been officially released."
        />
      </div>
      <div>
        <Title type="secondary" heading={6}>
          {'Search Engines'}
        </Title>
      </div>
      <Divider dashed={true} margin="12px" />
      <CheckboxGroup type="pureCard" value={checkSearchList}>
        <div className="flex flex-wrap">
          {(searchList as ICurrentSearch[]).map((node, nodeIndex) => {
            return (
              <div
                className={`mb-3 ${node.checked ? '' : styles['no-checked']} ${
                  (nodeIndex + 1) % 3 === 0 ? '' : 'mr-2.5'
                }`}
                key={`setting_search_component_searchList_${nodeIndex}`}
              >
                <Checkbox
                  value={node.value}
                  style={{ width: 180 }}
                  checked={node.checked}
                  onChange={(event) => searchItemOnChange(event, nodeIndex)}
                >
                  <div className="flex items-center relative">
                    <div>{SEARCH_LOGO_ICON[node.value]}</div>
                    <div className={`ml-4`}>{node.label}</div>
                    {node.isBeta && (
                      <div className={`absolute -top-3 left-full`}>
                        <ClarityBetaSolid className={betaIconClassName} />
                      </div>
                    )}
                  </div>
                </Checkbox>
              </div>
            )
          })}
        </div>
      </CheckboxGroup>
    </div>
  )
}
