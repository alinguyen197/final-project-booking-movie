import React from "react";
import playvideo from "../../assets/img/play-video.png";
import next from "../../assets/img/next-session.png";
import back from "../../assets/img/back-session.png";
// import ReactPlayer from "react-player";
import CarouselBookingForm from "./CarouselBookingForm";
export default function Carousel() {
  return (
    <section id="film-carousel">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to={0}
            className="active"
          />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="item1 d-block w-100">
              <button href="">
                <img src={playvideo} alt="" />
              </button>
            </div>
          </div>

          <div className="carousel-item">
            <div className="item2 d-block w-100">
              <button href="">
                <img src={playvideo} alt="" />
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <div className="item3 d-block w-100">
              <button href="">
                <img src={playvideo} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="carousel-booking-form">
          <CarouselBookingForm />
        </div>

        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <img src={back} alt="" />
          {/* <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span> */}
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          {/* <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span> */}
          <img src={next} alt="" />
        </a>
      </div>
    </section>
  );
}
