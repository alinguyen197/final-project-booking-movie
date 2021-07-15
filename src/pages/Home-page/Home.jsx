import React, { Component } from "react";

import Footer from "../../components/Footer/Footer";
import App from "../../components/App/App";

import News from "../../components/News/News";
import Carousel from "../../components/Carousel/Carousel";
import RenderMovieList from "../../components/RenderMoiveList/RenderMovieList";
import CinemaRelease from "../../components/ListCinemaRelease/CinemaRelease";
import Progressbar from "../../components/Circular-progressbar/Progressbar";
// import Header from "../../components/Header/Header";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div style={{ height: 60 }}></div>
        <Carousel />
        <RenderMovieList />
        <CinemaRelease />
        <News />
        <App />
        <Footer />
      </div>
    );
  }
}
