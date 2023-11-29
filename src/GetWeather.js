import axios from 'axios'

export function getWeather() {
        const params = {
                latitude: 43.0299274950116,
                longitude: -81.15544981534124,
                current: ['temperature_2m', 'weather_code', 'wind_speed_10m'],
                hourly: [
                        'temperature_2m',
                        'precipitation_probability',
                        'weather_code',
                ],
                daily: ['temperature_2m_max', 'temperature_2m_min'],
                timeformat: 'unixtime',
                timezone: 'America/New_York',
                forecast_days: 1,
        }

        return axios
                .get('https://api.open-meteo.com/v1/forecast?', {
                        params,
                })
                .then(({ data }) => {
                        return {
                                current: parseCurrentWeather(data),
                                daily: parseDailyWeather(data),
                                hourly: parseHourlyWeather(data),
                        }
                })
}

// Parsers for weather

function parseCurrentWeather({ current, daily }) {
        const {
                temperature_2m: currentTemp,
                weather_code: iconCode,
                time,
        } = current

        return {
                time,
                humanTime: parseHumanTime(time),
                currentTemp: Math.round(currentTemp),
                iconCode,
                humanCode: parseHumanWeatherCode(iconCode),
        }
}

function parseDailyWeather({ daily }) {
        const {
                temperature_2m_max: [maxTemp],
                temperature_2m_min: [minTemp],
        } = daily
        return {
                highTemp: Math.round(maxTemp),
                lowTemp: Math.round(minTemp),
        }
}

function parseHourlyWeather({ hourly, current }) {
        return hourly.time
                .map((time, index) => {
                        return {
                                timestamp: time * 1000,
                                humanTime: parseHumanTime(time),
                                iconCode: hourly.weather_code[index],
                                humanCode: parseHumanWeatherCode(
                                        hourly.weather_code[index]
                                ),
                                precipitation_probability:
                                        hourly.precipitation_probability[index],
                                temp: Math.round(hourly.temperature_2m[index]),
                        }
                })
                .filter(({ timestamp }) => timestamp >= current.time * 1000)
}

function parseHumanTime(timestamp) {
        let date = new Date(timestamp * 1000)
        return date.getHours()
}

function parseHumanWeatherCode(code) {
        const WEATHER_MAP = new Map()

        addMapping([1], 'Clear Sky', WEATHER_MAP)
        addMapping([1], 'Mainly Clear', WEATHER_MAP)
        addMapping([2], 'Partly Cloudy', WEATHER_MAP)
        addMapping([3], 'Overcast', WEATHER_MAP)
        addMapping([45, 48], 'Fog', WEATHER_MAP)
        addMapping([51, 53, 55], 'Drizzle', WEATHER_MAP)
        addMapping([56, 57], 'Freezing Drizzle', WEATHER_MAP)
        addMapping([61, 63, 65], 'Rain', WEATHER_MAP)
        addMapping([66, 67], 'Freezing Rain', WEATHER_MAP)
        addMapping([71, 72, 73, 77], 'Snowfall', WEATHER_MAP)
        addMapping([80, 81, 82], 'Rain Showers', WEATHER_MAP)
        addMapping([85, 86], 'Snow Showers', WEATHER_MAP)
        addMapping([95, 96, 99], 'Thunderstorms', WEATHER_MAP)

        return WEATHER_MAP.get(code)
}

function parseWeatherCodeIcon(code) {
        const ICON_MAP = new Map()

        addMapping([0, 1], 'sun', ICON_MAP)
        addMapping([2], 'cloud-sun', ICON_MAP)
        addMapping([3], 'cloud', ICON_MAP)
        addMapping([45, 48], 'fog', ICON_MAP)
        addMapping([51, 53, 55], 'drizzle', ICON_MAP)
        addMapping([56, 57], 'freezing_drizzle', ICON_MAP)
        addMapping([61, 63, 65], 'rain', ICON_MAP)
        addMapping([66, 67], 'freezing_rain', ICON_MAP)
        addMapping([71, 72, 73, 77], 'snow', ICON_MAP)
        addMapping([80, 81, 82], 'showers_rain', ICON_MAP)
        addMapping([85, 86], 'showers_snow', ICON_MAP)
        addMapping([95, 96, 99], 'storm', ICON_MAP)

        return ICON_MAP.get(code)
}

function addMapping(code, value, mapName) {
        code.forEach((code) => {
                mapName.set(code, value)
        })
}
