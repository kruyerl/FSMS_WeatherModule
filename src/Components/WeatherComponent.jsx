import React, { useEffect, useState } from 'react'
import { getWeatherData } from '../GetWeather'
import Current from './Current'
import Hours from './Hours'

import styled from 'styled-components'

const StyledContainer = styled.div`
        display: flex;
        justify-content: space-between;
        padding: 8px;
`
const StyledRightColumn = styled.div`
        text-align: right;
`

function WeatherComponent() {
        const [weatherData, setWeatherData] = useState(null)

        useEffect(() => {
                // Function to fetch weather data
                const fetchWeatherData = async () => {
                        try {
                                const data = await getWeatherData()
                                setWeatherData(data)
                        } catch (error) {
                                console.error(
                                        'Error fetching weather data:',
                                        error.message
                                )
                        }
                }

                // Initial fetch
                fetchWeatherData()

                // Set up interval to fetch data every 15 minutes (900000 milliseconds)
                const intervalId = setInterval(fetchWeatherData, 900000)

                // Clean up the interval on component unmount
                return () => clearInterval(intervalId)
        }, []) // Empty dependency array means this effect runs once on mount

        return (
                <div>
                        {weatherData ? (
                                <StyledContainer>
                                        <Current data={weatherData}></Current>
                                        <StyledRightColumn>
                                                <h5>
                                                        {
                                                                weatherData
                                                                        .current
                                                                        .humanCode
                                                        }
                                                </h5>
                                                <p>ITPS Canada</p>
                                                <Hours data={weatherData} />
                                        </StyledRightColumn>
                                </StyledContainer>
                        ) : (
                                <p>Loading element here</p>
                        )}
                </div>
        )
}

export default WeatherComponent
