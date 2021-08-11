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
    const { taiKhoan, isValid } = this.props.userLogin;

    const taiKhoanLocal = JSON.parse(localStorage.getItem("maLoaiNguoiDung"));
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
          <img src={arrowRight} className="icon-arrow-right" alt="user" />
        </div>
      );
    }
    if (taiKhoanLocal === "QuanTri") {
      return (
        <div className="accout">
          <NavLink id="logout" to="#" data-toggle="dropdown">
            <img className="btnLogin " src={logoLogin} alt="Login" />
            <span className="toggle">{taiKhoan}</span>
          </NavLink>
          <img src={arrowRight} className="icon-arrow-right" alt="user" />

          <ul class="dropdown-menu drp-mnu ">
            <li>
              <i class="fas fa-user-shield"></i>
              <Link to="/admin"> Trang Admin</Link>
            </li>
            <li>
              <i class="fa fa-user"></i>
              <Link to="/user-profile"> Thông tin cá nhân</Link>
            </li>
            <li onClick={this.handleLogOut}>
              <i class="fas fa-sign-out-alt"></i>Đăng xuất
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="accout">
          <NavLink id="logout" to="#" data-toggle="dropdown">
            <img className="btnLogin " src={logoLogin} alt="Login" />
            <span className="toggle">{taiKhoan}</span>
          </NavLink>
          <img src={arrowRight} className="icon-arrow-right" alt="user" />

          <ul class="dropdown-menu drp-mnu ">
            <li>
              <i class="fa fa-user"></i>
              <Link to="/user-profile"> Thông tin cá nhân</Link>
            </li>
            <li onClick={this.handleLogOut}>
              <i class="fas fa-sign-out-alt"></i>Đăng xuất
            </li>
          </ul>
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
    const taiKhoanLocal = JSON.parse(localStorage.getItem("taiKhoan"));

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
            <li style={{ marginBottom: 30 }}></li>

            <li>
              <Link to="#" className="title-menu-mobile menu">
                {this.renderUserLogin()}
              </Link>
            </li>
            {taiKhoanLocal ? (
              <li>
                <Link
                  to="/user-profile"
                  className="menu titleDisplay title-menu-mobile"
                  data-scroll="wrapHomeApp"
                >
                  Thông tin cá nhân
                </Link>
              </li>
            ) : (
              ""
            )}

            <li>
              <ScrollLink
                style={{ cursor: "pointer" }}
                smooth={true}
                duration={500}
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
                duration={500}
              >
                Cụm rạp
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                style={{ cursor: "pointer" }}
                to="news"
                smooth={true}
                duration={500}
              >
                Tin tức
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                style={{ cursor: "pointer" }}
                to="app"
                smooth={true}
                duration={500}
              >
                Ứng dụng
              </ScrollLink>
            </li>
            {taiKhoanLocal ? (
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
            ) : (
              ""
            )}
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
                duration={500}
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
                duration={500}
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
                duration={500}
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
                duration={500}
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
