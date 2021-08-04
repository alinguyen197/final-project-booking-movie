import React, { useState } from "react";
import swal from "sweetalert2";

export default function AddUser(props) {
  const { addUserPagination } = props;

  let [values, setValues] = useState({
    taiKhoan: "",
    hoTen: "",
    email: "",
    soDt: "",
    matKhau: "",
    maNhom: "",
    maLoaiNguoiDung: "",
  });
  let [errors, setErrors] = useState({
    taiKhoan: "",
    hoTen: "",
    email: "",
    soDt: "",
    matKhau: "",
    maNhom: "",
    maLoaiNguoiDung: "",
  });

  const handleChangeUser = (event) => {
    let { name, value } = event.target;
    let newValues = { ...values };

    if (name === "taiKhoan") {
      newValues.taiKhoan = value;
    }
    newValues[name] = value;

    setValues(newValues);
    let newErrors = { ...errors };

    if (value.trim() === "") {
      newErrors[name] = "Vui lòng nhập liệu !";
    } else {
      newErrors[name] = "";
    }
    if (name === "soDt") {
      const reg =
        /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;
      if (!reg.test(value)) {
        newErrors[name] = "Số điện thoại không hợp lệ";
      } else {
        newErrors[name] = "";
      }
    }
    if (name === "email") {
      const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regex.test(value)) {
        newErrors[name] = "Định dạng email ko phù hợp";
      } else {
        newErrors[name] = "";
      }
    }
    if (name === "matKhau") {
      const regex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!regex.test(value)) {
        newErrors[name] =
          "Mật khẩu tối thiểu tám ký tự, ít nhất một ký tự hoa, một ký tự viết thường, một số và một ký tự đặc biệt:";
      } else {
        newErrors[name] = "";
      }
    }

    setErrors(newErrors);
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();
    let isValid = true;
    let err = "";
    let correct = "";
    for (var key1 in values) {
      if (values[key1] === "") {
        err += `<p>${key1} không hợp lệ  !</p>`;
        isValid = false;
      }
      correct = "Thêm người dùng thành công ";
    }
    for (var key in errors) {
      if (errors[key] !== "") {
        err += `<p>${key} không hợp lệ  !</p>`;
        isValid = false;
      }
    }

    if (!isValid) {
      swal.fire({
        title: "Error !",
        html: err,
        icon: "error", // error,warning,question
        confirmButtonText: "YES",
      });
      return;
    }

    addUserPagination(values);

    // alert("Diễu liệu hợp lệ");
    swal.fire({
      title: "Success !",
      html: correct,
      icon: "success", // error,warning,question
      confirmButtonText: "YES",
    });
  };

  return (
    <div id="addEmployeeModalUser" className="modal fade">
      <div className="modal-dialog">
        <div className="modal-content">
          <form id="addform" onSubmit={handleSubmitUser}>
            <div className="modal-header">
              <h4 className="modal-title">Thêm Người Dùng</h4>
              <button
                id="closeModalAdd"
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
                <label>Tài khoản</label>
                <input
                  type="text"
                  className="form-control"
                  name="taiKhoan"
                  value={values.taiKhoan}
                  onChange={handleChangeUser}
                />
                <span className="text-danger">{errors.taiKhoan}</span>
              </div>
              <div className="form-group">
                <label>Họ tên</label>
                <input
                  type="text"
                  className="form-control"
                  name="hoTen"
                  value={values.hoTen}
                  onChange={handleChangeUser}
                />
                <span className="text-danger">{errors.hoTen}</span>
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  value={values.email}
                  onChange={handleChangeUser}
                />
                <span className="text-danger">{errors.email}</span>
              </div>
              <div className="form-group">
                <label>Số điện thoại</label>
                <input
                  type="number"
                  className="form-control"
                  name="soDt"
                  onChange={handleChangeUser}
                  value={values.soDt}
                />
                <span className="text-danger">{errors.soDt}</span>
              </div>

              <div className="form-group">
                <label>Mật khẩu</label>
                <input
                  type="password"
                  className="form-control"
                  name="matKhau"
                  onChange={handleChangeUser}
                  value={values.matKhau}
                ></input>

                <span className="text-danger">{errors.matKhau}</span>
              </div>

              <div className="form-group">
                <label>Mã Nhóm</label>
                <input
                  type="text"
                  className="form-control"
                  name="maNhom"
                  onChange={handleChangeUser}
                  value={values.maNhom}
                ></input>

                <span className="text-danger">{errors.maNhom}</span>
              </div>
              <div className="form-group">
                <label>Mã loại người dùng</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="maLoaiNguoiDung"
                  onChange={handleChangeUser}
                >
                  <option value>Chọn mã loại người dùng</option>
                  <option value="KhachHang">Khách hàng</option>
                  <option value="QuanTri">Quản trị</option>
                </select>
                <span className="text-danger">{errors.maLoaiNguoiDung}</span>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
              >
                CANCEL
              </button>

              <button
                type="submit"
                className="btn btn-success"
                onSubmit={handleSubmitUser}
              >
                ADD
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
