import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Chatting from './components/Chatting/Chatting'
import style from "./App.module.css"

const App = () => {
  return (
    <div className={style.appStructure}>
      <Sidebar/>
      <Chatting/>
    </div>
  )
}

export default App