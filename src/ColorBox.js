import React, { Component } from "react";
import "./ColorBox.css";
import { generateRandomColor } from "./helpers";
class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let newColor = generateRandomColor();
    while (newColor == this.state.currentColor) {
      newColor = generateRandomColor();
    }
    this.setState({ currentColor: newColor });
  }
  render() {
    return (
      <div
        className="Color-Box"
        onClick={this.handleClick}
        style={{ backgroundColor: this.state.currentColor }}
      ></div>
    );
  }
}

export default ColorBox;
