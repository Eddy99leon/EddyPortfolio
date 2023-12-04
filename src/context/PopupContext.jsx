import React, { useState, createContext } from "react"



export const PopupContext = createContext()

const PopupProvider = ({children}) => {

  const [isPop, setIsPop] = useState(false);

  const handleClosePop = () => {
    setIsPop(false)
    document.body.style.overflow = "auto"
  }

  return (
    <PopupContext.Provider value={{ isPop, setIsPop, handleClosePop }}>
      {children}
    </PopupContext.Provider>
  )
}

export default PopupProvider