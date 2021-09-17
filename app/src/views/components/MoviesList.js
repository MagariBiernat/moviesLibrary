import axios from "axios"
import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styled from "styled-components"

import {
  AiOutlineLeft as ArrowLeft,
  AiOutlineRight as ArrowRight,
} from "react-icons/ai"
const API_KEY = process.env.REACT_APP_API_KEY

const MoviesList = ({ title, genreId, setId }) => {
  const [movies, setMovies] = React.useState(undefined)

  React.useEffect(() => {
    const fetchMovies = async () => {
      await axios(
        `/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=${genreId}&with_watch_monetization_types=flatrate`
      )
        .then((res) => {
          if (res.data.results.length > 0) setMovies(res.data.results)
        })
        .catch((err) => console.log(err))
    }

    fetchMovies()
  }, [genreId])

  if (movies === undefined) return null

  function SampleNextArrow(props) {
    const { style, onClick } = props
    return (
      <div className="prevArrow" style={{ ...style }} onClick={onClick}>
        <ArrowLeft />
      </div>
    )
  }

  function SamplePrevArrow(props) {
    const { style, onClick } = props
    return (
      <div className="nextArrow" style={{ ...style }} onClick={onClick}>
        <ArrowRight />
      </div>
    )
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 6,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <Wrapper>
      <div className="titleContainer">
        <h1 className="title">{title}</h1>
        <span className="browse">Browse all </span>
      </div>
      <div className="moviesContainer">
        <Slider {...settings}>
          {movies.map((item, index) => (
            <SliderElement key={index} onClick={() => setId(item.id)}>
              <p className="title"> {item.title} </p>
              <img
                alt=""
                src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
              />
            </SliderElement>
          ))}
        </Slider>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  /* overflow-y: hidden; */

  > div.titleContainer {
    position: relative;
    display: flex;
    align-self: start;
    height: 40px;
    align-items: center;
    cursor: pointer;
    margin-bottom: 8px;

    > h1.title {
      font-weight: bold;
      font-size: 18px;
      background: rgba(0, 0, 0, 100);
      color: rgb(229, 229, 229);
      overflow: hidden;
    }

    > span.browse {
      z-index: 1;
      font-size: 0.6rem;
      letter-spacing: 2px;
      transition: 0.3s ease-in all;
      margin-left: -70px;
      opacity: 0;
    }

    :hover > span.browse {
      margin-left: 30px;
      font-weight: 600;
      opacity: 1;
    }

    :hover > h1.title {
      font-weight: 700;
    }
  }

  > div.moviesContainer {
    position: relative;
    /* height: 128px;
    width: 230px; */
    overflow-y: hidden;

    > button {
      position: absolute;
      z-index: 30;
      top: 50%;
      transform: translateY(-65%);
      padding: 12px;
      margin-left: 6px;
      background: transparent;
      border: 2px solid rgba(255, 255, 255, 0.8);
      border-radius: 50%;
      font-size: 20px;
      color: #fff;
      cursor: pointer;
    }

    > div.moviesSlider {
      display: flex;
      width: auto;
      overflow-y: hidden;

      > div {
      }
    }

    .prevArrow {
      position: absolute;
      left: 0px;
      top: 50%;
      z-index: 500;
      cursor: pointer;
      transform: translateY(-50%);
      > svg {
        font-size: 32px;
        color: White;
      }
    }

    .nextArrow {
      position: absolute;
      right: 0px;
      top: 50%;
      z-index: 150;
      cursor: pointer;
      transform: translateY(-50%);
      > svg {
        font-size: 32px;
        color: White;
      }
    }
  }
`

const SliderElement = styled.div`
  position: relative;
  min-height: 128px;
  min-width: 228px;
  padding-right: 2px;
  cursor: pointer;

  > p.title {
    position: absolute;
    display: none;
    left: 5%;
    top: 5%;
    width: 80%;
    font-size: 1rem;
    color: white;
    color: rgba(255, 255, 255, 0.8);
    z-index: 25;
    letter-spacing: 2px;
    text-shadow: rgba(0, 0, 0, 0.45) 2px 2px 4px;
  }

  > img {
    width: 98%;
    height: 96%;
    border-radius: 6px;
    transition: 0.2s ease opacity;
  }

  :hover > p.title {
    display: block;
  }

  :hover > img {
    opacity: 0.25;
  }

  :after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.15);
  }
  /*
        :before {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 100%;
          background: linear-gradient(to bottom, transparent 0%, black 140%);
    */
`

export default MoviesList
