import React, { Component } from "react";
import "./App.css";
import RenderDog from "./components/RandomDog/RenderDog";
import Button_Click from "./components/Button/Button";
import Header from "./components/Header/Header";
function App() {
  return (
    <div style={{ 
      backgroundImage: `url("https://images.pexels.com/photos/3198012/pexels-photo-3198012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260/")` 
    }}>
      <RenderDog />
      <br/>
      <Button_Click />
    </div>
  );
}

export default App;
