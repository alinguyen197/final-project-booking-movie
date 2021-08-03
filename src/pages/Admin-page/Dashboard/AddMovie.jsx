import React, { useState } from "react";
import swal from "sweetalert2";

export default function AddMovie(props) {
  const { addMoviePagination } = props;

  let [values, setValues] = useState({
    maPhim: "",
    tenPhim: "",
    biDanh: "",
    trailer: "",
    hinhAnh: {},
    moTa: "",
    maNhom: "GP01",
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
    let { name, value } = event.target;
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
      const regex = /^(0?[1-9]|[12][0-9]|3[01])(0?[1-9]|1[012])\d{4}$/;
      if (!regex.test(value)) {
        newErrors[name] = "Định dạng phải là dd/MM/yyyy";
      } else {
        newErrors[name] = "";
      }
    }
    if (name === "hinhAnh ") {
      if (newValues.hinhAnh === {}) {
        newErrors[name] = "Vui lòng chọn hình ảnh !!";
      } else {
        newErrors[name] = "";
      }
    }

    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    let err = "";
    let correct = "";
    for (var key1 in values) {
      if (values[key1] === "") {
        err += `<p>${key1} không hợp lệ  !</p>`;
        isValid = false;
      }
      correct = "Đăng nhập thành công ";
    }
    for (var key2 in errors) {
      if (errors[key2] !== "") {
        err += `<p>${key2} không hợp lệ  !</p>`;
        isValid = false;
      }
    }

    if (!isValid) {
      // alert("Dữ liệu chưa hợp lệ");
      swal.fire({
        title: "Error !",
        html: err,
        icon: "error", // error,warning,question
        confirmButtonText: "YES",
      });
      return;
    }
    //form_data ko consoke.log đc , muốn coi phải .get("tenPhim")
    const form_data = new FormData();
    for (var key in values) {
      form_data.append(key, values[key]);
    }

    addMoviePagination(form_data);

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
      if (key === "hinhAnh") {
        resetValues[key] = {};
      }
      // vì GP01 nó set mặc định nên loại nó ra
      if (key !== "maNhom") {
        resetValues[key] = "";
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
          <form id="addform" onSubmit={handleSubmit}>
            <div className="modal-header">
              <h4 className="modal-title">Thêm Phim</h4>
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
                <label>Mã Phim</label>
                <input
                  type="text"
                  className="form-control"
                  name="maPhim"
                  value={values.maPhim}
                  onChange={handleChange}
                />
                <span className="text-danger">{errors.maPhim}</span>
              </div>
              <div className="form-group">
                <label>Tên phim</label>
                <input
                  type="text"
                  className="form-control"
                  name="tenPhim"
                  value={values.tenPhim}
                  onChange={handleChange}
                />
                <span className="text-danger">{errors.tenPhim}</span>
              </div>
              <div className="form-group">
                <label>Bí Danh</label>
                <input
                  type="text"
                  className="form-control"
                  name="biDanh"
                  onChange={handleChange}
                  value={values.biDanh}
                />
                <span className="text-danger">{errors.biDanh}</span>
              </div>
              <div className="form-group">
                <label>Trailer</label>
                <input
                  type="text"
                  className="form-control"
                  name="trailer"
                  onChange={handleChange}
                  value={values.trailer}
                />
                <span className="text-danger">{errors.trailer}</span>
              </div>
              <div className="form-group">
                <label>Hình Ảnh</label>
                <input
                  type="file"
                  className="form-control-file"
                  name="hinhAnh"
                  required
                  onChange={handleChange}
                />
                <span className="text-danger">{errors.hinhAnh}</span>
              </div>
              <div className="form-group">
                <label>Mô Tả</label>
                <textarea
                  name="moTa"
                  rows="4"
                  cols="50"
                  className="form-control"
                  onChange={handleChange}
                  value={values.moTa}
                ></textarea>

                <span className="text-danger">{errors.moTa}</span>
              </div>
              <div className="form-group">
                <label>Mã Nhóm</label>
                <input
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
                  type="text"
                  placeholder="dd/MM/yyyy"
                  className="form-control"
                  name="ngayKhoiChieu"
                  value={values.ngayKhoiChieu}
                  onChange={handleChange}
                />
                <span className="text-danger">{errors.ngayKhoiChieu}</span>
              </div>
              <div className="form-group">
                <label>Đánh Giá (1-10)</label>
                <input
                  type="text"
                  className="form-control"
                  name="danhGia"
                  value={values.danhGia}
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
                ADD
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
