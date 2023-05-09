import { useState } from 'react';
import './index.css';

function App() {

  let numbers = [];
  
  const [visibility, setVisibility] = useState(true);

  function switchVisiblity(){
    setVisibility();
  }

  function randomSize(){
    
    let random = `${Math.floor(Math.random()*900)}px`;

    return {
      position: "relative",
      left: random,
      right: random,
      top: random,
      bottom: random,
      width: random,
      height: random,
      fontSize: random,
      color:"blue"
    }

  };

  for (let index = 1; index <= 100; index++) {
    numbers.push(index);
  }

  return (
    <div className="App">  

    <div className="circle">
      +
    </div>

      {
        numbers.map((number) => {
          return <h1 key={number} style={randomSize()} className={visibility? "show" : "dontShow"} onClick={switchVisiblity}>{number}</h1>
        })
      }   
    </div>
  );
}

export default App;
