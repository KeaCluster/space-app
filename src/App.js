import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import Astronauts from './Components/Astronautas/Astronautas';
import APOD from './Components/APOD/APOD';


function App() {
  // class = "";
  //  className = "";
  // Todos los elementos deben estar en una etiqueta padre
  const data = {
    name: "Griselo",
    lastName: "Philip"
  };

  return (
    <div className="App">
      <Navbar {...data} />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path="/astronauts" element={<Astronauts />} />
        <Route path="/apod" element={<APOD />} />
      </Routes>
    </div>
  );
}

export default App;
