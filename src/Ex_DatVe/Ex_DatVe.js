import React, { Component } from "react";
import "./style.css";
import Name from "./Name";
import backGround from "./bgmovie.jpg";
import Chair from "./Chair";
import KetQua from "./KetQua";
export default class Ex_DatVe extends Component {
  render() {
    return (
      <div
        className="bg-container"
        style={{ backgroundImage: `url(${backGround})` }}
      >
        <div className="container source_container">
          <Name />
          <Chair />
          <KetQua />
        </div>
      </div>
    );
  }
}
