import React, { Component } from "react";
import "./home.css";

class Bar extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    const { number, width } = this.props;
    return (
      <div
        className="bar"
        style={{ height: `${number}px`, width: `${width - 1}px` }}
      ></div>
    );
  }
}

export default Bar;
