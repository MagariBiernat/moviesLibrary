import React from "react"
import styled from "styled-components"
const Movies = () => {
  return (
    <MoviesWrapper>
      <h2>Movies here</h2>
    </MoviesWrapper>
  )
}

export default Movies

const MoviesWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`
