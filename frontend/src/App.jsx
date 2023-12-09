// App.jsx
import React from 'react';
import {Router, Route } from 'react-router-dom';

import './App.css';
import Home from './componets/Home';
import Chat from './componets/Chat';


const App = () => {
  return (
    <div className='App'>
      <h1>hwello</h1>
     <Router>
        <Route path='/' component={Home} /> 
        <Route path='/chat' component={Chat}/>
        </Router>
    </div>
  );
}

export default App;
