import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Chat = () => {
  
  const [chats,setChats]=useState([])
  const fetchChat= async ()=>{
    const response =await axios.get('http://localhost:5000/chat')
    console.log(response.data)
  }

  useEffect(()=>{
    fetchChat()
  },[])


  return (
    <div>
      <h1>
       
      </h1>
    </div>
  );
  
}

export default Chat
