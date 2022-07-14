import React, {useState} from 'react'
import axios from "axios"


//styles
import "./App.css";


//components
import Button from './components/Button';
import Days from './components/Days';




function App() {
  

  return (
    <div className="App">
      <Button />
      <Button />
      <Button />
      <Button />
      <Days />
    </div>
  );
}

export default App;
