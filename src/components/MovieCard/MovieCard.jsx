import React from "react";
import Time from "react-time-format";

export default function MovieCard(props) {
  const { value } = props;
  
  const avc = value.trailer;
  console.log(avc);
  let timeMovie = value.ngayKhoiChieu;
  let formatTime = new Date(timeMovie);
  return (
    <div className="moviecard">
      <div className="card text-left">
        <img
          className="card-img-top"
          style={{ width: "100%", height: "350px" }}
          src={value.hinhAnh}
          alt=""
        />
        <div className="bodymovie">
          <p className="titlemovie">
            <span>
              <i class="fas fa-film"></i>
            </span>
            {value.tenPhim}
          </p>
          <p className="timemovie">
            <span>
              <i class="far fa-clock"></i>
            </span>
            <Time value={formatTime} format="hh:mm - DD/MM/YY" />
          </p>
        </div>
        <div className="rating">
          {value.danhGia}
          {value.danhGia < 10 ? (
            <div className="rating-star-incr">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
            </div>
          ) : (
            <div className="rating-star-discr">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
          )}
        </div>
        <div className="moviebooking">
          <a href="#">VIEW DETAIL</a>
        </div>
       
      </div>
    </div>
  );
}
