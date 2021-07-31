import React, { Component } from "react";
import logo from "../../assets/img/web-logo.png";
import logoLogin from "../../assets/img/avatar.png";
import menuOption from "../../assets/img/menu-options.png";
import arrowRight from "../../assets/img/next-session.png";
import { NavLink, Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";

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
    this.props.history.push("/");
  };
  render() {
    return (
      <nav className="navbar navbar-expand-sm  ">
        <div style={{ marginRight: 150 }}>
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        {/* Navbar-Drop-Down */}
        <div id="sideMenu" style={{}}>
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
            <li style={{ marginBottom: 50 }}>
              <img src={arrowRight} className="icon-arrow-right" alt="user" />
            </li>

            <li>
              <Link to="#" className="title-menu-mobile menu">
                {this.renderUserLogin()}
              </Link>
            </li>
            <li>
              <Link
                to="/user-profile"
                className="menu titleDisplay title-menu-mobile"
                data-scroll="wrapHomeApp"
              >
                Thông tin cá nhân
              </Link>
            </li>
            <li>
              <NavLink
                to=""
                className="menu titleDisplay title-menu-mobile"
                data-scroll="homeMovies"
                onClick={() => {
                  document.getElementById("rendermovielist").scrollIntoView();
                }}
              >
                Lịch Chiếu
              </NavLink>
            </li>
            <li>
              <NavLink
                ui-sref="main.cinemaMobile"
                className="menu titleDisplay title-menu-mobile"
                to=""
                onClick={() => {
                  document.getElementById("cinemarelease").scrollIntoView();
                }}
              >
                Cụm rạp
              </NavLink>
            </li>
            <li>
              <NavLink
                to=""
                className="menu titleDisplay title-menu-mobile"
                data-scroll="homeNews"
                onClick={() => {
                  document.getElementById("news").scrollIntoView();
                }}
              >
                Tin Tức
              </NavLink>
            </li>
            <li>
              <NavLink
                to=""
                className="menu titleDisplay title-menu-mobile"
                data-scroll="wrapHomeApp"
                onClick={() => {
                  document.getElementById("App").scrollIntoView();
                }}
              >
                Ứng dụng
              </NavLink>
            </li>
            <li>
              <Link
                to="#"
                className="menu titleDisplay title-menu-mobile"
                data-scroll="wrapHomeApp"
                onClick={this.handleLogOut}
              >
                Đăng xuất
              </Link>
            </li>
          </ul>
        </div>

        {/* Navbar-Link */}
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ">
            <li className="nav-item ">
              <NavLink
                className="nav-link"
                to=""
                onClick={() => {
                  document.getElementById("rendermovielist").scrollIntoView();
                }}
              >
                Lịch chiếu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to=""
                onClick={() => {
                  document.getElementById("cinemarelease").scrollIntoView();
                }}
              >
                Cụm rạp
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to=""
                onClick={() => {
                  document.getElementById("news").scrollIntoView();
                }}
              >
                Tin tức
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to=""
                onClick={() => {
                  document.getElementById("App").scrollIntoView();
                }}
              >
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

export default withRouter(connect(mapStateToProps, null)(Header));
