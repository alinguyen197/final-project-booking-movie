import React from "react";
import PaginationDashboard from "./PaginationDashboard";

export default function Dashboard() {
  return (
    <div>
      <button
        className="btn btn-primary
   "
      >
        {"{"}" "{"}"}
        Thêm Phim
      </button>
      <div classname="search">
        <label htmlfor>
          <input
            type="text"
            placeholder="Nhập vào tài khoản hoặc họ tên người dùng"
          />
          <i className="fa fa-search" aria-hidden="true" />
          <button className="btn btn-secondary">Tìm </button>
        </label>
      </div>

      <PaginationDashboard />
    </div>
  );
}
