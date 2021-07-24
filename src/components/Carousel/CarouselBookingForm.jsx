import React from "react";
export default function CarouselBookingForm() {
  // tạo state
  // lấy dữ liệu từ thẻ input
  // lưu value của thẻ input vào state
  //hàm submit dispatch payload : state.value
  // useSelector lấy data show ra màn hinh
  // trước khi show table là phải kiểm tra , có data thì show , không thì ẩn
  return (
    <div className="carousel-booking">
      <div className="row">
        <div className="col-10">
          <div className="booking-form-film">
            <div className="form-group">
              <input
                onChange
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
