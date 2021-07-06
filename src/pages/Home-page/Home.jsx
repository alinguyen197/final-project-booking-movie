import React, { Component } from "react";

import Footer from "../../components/Footer/Footer";
import App from "../../components/App/App";

import News from "../../components/News/News";
export default class Home extends Component {
  render() {
    return (
      <div>
        <div style={{ height: 60 }}></div>

        <News />
        <App />
        <Footer />
      </div>
    );
  }
}
