import React from "react";
import Time from "react-time-format";

export default function RenderTable(props) {
  const { items } = props.movie;
  console.log(props.movie.items);
  return (
    <tbody>
      {items?.map((value, index) => {
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
              {value.moTa.length > 40 ? value.moTa.slice(0, 40) + "..." : ""}
            </td>
            <td>{value.maNhom}</td>
            <td>
              <Time value={value.ngayKhoiChieu} format="DD/MM/YY" />
            </td>
            <td>
              <a href="#editEmployeeModal" classname="edit" data-toggle="modal">
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
    </tbody>
  );
}
