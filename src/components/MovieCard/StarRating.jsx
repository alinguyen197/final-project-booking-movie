import React from "react";

export default function StarRating(props) {
  const { value } = props;
  return (
    <div>
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
  );
}
