import React from "react";
import ModalUpdateUser from "./UpdateUserProfile";

export default function FormUser(props) {
  const { UserProfile } = props;
  return (
    <div>
      <h3>Thông Tin Cá Nhân</h3>
      <p>
        Tên đăng nhập: <b>{UserProfile.taiKhoan}</b>{" "}
      </p>
      <p>
        Họ và tên: <b>{UserProfile.hoTen}</b>
      </p>
      <p>
        Email: <b>{UserProfile.email}</b>
      </p>
      <p>
        Số điện thoại: <b>{UserProfile.soDT}</b>
      </p>
      <p>
        Mã nhóm: <b>{UserProfile.maNhom}</b>
      </p>
    </div>
  );
}
