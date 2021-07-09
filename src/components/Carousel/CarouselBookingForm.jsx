import React from "react";
export default function CarouselBookingForm() {
  return (
    <div className="carousel-booking">
      <div className="row">
        <div className="col-4">
          <div className="booking-form-film">
            <div className="dropdown">
              <div type="button" data-toggle="dropdown">
                Phim
                <span></span>
              </div>

              <ul className="dropdown-menu">
                <li>
                  <a href="#">HTML</a>
                </li>
                <li>
                  <a href="#">CSS</a>
                </li>
                <li>
                  <a href="#">JavaScript</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="booking-form-cinema">
            <div className="dropdown">
              <div type="button" data-toggle="dropdown">
                Rạp
              </div>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">HTML</a>
                </li>
                <li>
                  <a href="#">CSS</a>
                </li>
                <li>
                  <a href="#">JavaScript</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="booking-form-date">
            <div className="dropdown">
              <div type="button" data-toggle="dropdown">
                Ngày Xem
              </div>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">HTML</a>
                </li>
                <li>
                  <a href="#">CSS</a>
                </li>
                <li>
                  <a href="#">JavaScript</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="booking-form-time">
            <div className="dropdown">
              <div type="button" data-toggle="dropdown">
                Suất Chiếu
              </div>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">HTML</a>
                </li>
                <li>
                  <a href="#">CSS</a>
                </li>
                <li>
                  <a href="#">JavaScript</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="booking-form-button">
            <div>
              <button>MUA VÉ NGAY</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
