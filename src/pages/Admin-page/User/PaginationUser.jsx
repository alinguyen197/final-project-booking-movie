import React, { useEffect, useState } from "react";
// import Time from "react-time-format";
import { useSelector, useDispatch } from "react-redux";
import { GET_USER_LIST } from "../../../redux/const/userListConst";

// import { useSelector, useDispatch } from "react-redux";

export default function PaginationUser() {
  let [state, setState] = useState({
    currentUser: 1,
    itemPerUser: 5,
  });
  const dispatch = useDispatch();
  const { userList } = useSelector((state) => state.userListReducer);

  const totalUser = Math.floor(userList.length / state.itemPerUser);
  const CurrentUser = userList.slice(
    (state.currentUser - 1) * state.itemPerUser,
    state.itemPerUser * state.currentUser
  );
  const handleUser = (user) => {
    setState({
      ...state,
      currentUser: user,
    });

    console.log(state);
  };
  useEffect(() => {
    dispatch({ type: GET_USER_LIST });
  }, []);
  console.log("render");

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
            <th scope="col">Tài Khoản</th>
            <th scope="col">Họ tên</th>
            <th scope="col">Email</th>
            <th scope="col">Số điện thoại</th>
            <th scope="col">Mật Khẩu </th>
            <th scope="col" type>
              Mã Loại Người Dùng
            </th>
            <th scope="col">Thao tác</th>
          </tr>
        </thead>

        <tbody>
          {CurrentUser.map((value, index) => {
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
                <td>{value.taiKhoan}</td>
                <td>{value.hoTen}</td>

                <td>{value.email}</td>
                <td>{value.soDt}</td>
                <td>{value.matKhau}</td>
                <td>{value.maLoaiNguoiDung}</td>
                <td>
                  <a
                    href="#editEmployeeModal"
                    classname="edit"
                    data-toggle="modal"
                  >
                    <i class="fa fa-list" aria-hidden="true"></i>
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
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#">
              Previous
            </a>
          </li>
          {[...Array(totalUser)].map((x, i) => {
            return (
              <li class="page-item" key={i}>
                <a class="page-link" href="#" onClick={() => handleUser(i)}>
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
                <h4 className="modal-title">Sửa người dùng</h4>
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
                <h4 className="modal-title">Xoá người dùng</h4>
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
                <p>Bạn có chắc muốn xóa người dùng này không?</p>
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
