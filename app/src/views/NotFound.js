import React from "react"
import styled from "styled-components"
import { ModalContext } from "../context/ModalContext"
import MoviesList from "./components/MoviesList"
import { RiErrorWarningLine } from "react-icons/ri"
import { useHistory } from "react-router"

const NotFound = () => {
  const { setId } = React.useContext(ModalContext)
  const history = useHistory()

  const handleMainPage = () => {
    history.push("/")
  }
  return (
    <Wrapper>
      <Error>
        <h2>
          Page was not found, <br />
          <RiErrorWarningLine />
        </h2>

        <button onClick={handleMainPage}>Go back to main page</button>
      </Error>
      <MoviesList title={"Action"} genreId={28} setId={setId} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 64px;
`

const Error = styled.div`
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;

  svg {
    font-size: 3rem;
    margin: 16px 0;
  }
  button {
    padding: 16px 48px;
    border: 0;
    letter-spacing: 3px;
    font-size: 1.3rem;
    border-radius: 8px;
    background: ${(props) => props.theme.neftlixColor};
    color: ${(props) => props.theme.fontColor};
    cursor: pointer;
  }
`

export default NotFound
