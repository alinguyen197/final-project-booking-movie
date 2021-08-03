import React, { Component } from "react";
import logo from "../../assets/img/web-logo.png";
import logoLogin from "../../assets/img/avatar.png";
import menuOption from "../../assets/img/menu-options.png";
import arrowRight from "../../assets/img/next-session.png";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as Scroll from "react-scroll";

let ScrollLink = Scroll.Link;

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
            <img src={arrowRight} className="icon-arrow-right" alt="user" />
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
              <ScrollLink
                style={{ cursor: "pointer" }}
                smooth={true}
                duration={1000}
                to="rendermovielist"
              >
                Lịch chiếu
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                style={{ cursor: "pointer" }}
                to="cinemarelease"
                smooth={true}
                duration={1000}
              >
                Cụm rạp
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                style={{ cursor: "pointer" }}
                to="news"
                smooth={true}
                duration={1000}
              >
                Tin tức
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                style={{ cursor: "pointer" }}
                to="app"
                smooth={true}
                duration={1000}
              >
                Ứng dụng
              </ScrollLink>
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
              <ScrollLink
                style={{ cursor: "pointer" }}
                className="nav-link"
                smooth={true}
                duration={1000}
                to="rendermovielist"
              >
                Lịch chiếu
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                style={{ cursor: "pointer" }}
                className="nav-link"
                to="cinemarelease"
                smooth={true}
                duration={1000}
              >
                Cụm rạp
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                style={{ cursor: "pointer" }}
                className="nav-link"
                to="news"
                smooth={true}
                duration={1000}
              >
                Tin tức
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                style={{ cursor: "pointer" }}
                className="nav-link"
                to="app"
                smooth={true}
                duration={1000}
              >
                Ứng dụng
              </ScrollLink>
            </li>
          </ul>
        </div>
        <div className="myaccount">
          {this.renderUserLogin()}
          <div className="address">
            <i className="fas fa-map-marker-alt mr-2" />
            <a className="btn-dropdown" data-toggle="dropdown" href="#HCMC">
              Hồ Chí Minh
              <i className="fas fa-chevron-down ml-4" />
            </a>
            <div className="dropdown-menu ml-10 selectScroll ">
              <div>
                <a className="dropdown-item" href="#HHCM">
                  Hồ Chí Minh
                </a>
                <a className="dropdown-item" href="#HN">
                  Hà Nội
                </a>
                <a className="dropdown-item" href="#DN">
                  Đà Nẵng
                </a>
                <a className="dropdown-item" href="#HP">
                  Hải Phòng
                </a>
                <a className="dropdown-item" href="#BH">
                  Biên Hòa
                </a>
                <a className="dropdown-item" href="#NT">
                  Nha Trang
                </a>
                <a className="dropdown-item" href="#BD">
                  Bình Dương
                </a>
                <a className="dropdown-item" href="#PT">
                  Phan Thiết
                </a>
                <a className="dropdown-item" href="#HL">
                  Hạ Long
                </a>
                <a className="dropdown-item" href="#CT">
                  Cần Thơ
                </a>
                <a className="dropdown-item" href="#VT">
                  Vũng Tàu
                </a>
                <a className="dropdown-item" href="#QN">
                  Quy Nhơn
                </a>
                <a className="dropdown-item" href="#H">
                  Huế
                </a>
                <a className="dropdown-item" href="#LX">
                  Long Xuyên
                </a>
                <a className="dropdown-item" href="#TN">
                  Thái Nguyên
                </a>
                <a className="dropdown-item" href="#BG">
                  Bắc Giang
                </a>
                <a className="dropdown-item" href="#BT">
                  Bến Tre
                </a>
                <a className="dropdown-item" href="#NB">
                  Ninh Bình
                </a>
                <a className="dropdown-item" href="#V">
                  Vinh
                </a>
                <a className="dropdown-item" href="#BL">
                  Bảo Lộc
                </a>
                <a className="dropdown-item" href="#DL">
                  Đà Lạt
                </a>
                <a className="dropdown-item" href="#BMT">
                  Buôn Mê Thuộc
                </a>
                <a className="dropdown-item" href="#VL">
                  Vĩnh Long
                </a>
                <a className="dropdown-item" href="#YB">
                  Yên Bái
                </a>
                <a className="dropdown-item" href="#BN">
                  Bắc Ninh
                </a>
              </div>
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
