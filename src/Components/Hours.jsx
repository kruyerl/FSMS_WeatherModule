import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import styled from 'styled-components'

const StyledContainer = styled.div`
        display: flex;
        justify-content: flex-end;
`

const StyledHour = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 8px;
`

const Hours = ({ data }) => {
        return (
                <StyledContainer>
                        {data.hourly.map((hour, i) => {
                                return (
                                        <StyledHour key={i} data={hour}>
                                                <p>{hour.temp}°</p>
                                                <i
                                                        className={`fa-solid ${hour.fontAwesomeIcon}`}
                                                ></i>
                                                <p>{hour.humanTime}°</p>
                                        </StyledHour>
                                )
                        })}
                </StyledContainer>
        )
}

export default Hours
