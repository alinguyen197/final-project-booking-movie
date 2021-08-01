import React, { useState } from "react";
import PostFilterForm from "./PostFilterForm";

import { DOMAIN } from "../../util/const/settingSystem";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function CarouselBookingForm() {
  const [data, setData] = useState();

  const handleFilterChange = async (newFilters) => {
    const key = newFilters.searchTerm;
    let isValid = ``;
    if (key !== "") {
      isValid = `&tenPhim=${key}`;
    } else {
      setData([]);
      return;
    }
    try {
      let { data } = await axios({
        url: `${DOMAIN}/QuanLyPhim/LayDanhSachPhim?maNhom=GP01${isValid}`,
        method: "GET",
      });

      setData(data);
      console.log(data);
    } catch (error) {
      console.log("Failed to fetch", error.message);
    }
  };

  const history = useHistory();
  const handleViewDetailSearch = (maPhim) => {
    history.push(`/movie-detail/${maPhim}`);
  };

  const renderData = () => {
    if (data !== "") {
      return (
        <div className="searchFilm">
          <ul>
            {data?.map((value, index) => {
              return (
                <li
                  onClick={() => handleViewDetailSearch(value.maPhim)}
                  key={index}
                >
                  {value.tenPhim}
                </li>
              );
            })}
          </ul>
        </div>
      );
    } else {
      return;
    }
  };

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
      {renderData()}
    </div>
  );
}
