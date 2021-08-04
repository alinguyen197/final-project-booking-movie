import React, { useEffect } from "react";
import bhdbitexco from "../../assets/img/ListCinemaRelease/bhdbitexco.png";
import { useSelector, useDispatch } from "react-redux";
import { GET_CINEMA_LIST_BY_BRAND } from "../../redux/const/cinemaConst";
import Time from "react-time-format";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
export default function CinemaRelease() {
  const history = useHistory();
  let { cinemaListByBrand } = useSelector((state) => state.cinemaReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: GET_CINEMA_LIST_BY_BRAND,
    });
  }, [dispatch]);
  const handleBookingTicket = (maLichChieu) => {
    const checkUserLogin = JSON.parse(localStorage.getItem("taiKhoan"));
    if (checkUserLogin === null) {
      history.push("/sign-in");
    } else {
      history.push(`/booking/${maLichChieu}`);
    }
  };
  return (
    <section id="cinemarelease">
      <div className="container">
        <div className="row listcinema">
          <div
            className="col-12 col-sm-12 col-md-1 col-lg-1 col-xl-1 content"
            style={{ border: "1px solid #ebebec" }}
          >
            <ul className="nav nav-pills">
              {cinemaListByBrand?.map((cinema, index) => {
                return (
                  <li className="nav-item" key={index}>
                    <a
                      className={`nav-link ${index === 0 ? "active" : ""}`}
                      data-toggle="pill"
                      href={`#${cinema.maHeThongRap}`}
                    >
                      <div className="logo-cinema">
                        <img src={cinema.logo} alt="" />
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className=" col-md-11 col-lg-11 col-xl-11 col-12 col-sm-12 releaseRight">
            <div className="tab-content">
              {cinemaListByBrand?.map((cinema, index) => {
                return (
                  <div
                    className={`tab-pane  show ${index === 0 ? "active" : ""} `}
                    id={`${cinema.maHeThongRap}`}
                    key={index}
                  >
                    <div className="row">
                      <div className=" col-md-4 col-lg-4 col-xl-4 col-12 col-sm-12 br releaseBr ">
                        <div className="cinema-item">
                          <ul className="nav nav-pills row">
                            {cinema.lstCumRap?.map((cumRap, index) => {
                              return (
                                <li
                                  className="nav-item col-12 col-sm-12"
                                  key={index}
                                >
                                  <a
                                    className={`nav-link ${
                                      index === 0 ? "active" : ""
                                    }`}
                                    data-toggle="pill"
                                    // href="#bhd1"
                                    href={`#movie${cumRap.maCumRap}`}
                                  >
                                    <div className="row cinema-banner">
                                      <div className="col-3">
                                        <img src={bhdbitexco} alt="" />
                                      </div>
                                      <div className="col-9 cinema-infor">
                                        <span className="cinema-name">
                                          <span className="bhd">
                                            {cumRap.tenCumRap}
                                          </span>
                                        </span>
                                        <span className="cinema-address">
                                          {cumRap.diaChi}
                                        </span>
                                        <span className="cinema-detail">
                                          [chi tiết]
                                        </span>
                                      </div>
                                    </div>
                                  </a>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                      <div className=" col-md-8 col-lg-8 col-xl-8 col-12 col-sm-12 list-cinema ">
                        <div className="tab-content">
                          {cinema.lstCumRap.map((cumRap, index) => {
                            return (
                              <div
                                key={index}
                                className={`tab-pane  fade show ${
                                  index === 0 ? "active" : ""
                                }`}
                                id={`movie${cumRap.maCumRap}`}
                              >
                                <div className="row">
                                  <div className="col-12">
                                    {cumRap.danhSachPhim.map((phim, index) => {
                                      return (
                                        <div
                                          className="list-flim-detail"
                                          key={index}
                                        >
                                          <div className="list-flim-detail-infor">
                                            <img src={phim.hinhAnh} alt="" />
                                            <div className="list-flim-detail-infor-name">
                                              <span className="list-flim-detail-infor-name-type mr-2">
                                                2D
                                              </span>
                                              <p className="list-flim-detail-infor-movie-name">
                                                {phim.tenPhim}
                                              </p>
                                              <p className="cinema-address">
                                                100 phút - TIX 7 - IMDb 0
                                              </p>
                                            </div>
                                            <div
                                              key={index}
                                              className="list-flim-detail-showtime"
                                            >
                                              {phim.lstLichChieuTheoPhim.map(
                                                (lichChieu, indexLichChieu) => {
                                                  return (
                                                    <Link
                                                      to="#"
                                                      key={indexLichChieu}
                                                      onClick={() =>
                                                        handleBookingTicket(
                                                          lichChieu.maLichChieu
                                                        )
                                                      }
                                                    >
                                                      <span>
                                                        <Time
                                                          value={
                                                            lichChieu.ngayChieuGioChieu
                                                          }
                                                          format="DD/MM/YY - hh:mm"
                                                        />
                                                      </span>
                                                    </Link>
                                                  );
                                                }
                                              )}
                                            </div>
                                          </div>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
