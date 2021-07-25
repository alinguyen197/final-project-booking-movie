import React, { useState, useEffect } from "react";
import swal from "sweetalert2";

export default function EditMovie(props) {
  const { movieEdit, handleUpdateFilm } = props;
  let [values, setValues] = useState({
    maPhim: "",
    tenPhim: "",
    biDanh: "",
    trailer: "",
    hinhAnh: {},
    moTa: "",
    maNhom: "",
    ngayKhoiChieu: "",
    danhGia: "",
  });
  let [errors, setErrors] = useState({
    maPhim: "",
    tenPhim: "",
    biDanh: "",
    trailer: "",
    hinhAnh: "",
    moTa: "",
    maNhom: "",
    ngayKhoiChieu: "",
    danhGia: "",
  });

  const handleChange = (event) => {
    let { name, value, type } = event.target;
    let newValues = { ...values };
    if (name === "hinhAnh") {
      newValues[name] = event.target.files[0];
    } else {
      if (name === "tenPhim") {
        newValues.biDanh = value;
      }
      newValues[name] = value;
    }
    setValues(newValues);

    let newErrors = { ...errors };

    if (value.trim() === "") {
      newErrors[name] = "Vui lòng nhập liệu !";
    } else {
      newErrors[name] = "";
    }
    if (name === "danhGia") {
      const reg = /^([1-9]|10)$/;
      if (!reg.test(value)) {
        newErrors[name] = "Đánh giá phải nhập số";
      } else {
        newErrors[name] = "";
      }
    }
    if (name === "ngayKhoiChieu") {
      const regex =
        /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
      if (!regex.test(value)) {
        newErrors[name] = "Định dạng phải là dd/MM/yyyy";
      } else {
        newErrors[name] = "";
      }
    }
    if (name === "hinhAnh ") {
      if (newValues.hinhAnh == {}) {
        newErrors[name] = "Vui lòng chọn hình ảnh !!";
      } else {
        newErrors[name] = "";
      }
    }

    setErrors(newErrors);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      maPhim: document.getElementById("idMaPhim").value,
      tenPhim: document.getElementById("idTenPhim").value,
      biDanh: document.getElementById("idBiDanh").value,
      trailer: document.getElementById("idTrailer").value,
      hinhAnh: document.getElementById("idHinhAnh").files[0],
      moTa: document.getElementById("idMoTa").value,
      maNhom: document.getElementById("idMaNhom").value,
      ngayKhoiChieu: document.getElementById("idNgayKhoiChieu").value,
      danhGia: document.getElementById("idDanhGia").value,
    };
    console.log(data);
    let isValid = true;
    let errContent = "";
    let corretContent = "";
    for (let key in data) {
      if (data[key] == "") {
        isValid = false;
      }
      corretContent = "Đăng nhập thành công !";
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
    let form_data = new FormData();

    for (let key in data) {
      form_data.append(key, data[key]);
    }
    handleUpdateFilm(form_data);
    document.getElementById("closeModalEdit").click();
    swal.fire({
      title: "Success !",
      html: corretContent,
      icon: "success", // error,warning,question
      confirmButtonText: "YES",
    });
  };
  return (
    <div id="editEmployeeModal" className="modal fade">
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h4 className="modal-title">Sửa Phim</h4>
              <button
                id="closeModalEdit"
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
                <input
                  id="idMaPhim"
                  type="text"
                  className="form-control"
                  name="maPhim"
                  defaultValue={movieEdit.maPhim}
                  onChange={handleChange}
                />
                <span className="text-danger">{errors.maPhim}</span>
              </div>
              <div className="form-group">
                <label>Tên phim</label>
                <input
                  id="idTenPhim"
                  type="text"
                  className="form-control"
                  name="tenPhim"
                  defaultValue={movieEdit.tenPhim}
                  onChange={handleChange}
                />
                <span className="text-danger">{errors.tenPhim}</span>
              </div>
              <div className="form-group">
                <label>Bí Danh</label>
                <input
                  id="idBiDanh"
                  type="text"
                  className="form-control"
                  name="biDanh"
                  onChange={handleChange}
                  defaultValue={movieEdit.biDanh}
                />
                <span className="text-danger">{errors.biDanh}</span>
              </div>
              <div className="form-group">
                <label>Trailer</label>
                <input
                  id="idTrailer"
                  type="text"
                  className="form-control"
                  name="trailer"
                  onChange={handleChange}
                  defaultValue={movieEdit.trailer}
                />
                <span className="text-danger">{errors.trailer}</span>
              </div>
              <div className="form-group">
                <label>Hình Ảnh</label>
                <input
                  id="idHinhAnh"
                  type="file"
                  class="form-control-file"
                  name="hinhAnh"
                  required
                  onChange={handleChange}
                />
                <span className="text-danger">{errors.hinhAnh}</span>
              </div>
              <div className="form-group">
                <label>Mô Tả</label>
                <textarea
                  id="idMoTa"
                  name="moTa"
                  rows="4"
                  cols="50"
                  className="form-control"
                  name="moTa"
                  onChange={handleChange}
                  defaultValue={movieEdit.moTa}
                ></textarea>

                <span className="text-danger">{errors.moTa}</span>
              </div>
              <div className="form-group">
                <label>Mã Nhóm</label>
                <input
                  id="idMaNhom"
                  type="text"
                  className="form-control"
                  name="maNhom"
                  value="GP01"
                  onChange={handleChange}
                />
                <span className="text-danger">{errors.maNhom}</span>
              </div>

              <div className="form-group">
                <label>Ngày Khởi Chiếu</label>
                <input
                  id="idNgayKhoiChieu"
                  type="text"
                  placeholder="dd/MM/yyyy"
                  className="form-control"
                  name="ngayKhoiChieu"
                  defaultValue={movieEdit.ngayKhoiChieu}
                  onChange={handleChange}
                />
                <span className="text-danger">{errors.ngayKhoiChieu}</span>
              </div>
              <div className="form-group">
                <label>Đánh Giá (1-10)</label>
                <input
                  id="idDanhGia"
                  type="text"
                  className="form-control"
                  name="danhGia"
                  defaultValue={movieEdit.danhGia}
                  onChange={handleChange}
                />
                <span className="text-danger">{errors.danhGia}</span>
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
                onSubmit={handleSubmit}
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
