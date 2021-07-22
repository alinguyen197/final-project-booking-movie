import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GET_MOVIE_LIST } from "../../../redux/const/movieListConst";
import axios from "axios";
import Pagination from "./ButtonPagination";
import RenderTable from "./RenderTable";
import { retry } from "redux-saga/effects";
import queryString from "query-string";
import { DOMAIN } from "../../../util/const/settingSystem";
export default function PaginationDashboard(props) {
  const [movie, setMovie] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    count: 10,
    totalPages: 8,
    totalCount: 1,
  });
  const [filter, setFilter] = useState({
    soTrang: 1,
    soPhanTuTrenTrang: 10,
  });

  const handlePageChange = (newPage) => {
    console.log("newPage: ", newPage);
    setFilter({
      ...filter,
      soTrang: newPage,
    });
  };
  useEffect(() => {
    const getListMoviePagination = async () => {
      //  soTrang=1&soPhanTuTrenTrang=10
      const paramsString = queryString.stringify(filter);
      let { data } = await axios({
        url: `${DOMAIN}/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&${paramsString}`,
        method: "GET",
      });
      console.log(data);
      setMovie(data);
      setPagination(data);
    };
    //khai báo biến bất đồng bộ async await sẽ trả về data không cần .then() .catch nữa
    getListMoviePagination();
  }, [filter]);

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
        {/* tbody */}
        <RenderTable movie={movie} />
      </table>
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  );
}
