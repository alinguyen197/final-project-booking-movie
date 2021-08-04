import React, { useRef, useState } from "react";

export default function InputSearch(props) {
  const { onSubmit } = props;
  // tạo state để lưu giá trị onChange từ input
  const [, setSearch] = useState("");
  // const [formValues, setFormValues] = useState({});

  // sử dụng kỹ thuật debounce, useRef để giữ giá trị giữa vòng đời render
  const typingTimeOutRef = useRef(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (typingTimeOutRef.current) {
      clearTimeout(typingTimeOutRef.current);
    }
    // đợi 300 sẽ submit
    typingTimeOutRef.current = setTimeout(() => {
      //tạo object chứa value
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
          placeholder="Nhập vào mã phim hoặc tên phim"
          onChange={handleChange}
        />
        <i className="fa fa-search" aria-hidden="true"></i>
      </label>
    </div>
  );
}
