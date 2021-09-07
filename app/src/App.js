import React, { useContext } from "react"
import { Switch, Route } from "react-router-dom"
import { ThemeContext } from "./context/ThemeContext"

import styled from "styled-components"
import { ThemeProvider, createGlobalStyle } from "styled-components"

import Home from "./views/Home"
import NotFound from "./views/NotFound"

import Nav from "./views/components/Nav"
import MyList from "./views/MyList"
import Movies from "./views/Movies"
import Series from "./views/Series"
import ModalInfoMovie from "./views/components/ModalInfoMovie"
import ModalInfoActor from "./views/components/ModalInfoActor"
import { ModalContext } from "./context/ModalContext"
import { ModalActorContext } from "./context/ActorModalContext"

const App = () => {
  const { id: movieId, setId: setMovieId } = useContext(ModalContext)
  const { id: actorId, setId: setActorId } = useContext(ModalActorContext)
  const { theme } = useContext(ThemeContext)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle modalOpen={movieId || actorId} />
      <Wrapper>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/series" exact component={Series} />
          <Route path="/movies" exact component={Movies} />
          <Route path="/myList" component={MyList} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Wrapper>
      {movieId && <ModalInfoMovie id={movieId} setId={setMovieId} />}
      {actorId && <ModalInfoActor id={actorId} setId={setActorId} />}
    </ThemeProvider>
  )
}

export default App

const Wrapper = styled.main`
  position: relative;
  min-width: 100vw;
  /* padding-top: 70px; */
  background-color: ${(props) => props.theme.bg};
  transition: 0.22s ease-in background-color;
  overflow-x: hidden;
`

const GlobalStyle = createGlobalStyle`
  body {
    overflow-y:${(props) => (props.modalOpen ? "hidden" : "auto")};
  }
`
