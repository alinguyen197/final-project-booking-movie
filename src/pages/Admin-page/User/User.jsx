import React, { useState, useEffect } from "react";
import axios from "axios";
import $ from "jquery";
import ButtonPaginationUser from "./ButtonPaginationUser";
import Swal from "sweetalert2";
import { DOMAIN } from "../../../util/const/settingSystem";
import AddUser from "../User/AddUser";
import EditUser from "./EditUser";
import UserSearch from "./UserSearch";

export default function User(props) {
  $(".delete").tooltip({ delay: 0 });
  $(".edit").tooltip({ delay: 0 });
  $(".create").tooltip({ delay: 0 });

  const [user, setUser] = useState([]);
  const [userEdit, setUserEdit] = useState({
    taiKhoan: "",
    hoTen: "",
    email: "",
    soDt: "",
    matKhau: "",
    maNhom: "GP01",
    maLoaiNguoiDung: "",
  });

  const [paginationUser, setPaginationUser] = useState({
    currentPage: 1,
    count: 10,
    totalPages: 8,
    totalCountUser: 1,
  });
  const [filterUser, setFilterUser] = useState({
    soTrang: 1,
    soPhanTuTrenTrang: 10,
    tuKhoa: "",
  });

  const handleUserChange = (newPage) => {
    setFilterUser({
      ...filterUser,
      soTrang: newPage,
    });
  };
  const getListUserPagination = async () => {
    let timKiem = ``;
    if (filterUser.tuKhoa === "") {
      timKiem = ``;
    } else {
      timKiem = `&tuKhoa=${filterUser.tuKhoa}`;
    }

    let { data } = await axios({
      url: `${DOMAIN}/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP01${timKiem}&soTrang=${filterUser.soTrang}&soPhanTuTrenTrang=${filterUser.soPhanTuTrenTrang}`,
      method: "GET",
    });

    setUser(data);
    setPaginationUser(data);
  };

  const addUserPagination = async (form_user) => {
    const token = JSON.parse(localStorage.getItem("token"));

    let { status } = await axios({
      url: `${DOMAIN}/QuanLyNguoiDung/ThemNguoiDung`,
      method: "POST",
      data: form_user,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (status === 200) {
      getListUserPagination();
    }
  };

  const handleEditUser = async (nguoiDung) => {
    setUserEdit({
      taiKhoan: nguoiDung.taiKhoan,
      hoTen: nguoiDung.hoTen,
      email: nguoiDung.email,
      soDt: nguoiDung.soDt,
      matKhau: nguoiDung.matKhau,

      maLoaiNguoiDung: nguoiDung.maLoaiNguoiDung,
    });
  };

  const handleDeleteUser = (taiKhoan) => {
    Swal.fire({
      title: "B???n mu???n xo?? ng?????i d??ng n??y?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const token = JSON.parse(localStorage.getItem("token"));
        let { status } = await axios({
          url: `${DOMAIN}/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (status === 200) {
          getListUserPagination();
        }
        Swal.fire("Xo?? th??nh c??ng !", "", "success");
      }
    });
  };

  const handleUpdateUser = async (form_user) => {
    console.log(form_user);
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token);
    let { status } = await axios({
      url: `${DOMAIN}/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      method: "PUT",
      data: form_user,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (status === 200) {
      getListUserPagination();
    }
  };
  const handlSearchUser = (search) => {
    setFilterUser({
      ...filterUser,
      tuKhoa: search.search,
    });
  };
  useEffect(() => {
    //khai b??o bi???n b???t ?????ng b??? async await s??? tr??? v??? data kh??ng c???n .then() .catch n???a
    getListUserPagination();
  }, [filterUser]);

  return (
    <div className="contentAdmin">
      <UserSearch onSubmit={handlSearchUser} />
      <div className="table-wrapper">
        <div className="table-title">
          <div className="row">
            <div className="col-sm-6">
              <h2>
                QU???N L?? <b>NG?????I D??NG</b>
              </h2>
            </div>
            <div className="col-sm-6">
              <a
                href="#addEmployeeModalUser"
                className="btn btn-success"
                data-toggle="modal"
              >
                <i className="fa fa-plus-circle" aria-hidden="true"></i>
                <span>TH??M NG?????I D??NG M???I</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="tableAdmin">
        <table className="table table-striped">
          <thead>
            <tr className="shortcut">
              <th scope="col">T??i Kho???n</th>
              <th scope="col">H??? t??n</th>
              <th scope="col">Email</th>
              <th scope="col">S??? ??i???n tho???i</th>
              <th scope="col">M???t Kh???u </th>

              <th scope="col">M?? Lo???i Ng?????i D??ng</th>
              <th scope="col">Thao t??c</th>
            </tr>
          </thead>

          <tbody>
            {user.items?.map((value, index) => {
              return (
                <tr key={index} className="renderTable tableUser">
                  <td>{value.taiKhoan}</td>
                  <td>{value.hoTen}</td>

                  <td>{value.email}</td>
                  <td>{value.soDt}</td>
                  <td>{value.matKhau}</td>

                  <td>{value.maLoaiNguoiDung}</td>
                  <td>
                    <a
                      href="#editEmployeeModalUser"
                      data-toggle="tooltip"
                      title="Edit User"
                      className="edit"
                      data-toggle="modal"
                      onClick={() => handleEditUser(value)}
                    >
                      <i className="fa fa-edit"></i>
                    </a>
                    <a
                      data-toggle="tooltip"
                      title="Delete User"
                      href="#delete"
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
    </div>
  );
}
