import axios from "axios"
import React from "react"
import { ImPlus as Plus, ImMinus as Minus } from "react-icons/im"
import { BiLike as Like, BiDislike as Dislike } from "react-icons/bi"
import { Spinner } from "reactstrap"

import {
  Overlay,
  ModalWrapper,
  Heading,
  Info,
  RecommendationsWrapper,
  RecommendationElement,
  ComplexInfo,
} from "./styledComponents/ModalInfo"
import { ModalActorContext } from "../../context/ActorModalContext"

const API_KEY = process.env.REACT_APP_API_KEY

const ModalInfo = ({ id, setId }) => {
  const addedInList = false
  const [movie, setMovie] = React.useState(null)
  const [credits, setCredits] = React.useState(null)
  const [recommendations, setRecommendations] = React.useState(null)
  const overlayRef = React.useRef(null)
  const { setId: setActorId } = React.useContext(ModalActorContext)
  console.log(credits)
  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside)

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  })

  React.useEffect(() => {
    const fetchMovie = async () => {
      await axios(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
      )
        .then((res) => setMovie(res.data))
        .catch((err) => console.log(err))
    }

    const fetchCredits = async () => {
      await axios(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
      )
        .then((res) => {
          console.log("___credits")
          console.log(res.data.cast.slice(0, 4))
          setCredits(res.data.cast.slice(0, 4))
        })
        .catch((err) => {
          console.log(err)
        })
    }

    const fetchRecommendations = async () => {
      await axios(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`
      )
        .then((res) => {
          console.log("___recommendations")
          console.log(res.data.results)
          setRecommendations(res.data.results)
        })
        .catch((err) => {
          console.log(err)
        })
    }

    if (id) {
      fetchMovie()
      fetchCredits()
      fetchRecommendations()
    }
  }, [id])

  const handleClickOutside = (e) => {
    if (overlayRef.current === e.target) {
      setId(null)
    }
  }

  const handleClickActor = (id) => {
    if (id) {
      setActorId(id)
      setId(null)
    }
  }

  return movie ? (
    <Overlay ref={overlayRef}>
      <ModalWrapper>
        <div>
          <Heading
            url={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          >
            <button onClick={() => setId(null)}>X</button>

            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt="Poster"
            />

            <div>
              <h6>{movie.original_title}</h6>
              <div className="buttons">
                {addedInList ? (
                  <button className="watchlist">
                    <Minus />
                    <div className="watchlistDivider"></div>
                    <span>Remove from list</span>
                  </button>
                ) : (
                  <button className="watchlist">
                    <Plus />
                    <div className="watchlistDivider"></div>
                    <span>Add to list</span>
                  </button>
                )}
                <button className="watchlistLike">
                  <Like />
                </button>
                <button className="watchlistLike">
                  <Dislike />
                </button>
              </div>
            </div>
          </Heading>
          <Info>
            <div className="info">
              <div className="infoTop">
                <p className="infoTopRating">
                  {movie?.vote_average.toString()} rating
                </p>
                <p className="infoTopYear">
                  {movie?.release_date.split("-")[0]}
                </p>
                <p>{movie?.runtime} mins</p>
              </div>
              <div>
                <p className="infoOverviewTagline">{movie?.tagline}</p>
                <p className="infoOverview">{movie?.overview}</p>
              </div>
            </div>
            <div className="credits">
              {credits && (
                <div className="creditsElement">
                  <p>
                    <span>Cast : </span>
                    {credits.map((item, index) => {
                      return index === credits.length - 1 ? (
                        <a onClick={() => handleClickActor(item.id)}>
                          {item.name}
                        </a>
                      ) : (
                        <a onClick={() => handleClickActor(item.id)}>
                          {item.name},{" "}
                        </a>
                      )
                    })}
                  </p>
                </div>
              )}
              {movie?.genres && (
                <div className="creditsElement">
                  <p>
                    <span>Genres : </span>
                    {movie.genres.map((genre) => genre.name).join(", ")}
                  </p>
                </div>
              )}
            </div>
          </Info>
          {recommendations && (
            <RecommendationsWrapper>
              {recommendations.length > 0 && <h6>More similar</h6>}
              <div className="recommendationsContainer">
                {recommendations?.map((item, index) => (
                  <RecommendationElement
                    key={index}
                    recommendationImage={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                  >
                    <div className="recommendationImage"></div>
                    <div className="recommendationInfo">
                      <div className="recommendationInfoTop">
                        <div className="recommendationInfoTopLeft">
                          <p className="rating">
                            {item.vote_average.toFixed(1)} rating
                          </p>
                          <span className="year">
                            {item.release_date.split("-")[0]}
                          </span>
                        </div>
                        <div className="divider"></div>
                        <button>
                          <Plus />
                        </button>
                      </div>
                      <div className="infoBottom">
                        <p className="title">{item.original_title}</p>
                        <p className="overview">
                          {item?.overview.split(" ").slice(0, 40).join(" ") +
                            "..."}
                        </p>
                      </div>
                    </div>
                  </RecommendationElement>
                ))}
              </div>
            </RecommendationsWrapper>
          )}
          <ComplexInfo>
            <h1>
              About <span>{movie.original_title}</span>
            </h1>
            {credits && (
              <div>
                {credits.length > 0 && (
                  <p>
                    <span>Cast : </span>
                    {credits.map((item, index) => {
                      return index === credits.length - 1 ? (
                        <a>{item.name}</a>
                      ) : (
                        <a>{item.name}, </a>
                      )
                    })}
                  </p>
                )}
              </div>
            )}
            {movie?.genres && (
              <div>
                <p>
                  <span>Genres : </span>
                  {movie.genres.map((genre) => genre.name).join(", ")}
                </p>
              </div>
            )}
            <div>
              <p>
                <span>Production companies : </span>
                {movie.production_companies.map((item, index) => {
                  return index === movie.production_companies.length - 1 ? (
                    <a>{item.name}</a>
                  ) : (
                    <a>{item.name}, </a>
                  )
                })}
              </p>
            </div>

            <div>
              <p>
                <span>Production countries : </span>
                {movie.production_countries.map((item, index) => {
                  return index === movie.production_countries.length - 1 ? (
                    <a>{item.name}</a>
                  ) : (
                    <a>{item.name}, </a>
                  )
                })}
              </p>
            </div>
          </ComplexInfo>
        </div>
      </ModalWrapper>
    </Overlay>
  ) : (
    <Overlay>
      <ModalWrapper>
        <div className="loading">
          <Spinner />
        </div>
      </ModalWrapper>
    </Overlay>
  )
}

export default ModalInfo
