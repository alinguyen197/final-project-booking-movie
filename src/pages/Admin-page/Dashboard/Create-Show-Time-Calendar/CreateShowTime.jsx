import axios from "axios";
import React, { useState, useEffect } from "react";
import Time from "react-time-format";
import { DOMAIN } from "../../../../util/const/settingSystem";
import swal from "sweetalert2";
import { format } from "date-fns";
import { useDispatch } from "react-redux";
import {
  START_LOADING,
  STOP_LOADING,
} from "../../../../redux/const/commonConst";
import "./pagination.css";
export default function CreateShowTime(props) {
  const dispatch = useDispatch();

  let { movieCode } = props;

  const [brand, setBrand] = useState();

  //data
  const [movieShowTime, setMovieShowTime] = useState();

  // Code Phân Trang - start
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, SetItemsPerPage] = useState(5);

  // tăng giảm thì số number sẽ thay đổi
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  let pages = [];
  for (
    let i = 1;
    i <= Math.ceil(movieShowTime?.lichChieu.length / itemsPerPage);
    i++
  ) {
    pages.push(i);
  }
  const data = movieShowTime?.lichChieu;
  //30 = 3*10
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);

  const handleChangePage = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const renderPagesNumber = () => {
    return pages.map((number) => {
      // set giới hạn của number
      if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
        return (
          <li
            key={number}
            id={number}
            className={currentPage === number ? "active" : ""}
            onClick={handleChangePage}
          >
            {number}
          </li>
        );
      } else {
        return null;
      }
    });
  };

  const handleNextBtn = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };
  const handlePreBtn = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  // nút 3 chấm
  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextBtn}>&hellip;</li>;
  }
  let pageDescrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDescrementBtn = <li onClick={handlePreBtn}>&hellip;</li>;
  }

  // ban đầu là 5 item , bấm số sẽ coi đc thêm 5
  // const handleLoadMore = () => {
  //   SetItemsPerPage(itemsPerPage + 5);
  // };
  // Code Phân Trang - end

  const [stateCinema, setStateCinema] = useState({
    maHeThongRap: "",
    maCumRap: "",
    maRap: "",
  });
  useEffect(() => {
    heThongRap();
    getListShowTime(movieCode);
  }, [movieCode]);
  const getListShowTime = async (movieCode) => {
    console.log(movieCode);
    if (movieCode) {
      dispatch({
        type: START_LOADING,
      });
      let { data } = await axios({
        url: `${DOMAIN}/QuanLyPhim/LayThongTinPhim?MaPhim=${movieCode}`,
        method: "GET",
      });
      setMovieShowTime(data);
      dispatch({
        type: STOP_LOADING,
      });
    }
  };

  const heThongRap = async () => {
    let { data } = await axios({
      url: `${DOMAIN}/QuanLyRap/LayThongTinHeThongRap`,
      method: "GET",
    });
    setBrand(data);
  };
  const handleChange = (e) => {
    let { name, value } = e.target;
    const newValue = { ...stateCinema };
    if (name === "maCumRap") {
      let data = stateCinema.listRap.find((item) => item.tenCumRap === value);
      newValue[name] = data;
    }
    if (name === "maHeThongRap") {
      newValue[name] = value;
      heThongCumRap(value);
    }
    if (name === "maRap") {
      newValue[name] = value;
    }

    setStateCinema(newValue);
  };

  const heThongCumRap = async (value) => {
    let { data } = await axios({
      url: `${DOMAIN}/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${value}`,
      method: "GET",
    });
    setStateCinema({ ...stateCinema, listRap: data });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    let arr = {
      maPhim: movieShowTime.maPhim,
      ngayChieuGioChieu: document.getElementById("ngayChieuGioChieu").value,
      maRap: document.getElementById("maRap").value,
      giaVe: document.getElementById("giaVe").value,
    };

    let isValid = true;
    let errContent = "";
    for (let key in arr) {
      if (arr[key] === "") {
        errContent += `<p>Vui lòng chọn  ${key}</p>`;
        isValid = false;
      }
    }
    if (!isValid) {
      swal.fire({
        icon: "error",
        html: errContent,
      });
      return;
    }

    let ngayChieuGioChieu = document.getElementById("ngayChieuGioChieu").value;
    let date = new Date(ngayChieuGioChieu);
    let formatDate = format(date, "dd/MM/yyyy HH:mm:ss");
    console.log(formatDate);

    const token = JSON.parse(localStorage.getItem("token"));

    let res = axios({
      url: `${DOMAIN}/QuanLyDatVe/TaoLichChieu`,
      method: "POST",
      data: {
        maPhim: movieShowTime.maPhim,
        ngayChieuGioChieu: formatDate,
        maRap: document.getElementById("maRap").value,
        giaVe: document.getElementById("giaVe").value,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    res
      .then((result) => {
        swal.fire({
          icon: "success",
          html: "Thành Công !",
        });
        getListShowTime(movieCode);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const renderLichChieu = (currentItems) => {
    return currentItems?.map((value, index) => {
      return (
        <tr key={index}>
          <td>{value.maLichChieu}</td>
          <td>{value.thongTinRap.maHeThongRap}</td>
          <td>{value.thongTinRap.tenCumRap}</td>
          <td>{value.thongTinRap.tenRap}</td>
          <td>
            <Time value={value.ngayChieuGioChieu} format="DD/MM/YY - HH:mm" />
          </td>
          <td>{value.giaVe}</td>
        </tr>
      );
    });
  };

  return (
    <div className="modal fade " id="myModal" role="dialog">
      <div className="modal-dialog modal-xl">
        <div className="modal-content ">
          <div className="modal-header">
            <h4 className="modal-title">
              THÔNG TIN LỊCH CHIẾU PHIM :{" "}
              <b style={{ textTransform: "uppercase" }}>
                {movieShowTime?.tenPhim} - {"MOVIE ID"} {movieShowTime?.maPhim}
              </b>
            </h4>
            <button type="button" className="close" data-dismiss="modal">
              ×
            </button>
          </div>
          <div className="modal-body">
            <form id="createShowTimeForm" action="" className="mb-3">
              <div style={{ width: "40%", float: "left", marginRight: 20 }}>
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Hệ thống rạp</label>
                  <select
                    id="maHeThongRap"
                    class="form-control"
                    name="maHeThongRap"
                    onChange={handleChange}
                  >
                    {brand?.map((value, index) => {
                      return (
                        <option key={index} value={value.maHeThongRap}>
                          {value.tenHeThongRap}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div class="form-group ">
                  <label for="exampleFormControlSelect1">
                    Hệ thống cụm rạp
                  </label>
                  <select
                    id="maCumRap"
                    class="form-control"
                    name="maCumRap"
                    onChange={handleChange}
                  >
                    {stateCinema?.listRap?.map((value, index) => {
                      return (
                        <option key={index} value={value.tenCumRap}>
                          {value.tenCumRap}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div class="form-group ">
                  <label for="exampleFormControlSelect1"> Rạp</label>
                  <select
                    id="maRap"
                    class="form-control"
                    name="maRap"
                    onChange={handleChange}
                  >
                    {stateCinema?.maCumRap?.danhSachRap?.map((value, index) => {
                      return (
                        <option key={index} value={value.maRap}>
                          {value.tenRap} - {"Mã Rạp"} {value.maRap}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div style={{ width: "30%", float: "left", marginRight: "8%" }}>
                <div class="form-group ">
                  <label for="exampleFormControlSelect1">Ngày giờ chiếu</label>
                  <input
                    type="datetime-local"
                    className="form-control"
                    id="ngayChieuGioChieu"
                  />
                </div>

                <div class="form-group ">
                  <label for="exampleFormControlSelect1">Giá vé</label>
                  <input type="text" className="form-control" id="giaVe" />
                </div>
              </div>
              <div style={{ width: "20%", float: "left" }}>
                <img
                  style={{ width: "100%", height: 250 }}
                  src={movieShowTime?.hinhAnh}
                  alt=""
                />
              </div>
              <div style={{ clear: "both", textAlign: "center" }}>
                <button
                  style={{ width: "20%", margin: " auto" }}
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  TẠO LỊCH CHIẾU
                </button>
              </div>
            </form>

            <table class="table table-dark table-xl">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Hệ thống rạp</th>
                  <th>Cụm rạp</th>
                  <th>Rạp</th>
                  <th>Thời gian</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>{renderLichChieu(currentItems)}</tbody>
            </table>
          </div>

          <ul className="pageNumbers mb-3">
            <li>
              <button
                disabled={currentPage === pages[0] ? true : false}
                onClick={handlePreBtn}
              >
                Pre
              </button>
            </li>
            {pageDescrementBtn}

            {renderPagesNumber()}
            {pageIncrementBtn}

            <li>
              <button
                disabled={
                  currentPage === pages[pages.length - 1] ? true : false
                }
                onClick={handleNextBtn}
              >
                Next
              </button>
            </li>
          </ul>
          {/* <button onClick={handleLoadMore}>Load More</button> */}
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-default"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
