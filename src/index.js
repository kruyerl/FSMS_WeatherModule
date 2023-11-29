import { getWeather } from './GetWeather'
import { renderWeather } from './RenderWeather'

getWeather()
        .then((weatherData) => {
                //Logs data to console for debugging and development purposes
                // console.log(weatherData)
                // Use the data here
                let elementID = 'weather_module'
                renderWeather(weatherData, elementID)
        })
        .catch((err) => {
                console.error(err)
        })
