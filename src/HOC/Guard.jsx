import React from "react";
import { Redirect } from "react-router-dom";
export default function Guard(props) {
  const maLoaiNguoiDung = JSON.parse(localStorage.getItem("maLoaiNguoiDung"));
  if (maLoaiNguoiDung === "QuanTri") {
    return props.children;
  } else {
    return <Redirect to="/" />;
  }
}
