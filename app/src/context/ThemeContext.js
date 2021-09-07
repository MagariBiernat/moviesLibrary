import React, { useState, createContext } from "react"
import { colors } from "../constants/colors"
export const ThemeContext = createContext()

function useTheme() {
  const [theme] = useState(colors)
  return [theme]
}

export default function Provider({ children }) {
  const [theme] = useTheme()

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  )
}
