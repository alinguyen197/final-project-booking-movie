import React from "react";
export default function CarouselBookingForm() {
  return (
    <div className="carousel-booking">
      <div className="row">
        <div className="col-10">
          <div className="booking-form-film">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="usr"
                placeholder="Tìm phim...."
              />
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="booking-form-button">
            <div>
              <button>TÌM PHIM</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
