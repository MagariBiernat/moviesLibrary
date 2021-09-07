import React from "react"
import styled from "styled-components"
const Series = () => {
  return <SeriesWrapper>hey series </SeriesWrapper>
}

export default Series

const SeriesWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.fontColor};
`
