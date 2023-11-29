import { getWeather } from './GetWeather'
import { renderWeather } from './RenderWeather'

getWeather()
        .then((weatherData) => {
                console.log(weatherData)
                // Use the data here
                let elementID = 'weather_module'
                renderWeather(weatherData, elementID)
        })
        .catch((err) => {
                console.error(err)
        })
