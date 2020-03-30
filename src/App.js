import React from 'react';
import logo from './logo.svg';
import './App.css';
var size = 8;
var board = [1, 2, 3, 4];

function App() {
 

  function EvenOdd(index) {
    console.log(index)
    if ((index.index % 2)) {
      return <div style={{
        display: "flex",
        flex: 1, flexDirection: "column"
      }}>
        <div style={{  backgroundColor:"black"   }} >
          black
    </div>
        <div       style= {{backgroundColor:"white"}} >
          white
    </div>
      </div>
    } else {
      return <div style={{
        display: "flex",
        flex: 1, flexDirection: "column"
      }}>
        <div       style= {{backgroundColor:"white"}} >
          white
  </div>
  <div style={{  backgroundColor:"black"   }} >
          black
  </div>
      </div>
      //  } }
    }
  }
  return (
    <div className="App">

      {board.map((row, index) => (
        <div key={index} style={{
          display: "flex",
          flex: 1, flexDirection: "row"
        }}>
          {board.map((column, index) => (
            <EvenOdd index={index} />

          ))}
        </div>
      ))
  


}

    </div >
  );
}

export default App;
