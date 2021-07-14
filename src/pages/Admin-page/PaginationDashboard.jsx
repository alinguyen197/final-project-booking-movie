import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { GET_MOVIE_LIST } from "../../redux/const/movieListConst";

// import { useSelector, useDispatch } from "react-redux";
// import { GET_MOVIE_LIST } from "../../redux/const/movieListConst";

export default function PaginationDashboard() {
  let [state, setState] = useState({
    currentPage: 1,
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

    console.log(state);
  };
  useEffect(() => {
    dispatch({ type: GET_MOVIE_LIST });
  }, []);
  console.log("render");
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#">
              Previous
            </a>
          </li>
          {[...Array(totalPage)].map((x, i) => (
            <li class="page-item" key={i}>
              <a class="page-link" href="#" onClick={() => handlePage(i)}>
                {i}
              </a>
            </li>
          ))}

          <li class="page-item">
            <a class="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Mã Phim</th>
            <th scope="col">Tên Phim</th>
            <th scope="col">Hinh Ảnh</th>
            <th scope="col">Mô Tả</th>
            <th scope="col">Mã Nhóm</th>
            <th scope="col" type>
              Ngày khỏi chiếu
            </th>
          </tr>
        </thead>

        <tbody>
          {CurrentList.map((value, index) => {
            return (
              <tr key={index}>
                <th scope="row">{value.maPhim}</th>
                <td>{value.tenPhim}</td>
                <td>
                  {" "}
                  <img
                    className="card-img-top"
                    style={{ width: "50px", height: "50px" }}
                    src={value.hinhAnh}
                    alt=""
                  />
                </td>
                <td>{value.moTa}</td>
                <td>{value.maNhom}</td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
