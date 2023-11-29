import { getWeather, renderWeather } from './weather'

getWeather()
        .then((weatherData) => {
                // Use the data here
                let elementID = 'weather_module'
                renderWeather(weatherData, elementID)
        })
        .catch((err) => {
                console.error(err)
                alert('Error getting weather')
        })
