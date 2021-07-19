import React, { useEffect } from "react";
import bhdbitexco from "../../assets/img/ListCinemaRelease/bhdbitexco.png";
import { useDispatch, useSelector } from "react-redux";
import { GET_MOVIE_DETAIL_SHOWTIMES_BY_MOVIECODE } from "../../redux/const/movieDetailConst";
import Time from "react-time-format";
export default function ShowTime(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: GET_MOVIE_DETAIL_SHOWTIMES_BY_MOVIECODE,
      payload: props.movieCode,
    });
  }, []);
  const { showTimeMovieDetail } = useSelector(
    (state) => state.movieDetailReducer
  );

  return (
    <section id="cinemarelease">
      <div className="container">
        <div className="row listcinema bg-dark text-white">
          <div
            className="col-12 col-sm-12 col-md-1 col-lg-1 col-xl-1 content"
            style={{ border: "1px solid #ebebec" }}
          >
            <ul className="nav nav-pills">
              {showTimeMovieDetail.heThongRapChieu?.map((cumRap, index) => {
                return (
                  <li className="nav-item" key={index}>
                    <a
                      className={`nav-link ${index === 0 ? "active" : ""}`}
                      data-toggle="pill"
                      href={`#${cumRap.maHeThongRap}`}
                    >
                      <div className="logo-cinema">
                        <img src={cumRap.logo} alt="" />
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className=" col-md-11 col-lg-11 col-xl-11 col-12 col-sm-12 releaseRight">
            <div className="tab-content">
              {showTimeMovieDetail.heThongRapChieu?.map((cumRap, index) => {
                return (
                  <div
                    key={index}
                    className={`tab-pane  show ${index === 0 ? "active" : ""}`}
                    id={`${cumRap.maHeThongRap}`}
                  >
                    <div className="row">
                      <div className=" col-md-4 col-lg-4 col-xl-4 col-12 col-sm-12 br releaseBr ">
                        <div className="cinema-item">
                          <ul className="nav nav-pills row">
                            {cumRap.cumRapChieu.map((chiTietRap, index) => {
                              return (
                                <li className="nav-item col-12 col-sm-12 ">
                                  <a
                                    className={`nav-link ${
                                      index === 0 ? "active" : ""
                                    } `}
                                    data-toggle="pill"
                                    href={`#${chiTietRap.maCumRap}`}
                                  >
                                    <div className="row cinema-banner">
                                      <div className="col-3">
                                        <img src={bhdbitexco} alt="" />
                                      </div>
                                      <div className="col-9 cinema-infor">
                                        <span className="cinema-name">
                                          <span className="bhd">
                                            {chiTietRap.tenCumRap}
                                          </span>
                                        </span>
                                        <span className="cinema-address">
                                          {/* L3-Bitexco Icon 68, 2 Hải Triều, Quận
                                            1 */}
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
                          {cumRap.cumRapChieu.map((chiTietRap, index) => {
                            return (
                              <div
                                key={index}
                                className={`tab-pane  fade show ${
                                  index === 0 ? "active" : ""
                                }`}
                                id={`${chiTietRap.maCumRap}`}
                              >
                                <div className="row">
                                  <div className="col-12">
                                    {chiTietRap.lichChieuPhim.map(
                                      (phim, index) => {
                                        return (
                                          <div className="list-flim-detail">
                                            <div
                                              key={index}
                                              className="list-flim-detail-infor"
                                            >
                                              <img
                                                src={
                                                  showTimeMovieDetail.hinhAnh
                                                }
                                                alt=""
                                              />
                                              <div className="list-flim-detail-infor-name">
                                                <span className="list-flim-detail-infor-name-type mr-2">
                                                  2D
                                                </span>
                                                <p className="list-flim-detail-infor-movie-name">
                                                  {showTimeMovieDetail.tenPhim}
                                                </p>
                                                <p className="cinema-address">
                                                  Thời lượng : {phim.thoiLuong}{" "}
                                                  - {phim.tenRap}
                                                </p>
                                              </div>

                                              <div className="list-flim-detail-showtime">
                                                <a href>
                                                  <span>
                                                    <Time
                                                      value={
                                                        phim.ngayChieuGioChieu
                                                      }
                                                      format="DD/MM/YY - hh:mm"
                                                      onClick={() => {
                                                        console.log(
                                                          phim.maLichChieu
                                                        );
                                                      }}
                                                    ></Time>
                                                    <span></span>
                                                  </span>
                                                </a>
                                              </div>
                                            </div>
                                          </div>
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
