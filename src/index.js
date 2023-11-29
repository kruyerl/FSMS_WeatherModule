import { getWeatherData } from './GetWeather'
import { renderWeatherModuleWithVanillaJS } from './renderWeatherModuleWithVanillaJS'
import { renderWeather } from './renderWeatherWithReact'
// to call api use this function
getWeatherData()

// to render react module use this function
let HTMLID = 'weather_module'
// renderWeatherModuleWithReact(HTMLID)
renderWeatherModuleWithVanillaJS(HTMLID)
