import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import $ from "jquery";
import ButtonPaginationUser from "./ButtonPaginationUser";
import { retry } from "redux-saga/effects";
import queryString from "query-string";
import { DOMAIN } from "../../../util/const/settingSystem";
import AddUser from "../User/AddUser";

import EditUser from "./EditUser";

export default function PaginationUser() {
  $(".delete").tooltip({ delay: 0 });
  $(".edit").tooltip({ delay: 0 });
  const [user, setUser] = useState([]);

  const [userEdit, setUserEdit] = useState({
    taiKhoan: "",
    hoTen: "",
    email: "",
    soDt: "",

    matKhau: "",
    maLoaiNguoiDung: "",
  });

  const [paginationUser, setPaginationUser] = useState({
    currentUser: 1,
    count: 10,
    totalUsers: 8,
    totalCount: 1,
  });
  const [filter, setFilter] = useState({
    soTrang: 1,
    soPhanTuTrenTrang: 10,
  });

  const handleUserChange = (newUser) => {
    console.log("newUser: ", newUser);
    setFilter({
      ...filter,
      soTrang: newUser,
    });
  };
  const getListUserPagination = async () => {
    //  soTrang=1&soPhanTuTrenTrang=10
    const paramsString = queryString.stringify(filter);
    let { data } = await axios({
      url: `${DOMAIN}/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP01${paramsString}`,
      method: "GET",
    });
    setUser(data);
    setPaginationUser(data);
  };

  const addUserPagination = async (form_data) => {
    let { status, data } = await axios({
      url: `${DOMAIN}/QuanLyNguoiDung/ThemNguoiDung`,
      method: "POST",
      data: form_data,
    });
    if (status === 200) {
      getListUserPagination();
    }
  };

  const handleEditUser = async (user) => {
    setUserEdit({
      taiKhoan: user.taiKhoan,
      hoTen: user.hoTen,
      email: user.email,
      soDt: user.soDt,

      matKhau: user.matKhau,
      maLoaiNguoiDung: user.maLoaiNguoiDung,
    });
  };

  const handleDeleteUser = async (taiKhoan) => {
    if (window.confirm("Bạn có chắc muốn xoá ?")) {
      const token = JSON.parse(localStorage.getItem("token"));
      let { status, data } = await axios({
        url: `${DOMAIN}/QuanLyNguoiDung/XoaNguoiDung?MaPhim=${taiKhoan}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (status === 200) {
        getListUserPagination();
      }
    } else {
    }
  };

  const handleUpdateUser = async (form_data) => {
    if (form_data) {
      const token = JSON.parse(localStorage.getItem("token"));
      let { status, data } = await axios({
        url: `${DOMAIN}/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
        method: "POST",
        data: form_data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (status === 200) {
        getListUserPagination();
      }
    }
  };
  useEffect(() => {
    //khai báo biến bất đồng bộ async await sẽ trả về data không cần .then() .catch nữa
    getListUserPagination();
  }, [filter]);

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr className="shortcut">
            <th>
              <span className="custom-checkbox">
                <input type="checkbox" id="selectAll" />
                <label htmlFor="selectAll" />
              </span>
            </th>
            <th scope="col">Tài Khoản</th>
            <th scope="col">Họ tên</th>
            <th scope="col">Email</th>
            <th scope="col">Số điện thoại</th>
            <th scope="col">Mật Khẩu </th>
            <th scope="col" type>
              Mã Loại Người Dùng
            </th>
            <th scope="col">Thao tác</th>
          </tr>
        </thead>

        <tbody>
          {user.map((value, index) => {
            return (
              <tr key={index} className="renderTable">
                <td>
                  <span className="custom-checkbox">
                    <input
                      type="checkbox"
                      id="checkbox1"
                      name="options[]"
                      defaultValue={1}
                    />
                    <label htmlFor="checkbox1" />
                  </span>
                </td>
                <td>{value.taiKhoan}</td>
                <td>{value.hoTen}</td>

                <td>{value.email}</td>
                <td>{value.soDt}</td>
                <td>{value.matKhau}</td>
                <td>{value.maLoaiNguoiDung}</td>
                <td>
                  <a
                    href="#editEmployeeModal"
                    data-toggle="tooltip"
                    title="Edit Movie"
                    className="edit"
                    data-toggle="modal"
                    onClick={() => handleEditUser(value)}
                  >
                    <i className="fa fa-edit"></i>
                  </a>
                  <a
                    data-toggle="tooltip"
                    title="Delete Movie"
                    href="#"
                    className="delete"
                    // data-toggle="modal"
                    onClick={() => handleDeleteUser(value.taiKhoan)}
                  >
                    <i className="fa fa-trash" aria-hidden="true"></i>
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <ButtonPaginationUser
        paginationUser={paginationUser}
        onUserChange={handleUserChange}
      />
      <AddUser addUserPagination={addUserPagination} />
      <EditUser userEdit={userEdit} handleUpdateUser={handleUpdateUser} />
    </div>
  );
}
