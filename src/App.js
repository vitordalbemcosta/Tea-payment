import React, {useState} from 'react'
import './App.css';
import axios from "axios"


function App() {

  


  return (
    <div className="App">
      <div className="container">
        <div className="top">
          <div className="day">
            <h3>Monday</h3>
          </div>
          <div className="weather-icon">
            <p>Some Icon</p>
          </div>
          <div className="temperature">
            <p>25c</p>
          </div>
        </div>
        <div className="bottom">
          <div className="min">
            <p>min</p>
            <p>22c</p>
          </div>
          <div className="max">
            <p>max</p>
            <p>27c</p>
          </div>
          <div className="wind-speed">
            <p>wind speed</p>
            <p>27c</p>
          </div>
          <div className="wind-direction">
            <p>Wind dir</p>
            <p>SW</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
