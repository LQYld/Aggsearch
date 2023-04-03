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
  SimpleIconsGooglechrome
} from './enum'
import { useState } from 'react'
import styles from './styles.module.css'
const { Title } = Typography

const iconClassName = `w-7 h-7 ${styles['primary-color']}`
const SEARCH_LOGO_ICON = {
  Baidu: <SimpleIconsBaidu className={iconClassName} />,
  Sogou: <CibSogou className={iconClassName} />,
  Bing: <SimpleIconsMicrosoftbing className={iconClassName} />,
  Google: <SimpleIconsGooglechrome className={iconClassName} />
}
export default function SettingSearchSettingComponent() {
  const [searchList, setSearchList] = useState([
    {
      label: 'Baidu',
      value: 'Baidu',
      checked: false
    },
    {
      label: 'Sogou',
      value: 'Sogou',
      checked: false
    },
    {
      label: 'Bing',
      value: 'Bing',
      checked: false
    },
    {
      label: 'Google',
      value: 'Google',
      checked: false
    }
  ])
  const searchItemOnChange = (event, index) => {
    const copySearchList = JSON.parse(JSON.stringify(searchList))
    copySearchList[index].checked = event.target.checked
    setSearchList(copySearchList)
  }
  return (
    <div>
      <div className="mb-2">
        <Banner
          type="info"
          description="A pre-released version is available."
        />
      </div>
      <div>
        <Title type="secondary" heading={6}>
          {'Normal search'}
        </Title>
      </div>
      <Divider dashed={true} margin="12px" />
      <CheckboxGroup type="pureCard">
        <div className="flex flex-wrap justify-between">
          {searchList.map((node, nodeIndex) => {
            return (
              <div
                className={`mb-3 ${node.checked ? '' : styles['no-checked']}`}
                key={`setting_search_component_searchList_${nodeIndex}`}
              >
                <Checkbox
                  value={node.value}
                  style={{ width: 180 }}
                  checked={node.checked}
                  onChange={(event) => searchItemOnChange(event, nodeIndex)}
                >
                  <div className="flex items-center">
                    <div>{SEARCH_LOGO_ICON[node.value]}</div>
                    <div className={`ml-4`}>{node.label}</div>
                  </div>
                </Checkbox>
              </div>
            )
          })}
        </div>
      </CheckboxGroup>
      <Divider dashed={true} margin="12px" />
      <div>
        <Title type="secondary" heading={6}>
          {'Developer Search'}
        </Title>
      </div>
    </div>
  )
}
