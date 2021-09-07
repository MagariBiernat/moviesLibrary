import React from "react"
import axios from "axios"
import styled from "styled-components"
import { ModalContext } from "../../context/ModalContext"

const API_KEY = process.env.REACT_APP_API_KEY

const MoviesPostersList = () => {
  const [posters, setPosters] = React.useState(null)
  const { setId } = React.useContext(ModalContext)

  React.useEffect(() => {
    const fetchMovies = async () => {
      await axios(
        `/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&year=2021`
      )
        .then((res) => {
          setPosters(res.data.results.slice(0, 5))
        })
        .catch((err) => console.log(err.data))
    }

    if (!posters) {
      fetchMovies()
    }
  }, [])

  console.log(posters)

  return posters ? (
    <Wrapper>
      <TitleH1>Best movies in 2021 by popularity</TitleH1>
      <PostersContainer>
        {posters.map((item, index) => (
          <Poster
            onClick={() => setId(item.id)}
            key={index}
            bg={`https://image.tmdb.org/t/p/original${item.poster_path}`}
          />
        ))}
      </PostersContainer>
    </Wrapper>
  ) : null
}

export default MoviesPostersList

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 5% 5% 0;
`

const TitleH1 = styled.h1`
  color: #fff;
  font-size: 125%;
  margin-bottom: 16px;
`

const PostersContainer = styled.div`
  height: 460px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 32px;
`

const Poster = styled.div`
  background: url(${(props) => props.bg});
  background-position: center;
  background-size: cover;
  max-width: 240px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(108%);
    opacity: 70%;
  }
`
