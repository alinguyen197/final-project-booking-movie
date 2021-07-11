import React, { useState } from "react";
import playvideo from "../../assets/img/play-video.png";
import next from "../../assets/img/next-session.png";
import back from "../../assets/img/back-session.png";
import CarouselBookingForm from "./CarouselBookingForm";
import ModalVideo from "react-modal-video";
export default function Carousel() {
  const [isOpen, setOpen] = useState(false);
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
            <div className="item1 d-block w-100"></div>
            <React.Fragment>
              <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="hwgd2sCVh1U"
                onClose={() => setOpen(false)}
              />

              <button
                className="btn-primary carousel-btn-modal-video"
                onClick={() => setOpen(true)}
              >
                <img src={playvideo} alt="" />
              </button>
            </React.Fragment>
          </div>

          <div className="carousel-item">
            <div className="item2 d-block w-100"></div>
            <React.Fragment>
              <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="ykBfss-8H4Y"
                onClose={() => setOpen(false)}
              />

              <button
                className="btn-primary carousel-btn-modal-video"
                onClick={() => setOpen(true)}
              >
                <img src={playvideo} alt="" />
              </button>
            </React.Fragment>
          </div>
          <div className="carousel-item">
            <div className="item3 d-block w-100"></div>
            <React.Fragment>
              <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="uqJ9u7GSaYM"
                onClose={() => setOpen(false)}
              />

              <button
                className="btn-primary carousel-btn-modal-video"
                onClick={() => setOpen(true)}
              >
                <img src={playvideo} alt="" />
              </button>
            </React.Fragment>
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
