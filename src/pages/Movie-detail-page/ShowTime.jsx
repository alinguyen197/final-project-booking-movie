import React, { useEffect } from "react";
import bhdbitexco from "../../assets/img/ListCinemaRelease/bhdbitexco.png";
import { useDispatch, useSelector } from "react-redux";
import { GET_MOVIE_DETAIL_SHOWTIMES_BY_MOVIECODE } from "../../redux/const/movieDetailConst";
import Time from "react-time-format";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";

import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function ShowTime(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleBookingTicket = (bookingCode) => {
    const checkUserLogin = JSON.parse(localStorage.getItem("taiKhoan"));
    if (checkUserLogin == null) {
      history.push("/sign-in");
    } else {
      history.push(`/booking/${bookingCode}`);
    }
  };
  useEffect(() => {
    dispatch({
      type: GET_MOVIE_DETAIL_SHOWTIMES_BY_MOVIECODE,
      payload: props.movieCode,
    });
  }, [dispatch, props.movieCode]);
  const { showTimeMovieDetail } = useSelector(
    (state) => state.movieDetailReducer
  );
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));
  const classes = useStyles();

  return (
    <section id="cinemarelease">
      <div className="container">
        <div className="row listcinema bg-dark text-white">
          <div
            className="col-12 col-sm-12 col-md-1 col-lg-1 col-xl-1 content"
            style={{ border: "1px solid #ebebec" }}
          >
            <ul className="nav nav-pills">
              {showTimeMovieDetail.heThongRapChieu?.map(
                (cumRap, indexHeThongRap) => {
                  return (
                    <li className="nav-item" key={indexHeThongRap}>
                      <a
                        className={`nav-link ${
                          indexHeThongRap === 0 ? "active" : ""
                        }`}
                        data-toggle="pill"
                        href={`#${cumRap.maHeThongRap}`}
                      >
                        <div className="logo-cinema">
                          <img src={cumRap.logo} alt="" />
                        </div>
                      </a>
                    </li>
                  );
                }
              )}
            </ul>
          </div>
          <div className=" col-md-11 col-lg-11 col-xl-11 col-12 col-sm-12 releaseRight">
            <div className="tab-content">
              {showTimeMovieDetail.heThongRapChieu?.map(
                (cumRap, indexCumRap) => {
                  return (
                    <div
                      key={indexCumRap}
                      className={`tab-pane  show ${
                        indexCumRap === 0 ? "active" : ""
                      }`}
                      id={`${cumRap.maHeThongRap}`}
                    >
                      <div className="row">
                        <div className=" col-md-4 col-lg-4 col-xl-4 col-12 col-sm-12 br releaseBr ">
                          <div className="cinema-item">
                            <ul className="nav nav-pills row">
                              {cumRap.cumRapChieu.map(
                                (chiTietRap, indexChiTietRap) => {
                                  return (
                                    <li
                                      className="nav-item col-12 col-sm-12 "
                                      key={indexChiTietRap}
                                    >
                                      <a
                                        className={`nav-link ${
                                          indexChiTietRap === 0 ? "active" : ""
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
                                }
                              )}
                            </ul>
                          </div>
                        </div>
                        <div className=" col-md-8 col-lg-8 col-xl-8 col-12 col-sm-12 list-cinema ">
                          <div className="tab-content">
                            {cumRap.cumRapChieu.map((chiTietRap, index1) => {
                              return (
                                <div
                                  key={index1}
                                  className={`tab-pane  fade show ${
                                    index1 === 0 ? "active" : ""
                                  }`}
                                  id={`${chiTietRap.maCumRap}`}
                                >
                                  <div className="row">
                                    <div className="col-12">
                                      {chiTietRap.lichChieuPhim.map(
                                        (phim, index2) => {
                                          return (
                                            <div
                                              className="list-flim-detail"
                                              key={index2}
                                            >
                                              <div className={classes.root}>
                                                <Accordion className="bg-secondary text-white">
                                                  <AccordionSummary
                                                    expandIcon={
                                                      <ExpandMoreIcon />
                                                    }
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
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
                                                        {
                                                          showTimeMovieDetail.tenPhim
                                                        }
                                                      </p>
                                                      <p className="cinema-address text-white">
                                                        Thời lượng :{" "}
                                                        {phim.thoiLuong} -{" "}
                                                        {phim.tenRap}
                                                      </p>
                                                    </div>
                                                  </AccordionSummary>

                                                  <AccordionSummary
                                                    aria-controls="panel2a-content"
                                                    id="panel2a-header"
                                                  >
                                                    <Typography
                                                      key={index2}
                                                      className="list-flim-detail-showtime"
                                                    >
                                                      <Link
                                                        className="a"
                                                        to="#"
                                                        onClick={() =>
                                                          handleBookingTicket(
                                                            phim.maLichChieu
                                                          )
                                                        }
                                                      >
                                                        <span className="ShowDate">
                                                          <Time
                                                            value={
                                                              phim.ngayChieuGioChieu
                                                            }
                                                            format="DD/MM/YY"
                                                          />
                                                        </span>
                                                        <span className="ShowDateTime">
                                                          <Time
                                                            value={
                                                              phim.ngayChieuGioChieu
                                                            }
                                                            format=" ~ hh:mm"
                                                          />
                                                        </span>
                                                      </Link>
                                                    </Typography>
                                                  </AccordionSummary>
                                                </Accordion>
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
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
