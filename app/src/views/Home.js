import React from "react"
import styled from "styled-components"
import axios from "axios"
import HomeMoviesHeader, {
  Wrapper as Loading,
} from "./components/HomeMoviesHeader"
import MoviesTypesLists from "./components/MoviesTypesLists"
import MoviesPostersList from "./components/MoviesPostersList"
import { ModalContext } from "../context/ModalContext"
const API_KEY = process.env.REACT_APP_API_KEY

const Home = () => {
  const [trendingMovies, setTrendingMovies] = React.useState(undefined)
  const { setId } = React.useContext(ModalContext)
  React.useEffect(() => {
    const fetchTrendingMovies = async () => {
      await axios(`/3/trending/movie/week?api_key=${API_KEY}`)
        .then((res) => {
          if (res.status === 200) {
            const data = res.data.results.map((item) => {
              if (item.overview.length > 150) {
                item.overview =
                  item.overview.split(" ").slice(0, 40).join(" ") + "..."
              }
              return item
            })
            setTrendingMovies(data)
          }
        })
        .catch((err) => console.log(err))
    }

    fetchTrendingMovies()
  }, [])

  return (
    <HomeWrapper>
      {trendingMovies ? (
        <HomeMoviesHeader trendingMovies={trendingMovies} setId={setId} />
      ) : (
        <Loading>Loaaading...</Loading>
      )}
      <MoviesPostersList />
      <MoviesTypesLists />
    </HomeWrapper>
  )
}

export default Home

const HomeWrapper = styled.div`
  position: relative;
  width: 100%;
`
