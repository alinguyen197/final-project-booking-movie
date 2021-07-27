import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import $ from "jquery";
import ButtonPagination from "./ButtonPagination";
//import queryString from "query-string";
import { DOMAIN } from "../../../util/const/settingSystem";
import AddMovie from "../Dashboard/AddMovie";
import Time from "react-time-format";
import EditMovie from "./EditMovie";
import InputSearch from "./InputSearch";

export default function Dashboard(props) {
  $(".delete").tooltip({ delay: 0 });
  $(".edit").tooltip({ delay: 0 });
  $(".create").tooltip({ delay: 0 });

  const [movie, setMovie] = useState([]);

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
    console.log("newPage: ", newPage);
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

  const handleDeleteFilm = async (maPhim) => {
    if (window.confirm("Bạn có chắc muốn xoá ?")) {
      const token = JSON.parse(localStorage.getItem("token"));
      let { status, data } = await axios({
        url: `${DOMAIN}/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (status === 200) {
        //render lại mảng
        getListMoviePagination();
      }
    } else {
    }
  };

  const handleUpdateFilm = async (form_data) => {
    if (form_data) {
      const token = JSON.parse(localStorage.getItem("token"));
      let { status, data } = await axios({
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
  useEffect(() => {
    //khai báo biến bất đồng bộ async await sẽ trả về data không cần .then() .catch nữa
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
                QUẢN LÝ <b>PHIM</b>
              </h2>
            </div>
            <div className="col-sm-6">
              <a
                href="#addEmployeeModal"
                className="btn btn-success"
                data-toggle="modal"
              >
                <i className="fa fa-plus-circle" aria-hidden="true"></i>
                <span>THÊM MỚI</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <table className="table table-striped">
          <thead>
            <tr className="shortcut">
              {/* <th>
                <span className="custom-checkbox">
                  <input type="checkbox" id="selectAll" />
                  <label htmlFor="selectAll" />
                </span>
              </th> */}
              <th scope="col">Mã Phim</th>
              <th scope="col">Tên Phim</th>
              <th scope="col">Hình Ảnh</th>
              <th scope="col">Mô Tả</th>
              <th scope="col">Mã Nhóm</th>
              <th scope="col" type>
                Ngày khỏi chiếu
              </th>
              <th scope="col">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {movie.items?.map((value, index) => {
              return (
                <tr key={index} className="renderTable">
                  {/* <td>
                    <span className="custom-checkbox">
                      <input
                        type="checkbox"
                        id="checkbox1"
                        name="options[]"
                        defaultValue={1}
                      />
                      <label htmlFor="checkbox1" />
                    </span>
                  </td> */}
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
                      : ""}
                  </td>
                  <td>{value.maNhom}</td>
                  <td>
                    <Time value={value.ngayKhoiChieu} format="DD/MM/YY" />
                  </td>
                  <td>
                    <a
                      className="create"
                      href="#addShowTime"
                      data-toggle="tooltip"
                      title="Create Show Time"
                    >
                      <i className="far fa-calendar-plus"></i>
                    </a>
                    <a
                      href="#editEmployeeModal"
                      data-toggle="tooltip"
                      title="Edit Movie"
                      className="edit"
                      data-toggle="modal"
                      onClick={() => handleEditFilm(value)}
                    >
                      <i className="fa fa-edit"></i>
                    </a>
                    <a
                      data-toggle="tooltip"
                      title="Delete Movie"
                      href="#"
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
      </div>
    </div>
  );
}
