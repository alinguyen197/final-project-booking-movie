import { regexLiteral } from "@babel/types";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DOMAIN, STATUS_CODE } from "../../util/const/settingSystem";
import Time from "react-time-format";
import { useHistory } from "react-router";

export default function CarouselBookingForm() {
  const history = useHistory();
  let { movieList } = useSelector((state) => state.movieListReducer);

  let [state, setState] = useState();

  let [data, setData] = useState({
    tenCumRap: "",
    ngayChieu: "",
    gioChieu: "",
  });

  const handleChange = async (e) => {
    const { value, name } = e.target;
    if (name === "MovieId") {
      let { status, data } = await axios({
        url: `${DOMAIN}/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${value}`,
        method: "GET",
      });
      if (status === STATUS_CODE.SUCCESS) {
        setState(data);
      }
    }
  };
  const handleCinema = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const renderFilmName = () => {
    return (
      <select className="form-control" name="MovieId" onChange={handleChange}>
        <option>Phim</option>
        {movieList.map((phim, indexPhim) => {
          return (
            <option key={indexPhim} value={phim.maPhim}>
              {phim.tenPhim}
            </option>
          );
        })}
      </select>
    );
  };

  const renderCinema = () => {
    if (state?.tenPhim !== undefined) {
      return (
        <select
          className="form-control"
          name="tenCumRap"
          onChange={handleCinema}
        >
          <option value="">Vui lòng chọn rạp</option>
          {state?.heThongRapChieu?.map((cumRap) => {
            return cumRap?.cumRapChieu?.map((value, index) => {
              return <option key={index}>{value.tenCumRap}</option>;
            });
          })}
        </select>
      );
    } else {
      return (
        <select className="form-control">
          <option value="">Vui lòng chọn phim</option>
        </select>
      );
    }
  };

  const renderDate = () => {
    if (data.tenCumRap !== "") {
      // lấy rạp BHD , CGV
      let arr = state?.heThongRapChieu?.filter(
        (cumRap) => cumRap.tenHeThongRap === cumRap.tenHeThongRap
      );
      console.log("Hệ thống rạp :", arr);
      // lấy chi tiết cụm rạp theo rạp bhd-quang-trung , bhd-bitexco
      const rapchitiet = [];
      let arr1 = arr.map((rap) => {
        return rap.cumRapChieu.map((cumRap) => {
          return rapchitiet.push(cumRap);
        });
      });

      // filter lấy ra đúng cái thằng cụm rạp mình chọn . vd mình chọn bhd-quang-trung trả về ngày giờ chiếu của mỗi cụm rạp này
      let arrLichChieu = rapchitiet.filter(
        (item) => item.tenCumRap === data.tenCumRap
      );

      // vì ở trên chỉ trả về giá trị của đúng 1 thằng nên mình [0] lấy phần tử đầu tiên đi map để lấy ra hết ngày giờ của thằng mình đang chọn
      // ở đây arrNgayGio mình đã có tất cả thời gian
      let arrNgayGio = arrLichChieu[0].lichChieuPhim.map((time) => {
        return time.ngayChieuGioChieu;
      });

      console.log("Thông tin ngày giờ của 1 cụm rạp: ", arrNgayGio);

      // xử lý ngày bị trùng nhau , hàm set xoá đi các phần tử giống nhau
      let arrDays = new Set(
        arrNgayGio.map((days) => {
          return new Date(days).toLocaleDateString();
        })
      );

      let arrDaysLastOfProgress = [...arrDays];
      console.log("Giờ sau khi xử lý trùng :", arrDaysLastOfProgress);

      return (
        <select
          className="form-control"
          name="ngayChieu"
          onChange={(e) => handleCinema(e)}
        >
          <option value="">Vui lòng chọn ngày</option>

          {arrDaysLastOfProgress?.map((ngayChieu, index) => {
            return <option key={index}>{ngayChieu}</option>;
          })}
        </select>
      );
    } else {
      return (
        <select className="form-control">
          <option value="">Vui lòng chọn rạp</option>
        </select>
      );
    }
  };
  console.log(data);
  const renderHours = () => {
    if (data.tenCumRap !== "") {
      // lấy hệ thống rạp BHD , CGV ...
      let arr = state?.heThongRapChieu?.filter(
        (cumRap) => cumRap.tenHeThongRap === cumRap.tenHeThongRap
      );

      // lấy chi tiết cụm rạp theo rạp ví dụ BHD :  bhd-quang-trung , bhd-bitexco ....
      const rapchitiet = [];
      let arr1 = arr.map((rap) => {
        return rap.cumRapChieu.map((cumRap) => {
          return rapchitiet.push(cumRap);
        });
      });

      // filter lấy ra đúng cái thằng cụm rạp mình chọn . vd mình chọn bhd-quang-trung trả về ngày giờ chiếu của mỗi cụm rạp này
      let arrLichChieu = rapchitiet.filter(
        (item) => item.tenCumRap === data.tenCumRap
      );

      // vì ở trên chỉ trả về giá trị của đúng 1 thằng nên mình [0] lấy phần tử đầu tiên đi map để lấy ra hết ngày giờ của thằng mình đang chọn
      // ở đây arrNgayGio mình đã có tất cả thời gian
      let arrNgayGio = arrLichChieu[0]?.lichChieuPhim?.map((time) => {
        return time;
      });
      console.log("Oject của 1 cụm rạp chứa ngày và giờ", arrNgayGio);

      // so sánh để bắt đúng chuỗi ngày chiều giờ chiếu ở trên
      let arrHours = arrNgayGio?.filter((lichChieu) => {
        return (
          new Date(lichChieu.ngayChieuGioChieu).toLocaleDateString() ===
          data.ngayChieu
        );
      });
      console.log(
        "Trả về đúng cái giờ của cái ngày đã chọn ở trên :",
        arrHours
      );

      // sau khi có đc chuỗi giờ mình bóc tách show giờ kèm theo lịch chiếu để đi booking
      let arrHourseAfterProgress = arrHours?.map((hours) => {
        return hours.ngayChieuGioChieu.slice(-8, -3) + hours.maLichChieu;
      });
      console.log(arrHourseAfterProgress);
      return (
        <select
          className="form-control"
          name="gioChieu"
          onChange={handleCinema}
        >
          <option value="">Vui lòng chọn giờ</option>

          {arrHourseAfterProgress?.map((value, index) => {
            return (
              <option key={index} value={value.slice(-5)}>
                {value.slice(0, 5)}
              </option>
            );
          })}
        </select>
      );
    } else {
      return (
        <select className="form-control">
          <option value="">Vui lòng chọn ngày</option>
        </select>
      );
    }
  };

  return (
    <div className="carousel-booking">
      <div className="row">
        <div className="col-3">
          <div className="booking-form-film">
            <div className="form-group">{renderFilmName()}</div>
          </div>
        </div>
        <div className="col-3">
          <div className="booking-form-film">
            <div className="form-group">{renderCinema()}</div>
          </div>
        </div>
        <div className="col-2">
          <div className="booking-form-film">
            <div className="form-group">{renderDate()}</div>
          </div>
        </div>
        <div className="col-2">
          <div className="booking-form-film">
            <div className="form-group">{renderHours()}</div>
          </div>
        </div>

        <div className="col-2">
          <div className="booking-form-button">
            <button
              disabled={data.gioChieu !== "" ? false : true}
              className={data.gioChieu !== "" ? "active" : ""}
              onClick={() => {
                history.push(`/booking/${data.gioChieu}`);
              }}
            >
              MUA VÉ NGAY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
