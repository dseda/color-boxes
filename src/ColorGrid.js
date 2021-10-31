import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./ColorGrid.css";

class ColorGrid extends Component {
  static defaultProps = {
    numBoxes: 18,
  };

  render() {
    const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
      <ColorBox />
    ));
    return <div className="Color-Grid">{boxes}</div>;
  }
}

export default ColorGrid;
