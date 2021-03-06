import React, { Component } from "react";
import Footer from "../../components/Footer/Footer";
import App from "../../components/App/App";
import News from "../../components/News/News";
import Carousel from "../../components/Carousel/Carousel";
import RenderMovieList from "../../components/RenderMoiveList/RenderMovieList";
import RenderMovieMobile from "../../components/RenderMoiveList/RenderMovieMobile";
import CinemaRelease from "../../components/ListCinemaRelease/CinemaRelease";
// import BlackBlock from "../../components/Black-block/BlackBlock";
import Header from "../../components/Header/Header";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div style={{ height: 60 }}></div>
        <Carousel />
        <RenderMovieList />
        <RenderMovieMobile />
        <CinemaRelease />

        <News />
        <App />
        <Footer />
      </div>
    );
  }
}
