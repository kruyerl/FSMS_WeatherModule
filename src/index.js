import { getWeatherData } from './GetWeather'
import { renderWeather } from './RenderWeather'

// to call api use this function
getWeatherData()

// to render react module use this function
let HTMLID = 'weather_module'
renderWeather(HTMLID)
