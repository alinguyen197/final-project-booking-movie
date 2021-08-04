import React, { Component } from "react";
import logo from "../../assets/img/logo-sign-in.png";
import { connect } from "react-redux";

import { Link, withRouter } from "react-router-dom";
import { GET_USER_REGISTER } from "../../redux/const/userRegisterConst";

class SignUp extends Component {
  state = {
    values: {
      taiKhoan: "",
      hoTen: "",
      email: "",
      soDt: "",
      maNhom: "",
      maLoaiNguoiDung: "KhachHang",
      matKhau: "",
    },
    errors: {
      taiKhoan: "",
      hoTen: "",
      email: "",
      soDt: "",
      maNhom: "",
      maLoaiNguoiDung: "",
      matKhau: "",
    },
    valid: false,
  };

  handelChangeSignUp = (e) => {
    let { value, name } = e.target;
    let errMessage = "";

    // validation onChange trước khi cập nhật giá trị
    if (value.trim() === "") {
      errMessage = " Vui lòng nhập dữ liệu !!!";
    } else {
      errMessage = "";
    }
    if (name === "soDt") {
      const reg =
        /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;
      if (!reg.test(value)) {
        errMessage = "Số điện thoại không hợp lệ";
      } else {
        errMessage = "";
      }
    }
    if (name === "email") {
      const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regex.test(value)) {
        errMessage = "Định dạng email ko phù hợp";
      } else {
        errMessage = "";
      }
    }
    if (name === "matKhau") {
      const regex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!regex.test(value)) {
        errMessage =
          "Mật khẩu tối thiểu tám ký tự, ít nhất một ký tự hoa, một ký tự viết thường, một số và một ký tự đặc biệt:";
      } else {
        errMessage = "";
      }
    }

    // cập nhật giá trị
    let newValue = { ...this.state.values, [name]: value };
    let newErr = { ...this.state.errors, [name]: errMessage };

    this.setState(
      {
        ...this.state.valid,
        values: newValue,
        errors: newErr,
      },
      () => {
        this.checkValid();
      }
    );
  };
  checkValid = () => {
    let valid = true;
    for (let key in this.state.errors) {
      if (this.state.errors[key] !== "" || this.state.values[key] === "") {
        valid = false;
      }
    }
    this.setState({
      ...this.state,
      valid: valid,
    });
  };

  submitSignUp = (event) => {
    event.preventDefault();
    console.log("submit", this.state.values);
    this.props.userRegister(this.state.values, this.props.history);
  };

  render() {
    return (
      <div className="card bg-light">
        <div style={{ height: 60 }}></div>
        <div className="sign-up-inner">
          <div className="sign-up-from">
            <img src={logo} alt="" />
            <article className="card-body mx-auto" style={{ maxWidth: 400 }}>
              <p className="text-center ">Get started with your free account</p>

              <form onSubmit={this.submitSignUp}>
                <div className="form-group ">
                  <span className="icon_register">
                    <i className="fa fa-user-circle" aria-hidden="true"></i>
                  </span>

                  <input
                    type="text"
                    name="taiKhoan"
                    className="form-control input_fix"
                    id="IdTaiKhoan"
                    aria-describedby="taiKhoanHelp"
                    placeholder="Vui lòng nhập tài khoản"
                    value={this.state.values.taiKhoan}
                    onChange={this.handelChangeSignUp}
                  />
                  <span className="text-danger mt-2">
                    {this.state.errors.taiKhoan}
                  </span>
                </div>
                <div className="form-group ">
                  <span className="icon_register">
                    <i className="fa fa-user" />
                  </span>

                  <input
                    type="text"
                    name="hoTen"
                    className="form-control input_fix"
                    id="IdHoTen"
                    aria-describedby="hoTenHelp"
                    placeholder="Vui lòng nhập họ tên"
                    value={this.state.values.hoTen}
                    onChange={this.handelChangeSignUp}
                  />
                  <span className="text-danger mt-2">
                    {this.state.errors.hoTen}
                  </span>
                </div>
                <div className="form-group ">
                  <span className="icon_register">
                    <i className="fa fa-envelope" />
                  </span>

                  <input
                    className="form-control input_fix"
                    type="email"
                    name="email"
                    id="IdEmail"
                    aria-describedby="emailHelp"
                    placeholder="Vui lòng nhập Email"
                    value={this.state.values.email}
                    onChange={this.handelChangeSignUp}
                  />
                  <span className="text-danger mt-2">
                    {this.state.errors.email}
                  </span>
                </div>
                <div className="form-group ">
                  <span className="icon_register">
                    <i className="fa fa-phone" />
                  </span>

                  <input
                    className="form-control input_fix"
                    type="number"
                    name="soDt"
                    id="IdSoDt"
                    placeholder="Vui lòng nhập số điện thoại"
                    value={this.state.values.soDt}
                    onChange={this.handelChangeSignUp}
                  />
                  <span className="text-danger mt-2">
                    {this.state.errors.soDt}
                  </span>
                </div>
                <div className="form-group ">
                  <span className="icon_register">
                    <i class="fa fa-users" aria-hidden="true"></i>
                  </span>

                  <input
                    type="text"
                    name="maNhom"
                    className="form-control input_fix"
                    id="IdMaNhom"
                    placeholder="Vui lòng nhập mã Nhóm"
                    value={this.state.values.maNhom}
                    onChange={this.handelChangeSignUp}
                  />
                  <span className="text-danger mt-2">
                    {this.state.errors.maNhom}
                  </span>
                </div>

                <div className="form-group ">
                  <span className="icon_register">
                    <i className="fa fa-lock" />
                  </span>

                  <input
                    type="text"
                    name="matKhau"
                    className="form-control input_fix"
                    id="IdMatKhau"
                    placeholder="Vui lòng nhập mật khẩu"
                    value={this.state.values.matKhau}
                    onChange={this.handelChangeSignUp}
                  />
                  <span className="text-danger mt-2">
                    {this.state.errors.matKhau}
                  </span>
                </div>
                {/* <div className="form-group ">
                
                    <span className="icon_register">
                      <i className="fa fa-lock" />
                    </span>
             
                  <input
                    type="text"
                    name="matKhau"
                    className="form-control input_fix"
                    id="exampleInputPassword1"
                    placeholder="Vui lòng nhập lại mật khẩu"
                    value={this.state.values.matKhau}
                    onChange={this.handelChangeSignUp}
                  />
                  <span className="text-danger mt-2">
                    {this.state.errors.matKhau}
                  </span>
                </div> */}
                <div className="form-group ">
                  {this.state.valid ? (
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={this.submitSignUp}
                    >
                      Đăng Ký
                    </button>
                  ) : (
                    <button
                      disabled
                      type="submit"
                      className="btn btn-primary"
                      onClick={this.submitSignUp}
                    >
                      Đăng Ký
                    </button>
                  )}
                </div>

                <p className="text-center">
                  Bạn đã có tài khoản?
                  <Link className="text-blue" to="/sign-in">
                    Log In
                  </Link>
                </p>
              </form>
            </article>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    userRegister: (userR, history) => {
      dispatch({
        type: GET_USER_REGISTER,
        payload: userR,
        history,
      });
    },
  };
};

export default withRouter(connect(null, mapDispatchToProps)(SignUp));
