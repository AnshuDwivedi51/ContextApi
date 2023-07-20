import React, { createContext } from 'react'
import Header from './component/Header/Header'

const menu = ["Home","Pages","About","Services","Contact Us"]
export const list = createContext();
function App() {
  return (
    <list.Provider value={menu}>
      <Header/>
    </list.Provider>


  )
}

export default App