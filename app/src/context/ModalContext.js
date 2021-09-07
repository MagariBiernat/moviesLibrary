import React, { useState, createContext } from "react"

export const ModalContext = createContext()

function useTheme() {
  const [modalId, setModalId] = useState(null)

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
    <ModalContext.Provider value={{ id, setId }}>
      {children}
    </ModalContext.Provider>
  )
}
