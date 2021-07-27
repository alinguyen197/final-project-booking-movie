import React, { Component } from "react";
import img from "../../assets/img/back-news.png";
class BlackBlock extends Component {
  render() {
    return (
      <div className="container">
        <div
          style={{
            paddingTop: 120,
            background: `url("${img}")`,
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    );
  }
}

export default BlackBlock;
