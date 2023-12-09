// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Home from './componets/Home';


const App = () => {
  return (
    <div className='App'>
      <Router>
        <Route path='/' exact component={Home} /> {/* Add 'exact' for an exact match */}
      </Router>
    </div>
  );
}

export default App;
