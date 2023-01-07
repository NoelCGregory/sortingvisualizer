import React, { Component } from "react";
import Bar from "./Bar";
import { selectionSortAlgorithim } from "./sortingAlgorithims/algorithims";

class Visualizer extends Component {
  constructor(props) {
    super(props);
  }
  state = { array: [], barWidth: 2 };

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
      array.push(this.randomInteger(1, window.innerHeight - 50));
    }
    this.setState({ array, barWidth });
  };
  componentDidMount = () => {
    this.resetArray();
  };
  changeBarWidth = (barWidth) => {
    this.resetArray(barWidth);
  };
  selectionSort = () => {
    const { array } = this.state;
    const animation = selectionSortAlgorithim(array);
    console.log(animation);
    for (let i = 0; i < animation.length; i++) {
      let arrayBar = document.getElementsByClassName("bar");
      const oneBar = arrayBar[animation[i][0]].style;
      const twoBar = arrayBar[animation[i][1]].style;
      setTimeout(() => {
        oneBar.backgroundColor = "red";
        twoBar.backgroundColor = "red";
        if (animation[i].length == 4) {
          oneBar.height = `${animation[i][3]}px`;
          twoBar.height = `${animation[i][2]}px`;
        }
      }, Math.floor(i / 2));
      setTimeout(() => {
        oneBar.backgroundColor = "turquoise";
        twoBar.backgroundColor = "turquoise";
      }, Math.floor(i / 2) + 1);
    }
  };
  render() {
    const { array, barWidth } = this.state;
    return (
      <div>
        <div style={{ margin: "5px" }}>
          <button onClick={() => this.resetArray()} style={{ margin: "2px" }}>
            Reset Array
          </button>
          <button
            onClick={() => this.selectionSort()}
            style={{ margin: "2px" }}
          >
            Selection Sort
          </button>
          <input
            type="range"
            onChange={(e) => this.changeBarWidth(e.target.value)}
            min="2"
            max="20"
            value={barWidth}
          ></input>
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
