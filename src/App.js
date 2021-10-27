import React from 'react'
import Main from './pages/main';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Main/>
    </Router>
      
  );
}

export default App;
