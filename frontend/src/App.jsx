// App.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './componets/Home';
import Chat from './componets/Chat';


const App = () => {
  return (
  
      // <h1>hwello</h1>
     <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/chat' element={<Chat/>}/>
        </Routes>
  
  );
}

export default App;
