import React, { useEffect, useState } from "react";
import PostFilterForm from "./PostFilterForm";
import queryString from "query-string";
import { DOMAIN } from "../../util/const/settingSystem";
import axios from "axios";
import { post } from "jquery";
export default function CarouselBookingForm() {
  const [postList, setPostList] = useState({
    title_like: "",
  });
  function handleFilterChange(newFilters) {
    console.log("new filters", newFilters);
    setPostList({
      ...postList,
      title_like: newFilters.searchTerm,
    });
  }

  useEffect(() => {
    const getSearchMovieApi = async (searchTerm) => {
      try {
        const requestUrl = `${DOMAIN}/QuanLyPhim/LayDanhSachPhim?maNhom=GP01&tenPhim=${searchTerm}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log(responseJSON);
        const { data } = responseJSON;

        setPostList(data);
      } catch (error) {
        console.log("Failed to fetch", error.message);
      }
    };

    getSearchMovieApi();
  }, []);

  return (
    <div className="carousel-booking">
      <div className="row">
        <div className="col-10">
          <div className="booking-form-film">
            <PostFilterForm onSubmit={handleFilterChange} />
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
      {/* <div>
        {data.map((value, index) => {
          return (
            <ul key={index}>
              <li>{value.tenPhim}</li>
            </ul>
          );
        })}
      </div> */}
    </div>
  );
}
