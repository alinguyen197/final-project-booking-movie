import React from "react";
import logo from "../../assets/img/web-logo.png";

import Dashboard from "./Dashboard/Dashboard";
import User from "./User/User";
export default function Admin() {
  const handleToggle = () => {
    let toggle = document.querySelector(".toggle");
    let navigation = document.querySelector(".navigation");
    let main = document.querySelector(".main");
    toggle.classList.toggle("active");
    navigation.classList.toggle("active");
    main.classList.toggle("active");
  };
  return (
    <section id="admin">
      <div style={{ height: 60 }}></div>
      <div className="admin-menu">
        <div className="navigation">
          <ul>
            <li>
              <a href="">
                <span className="icon">
                  <img src={logo} alt="" className="imageIcon" />
                </span>
                <span className="title">
                  <h6>
                    <b> TIX </b> A d m i n
                  </h6>
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
        <div className="main">
          <div className="topbar">
            <div className="toggle" onClick={() => handleToggle()}>
              <i class="fa fa-bars" aria-hidden="true"></i>
            </div>

            <div className="user">
              <p>Xin chào</p>
              <img src={logo} alt="" />
            </div>
          </div>

          <Dashboard />
          {/* <User /> */}
        </div>
      </div>
    </section>
  );
}
