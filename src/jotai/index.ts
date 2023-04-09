import { atom } from 'jotai'
import { getDateOfTheDay } from '@/utils'
// 当前初始化时间
export const currentDateTime = getDateOfTheDay()
// 当前搜索引擎本地存储键名
export const localStorageCurrentEngineName = `currentEngine`
// 当前todo本地存储键名
export const localStorageCurrentTodoItemName = `${currentDateTime}_currentTodoItem`
// 当前设置的搜索引擎
const localStorageCurrentEngineValue = window.localStorage.getItem(
  localStorageCurrentEngineName
)
export const currentEngine = atom(
  localStorageCurrentEngineValue
    ? JSON.parse(localStorageCurrentEngineValue)
    : [
        {
          label: 'Baidu',
          value: 'Baidu',
          checked: true,
          isBeta: false
        },
        {
          label: 'DEVS_Baidu',
          value: 'DEVS_Baidu',
          checked: false,
          isBeta: true
        },
        {
          label: 'Sogou',
          value: 'Sogou',
          checked: false,
          isBeta: false
        },
        {
          label: 'Bing',
          value: 'Bing',
          checked: false,
          isBeta: false
        },
        {
          label: 'Google',
          value: 'Google',
          checked: false,
          isBeta: false
        }
      ]
)
// 当前设置的todo项
const localStorageCurrentTodoItemValue = window.localStorage.getItem(
  localStorageCurrentTodoItemName
)
export const currentTodoItem = atom(
  localStorageCurrentTodoItemValue
    ? JSON.parse(localStorageCurrentTodoItemValue)
    : []
)
