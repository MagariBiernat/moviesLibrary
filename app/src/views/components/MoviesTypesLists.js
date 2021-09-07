import React from "react"

import styled from "styled-components"
import { ModalContext } from "../../context/ModalContext"
import MoviesList from "./MoviesList"

const MoviesTypesLists = () => {
  const { setId } = React.useContext(ModalContext)
  return (
    <Wrapper>
      <MoviesList title={"Popular now"} setId={setId} />
      <MoviesList title={"Action"} genreId={28} setId={setId} />
      <MoviesList title={"Adventure"} genreId={12} setId={setId} />
      <MoviesList title={"Comedy"} genreId={35} setId={setId} />
      <MoviesList title={"Fantasy"} genreId={14} setId={setId} />
      <MoviesList title={"History"} genreId={36} setId={setId} />
      <MoviesList title={"Thriller"} genreId={53} setId={setId} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  color: white;
  margin: 2% 5%;
`

export default MoviesTypesLists
