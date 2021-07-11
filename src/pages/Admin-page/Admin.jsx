import React from "react";
import logo from "../../assets/img/web-logo.png";
export default function Admin() {
  return (
    <section id="admin">
      <div style={{ height: 60 }}></div>
      <div className="admin-menu">
        <div className="admin-menu-left">
          <ul>
            <li>
              <a href="">
                <span className="icon">
                  <img src={logo} alt="" />
                </span>
                <span className="title">
                  <h2>Tix Admin</h2>
                </span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="icon">
                  <i class="fa fa-home"></i>
                </span>
                <span className="title">DashBoard</span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="icon">
                  <i class="fas fa-people-carry"></i>
                </span>
                <span className="title">Customer</span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="icon">
                  <i class="fab fa-facebook-messenger"></i>
                </span>
                <span className="title">Message</span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="icon">
                  <i class="fas fa-info-circle"></i>
                </span>
                <span className="title">Help</span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="icon">
                  <i class="fas fa-cogs"></i>
                </span>
                <span className="title">Setting</span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="icon">
                  <i class="fas fa-key"></i>
                </span>
                <span className="title">Password</span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="icon">
                  <i class="fa fa-sign-out-alt"></i>
                </span>
                <span className="title">Sign Out</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="admin-menu-right"></div>
      </div>
    </section>
  );
}
