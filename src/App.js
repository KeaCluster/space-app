import logo from './logo.svg';
import './App.css';
import React from 'react';

import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';


function App() {
  // class = "";
  //  className = "";
  // Todos los elementos deben estar en una etiqueta padre

  return (
    <div className="App">
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
