import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        i {
                margin: auto;
        }
`
const StyledTempBox = styled.div`
        display: flex;
        flex-direction: column;
        div {
                display: flex;
        }
`

const Current = ({ data }) => {
        console.log(data)
        return (
                <StyledContainer>
                        <i
                                className={`fa-solid ${data.current.fontAwesomeIcon}`}
                        ></i>
                        <StyledTempBox>
                                <h1>{data.current.currentTemp}°</h1>
                                <div>
                                        <p>{data.daily.highTemp}°</p>
                                        <p>{data.daily.lowTemp}°</p>
                                </div>
                        </StyledTempBox>
                </StyledContainer>
        )
}

export default Current
