import React, { Component } from "react";
import Bar from "./Bar";
import "./home.css";
import {
  selectionSortAlgorithim,
  mergeSortAlgorithm,
  bubbleSortAlgorithim,
} from "./sortingAlgorithims/algorithims";

class Visualizer extends Component {
  constructor(props) {
    super(props);
  }
  state = { array: [], barWidth: 5, speed: 0.25 };

  randomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  resetArray = (width) => {
    let { barWidth } = this.state;
    let array = [];
    if (width != null) {
      barWidth = width;
    }
    barWidth++;
    let numBar = Math.abs(Math.floor(window.innerWidth / barWidth));
    barWidth--;
    for (let i = 0; i < numBar; i++) {
      array.push(
        this.randomInteger(
          1,
          window.innerHeight - Math.floor(window.innerHeight / 10)
        )
      );
    }
    this.setState({ array, barWidth });
  };
  componentDidMount = () => {
    this.resetArray();
  };
  changeBarWidth = (barWidth) => {
    this.resetArray(barWidth);
  };
  changeSpeed = (speed) => {
    this.setState({ speed });
  };
  selectionSort = () => {
    let startDate = new Date();
    const { array, speed } = this.state;
    const animation = selectionSortAlgorithim(array);

    let arrayBar = document.getElementsByClassName("bar");
    for (let i = 0; i < animation.length; i++) {
      const oneBar = arrayBar[animation[i][0]].style;
      const twoBar = arrayBar[animation[i][1]].style;
      setTimeout(() => {
        oneBar.backgroundColor = "red";
        twoBar.backgroundColor = "blue";
        if (animation[i].length == 4) {
          oneBar.height = `${animation[i][3]}px`;
          twoBar.height = `${animation[i][2]}px`;
        }
      }, Math.floor(i / speed));
      setTimeout(() => {
        oneBar.backgroundColor = "#afd8f8";
        twoBar.backgroundColor = "#afd8f8";
        let endDate = new Date();
        document.getElementById("time").innerText =
          "Time: " + (endDate - startDate) / 1000 + "s";
      }, Math.floor(i / speed) + 1);
    }
  };

  bubbleSort = () => {
    let startDate = new Date();
    const { array, speed } = this.state;
    const animation = bubbleSortAlgorithim(array);

    let arrayBar = document.getElementsByClassName("bar");
    for (let i = 0; i < animation.length; i++) {
      const oneBar = arrayBar[animation[i][0]].style;
      const twoBar = arrayBar[animation[i][1]].style;
      setTimeout(() => {
        oneBar.backgroundColor = "red";
        twoBar.backgroundColor = "blue";
        if (animation[i].length == 4) {
          oneBar.height = `${animation[i][3]}px`;
          twoBar.height = `${animation[i][2]}px`;
        }
      }, Math.floor(i / speed));
      setTimeout(() => {
        oneBar.backgroundColor = "#afd8f8";
        twoBar.backgroundColor = "#afd8f8";
        let endDate = new Date();
        document.getElementById("time").innerText =
          "Time: " + (endDate - startDate) / 1000 + "s";
      }, Math.floor(i / speed) + 1);
    }
  };

  mergeSort = () => {
    let startDate = new Date();
    const { array, speed } = this.state;
    let animation = [];
    mergeSortAlgorithm(array, 0, array.length, animation);
    let arrayBar = document.getElementsByClassName("bar");

    for (let i = 0; i < animation.length; i++) {
      let oneBar = arrayBar[animation[i][0]];
      let twoBar = arrayBar[animation[i][1]];
      if (oneBar != undefined && twoBar != undefined) {
        oneBar = oneBar.style;
        twoBar = twoBar.style;
        setTimeout(() => {
          oneBar.backgroundColor = "red";
          twoBar.backgroundColor = "blue";
          if (animation[i].length == 3) {
            twoBar.height = `${animation[i][2]}px`;
          }
        }, Math.floor(i / speed));
        setTimeout(() => {
          oneBar.backgroundColor = "#afd8f8";
          twoBar.backgroundColor = "#afd8f8";

          let endDate = new Date();
          document.getElementById("time").innerText =
            "Time: " + (endDate - startDate) / 1000 + "s";
        }, Math.floor(i / speed) + 1);
      }
    }
  };
  render() {
    const { array, barWidth, speed } = this.state;
    return (
      <div>
        <div className="nav">
          <button
            className="btn"
            onClick={() => this.resetArray()}
            style={{ margin: "10px" }}
          >
            Reset Array
          </button>
          <button
            onClick={() => this.selectionSort()}
            style={{ margin: "10px" }}
          >
            Selection Sort
          </button>
          <button onClick={() => this.bubbleSort()} style={{ margin: "10px" }}>
            Bubble Sort
          </button>
          <button onClick={() => this.mergeSort()} style={{ margin: "2px" }}>
            Merge Sort
          </button>
          <p style={{ margin: "7px" }}>Bar Width: </p>
          <input
            type="range"
            onChange={(e) => this.changeBarWidth(e.target.value)}
            min="5"
            max="100"
            value={barWidth}
          ></input>
          <p style={{ margin: "5px" }}>Speed: </p>
          <input
            type="range"
            onChange={(e) => this.changeSpeed(e.target.value)}
            min="0.25"
            max="10"
            value={speed}
          ></input>
          <p id="time" style={{ margin: "5px" }}>
            Time:0s
          </p>
        </div>

        <div className="container">
          {array.map((val, idx) => {
            return <Bar width={barWidth} number={val} key={idx}></Bar>;
          })}
        </div>
      </div>
    );
  }
}

export default Visualizer;
