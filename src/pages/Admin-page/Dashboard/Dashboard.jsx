import React from "react";
import PaginationDashboard from "./PaginationDashboard";
export default function Dashboard() {
  return (
    <div className="contentAdmin">
      <div className="search">
        <label>
          <input type="text" placeholder="Nhập vào mã phim hoặc tên phim" />
          <i className="fa fa-search" aria-hidden="true"></i>
        </label>
      </div>
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

      <PaginationDashboard />
    </div>
  );
}
