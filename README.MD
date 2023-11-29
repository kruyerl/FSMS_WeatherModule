# FSMS Weather Module

## API

The weather api used is Open Meteo
documentation: https://open-meteo.com/en/docs

## Parsing

The data from the API is sent through a few parsing functions that select format the data for html consumption.

For example the weather codes are run through a map to generate the corresponding fontawesome icon code as well as the corresponding weather name.

## Scripts

- npm start: uses the parcel bundler to run a live server
- npm run build: cleans the /dist folder then uses the parcel bundler to compile code to /dist
- npm run build_getWeather: cleans the /dist folder then uses the parcel bundler to compile getWeather API call
- clean: uses the rimraf package to clear /dist folder

## Usage

```

// to call api use this function
getWeatherData()

// to render react module use this function
let HTMLID = 'weather_module'
// renderWeatherModuleWithReact(HTMLID)
renderWeatherModuleWithVanillaJS(HTMLID)

```

## TODO

- Build a rendering option using vanilla JS
- Build a vanilla HTML/CSS template and use JS to inject data
