import React, { useRef, useState } from "react";

export default function UserSearch(props) {
  const { onSubmit } = props;
  // tạo state để lưu giá trị onChange từ input
  const [, setSearch] = useState("");

  const typingTimeOutRef = useRef(null);

  const handleChangeUser = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (typingTimeOutRef.current) {
      clearTimeout(typingTimeOutRef.current);
    }

    typingTimeOutRef.current = setTimeout(() => {
      const type = {
        search: value,
      };
      onSubmit(type);
    }, 300);
  };
  return (
    <div className="search">
      <label>
        <input
          type="text"
          placeholder="Nhập vào tên người dùng cần"
          onChange={handleChangeUser}
        />
        <i className="fa fa-search" aria-hidden="true"></i>
      </label>
    </div>
  );
}
