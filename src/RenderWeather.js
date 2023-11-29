import React from 'react'
import * as ReactDOMClient from 'react-dom/client'

const App = () => {
        return (
                <React.StrictMode>
                        <h1>insert html here</h1>
                </React.StrictMode>
        )
}

// Renderers for weather

export function renderWeather(weather, elementID) {
        const appRoot = document.getElementById(elementID)
        ReactDOMClient.createRoot(appRoot).render(<App />)
}
