import { WEATHER_MAP } from '../weather-icon-component/enum'
const weather_overview_v2 = {
  cloudyImageUrl:
    'https://assets.msn.cn/weathermapdata/1/static/images/webps/v1.0/Cloudy 2.webp',
  cloudyNightImageUrl:
    'https://assets.msn.cn/weathermapdata/1/static/images/webps/v1.0/Cloudy 1.webp',
  cloudySunsetImageUrl:
    'https://assets.msn.cn/weathermapdata/1/static/images/webps/v1.0/mostcloudy_sunset.webp',
  dustImageUrl:
    'https://assets.msn.cn/weathermapdata/1/static/images/webps/v1.0/Duststorm 2.webp',
  dustNightImageUrl:
    'https://assets.msn.cn/weathermapdata/1/static/images/webps/v1.0/Duststorm 1.webp',
  fogImageUrl:
    'https://assets.msn.cn/weathermapdata/1/static/images/webps/v1.0/Light fog.webp',
  fogNightImageUrl:
    'https://assets.msn.cn/weathermapdata/1/static/images/webps/v1.0/Hazy Night.webp',
  hazyImageUrl:
    'https://assets.msn.cn/weathermapdata/1/static/images/webps/v1.0/hazy_day.webp',
  partlySunnyImageUrl:
    'https://assets.msn.cn/weathermapdata/1/static/images/webps/v1.0/partlysunny_day.webp',
  rainImageUrl:
    'https://assets.msn.cn/weathermapdata/1/static/images/webps/v1.0/Rain 2.webp',
  rainNightImageUrl:
    'https://assets.msn.cn/weathermapdata/1/static/images/webps/v1.0/Rain 1.webp',
  snowImageUrl:
    'https://assets.msn.cn/weathermapdata/1/static/images/webps/v1.0/Snow 2.webp',
  snowNightImageUrl:
    'https://assets.msn.cn/weathermapdata/1/static/images/webps/v1.0/Snow 1.webp',
  stormImageUrl:
    'https://assets.msn.cn/weathermapdata/1/static/images/webps/v1.0/Thunderstorms 2.webp',
  stormNightImageUrl:
    'https://assets.msn.cn/weathermapdata/1/static/images/webps/v1.0/Thunderstorms 1.webp',
  sunnyImageUrl:
    'https://assets.msn.cn/weathermapdata/1/static/images/webps/v1.0/Sunny.webp',
  sunnyNightImageUrl:
    'https://assets.msn.cn/weathermapdata/1/static/images/webps/v1.0/Clear Night.webp',
  sunnySunsetImageUrl:
    'https://assets.msn.cn/weathermapdata/1/static/images/webps/v1.0/partlysunny_sunset.webp'
}

