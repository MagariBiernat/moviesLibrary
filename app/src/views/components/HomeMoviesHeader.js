import React from "react"
import styled from "styled-components"
import { AiOutlineInfoCircle as InfoIcon } from "react-icons/ai"
import { genres } from "../../constants/genres"
const HomeMoviesHeader = ({ trendingMovies, setId }) => {
  const [movie, setMovie] = React.useState(trendingMovies[0])
  const [movieIteration, setMovieIteration] = React.useState(0)

  React.useEffect(() => {
    const timeOut = setTimeout(() => {
      setMovie(trendingMovies[movieIteration])
      setMovieIteration(
        movieIteration === trendingMovies.length - 1 ? 0 : movieIteration + 1
      )
    }, 15000)

    return () => {
      clearTimeout(timeOut)
    }
  }, [movieIteration, trendingMovies])

  const movieGenres = movie.genre_ids
    .map((item) => genres.find((i) => i.id === item).name)
    .join(", ")

  return (
    <Wrapper>
      {movie && (
        <MovieContainer
          url={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        >
          <div className="details">
            <h1 className="title">{movie.title}</h1>
            <p className="genres">{movieGenres}</p>
            <p className="overview">{movie.overview}</p>
            <button className="info" onClick={() => setId(movie.id)}>
              <InfoIcon />
              <div className="divider"></div>
              <span> More info </span>
            </button>
          </div>
          <img
            alt=""
            className="poster"
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          />
          <div className="overlayBottom"></div>
        </MovieContainer>
      )}
    </Wrapper>
  )
}

export default HomeMoviesHeader

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 850px;
`

const MovieContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background: url(${(props) => props.url});
  background-position: center;
  background-size: cover;

  > div.details {
    position: absolute;
    top: 12%;
    left: 5%;

    > h1.title {
      color: ${(props) => props.theme.fontColorPure};
      font-size: 3rem;
      letter-spacing: 2px;
      text-shadow: rgba(0, 0, 0, 0.45) 2px 2px 4px;
    }

    > p.genres {
      color: ${(props) => props.theme.fontColorPure};
      font-size: 0.65rem;
      font-weight: 900;
      letter-spacing: 2px;
      text-shadow: rgba(0, 0, 0, 0.55) 2px 2px 4px;
      margin: -18px 0 -6px;
    }

    > p.overview {
      width: 30%;
      font-size: 1.05rem;
      line-height: 145%;
      color: ${(props) => props.theme.fontColorPure};
      text-shadow: rgba(0, 0, 0, 0.45) 2px 2px 4px;
    }

    > button.info {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      padding: 9px 21px;
      background-color: rgba(109, 109, 110, 0.5);
      border: none;
      cursor: pointer;
      transition: 0.3s ease-out background-color;
      margin-top: 22px;

      &:hover {
        background-color: rgba(109, 109, 110, 0.3);
      }

      > svg {
        width: 25px;
        height: 25px;
      }

      > div.divider {
        width: 1rem;
      }

      > * {
        color: #dadada;
        font-size: 1.1rem;
        font-weight: 600;
      }
    }
  }

  > img.poster {
    position: absolute;
    width: 180px;
    box-shadow: 2px 0 120px 55px rgba(0, 0, 0, 0.5);
    bottom: 8%;
    left: 5%;
    transition: 0.2s ease-in-out width;
    cursor: pointer;

    :hover {
      width: 190px;
    }
  }

  > div.overlayBottom {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 30px;
    background: linear-gradient(to bottom, transparent 0%, black 99%);
  }

  :after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 150px;
    background: linear-gradient(to top, transparent 10%, black 99%);
  }

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 50%;
    background: linear-gradient(to left, transparent 10%, black 95%);
  }
`
