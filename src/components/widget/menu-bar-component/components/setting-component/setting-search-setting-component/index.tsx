import { CheckboxGroup, Checkbox } from '@douyinfe/semi-ui'
export default function SettingSearchSettingComponent() {
  return (
    <CheckboxGroup
      type="card"
      defaultValue={['1', '3']}
      aria-label="CheckboxGroup 示例"
    >
      <div className="flex flex-wrap justify-between">
        <div className="pb-2">
          <Checkbox value={'1'} style={{ width: 180 }}>
            <div className="flex items-center">单选框标题</div>
          </Checkbox>
        </div>
        <div className="pb-2">
          <Checkbox value={'2'} style={{ width: 180 }}>
            <div className="flex items-center">单选框标题</div>
          </Checkbox>
        </div>
        <div className="pb-2">
          <Checkbox value={'3'} style={{ width: 180 }}>
            <div className="flex items-center">单选框标题</div>
          </Checkbox>
        </div>
        <div className="pb-2">
          <Checkbox value={'4'} style={{ width: 180 }}>
            <div className="flex items-center">单选框标题</div>
          </Checkbox>
        </div>
      </div>
    </CheckboxGroup>
  )
}
