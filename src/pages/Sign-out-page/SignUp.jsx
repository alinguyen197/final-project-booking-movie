import React, { useState } from "react";
import logo from "../../assets/img/logo-sign-in.png";
import { connect } from "react-redux";
import { GET_USER_LOGIN } from "../../redux/const/userLoginConst";
import { Link, withRouter } from "react-router-dom";
export default function SignUp() {
  const [state, setState] = useState({
    values: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "",
      maLoaiNguoiDung: "",
      hoTen: "",
    },
    errors: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "",
      maLoaiNguoiDung: "",
      hoTen: "",
    },
  });
  const handelChangeLogin = () => {};
  const submitLogin = () => {};
  return (
    <div>
      <div style={{ height: 60 }}></div>
      <section className="sign-in">
        <div className="sign-in-inner">
          <div className="sign-in-from">
            <img src={logo} alt="" />
            <form onSubmit={submitLogin}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Tài Khoản</label>
                <input
                  type="text"
                  name="taiKhoan"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Vui lòng nhập tài khoản"
                  value={state.values.taiKhoan}
                  onChange={handelChangeLogin}
                />
                <span className="text-danger mt-2">
                  {state.errors.taiKhoan}
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
                  value={state.values.matKhau}
                  onChange={handelChangeLogin}
                />
                <span className="text-danger mt-2">{state.errors.matKhau}</span>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Mật Khẩu</label>
                <input
                  type="text"
                  name="matKhau"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Vui lòng nhập mật khẩu"
                  value={state.values.matKhau}
                  onChange={handelChangeLogin}
                />
                <span className="text-danger mt-2">{state.errors.matKhau}</span>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Mật Khẩu</label>
                <input
                  type="text"
                  name="matKhau"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Vui lòng nhập mật khẩu"
                  value={state.values.matKhau}
                  onChange={handelChangeLogin}
                />
                <span className="text-danger mt-2">{state.errors.matKhau}</span>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Mật Khẩu</label>
                <input
                  type="text"
                  name="matKhau"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Vui lòng nhập mật khẩu"
                  value={state.values.matKhau}
                  onChange={handelChangeLogin}
                />
                <span className="text-danger mt-2">{state.errors.matKhau}</span>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Mật Khẩu</label>
                <input
                  type="text"
                  name="matKhau"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Vui lòng nhập mật khẩu"
                  value={state.values.matKhau}
                  onChange={handelChangeLogin}
                />
                <span className="text-danger mt-2">{state.errors.matKhau}</span>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Mật Khẩu</label>
                <input
                  type="text"
                  name="matKhau"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Vui lòng nhập mật khẩu"
                  value={state.values.matKhau}
                  onChange={handelChangeLogin}
                />
                <span className="text-danger mt-2">{state.errors.matKhau}</span>
              </div>
              {state.valid ? (
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={submitLogin}
                >
                  Đăng Nhập
                </button>
              ) : (
                <button
                  disabled
                  type="submit"
                  className="btn btn-primary"
                  onClick={submitLogin}
                >
                  Đăng Nhập
                </button>
              )}
            </form>
            <Link className="text-white float-right" to="/sign-out">
              Register
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
