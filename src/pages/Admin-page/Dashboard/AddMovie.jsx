// import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
class AddMovie extends Component {
  state = {
    maPhim: "",
    tenPhim: "",
    trailer: "",
    hinhAnh: {},
    moTa: "",
    maNhom: "",
    ngayKhoiChieu: "",
  };

  handleChange = (e) => {
    let tagInput = e.target;
    let { name, value } = tagInput;
    this.setState(
      {
        [name]: value,
      },
      () => {
        console.log(this.state);
      }
    );
  };
  // handleChange = (e) => {
  //   let target = e.target;
  //   if (target.name === "hinhAnh") {
  //     this.setState({ hinhAnh: e.target.files[0] }, () => {
  //       console.log(this.state);
  //     });
  //   } else {
  //     this.setState({ [e.target.name]: e.target.value }, () => {
  //       console.log(this.state);
  //     });
  //   }
  // };
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   let form_data = new FormData();
  //   for (let key in this.state) {
  //     console.log(key, this.state[key]);
  //   }
  //   e.preventDefault();
  //   axios({
  //     url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh",
  //     method: "POST",
  //     data: form_data,
  //   })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  render() {
    return (
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
                  <input
                    type="text"
                    className="form-control"
                    name="maPhim"
                    value={this.state.maPhim}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Tên phim</label>
                  <input
                    type="email"
                    className="form-control"
                    name="tenPhim"
                    value={this.state.tenPhim}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Trailer</label>
                  <input
                    type="text"
                    className="form-control"
                    name="hinhAnh"
                    value={this.state.trailer}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Hình Ảnh</label>
                  <input
                    type="file"
                    class="form-control-file"
                    id="exampleFormControlFile1"
                    name="hinhAnh"
                    value={this.state.hinhAnh}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Mô Tả</label>
                  <input
                    type="text"
                    className="form-control"
                    name="moTa"
                    value={this.state.moTa}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Mã Nhóm</label>
                  <input
                    type="text"
                    className="form-control"
                    name="maNhom"
                    value={this.state.maNhom}
                    onChange={this.handleChange}
                  />
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
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    themMovie: (movie) => {
      const action = {
        type: "THEM_MOVIE",
        movie,
      };
      dispatch(action);
    },
  };
};
export default connect(null, mapDispatchToProps)(AddMovie);
