import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import App from "../../components/App/App";
export default class Home extends Component {
  render() {
    return (
      <div>
        <div style={{ height: 60 }}></div>
        <App />
        <Footer />
      </div>
    );
  }
}
