import { useState } from 'react'
import {
  Typography,
  Divider,
  List,
  Button,
  Input,
  Toast
} from '@douyinfe/semi-ui'
import { IconPlusCircle, IconMinusCircle } from '@douyinfe/semi-icons/lib/es'
import { currentTodoItem, localStorageCurrentTodoItemName } from '@/jotai'
import type { ITodoList } from '@/jotai/types'
import { useAtom } from 'jotai'
import styles from './styles.module.css'
const { Title, Text } = Typography
export default function SettingSettingTodoComponent() {
  const [list, setList] = useAtom(currentTodoItem)
  const updateList = (index = undefined) => {
    let newList
    const copyList = JSON.parse(JSON.stringify(list))
    if (index !== undefined) {
      copyList.splice(index, 1)
      newList = copyList
    } else {
      if (list.length >= 5) return fullWarning()
      const newInputValue = inputValue.trim()
      if (newInputValue) {
        newList = copyList.concat({
          value: newInputValue,
          checked: false
        })
      } else {
        return addWarning()
      }
    }
    setList(newList)
    window.localStorage.setItem(
      localStorageCurrentTodoItemName,
      JSON.stringify(newList)
    )
  }
  const [inputValue, setInputValue] = useState('')
  const handleInputChange = (value) => {
    setInputValue(value)
  }
  const addWarning = () => {
    Toast.warning({
      content: 'Please fill in a reasonable todo item',
      duration: 3
    })
  }
  const fullWarning = () => {
    Toast.info({
      content: 'You can only set up to 5 todo items',
      duration: 3
    })
  }
  return (
    <div>
      <div>
        <Title type="secondary" heading={6}>
          {'Setting Todo'}
        </Title>
      </div>
      <Divider dashed={true} margin="12px" />
      <div>
        <div
          style={{
            marginRight: 16,
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            border: '1px solid var(--semi-color-border)'
          }}
        >
          <List
            className={styles['todo-list']}
            dataSource={list as ITodoList[]}
            split={false}
            size="small"
            style={{
              flexBasis: '100%',
              flexShrink: 0,
              borderBottom: '1px solid var(--semi-color-border)',
              maxHeight: '280px',
              overflowY: 'auto'
            }}
            renderItem={(item, index) => (
              <div style={{ margin: 4 }} className="list-item">
                <Button
                  type="danger"
                  theme="borderless"
                  icon={<IconMinusCircle />}
                  style={{ marginRight: 4 }}
                  onClick={() => updateList(index)}
                />
                <Text delete={item.checked}>{item.value}</Text>
              </div>
            )}
          />
          <div
            style={{ margin: 4, fontSize: 14 }}
            className={'flex items-center'}
          >
            <Button
              theme="borderless"
              icon={<IconPlusCircle />}
              style={{ marginRight: 4, color: 'var(--semi-color-info)' }}
              onClick={() => updateList()}
            ></Button>
            <Input
              value={inputValue}
              placeholder={'Add Todo item'}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
