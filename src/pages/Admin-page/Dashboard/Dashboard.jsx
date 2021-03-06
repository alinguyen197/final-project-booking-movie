import React, { useState, useEffect } from "react";
import axios from "axios";
import $ from "jquery";
import ButtonPagination from "./ButtonPagination";
//import queryString from "query-string";
import { DOMAIN } from "../../../util/const/settingSystem";
import AddMovie from "../Dashboard/AddMovie";
import Time from "react-time-format";
import EditMovie from "./EditMovie";
import InputSearch from "./InputSearch";
import Swal from "sweetalert2";
import CreateShowTime from "./Create-Show-Time-Calendar/CreateShowTime";

export default function Dashboard(props) {
  $('[data-toggle="tooltip"]').tooltip({
    trigger: "hover",
  });
  $(".create").click(function () {
    $('[data-toggle="tooltip"]').tooltip("hide");
  });
  $(".delete").click(function () {
    $('[data-toggle="tooltip"]').tooltip("hide");
  });
  $(".edit").click(function () {
    $('[data-toggle="tooltip"]').tooltip("hide");
  });

  const [movie, setMovie] = useState([]);
  const [movieCode, setMovieCode] = useState();
  const [movieEdit, setMovieEdit] = useState({
    maPhim: "",
    tenPhim: "",
    biDanh: "",
    trailer: "",
    hinhAnh: {},
    moTa: "",
    maNhom: "GP01",
    ngayKhoiChieu: "",
    danhGia: "",
  });

  const [pagination, setPagination] = useState({
    currentPage: 1,
    count: 10,
    totalPages: 8,
    totalCount: 1,
  });
  const [filter, setFilter] = useState({
    soTrang: 1,
    soPhanTuTrenTrang: 10,
    tenPhim: "",
  });

  const handlePageChange = (newPage) => {
    setFilter({
      ...filter,
      soTrang: newPage,
    });
  };

  const getListMoviePagination = async () => {
    let url = ``;
    if (filter.tenPhim === "") {
      url = ``;
    } else {
      url = `&tenPhim=${filter.tenPhim}`;
    }

    //  soTrang=1&soPhanTuTrenTrang=10
    //const paramsString = queryString.stringify(filter);
    let { data } = await axios({
      url: `${DOMAIN}/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=${filter.soTrang}&soPhanTuTrenTrang=${filter.soPhanTuTrenTrang}${url}`,
      method: "GET",
    });
    setMovie(data);
    setPagination(data);
  };

  const addMoviePagination = async (form_data) => {
    let { status } = await axios({
      url: `${DOMAIN}/QuanLyPhim/ThemPhimUploadHinh`,
      method: "POST",
      data: form_data,
    });
    if (status === 200) {
      getListMoviePagination();
    }
  };

  const handleEditFilm = async (phim) => {
    setMovieEdit({
      maPhim: phim.maPhim,
      tenPhim: phim.tenPhim,
      biDanh: phim.biDanh,
      trailer: phim.trailer,
      hinhAnh: phim.hinhAnh,
      moTa: phim.moTa,
      maNhom: "GP01",
      ngayKhoiChieu: phim.ngayKhoiChieu,
      danhGia: phim.danhGia,
    });
  };

  const handleDeleteFilm = (maPhim) => {
    Swal.fire({
      title: "B???n mu???n xo?? phim n??y?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const token = JSON.parse(localStorage.getItem("token"));
        let { status } = await axios({
          url: `${DOMAIN}/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (status === 200) {
          //render l???i m???ng
          getListMoviePagination();
        }
        Swal.fire("Xo?? th??nh c??ng !", "", "success");
      }
    });
  };

  const handleUpdateFilm = async (form_data) => {
    if (form_data) {
      const token = JSON.parse(localStorage.getItem("token"));
      let { status } = await axios({
        url: `${DOMAIN}/QuanLyPhim/CapNhatPhimUpload`,
        method: "POST",
        data: form_data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (status === 200) {
        getListMoviePagination();
      }
    }
  };

  const handlSearch = (search) => {
    setFilter({
      ...filter,
      tenPhim: search.search,
    });
  };

  const handleCreateShowTime = (maPhim) => {
    setMovieCode(maPhim);
  };

  useEffect(() => {
    //khai b??o bi???n b???t ?????ng b??? async await s??? tr??? v??? data kh??ng c???n .then() .catch n???a
    getListMoviePagination();
  }, [filter]);
  return (
    <div className="contentAdmin">
      <InputSearch onSubmit={handlSearch} />
      <div className="table-wrapper">
        <div className="table-title">
          <div className="row">
            <div className="col-sm-6">
              <h2>
                QU???N L?? <b>PHIM</b>
              </h2>
            </div>
            <div className="col-sm-6">
              <a
                href="#addEmployeeModal"
                className="btn btn-success"
                data-toggle="modal"
              >
                <i className="fa fa-plus-circle" aria-hidden="true"></i>
                <span>TH??M M???I</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="tableAdmin">
        <table className="table table-striped">
          <thead>
            <tr className="shortcut">
              <th scope="col">M?? Phim</th>
              <th scope="col">T??n Phim</th>
              <th scope="col">H??nh ???nh</th>
              <th scope="col">M?? T???</th>
              <th scope="col">M?? Nh??m</th>
              <th scope="col">Ng??y kh???i chi???u</th>
              <th scope="col">Thao t??c</th>
            </tr>
          </thead>
          <tbody>
            {movie.items?.map((value, index) => {
              return (
                <tr key={index} className="renderTable">
                  <td>{value.maPhim}</td>
                  <td className="tenPhim">{value.tenPhim}</td>
                  <td>
                    <img
                      className="card-img-top"
                      style={{ width: "50px", height: "50px" }}
                      src={value.hinhAnh}
                      alt=""
                    />
                  </td>
                  <td className="moTa">
                    {value.moTa.length > 40
                      ? value.moTa.slice(0, 40) + "..."
                      : value.moTa}
                  </td>
                  <td>{value.maNhom}</td>
                  <td>
                    <Time value={value.ngayKhoiChieu} format="DD/MM/YY" />
                  </td>
                  <td>
                    <a
                      href="#create"
                      data-toggle="modal"
                      data-target="#myModal"
                      onClick={() => handleCreateShowTime(value.maPhim)}
                    >
                      <i className="far fa-calendar-plus"></i>
                    </a>
                    <a
                      href="#editEmployeeModal"
                      title="Edit Movie"
                      className="edit"
                      data-toggle="modal"
                      onClick={() => handleEditFilm(value)}
                    >
                      <i className="fa fa-edit"></i>
                    </a>
                    <a
                      href="#delete"
                      data-toggle="tooltip"
                      title="Delete Movie"
                      className="delete"
                      // data-toggle="modal"
                      onClick={() => handleDeleteFilm(value.maPhim)}
                    >
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <ButtonPagination
          pagination={pagination}
          onPageChange={handlePageChange}
        />
        <AddMovie addMoviePagination={addMoviePagination} />
        <EditMovie movieEdit={movieEdit} handleUpdateFilm={handleUpdateFilm} />
        <CreateShowTime movieCode={movieCode} />
      </div>
    </div>
  );
}
