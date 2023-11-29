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
import { getWeatherData } from './GetWeather'
import { renderWeather } from './RenderWeather'

// to call api use this function to get weather data
getWeatherData()

// to render react module use this function
let HTMLID = 'weather_module'
renderWeather(HTMLID)

```
