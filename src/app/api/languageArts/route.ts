import dayjs from 'dayjs'
import { BASE_THIRD_PARTY_INTERFACE_ADDRESS } from '../enum'
export async function GET() {
  const currentDate = dayjs().format('YYYY-MM-DD')
  const todayPoetryResponse = fetch(
    `${BASE_THIRD_PARTY_INTERFACE_ADDRESS.TODAY_POETRY}one.json?client=npm-sdk/1.0`
  )
  const everydayEnglishResponse = fetch(
    `${BASE_THIRD_PARTY_INTERFACE_ADDRESS.EVERYDAY_ENGLISH}index.php?callback=cb&c=dailysentence&m=getdetail&title=${currentDate}`
  )
  const promiseList = [todayPoetryResponse, everydayEnglishResponse]

  const promiseListResponse = await Promise.all(promiseList)
  const everydayEnglishRegex = /(?<=cb\()(.+?)(?=\))/g //正则剔除 cb() 小括号
  return new Response(
    JSON.stringify({
      [`zh-cn`]: await promiseListResponse[0].json(),
      en: JSON.parse(
        (await promiseListResponse[1].text()).match(everydayEnglishRegex)[0]
      )
    })
  )
}
