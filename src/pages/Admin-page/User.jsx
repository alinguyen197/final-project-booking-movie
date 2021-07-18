import React from "react";
import PaginationUser from "./PaginationUser";

export default function Dashboard() {
  return (
    <div>
      <div className="table-wrapper">
        <div className="table-title">
          <div className="row">
            <div className="col-sm-6">
              <h2>
                QUẢN LÝ <b>NGƯỜI DÙNG</b>
              </h2>
            </div>
            <div className="col-sm-6">
              <a
                href="#addEmployeeModal"
                className="btn btn-success"
                data-toggle="modal"
              >
                <i class="fa fa-plus-circle" aria-hidden="true"></i>
                <span>THÊM MỚI</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <PaginationUser />
      <div id="addEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h4 className="modal-title">Thêm người dùng</h4>
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
                  <label>Tài Khoản</label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="form-group">
                  <label>Họ tên</label>
                  <input type="email" className="form-control" required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="form-group">
                  <label>Số điện thoại</label>
                  <input type="number" className="form-control" required />
                </div>
                <div className="form-group">
                  <label>Mật Khẩu</label>
                  <input type="password" className="form-control" required />
                </div>
                <div className="form-group">
                  <label> Mã Loại Người Dùng</label>
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
                  className="btn btn-success"
                  defaultValue="Add"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
