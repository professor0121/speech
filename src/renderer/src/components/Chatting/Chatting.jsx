import React from 'react'
import style from "./Chatting.module.css"
import Header from './Components/Header'
import Footer from './Components/Footer'
import ChatArea from './Components/ChatArea'
const Chatting = () => {
  return (
    <div className={style.chattingComponent}>
        <Header/>
        <ChatArea/>
        <Footer/>
    </div>
  )
}

export default Chatting