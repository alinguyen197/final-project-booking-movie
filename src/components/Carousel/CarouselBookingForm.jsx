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
          <option>Vui lòng chọn rạp</option>
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
          <option>Vui lòng chọn phim</option>
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
      console.log("lấy rạp", arr);
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
      let arrNgayGio = arrLichChieu[0]?.lichChieuPhim?.map((time) => {
        return `${time.ngayChieuGioChieu} + ${time.maLichChieu}`;
      });
      console.log("ngày giờ của 1 thằng", arrNgayGio);

      // mảng ngày giờ chiếu
      let arrDays = arrLichChieu[0].lichChieuPhim?.map((item) => {
        return item.ngayChieuGioChieu;
      });

      // xử lý ngày bị trùng nhau , hàm set xoá đi các phần tử giống nhau
      // let arrDaysfilter = new Set(
      //   arrDays.filter((item) => {
      //     return new Date(item === item);
      //   })
      // );

      // let arrDaysLastOfProgress = [...arrDaysfilter];
      // console.log(arrDaysLastOfProgress);

      return (
        <select
          className="form-control"
          name="ngayChieu"
          onChange={(e) => handleCinema(e)}
        >
          <option>Vui lòng chọn ngày</option>
          {arrNgayGio?.map((ngayChieu, index) => {
            return (
              <option key={index} value={ngayChieu}>
                {ngayChieu.slice(0, 10)}
              </option>
            );
          })}
        </select>
      );
    } else {
      return (
        <select className="form-control">
          <option>Vui lòng chọn rạp</option>
        </select>
      );
    }
  };
  console.log(data);
  const renderHours = () => {
    if (data.tenCumRap !== "") {
      // lấy rạp BHD , CGV
      let arr = state?.heThongRapChieu?.filter(
        (cumRap) => cumRap.tenHeThongRap === cumRap.tenHeThongRap
      );
      console.log("lấy rạp", arr);
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

      console.log("lấy ra tên cụm rạp chọn", arrLichChieu);

      // vì ở trên chỉ trả về giá trị của đúng 1 thằng nên mình [0] lấy phần tử đầu tiên đi map để lấy ra hết ngày giờ của thằng mình đang chọn
      // ở đây arrNgayGio mình đã có tất cả thời gian
      let arrNgayGio = arrLichChieu[0].lichChieuPhim.map((time) => {
        return `${time.ngayChieuGioChieu} + ${time.maLichChieu}`;
      });
      console.log("ngày giờ của 1 thằng", arrNgayGio);

      //xử lý ngày bị trùng nhau , hàm set xoá đi các phần tử giống nhau
      // let arrHours = arrNgayGio?.filter((lichChieu) => {
      //   return new Date(lichChieu).toLocaleDateString() === data.ngayChieu;
      // });

      // console.log(arrHours);

      // let arrHourseAfterProgress = arrHours?.map((hours) => {
      //   return hours.ngayChieuGioChieu.slice(-8, -3);
      // });
      // console.log(arrHourseAfterProgress);
      return (
        <select
          className="form-control"
          name="gioChieu"
          onChange={handleCinema}
        >
          <option>Vui lòng chọn giờ</option>
          <option value={data.ngayChieu.slice(-5)}>
            {data.ngayChieu.slice(11, 16)}
          </option>
        </select>
      );
    } else {
      return (
        <select className="form-control">
          <option>Vui lòng chọn ngày</option>
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
