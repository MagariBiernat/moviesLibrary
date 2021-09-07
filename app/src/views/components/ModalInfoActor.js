import axios from "axios"
import React from "react"

import { Overlay, ModalWrapper } from "./styledComponents/ModalInfo"

const API_KEY = process.env.REACT_APP_API_KEY

const ModalInfoActor = ({ id, setId }) => {
  const [actorInfo, setActorInfo] = React.useState(null)
  const overlayRef = React.useRef(null)

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside)

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  })

  React.useEffect(() => {
    const fetchActor = async () => {
      await axios(
        `https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}&language=en-US`
      )
        .then((res) => setActorInfo(res.data))
        .catch((err) => console.log(err))
    }

    fetchActor()
  }, [id])

  const handleClickOutside = (e) => {
    if (overlayRef.current === e.target) {
      setId(null)
    }
  }

  console.log(actorInfo)

  return actorInfo ? (
    <Overlay ref={overlayRef}>
      <ModalWrapper>hejka</ModalWrapper>
    </Overlay>
  ) : (
    <Overlay ref={overlayRef}>
      <ModalWrapper>
        <h2>Loading....</h2>
      </ModalWrapper>
    </Overlay>
  )
}

export default ModalInfoActor
