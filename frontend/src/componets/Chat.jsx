import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Chat = () => {
  
  const [chats,setChats]=useState([])
  const fetchChat= async ()=>{
    const response =await axios.get('http://localhost:5000/chat')
    setChats(response.data)
    console.log(response.data)
  }

  useEffect(()=>{
    fetchChat()
  },[])


  return (
    <div>
    <div>
      {chats.map(chat => (
        <div key={chat.id}><h1>{chat.chatName}</h1></div>
      ))}
    </div>
  </div>
  )  
  
}

export default Chat
