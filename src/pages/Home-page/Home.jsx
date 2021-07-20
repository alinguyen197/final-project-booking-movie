import React, { Component } from "react";
import Footer from "../../components/Footer/Footer";
import App from "../../components/App/App";
import News from "../../components/News/News";
import Carousel from "../../components/Carousel/Carousel";
import RenderMovieList from "../../components/RenderMoiveList/RenderMovieList";
import CinemaRelease from "../../components/ListCinemaRelease/CinemaRelease";
import BlackBlock from "../../components/Black-block/BlackBlock";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div style={{ height: 60 }}></div>
        <Carousel />
        <RenderMovieList />
        <BlackBlock />
        <CinemaRelease />
        <BlackBlock />
        <News />
        <App />
        <Footer />
      </div>
    );
  }
}
