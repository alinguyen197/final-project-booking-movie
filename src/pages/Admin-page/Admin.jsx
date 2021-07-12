import React from "react";
import logo from "../../assets/img/web-logo.png";
export default function Admin() {
  return (
    <section id="admin">
      <div style={{ height: 60 }}></div>
      <div className="admin-menu">
        <div className="admin-menu-left" >
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
        <div className="admin-menu-right">
          <div className="topbar">
            <div className="toggle" >
            <i class="fa fa-bars" aria-hidden="true"></i>
 
            </div>
          
         
            <div className="user">
                <p>Xin chào</p>
                <img src={logo} alt="" />
              </div>
              
          </div>
          
         <button class="btn btn-primary
         " > Thêm Phim</button>
          <div className="search">
              <label htmlFor="">
                <input  type="text" placeholder="Nhập vào tài khoản hoặc họ tên người dùng"/>
                <i class="fa fa-search" aria-hidden="true"></i>
              </label>
              <button type="button" class="btn btn-secondary">Tìm </button>
        
            </div>
          <table class="table table-striped">
          <thead>
            <tr>
      <th scope="col">Mã Phim</th>
      <th scope="col">Tên Phim</th>
      <th scope="col">Hinh Ảnh</th>
      <th scope="col">Mô Tả</th>
      <th scope="col">Mã Nhóm</th>
      <th scope="col" type="">Ngày khỏi chiếu</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@fat</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>@fat</td>
      <td>@fat</td>
    </tr>
  </tbody>
</table>
        </div>
      </div>
    </section>
  );
}
