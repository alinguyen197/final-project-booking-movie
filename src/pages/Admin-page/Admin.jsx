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
      <div className="row">
        <div col="col-3">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="pill" href="#home">
                Movie Management
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="pill" href="#menu1">
                User Management
              </a>
            </li>
          </ul>
        </div>
        <div col="col-9">
          <div className="tab-content">
            <div className="tab-pane container active" id="home">
              <Dashboard />
            </div>
            <div className="tab-pane container fade" id="menu1">
              <User />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
