import React from "react";
import Time from "react-time-format";
import { useHistory } from "react-router-dom";
export default function MovieCard(props) {
  const { value } = props;
  const history = useHistory();
  let timeMovie = value.ngayKhoiChieu;
  let formatTime = new Date(timeMovie);

  const handleViewDetail = (maPhim) => {
    //khi bấm button sẽ đẩy qua trang này + movieCode truyền lên url
    history.push(`/movie-detail/${maPhim}`);
  };

  return (
    <div className="moviecard" onClick={() => handleViewDetail(value.maPhim)}>
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
              <i className="fas fa-film"></i>
            </span>
            {value.tenPhim}
          </p>
          <p className="timemovie">
            <span>
              <i className="far fa-clock"></i>
            </span>
            <Time value={formatTime} format="DD/MM/YY" />
          </p>
        </div>
        <div className="rating">
          {value.danhGia}
          {value.danhGia < 10 ? (
            <div className="rating-star-incr">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
            </div>
          ) : (
            <div className="rating-star-discr">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          )}
        </div>
        <div className="moviebooking">
          <button onClick={() => handleViewDetail(value.maPhim)}>
            VIEW DETAIL
          </button>
        </div>
      </div>
    </div>
  );
}
