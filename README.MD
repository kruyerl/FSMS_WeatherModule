# FSMS Weather Module

## Api

The weather api used is Open Meteo
documentation: https://open-meteo.com/en/docs

## Scripts

- npm start: uses the parcel bundler to run a live server
- npm run build: cleans the /dist folder then uses the parcel bundler to compile code to /dist
- npm run build_getWeather: cleans the /dist folder then uses the parcel bundler to compile getWeather API call
- clean: uses the rimraf package to clear /dist folder

## Usage

```
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

```
