import React, { Component } from "react";
import logo from "../../assets/img/logo-sign-in.png";
import { connect } from "react-redux";
import { GET_USER_LOGIN } from "../../redux/const/userLoginConst";
import { withRouter } from "react-router-dom";
class SignIn extends Component {
  state = {
    values: {
      taiKhoan: "",
      matKhau: "",
    },
    errors: {
      taiKhoan: "",
      matKhau: "",
    },
    valid: false,
  };
  handelChangeLogin = (e) => {
    let { value, name } = e.target;
    let errMessage = "";

    // validation onChange trước khi cập nhật giá trị
    if (value.trim() === "") {
      errMessage = " Vui lòng nhập tài khoản & mật khẩu !!!";
    } else {
      errMessage = "";
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
  submitLogin = (event) => {
    event.preventDefault();
    console.log("submit", this.state.values);
    this.props.userLogin(this.state.values, this.props.history);
  };
  render() {
    return (
      <section className="sign-in">
        <div className="sign-in-inner">
          <div className="sign-in-from">
            <img src={logo} alt="" />
            <form onSubmit={this.submitLogin}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Tài Khoản</label>
                <input
                  type="text"
                  name="taiKhoan"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Vui lòng nhập tài khoản"
                  value={this.state.values.taiKhoan}
                  onChange={this.handelChangeLogin}
                />
                <span className="text-danger mt-2">
                  {this.state.errors.taiKhoan}
                </span>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Mật Khẩu</label>
                <input
                  type="text"
                  name="matKhau"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Vui lòng nhập mật khẩu"
                  value={this.state.values.matKhau}
                  onChange={this.handelChangeLogin}
                />
                <span className="text-danger mt-2">
                  {this.state.errors.matKhau}
                </span>
              </div>
              {this.state.valid ? (
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.submitLogin}
                >
                  Đăng Nhập
                </button>
              ) : (
                <button
                  disabled
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.submitLogin}
                >
                  Đăng Nhập
                </button>
              )}
            </form>
            <a href="#Register" className="text-white float-right">
              Register
            </a>
          </div>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (user, history) => {
      dispatch({
        type: GET_USER_LOGIN,
        payload: user,
        history,
      });
    },
  };
};

export default withRouter(connect(null, mapDispatchToProps)(SignIn));
