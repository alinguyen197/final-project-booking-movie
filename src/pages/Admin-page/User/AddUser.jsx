import React, { useState } from "react";
import swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";

export default function AddUser(props) {
  const { addUserPagination } = props;
  const dispatch = useDispatch();
  let [values, setValues] = useState({
    taiKhoan: "",
    hoTen: "",
    email: "",
    soDt: "",

    matKhau: "",
    maLoaiNguoiDung: "",
  });
  let [errors, setErrors] = useState({
    taiKhoan: "",
    hoTen: "",
    email: "",
    soDt: "",

    matKhau: "",
    maLoaiNguoiDung: "",
  });

  const handleChangeUser = (event) => {
    let { name, value, type } = event.target;
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
      const reg = /^([1-9]|10)$/;
      if (!reg.test(value)) {
        newErrors[name] = "Định dạng không phù hợp";
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
    for (var key in values) {
      if (values[key] === "") {
        err += `<p>${key} không hợp lệ  !</p>`;
        isValid = false;
      }
      correct = "Đăng nhập thành công ";
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
    let form_data = new FormData();

    for (var key in values) {
      form_data.append(key, values[key]);
    }
    addUserPagination(form_data);

    // alert("Diễu liệu hợp lệ");
    swal.fire({
      title: "Success !",
      html: correct,
      icon: "success", // error,warning,question
      confirmButtonText: "YES",
    });

    // Reset form vì lúc này form ko phải nhập tay mà từ state nên phải cho cái object này về trỗng
    const resetValues = { ...values };
    for (let key in resetValues) {
      if (key === "matKhau") {
        resetValues[key] = {};
      }
    }

    setValues(resetValues);
    document.getElementById("closeModalAdd").click();
    document.getElementById("addform").reset(); // reset hình ảnh
  };

  return (
    <div id="addEmployeeModal" className="modal fade">
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={handleSubmitUser}>
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
                <textarea
                  type="password"
                  className="form-control"
                  name="matKhau"
                  onChange={handleChangeUser}
                  value={values.matKhau}
                ></textarea>

                <span className="text-danger">{errors.matKhau}</span>
              </div>

              <div className="form-group">
                <label>Mã loại người dùng</label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  className="form-control"
                  name="maLoaiNguoiDung"
                  onChange={handleChangeUser}
                  value={values.maLoaiNguoiDung}
                >
                  <option selected>Vui lòng chọn mã loại người dùng</option>
                  <option value="1">Khách hàng</option>
                  <option value="2">Quản trị</option>
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
