import dayjs from 'dayjs'
import { Toast } from '@douyinfe/semi-ui'
// 新窗口打开
export const pushWindow = (url: string) => window.open(url)
// 保留整数
export const reservedInteger = (number) => parseInt(number)
// 查询目前是星期几-简写
export const theCurrentDayOfTheWeek_abbreviation = (date) =>
  dayjs(date).format('ddd')
// 查询目前是星期几
export const theCurrentDayOfTheWeek = (date) => dayjs(date).format('dddd')
// 查询当前日期-MMM D, YYYY
export const theCurrentDay = (date) => dayjs(date).format('MMM D, YYYY')
// 功能建设 Toast 提示
export const UnderConstructionWarning = () => {
  Toast.warning({
    content: 'The function is still under construction and cannot be used',
    duration: 3
  })
}
