import React, { Component } from "react";
import logo from "../../assets/img/web-logo.png";
import logoLogin from "../../assets/img/avatar.png";
import menuOption from "../../assets/img/menu-options.png";
import arrowRight from "../../assets/img/next-session.png";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
class Header extends Component {
  renderUserLogin() {
    // const { taiKhoan, isValid } = this.props.userLogin;
    const taiKhoanLocal = JSON.parse(localStorage.getItem("taiKhoan"));
    console.log(taiKhoanLocal);
    if (taiKhoanLocal == null) {
      return (
        <NavLink to="/sign-in" className="accout-logout">
          <img className="btnLogin " src={logoLogin} alt="Login" />
          <span>Đăng nhập</span>
        </NavLink>
      );
    } else {
      return (
        <NavLink to="/#" onMouseEnter={this.handleLogOut}>
          <img className="btnLogin " src={logoLogin} alt="Login" />
          <span className="toggle">{taiKhoanLocal}</span>
        </NavLink>
      );
    }
  }
  handleLogOut = () => {};
  render() {
    console.log("render header ");
    return (
      <nav className="navbar navbar-expand-sm  ">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="logo" />
        </NavLink>

        {/* Navbar-Drop-Down */}
        <div id="sideMenu">
          <button
            className="dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img src={menuOption} alt="" />
          </button>
          <ul className="dropdown-menu dropdown-menu-right">
            <li>
              <NavLink to="#" className="title-menu-mobile menu">
                {this.renderUserLogin()}
                {/* <img
                  className="btnLogin btnAvatarMobile"
                  src={logoLogin}
                  alt="user"
                />
                <span>Đăng Nhập</span> */}
                <img src={arrowRight} className="icon-arrow-right" alt="user" />
              </NavLink>
            </li>

            <li>
              <NavLink
                to="#showtime"
                className="menu titleDisplay title-menu-mobile"
                data-scroll="homeMovies"
              >
                Lịch Chiếu
              </NavLink>
            </li>
            <li>
              <NavLink
                ui-sref="main.cinemaMobile"
                className="menu titleDisplay title-menu-mobile"
                to="#cinemarelease"
              >
                Cụm rạp
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#magazine"
                className="menu titleDisplay title-menu-mobile"
                data-scroll="homeNews"
              >
                Tin Tức
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#App"
                className="menu titleDisplay title-menu-mobile"
                data-scroll="wrapHomeApp"
              >
                Ứng dụng
              </NavLink>
            </li>
            <li>
              <a className="menu titleDisplay title-menu-mobile" href="#hcm">
                Hồ Chí Minh
              </a>
            </li>
          </ul>
        </div>

        {/* Navbar-Link */}
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ">
            <li className="nav-item ">
              <NavLink className="nav-link" to="#">
                Lịch chiếu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="#">
                Cụm rạp
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="#">
                Tin tức
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="#">
                Ứng dụng
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="myaccount">
          <div className="accout">{this.renderUserLogin()}</div>
          <div className="address">
            <i className="fas fa-map-marker-alt mr-2" />
            <a href="#hcm" className="btn-dropdown" data-toggle="dropdown">
              Hồ Chí Minh
              <i className="fas fa-chevron-down ml-4" />
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#hcm">
                Hồ Chí Minh
              </a>
              <a className="dropdown-item" href="#dn">
                Đồng Nai
              </a>
              <a className="dropdown-item" href="#dt">
                Đồng Tháp
              </a>
              <a className="dropdown-item" href="#dt">
                Đồng Tháp
              </a>
              <a className="dropdown-item" href="#dt">
                Đồng Tháp
              </a>
              <a className="dropdown-item" href="#dt">
                Đồng Tháp
              </a>
              <a className="dropdown-item" href="#dt">
                Đồng Tháp
              </a>
              <a className="dropdown-item" href="#dt">
                Đồng Tháp
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userLogin: state.userLoginReducer.userLogin,
  };
};
export default connect(mapStateToProps, null)(Header);
