import React, { useEffect, useState } from "react";
import Time from "react-time-format";
import { useSelector, useDispatch } from "react-redux";
import { GET_MOVIE_LIST } from "../../../redux/const/movieListConst";

// import { useSelector, useDispatch } from "react-redux";
// import { GET_MOVIE_LIST } from "../../redux/const/movieListConst";

export default function PaginationDashboard() {
  let [state, setState] = useState({
    currentPage: 2,
    itemPerPage: 5,
  });
  const dispatch = useDispatch();
  const { movieList } = useSelector((state) => state.movieListReducer);
  // const currentList = movieList.slice(0, 10);

  const totalPage = Math.floor(movieList.length / state.itemPerPage);
  const CurrentList = movieList.slice(
    (state.currentPage - 1) * state.itemPerPage,
    state.itemPerPage * state.currentPage
  );
  const handlePage = (page) => {
    setState({
      ...state,
      currentPage: page,
    });
  };
  useEffect(() => {
    dispatch({ type: GET_MOVIE_LIST });
  }, []);

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr className="shortcut">
            <th>
              <span className="custom-checkbox">
                <input type="checkbox" id="selectAll" />
                <label htmlFor="selectAll" />
              </span>
            </th>
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
          {CurrentList.map((value, index) => {
            let timeMovie = value.ngayKhoiChieu;
            let formatTime = new Date(timeMovie);
            let moTaPhim = value.moTa.slice(0, 32);
            let nameMovie = value.tenPhim.slice(0, 25);
            if (nameMovie.length >= 25) {
              nameMovie = nameMovie + "...";
            }
            if (moTaPhim.length >= 32) {
              moTaPhim = moTaPhim + "...";
            }
            return (
              <tr key={index} className="renderTable">
                <td>
                  <span className="custom-checkbox">
                    <input
                      type="checkbox"
                      id="checkbox1"
                      name="options[]"
                      defaultValue={1}
                    />
                    <label htmlFor="checkbox1" />
                  </span>
                </td>
                <td>{value.maPhim}</td>
                <td className="tenPhim">{nameMovie}</td>
                <td>
                  {" "}
                  <img
                    className="card-img-top"
                    style={{ width: "50px", height: "50px" }}
                    src={value.hinhAnh}
                    alt=""
                  />
                </td>
                <td className="moTa">{moTaPhim}</td>
                <td>{value.maNhom}</td>
                <td>
                  {" "}
                  <Time value={formatTime} format="DD/MM/YY" />
                </td>
                <td>
                  <a
                    href="#editEmployeeModal"
                    classname="edit"
                    data-toggle="modal"
                  >
                    <i class="fa fa-edit"></i>
                  </a>

                  <a
                    href="#deleteEmployeeModal"
                    className="delete"
                    data-toggle="modal"
                  >
                    <i class="fa fa-trash" aria-hidden="true"></i>
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <nav aria-label="Page navigation example">
        <ul class="pagination addMoviePagination">
          <li class="page-item">
            <a class="page-link" href="#">
              Previous
            </a>
          </li>
          {[...Array(totalPage)].map((x, i) => {
            return (
              <li class="page-item" key={i}>
                <a class="page-link" href="#" onClick={() => handlePage(i)}>
                  {i}
                </a>
              </li>
            );
          })}

          <li class="page-item">
            <a class="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
      <div id="editEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h4 className="modal-title">Sửa Phim</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  ×
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Mã Phim</label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="form-group">
                  <label>Tên phim</label>
                  <input type="email" className="form-control" required />
                </div>
                <div className="form-group">
                  <label>Trailer</label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="form-group">
                  <label>Hình Ảnh</label>
                  <input
                    type="file"
                    class="form-control-file"
                    id="exampleFormControlFile1"
                  />
                </div>
                <div className="form-group">
                  <label>Mô Tả</label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="form-group">
                  <label>Mã Nhóm</label>
                  <input type="text" className="form-control" required />
                </div>
              </div>
              <div className="modal-footer">
                <input
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                  defaultValue="Cancel"
                />
                <input
                  type="submit"
                  className="btn btn-info"
                  defaultValue="Save"
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div id="deleteEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h4 className="modal-title">Xoá Movie</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  ×
                </button>
              </div>
              <div className="modal-body">
                <p>Bạn có chắc muốn xóa Movie này không?</p>
                <p className="text-warning">
                  <small>Hành động này không thể hoàn tác.</small>
                </p>
              </div>
              <div className="modal-footer">
                <input
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                  defaultValue="Cancel"
                />
                <input
                  type="submit"
                  className="btn btn-danger"
                  defaultValue="Delete"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
