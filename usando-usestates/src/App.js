import './App.css';
import "./span.css"
import "./button.css";
import "./divButton.css";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
  
  function randomNumber() {
    setNumber(Math.floor(Math.random() * 100) + 1);
  }

  function randomNumberNegative() {
    setNumber(Math.floor(Math.random() * -100) + 1);
  }

  return (
    <div className="App">
      <div className="App-header">
        <span className="span">{number}</span>
        <div className="divButton">
          <button onClick={randomNumber} className="buttonRandom">Number positive</button>
          <button onClick={randomNumberNegative} className="buttonRandom">Number negative</button>
        </div>
      </div>
    </div>
  );
}

export default App;