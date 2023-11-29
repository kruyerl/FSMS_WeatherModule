import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import WeatherComponent from './Components/WeatherComponent'

// Renderers for weather

export function renderWeatherModuleWithReact(elementID) {
        console.log(elementID)
        const appRoot = document.getElementById(elementID)
        ReactDOMClient.createRoot(appRoot).render(<WeatherComponent />)
}
