import React, { Component } from "react";
import logo from "../../assets/img/logo-sign-in.png";
import { connect } from "react-redux";
import {
  GET_USER_LOGIN,
  SUCCESS_MESSAGE,
} from "../../redux/const/userLoginConst";
import { Link, withRouter } from "react-router-dom";
import Swal from "sweetalert2";
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
    this.props.success_change();
    let { value, name } = e.target;
    let errMessage = "";

    // validation onChange trước khi cập nhật giá trị
    if (value.trim() === "") {
      errMessage = "Vui lòng nhập !";
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
    this.props.userLogin(this.state.values, this.props.history);
  };
  render() {
    const { err_message } = this.props;
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
                <span className=" mt-5" style={{ color: "red", fontSize: 18 }}>
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
                <span className=" mt-5" style={{ color: "red", fontSize: 18 }}>
                  {this.state.errors.matKhau}
                </span>
              </div>
              <p style={{ color: "red", fontSize: 18 }}>
                {err_message == "" ? null : err_message}
              </p>

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
            <Link className="text-white float-right" to="/sign-up">
              Register
            </Link>
          </div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    err_message: state.userLoginReducer.err_message,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (user, history) => {
      dispatch({
        type: GET_USER_LOGIN,
        payload: user,
        history,
      });
    },
    success_change: () => {
      dispatch({
        type: SUCCESS_MESSAGE,
      });
    },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));
