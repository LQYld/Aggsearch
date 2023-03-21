import { BASE_THIRD_PARTY_INTERFACE_ADDRESS } from '../enum'
const querystring = require('querystring')
export async function GET(request: Request) {
  const queryValue = querystring.parse(request.url.split('?')[1])
  const fetchResponse = await fetch(
    `${BASE_THIRD_PARTY_INTERFACE_ADDRESS.SEARCH_HINT_FOR_BAIDU}sugrec?ie=utf-8&json=1&prod=pc&wd=${queryValue.v}`
  )
  return new Response(JSON.stringify(await fetchResponse.json()))
}
