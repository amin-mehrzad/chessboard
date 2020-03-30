import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { IconContext } from "react-icons";
import { FaRegCircle } from 'react-icons/fa';

var size = 8;
var board = [1, 2, 3, 4];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "red" };
  }
  render() {

    function EvenOdd(index, rowIndex) {
      console.log(index)
      if ((index.index % 2)) {
        return <div style={{
          display: "flex",
          flex: 1, flexDirection: "column"
        }}>
          <div style={{ backgroundColor: "black" }} >

            <IconContext.Provider value={{ color: "red", className: "global-class-name" }}>
              <div>
                <FaRegCircle />
              </div>
            </IconContext.Provider>
          </div>
          <div style={{ backgroundColor: "white" }} >
            <IconContext.Provider value={{ color: "red", className: "global-class-name" }}>
              <div>
                <FaRegCircle />
              </div>
            </IconContext.Provider>
          </div>
        </div>
      } else {
        return <div style={{
          display: "flex",
          flex: 1, flexDirection: "column"
        }}>
          <div style={{ backgroundColor: "white" }} >
            white
  </div>
          <div style={{ backgroundColor: "black" }} >
            black
  </div>
        </div>
        //  } }
      }
    }
    return (
      <div className="App">

        {board.map((row, rowIndex) => (
          <div key={rowIndex} style={{
            display: "flex",
            flex: 1, flexDirection: "row"
          }}>
            {board.map((column, index) => (
              <EvenOdd index={index} rowIndex={rowIndex} />

            ))}
          </div>
        ))



        }

      </div >
    );
  }
}

export default App;
