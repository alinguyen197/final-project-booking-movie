import React, { useEffect, useState } from "react";
import PostFilterForm from "./PostFilterForm";
import queryString from "query-string";
import { DOMAIN } from "../../util/const/settingSystem";
import axios from "axios";

export default function CarouselBookingForm() {
  const [data, setData] = useState();
  const handleFilterChange = async (newFilters) => {
    const key = newFilters.searchTerm;
    let isValid = ``;
    if (key !== "") {
      isValid = `&tenPhim=${key}`;
    } else {
      return;
    }
    try {
      let { data } = await axios({
        url: `${DOMAIN}/QuanLyPhim/LayDanhSachPhim?maNhom=GP01${isValid}`,
        method: "GET",
      });
      console.log(data);
      setData(data);
    } catch (error) {
      console.log("Failed to fetch", error.message);
    }
  };
  const renderData = () => {
    if (data !== "") {
      return (
        <div>
          {data?.map((value, index) => {
            return <li key={index}>{value.tenPhim}</li>;
          })}
        </div>
      );
    } else {
      return <ul></ul>;
    }
  };
  return (
    <div className="carousel-booking">
      <div className="row">
        <div className="col-10">
          <div className="booking-form-film">
            <div className="form-group">
              <PostFilterForm onSubmit={handleFilterChange} />
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="booking-form-button">
            <div>
              <button>TÌM PHIM</button>
            </div>
          </div>
        </div>
      </div>
      {renderData()}
    </div>
  );
}
