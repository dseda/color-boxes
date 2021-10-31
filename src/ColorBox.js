import React, { Component } from "react";
import "./ColorBox.css";
import { generateRandomColor } from "./helpers";
import colors from "./colors";
class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let newColor = generateRandomColor(colors);
    while (newColor == this.state.currentColor) {
      newColor = generateRandomColor(colors);
    }
    this.setState({ currentColor: newColor });
  }
  render() {
    let initialColor = generateRandomColor(colors);
    console.log(initialColor);
    return (
      <div
        className="Color-Box"
        onClick={this.handleClick}
        style={{ backgroundColor: this.state.currentColor || initialColor }}
      >
        <p>
          {this.state.currentColor ? this.state.currentColor : initialColor}
        </p>
      </div>
    );
  }
}

export default ColorBox;
