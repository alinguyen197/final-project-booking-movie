import React from "react";
import PaginationDashboard from "./PaginationDashboard";

export default function Dashboard() {
  return (
    <div>
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
                <i class="fa fa-plus-circle" aria-hidden="true"></i>
                <span>THÊM MỚI</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <PaginationDashboard />
      <div id="addEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h4 className="modal-title">Thêm Phim</h4>
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
