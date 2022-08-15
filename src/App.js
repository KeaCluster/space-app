import logo from './logo.svg';
import './App.css';
import React from 'react';


import ResponsiveAppBar from './Components/AppBar/AppBar.js';
import Navbar from './Components/Navbar/Navbar';

 
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
      <ResponsiveAppBar />
      <Navbar {...data}/>
    </div>
  );
}

export default App;
