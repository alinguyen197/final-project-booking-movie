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
          <ul className="nav nav-pills">
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
            <li className="nav-item">
              <a
                className="nav-link active"
                data-toggle="pill"
                href="#movieManagement"
              >
                <span className="icon">
                  <i className="fa fa-film"></i>
                </span>
                <span className="title"> Movie Management</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="pill" href="#userManagement">
                <span className="icon">
                  <i className="fa fa-users"></i>
                </span>
                <span className="title"> User Management</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="main">
          <div className="tab-content">
            <div className="topbar">
              <div className="toggle" onClick={() => handleToggle()}>
                <i className="fa fa-bars" aria-hidden="true"></i>
              </div>

              <div className="user">
                <p>Xin chào</p>
                <img src={logo} alt="" />
              </div>
            </div>

            <div className="tab-pane  active" id="movieManagement">
              <Dashboard />
            </div>
            <div className="tab-pane fade" id="userManagement">
              <User />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
