import React, { Component } from "react";
import logo from "../../assets/img/web-logo.png";
import logoLogin from "../../assets/img/avatar.png";
import menuOption from "../../assets/img/menu-options.png";
import arrowRight from "../../assets/img/next-session.png";
import { NavLink, Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends Component {
  renderUserLogin() {
    // const { taiKhoan, isValid } = this.props.userLogin;
    const taiKhoanLocal = JSON.parse(localStorage.getItem("taiKhoan"));
    if (taiKhoanLocal == null) {
      return (
        <div className="accout">
          <Link
            to="/sign-in"
            // style={{ textDecoration: "none" }}
            className="accout-logout"
          >
            <img className="btnLogin " src={logoLogin} alt="Login" />
            <span>Đăng nhập</span>
          </Link>
        </div>
      );
    } else {
      return (
        <div className="accout">
          <NavLink
            id="logout"
            to="#"
            data-toggle="dropdown"
            // style={{ textDecoration: "none" }}
          >
            <img className="btnLogin " src={logoLogin} alt="Login" />
            <span className="toggle">{taiKhoanLocal}</span>
          </NavLink>

          <div className="dropdown-menu" style={{ textDecoration: "none" }}>
            <button
              className="dropdown-item"
              style={{ color: "#9b9b9b" }}
              onClick={this.handleLogOut}
            >
              Đăng xuất
            </button>

            <button className="dropdown-item" style={{ color: "#9b9b9b" }}>
              <Link to="/user-profile"> Thông tin cá nhân</Link>
            </button>
          </div>
        </div>
      );
    }
  }

  handleLogOut = () => {
    const { dispatch } = this.props;
    dispatch({
      type: "LOG_OUT",
    });
    localStorage.clear();
  };
  render() {
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
                <img src={arrowRight} className="icon-arrow-right" alt="user" />
              </NavLink>
            </li>

            <li>
              <NavLink
                to="#rendermovielist"
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
              <NavLink
                to="#App"
                className="menu titleDisplay title-menu-mobile"
                data-scroll="wrapHomeApp"
              >
                Đăng xuất
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Navbar-Link */}
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ">
            <li className="nav-item ">
              <NavLink className="nav-link" to="#rendermovielist">
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
          {this.renderUserLogin()}
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
