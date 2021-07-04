import React, { Component } from "react";
import logo from "../../assets/img/logo-sign-in.png";
export default class SignIn extends Component {
  render() {
    return (
      <section className="sign-in">
        <div className="sign-in-inner">
          <div className="sign-in-from">
            <img src={logo} alt="" />
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Tài Khoản</label>
                <input
                  type="text"
                  name="taiKhoan"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Vui lòng nhập tài khoản"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Mật Khẩu</label>
                <input
                  type="password"
                  name="matKhau"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Vui lòng nhập mật khẩu"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Đăng Nhập
              </button>
            </form>
            <a href="" className="text-white float-right">
              Register
            </a>
          </div>
        </div>
      </section>
    );
  }
}
