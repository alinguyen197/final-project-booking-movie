import React, { useState } from "react";
import swal from "sweetalert2";

export default function EditUser(props) {
  const { userEdit, handleUpdateUser } = props;

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

    setValues(newValues);

    let newErrors = { ...errors };

    if (value.trim() === "") {
      newErrors[name] = "Vui lòng nhập liệu !";
    } else {
      newErrors[name] = "";
    }
    if (name === "soDt") {
      const reg = /^[0-9]+$/;
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
    const data = {
      taiKhoan: document.getElementById("TaiKhoan").value,
      hoTen: document.getElementById("HoTen").value,
      email: document.getElementById("Email").value,
      soDt: document.getElementById("SoDt").value,
      matKhau: document.getElementById("MatKhau").value,
      maNhom: document.getElementById("MaNhom").value,
      maLoaiNguoiDung: document.getElementById("MaLoaiNguoiDung").value,
    };
    console.log(data);
    let isValid = true;
    let errContent = "";
    let corretContent = "";
    for (let key in data) {
      if (data[key] === "") {
        isValid = false;
      }
      corretContent = "Sửa người dùng thành công !";
    }
    for (let key in errors) {
      if (errors[key] !== "") {
        errContent += `<p>${key} không được để trống !</p>`;
        isValid = false;
      }
    }

    if (!isValid) {
      swal.fire({
        title: "Error !",
        html: errContent,
        icon: "error", // error,warning,question
        confirmButtonText: "YES",
      });
      return;
    }

    handleUpdateUser(data);
    swal.fire({
      title: "Success !",
      html: corretContent,
      icon: "success", // error,warning,question
      confirmButtonText: "YES",
    });
    document.getElementById("closeModalEditUser").click();
  };
  return (
    <div id="editEmployeeModalUser" className="modal fade">
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={handleSubmitUser}>
            <div className="modal-header">
              <h4 className="modal-title">Sửa Người Dùng</h4>
              <button
                id="closeModalEditUser"
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
                  disabled
                  id="TaiKhoan"
                  type="text"
                  className="form-control"
                  name="taiKhoan"
                  defaultValue={userEdit.taiKhoan}
                  onChange={handleChangeUser}
                />
                <span className="text-danger">{errors.taiKhoan}</span>
              </div>
              <div className="form-group">
                <label>Họ tên</label>
                <input
                  id="HoTen"
                  type="text"
                  className="form-control"
                  name="hoTen"
                  defaultValue={userEdit.hoTen}
                  onChange={handleChangeUser}
                />
                <span className="text-danger">{errors.hoTen}</span>
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  id="Email"
                  type="text"
                  className="form-control"
                  name="email"
                  onChange={handleChangeUser}
                  defaultValue={userEdit.email}
                />
                <span className="text-danger">{errors.email}</span>
              </div>
              <div className="form-group">
                <label>Số điện thoại</label>
                <input
                  id="SoDt"
                  type="number"
                  className="form-control"
                  name="soDt"
                  onChange={handleChangeUser}
                  defaultValue={userEdit.soDt}
                />
                <span className="text-danger">{errors.soDt}</span>
              </div>

              <div className="form-group">
                <label>Mật khẩu</label>
                <input
                  id="MatKhau"
                  type="text"
                  className="form-control"
                  name="matKhau"
                  onChange={handleChangeUser}
                  defaultValue={userEdit.matKhau}
                ></input>

                <span className="text-danger">{errors.matKhau}</span>
              </div>
              <div className="form-group">
                <label>Mã Nhóm</label>
                <input
                  type="text"
                  id="MaNhom"
                  className="form-control"
                  name="maNhom"
                  onChange={handleChangeUser}
                  defaultValue={userEdit.maNhom}
                ></input>

                <span className="text-danger">{errors.maNhom}</span>
              </div>

              <div className="form-group">
                <label>Mã loại người dùng</label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  id="MaLoaiNguoiDung"
                  className="form-control"
                  name="maLoaiNguoiDung"
                  onChange={handleChangeUser}
                  defaultValue={userEdit.maLoaiNguoiDung}
                >
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
                UPDATE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
