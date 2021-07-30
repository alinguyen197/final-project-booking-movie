import React, { Component } from "react";
import swal from "sweetalert2";
import { connect } from "react-redux";
import { CHANGE_PASSWORD_USER } from "../../redux/const/historyUserProfileConst";
class UpdateUserProfile extends Component {
  state = {
    oldPass: "",
    newPass: "",
    confirmPass: "",
    err: "",
  };
  handleChange = (e) => {
    let { name, value } = e.target;

    const newState = { ...this.state, [name]: value };

    if (name === "confirmPass") {
      if (value === newState["newPass"]) {
        newState["err"] = "";
      } else {
        newState["err"] = "Mật khẩu không khớp";
      }
    }
    this.setState(newState);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { UserProfile } = this.props;
    let htmlErr = "";
    let isValid = true;
    if (this.state.confirmPass === "" || this.state.err !== "") {
      htmlErr = "Vui lòng nhập khẩu mới !!!";
      isValid = false;
    }
    if (isValid == false) {
      swal.fire({
        icon: "error",
        html: htmlErr,
      });
      return;
    }
    const loaiNguoiDung = JSON.parse(localStorage.getItem("maLoaiNguoiDung"));
    const user = {
      taiKhoan: UserProfile.taiKhoan,
      matKhau: this.state.confirmPass,
      hoTen: UserProfile.hoTen,
      email: UserProfile.email,
      soDT: UserProfile.soDT,
      maNhom: UserProfile.maNhom,
      maLoaiNguoiDung: loaiNguoiDung,
    };

    this.props.dispatch({
      type: CHANGE_PASSWORD_USER,
      payload: user,
    });
    document.getElementById("changepass").reset();
    swal.fire({
      icon: "success",
      html: "Đổi mật khẩu thành công !",
    });
  };
  render() {
    return (
      <div>
        <h3>Đổi mật khẩu</h3>
        <form id="changepass" onSubmit={this.handleSubmit} action="">
          <div className="form-group ">
            <label>Mật khẩu mới :</label>
            <input
              type="password"
              name="newPass"
              className="form-control  "
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group  ">
            <label>Nhập lại mật khẩu:</label>
            <input
              type="password"
              name="confirmPass"
              className="form-control "
              onChange={this.handleChange}
            />
            <span className="text-danger">{this.state.err}</span>
          </div>
          <button
            type="submit"
            style={{
              padding: "5px 15px",
              outline: "none",
              backgroundColor: "#6666",
              borderRadius: 8,
              border: "none",
              color: "white",
            }}
            onClick={this.handleSubmit}
          >
            Xác nhận
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {};

export default connect(mapStateToProps, null)(UpdateUserProfile);
