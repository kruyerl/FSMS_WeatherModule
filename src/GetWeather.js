import axios from 'axios'
import './styles.css'

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
        if (code === 0) return 'clear sky'
        if (code === 1) return 'mainly clear'
        //
        if (code === 2) return 'partly cloudy'
        if (code === 3) return 'overcast'
        //
        if (code === 45) return 'fog'
        if (code === 48) return 'fog'
        //
        if (code === 51) return 'drizzle'
        if (code === 53) return 'drizzle'
        if (code === 55) return 'drizzle'
        //
        if (code === 56) return 'freezing drizzle'
        if (code === 57) return 'freezing drizzle'
        //
        if (code === 61) return 'rain'
        if (code === 63) return 'rain'
        if (code === 65) return 'rain'
        //
        if (code === 66) return 'freezing rain'
        if (code === 67) return 'freezing rain'
        //
        if (code === 71) return 'snowfall'
        if (code === 73) return 'snowfall'
        if (code === 75) return 'snowfall'
        //
        if (code === 77) return 'snow grains'
        //
        if (code === 80) return 'rain showers'
        if (code === 81) return 'rain showers'
        if (code === 82) return 'rain showers'
        //
        if (code === 85) return 'snow showers'
        if (code === 86) return 'snow showers'
        //
        if (code === 95) return 'thunderstorm'
        if (code === 96) return 'thunderstorm'
        if (code === 99) return 'thunderstorm'
        return 'weather unknown'
}
