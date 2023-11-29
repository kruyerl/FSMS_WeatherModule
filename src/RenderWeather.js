import React from 'react'
import * as ReactDOMClient from 'react-dom/client'

const Hour = ({ data }) => {
        return (
                <div>
                        {data.iconCode}
                        <p>
                                {data.humanTime} {data.temp}
                        </p>
                </div>
        )
}

const App = ({ weatherData }) => {
        return (
                weatherData && (
                        <React.StrictMode>
                                <h1>{weatherData.current.currentTemp}</h1>
                                <p>{weatherData.daily.highTemp}</p>
                                <p>{weatherData.daily.lowTemp}</p>
                                <h2>{weatherData.current.humanCode}</h2>
                                <h2>ITPS Coordinates</h2>

                                {weatherData.hourly.map((hour, i) => {
                                        return <Hour key={i} data={hour} />
                                })}
                        </React.StrictMode>
                )
        )
}

// Renderers for weather

export function renderWeather(weather, elementID) {
        const appRoot = document.getElementById(elementID)
        ReactDOMClient.createRoot(appRoot).render(<App weatherData={weather} />)
}
