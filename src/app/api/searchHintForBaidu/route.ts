const querystring = require('querystring')
export async function GET(request: Request) {
  const queryValue = querystring.parse(request.url.split('?')[1])
  const fetchResponse = await fetch(
    `https://www.baidu.com/sugrec?ie=utf-8&json=1&prod=pc&wd=${queryValue.v}`
  )
  return new Response(JSON.stringify(await fetchResponse.json()))
}
