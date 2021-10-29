import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./ColorGrid.css";
import { generateRandomColor } from "./helpers";
class ColorGrid extends Component {
  render() {
    return (
      <div className="Color-Grid">
        <ColorBox />
        <ColorBox />
        <ColorBox />
        <ColorBox />
        <ColorBox />
        <ColorBox />
        <ColorBox />
        <ColorBox />
        <ColorBox />
        <ColorBox />
        <ColorBox />
        <ColorBox />
        <ColorBox />
        <ColorBox />
        <ColorBox />
        <ColorBox />
        <ColorBox />
        <ColorBox />
      </div>
    );
  }
}

export default ColorGrid;
