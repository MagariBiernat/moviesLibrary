import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import ThemeProvider from "./context/ThemeContext"
import ModalMovieProvider from "./context/ModalContext"
import ModalActorProvider from "./context/ActorModalContext"
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
  <ModalActorProvider>
    <ModalMovieProvider>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </ModalMovieProvider>
  </ModalActorProvider>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
