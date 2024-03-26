import { createContext, useState } from "react";

export const ThemeContext = createContext({
  themeValue: 'dark',
  themeColor: 'blue'
})

// eslint-disable-next-line react/prop-types
export const ThemeContextProvider = ({ children, initialTheme = 'dark', initialColor = 'blue' }) => {

  const [themeValue, setThemeValue] = useState(initialTheme)
  const [themeColor, setThemeColor] = useState(initialColor)

  const valueProps = {
    themeColor,
    setThemeColor,
    themeValue,
    setThemeValue
  }

  return (
    <ThemeContext.Provider value={valueProps}>
      {children}
    </ThemeContext.Provider>
  )
}
