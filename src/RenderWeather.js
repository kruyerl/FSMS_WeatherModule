import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import Hour from './Components/Hours'
import WeatherComponent from './Components/WeatherComponent'

// Renderers for weather

export function renderWeather(elementID) {
        console.log(elementID)
        const appRoot = document.getElementById(elementID)
        ReactDOMClient.createRoot(appRoot).render(<WeatherComponent />)
}
