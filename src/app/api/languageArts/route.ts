import { BASE_THIRD_PARTY_INTERFACE_ADDRESS } from '../enum'
export async function GET() {
  const time = new Date()
  const year = time.getFullYear() //年
  const month = ('0' + (time.getMonth() + 1)).slice(-2) //月
  const day = ('0' + time.getDate()).slice(-2) //日
  const mydate = year + '-' + month + '-' + day
  const todayPoetryResponse = fetch(
    `${BASE_THIRD_PARTY_INTERFACE_ADDRESS.TODAY_POETRY}one.json?client=npm-sdk/1.0`
  )
  const everydayEnglishResponse = fetch(
    `${BASE_THIRD_PARTY_INTERFACE_ADDRESS.EVERYDAY_ENGLISH}index.php?callback=cb&c=dailysentence&m=getdetail&title=${mydate}`
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
