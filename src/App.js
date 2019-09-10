import React, {useState} from 'react';
import './App.css';
// import Tweet from './Tweet'

function App(){

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1); 
  }
  const changeColor = () => {
    setRed(!isRed);
  }

  return(
    <div className="app">
      <button onClick={changeColor}>Change Color</button>
      <h1 className={isRed ? "red" : ""}>Change My Colour</h1>
      <br/>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
    </div>
  );
}

export default App;