export enum skycon_map {
  CLEAR_DAY = 'CLEAR_DAY', // 晴（白天）
  CLEAR_NIGHT = 'CLEAR_NIGHT', // 晴（夜间）
  PARTLY_CLOUDY_DAY = 'PARTLY_CLOUDY_DAY', // 多云（白天）
  PARTLY_CLOUDY_NIGHT = 'PARTLY_CLOUDY_NIGHT', // 多云（夜间）
  CLOUDY = 'CLOUDY', // 阴
  LIGHT_HAZE = 'LIGHT_HAZE', // 轻度雾霾
  MODERATE_HAZE = 'MODERATE_HAZE', // 中度雾霾
  HEAVY_HAZE = 'HEAVY_HAZE', // 重度雾霾
  LIGHT_RAIN = 'LIGHT_RAIN', // 小雨
  MODERATE_RAIN = 'MODERATE_RAIN', // 中雨
  HEAVY_RAIN = 'HEAVY_RAIN', // 大雨
  STORM_RAIN = 'STORM_RAIN', // 暴雨
  FOG = 'FOG', // 雾
  LIGHT_SNOW = 'LIGHT_SNOW', // 小雪
  MODERATE_SNOW = 'MODERATE_SNOW', // 中雪
  HEAVY_SNOW = 'HEAVY_SNOW', // 大雪
  STORM_SNOW = 'STORM_SNOW', // 暴雪
  DUST = 'DUST', // 浮尘
  SAND = 'SAND', // 沙尘
  WIND = 'WIND' // 大风
}
export const skycon_icon_map = {
  [`${skycon_map.CLEAR_DAY}`]: WEATHER_MAP.Sunny, // 晴（白天）
  [`${skycon_map.CLEAR_NIGHT}`]: WEATHER_MAP.ClearNight, // 晴（夜间）
  [`${skycon_map.PARTLY_CLOUDY_DAY}`]: WEATHER_MAP.CloudyWithSun, // 多云（白天）
  [`${skycon_map.PARTLY_CLOUDY_NIGHT}`]: WEATHER_MAP.Cloudy, // 多云（夜间）
  [`${skycon_map.CLOUDY}`]: WEATHER_MAP.CloudyWithMoon, // 阴
  [`${skycon_map.LIGHT_HAZE}`]: WEATHER_MAP.Cloudy, // 轻度雾霾
  [`${skycon_map.MODERATE_HAZE}`]: WEATHER_MAP.Cloudy, // 中度雾霾
  [`${skycon_map.HEAVY_HAZE}`]: WEATHER_MAP.Cloudy, // 重度雾霾
  [`${skycon_map.LIGHT_RAIN}`]: WEATHER_MAP.Rainy, // 小雨
  [`${skycon_map.MODERATE_RAIN}`]: WEATHER_MAP.CloudyWithLightning, // 中雨
  [`${skycon_map.HEAVY_RAIN}`]: WEATHER_MAP.CloudyWithRainAndLightning, // 大雨
  [`${skycon_map.STORM_RAIN}`]: WEATHER_MAP.CloudyWithRainAndLightning, // 暴雨
  [`${skycon_map.FOG}`]: WEATHER_MAP.Cloudy, // 雾
  [`${skycon_map.LIGHT_SNOW}`]: WEATHER_MAP.Snowy, // 小雪
  [`${skycon_map.MODERATE_SNOW}`]: WEATHER_MAP.Snowy, // 中雪
  [`${skycon_map.HEAVY_SNOW}`]: WEATHER_MAP.Snowy, // 大雪
  [`${skycon_map.STORM_SNOW}`]: WEATHER_MAP.Snowy, // 暴雪
  [`${skycon_map.DUST}`]: WEATHER_MAP.SunnyWithWind, // 浮尘
  [`${skycon_map.SAND}`]: WEATHER_MAP.SunnyWithWind, // 沙尘
  [`${skycon_map.WIND}`]: WEATHER_MAP.SunnyWithWind // 大风
}

export const skycon_bgc_map = {
  [`${skycon_map.CLEAR_DAY}`]: weather_overview_v2.partlySunnyImageUrl, // 晴（白天）
  [`${skycon_map.CLEAR_NIGHT}`]: weather_overview_v2.sunnyNightImageUrl, // 晴（夜间）
  [`${skycon_map.PARTLY_CLOUDY_DAY}`]: weather_overview_v2.cloudyImageUrl, // 多云（白天）
  [`${skycon_map.PARTLY_CLOUDY_NIGHT}`]:
    weather_overview_v2.cloudyNightImageUrl, // 多云（夜间）
  [`${skycon_map.CLOUDY}`]: weather_overview_v2.cloudyImageUrl, // 阴
  [`${skycon_map.LIGHT_HAZE}`]: weather_overview_v2.fogImageUrl, // 轻度雾霾
  [`${skycon_map.MODERATE_HAZE}`]: weather_overview_v2.fogNightImageUrl, // 中度雾霾
  [`${skycon_map.HEAVY_HAZE}`]: weather_overview_v2.hazyImageUrl, // 重度雾霾
  [`${skycon_map.LIGHT_RAIN}`]: weather_overview_v2.rainImageUrl, // 小雨
  [`${skycon_map.MODERATE_RAIN}`]: weather_overview_v2.rainNightImageUrl, // 中雨
  [`${skycon_map.HEAVY_RAIN}`]: weather_overview_v2.stormImageUrl, // 大雨
  [`${skycon_map.STORM_RAIN}`]: weather_overview_v2.stormNightImageUrl, // 暴雨
  [`${skycon_map.FOG}`]: weather_overview_v2.fogImageUrl, // 雾
  [`${skycon_map.LIGHT_SNOW}`]: weather_overview_v2.snowImageUrl, // 小雪
  [`${skycon_map.MODERATE_SNOW}`]: weather_overview_v2.snowImageUrl, // 中雪
  [`${skycon_map.HEAVY_SNOW}`]: weather_overview_v2.snowNightImageUrl, // 大雪
  [`${skycon_map.STORM_SNOW}`]: weather_overview_v2.snowNightImageUrl, // 暴雪
  [`${skycon_map.DUST}`]: weather_overview_v2.dustImageUrl, // 浮尘
  [`${skycon_map.SAND}`]: weather_overview_v2.dustImageUrl, // 沙尘
  [`${skycon_map.WIND}`]: weather_overview_v2.cloudyNightImageUrl // 大风
}
