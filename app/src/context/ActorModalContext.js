import React, { useState, createContext } from "react"

export const ModalActorContext = createContext()

function useTheme() {
  const [modalId, setModalId] = useState(287)

  const handleSetModalId = (id) => {
    if (id) {
      setModalId(id)
    } else {
      setModalId(null)
    }
  }

  return [modalId, handleSetModalId]
}

export default function Provider({ children }) {
  const [id, setId] = useTheme()

  return (
    <ModalActorContext.Provider value={{ id, setId }}>
      {children}
    </ModalActorContext.Provider>
  )
}
