import { createContext, useContext, useEffect, useState } from 'react'

const DarkModeContext = createContext()

function DarkModeProvider({ children }) {
  const [ isDarkMode, setIsDarkMode ] = useState('false')

  useEffect(()=>{
    if(isDarkMode){
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  function toggleDarkMode() {
    setIsDarkMode((isDark) => !isDark)
    console.log(isDarkMode)
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

function useDarkMode() {
  const context = useContext(DarkModeContext)
  if (context === undefined)
    throw new Error('DarkModeContext was used outside of DarkModeProvider')
  return context
}

export { DarkModeProvider, useDarkMode }
