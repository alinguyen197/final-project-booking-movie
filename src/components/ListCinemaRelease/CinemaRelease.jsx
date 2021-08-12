import React, { useEffect } from "react";
import bhdbitexco from "../../assets/img/ListCinemaRelease/bhdbitexco.png";
import { useSelector, useDispatch } from "react-redux";
import { GET_CINEMA_LIST_BY_BRAND } from "../../redux/const/cinemaConst";
import Time from "react-time-format";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import BlackBlock from "../../components/Black-block/BlackBlock";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
      <BlackBlock />
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
                                          <div className={classes.root}>
                                            <Accordion>
                                              <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                                className="list-flim-detail-infor"
                                              >
                                                <img
                                                  src={phim.hinhAnh}
                                                  alt=""
                                                />
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
                                              </AccordionSummary>

                                              <AccordionSummary
                                                aria-controls="panel2a-content"
                                                id="panel2a-header"
                                              >
                                                <Typography
                                                  key={index}
                                                  className="list-flim-detail-showtime"
                                                >
                                                  {phim.lstLichChieuTheoPhim.map(
                                                    (
                                                      lichChieu,
                                                      indexLichChieu
                                                    ) => {
                                                      return (
                                                        <Link
                                                          className="a"
                                                          to="#"
                                                          key={indexLichChieu}
                                                          onClick={() =>
                                                            handleBookingTicket(
                                                              lichChieu.maLichChieu
                                                            )
                                                          }
                                                        >
                                                          <span className="ShowDate">
                                                            <Time
                                                              value={
                                                                lichChieu.ngayChieuGioChieu
                                                              }
                                                              format="DD/MM/YY"
                                                            />
                                                          </span>
                                                          <span className="ShowDateTime">
                                                            <Time
                                                              value={
                                                                lichChieu.ngayChieuGioChieu
                                                              }
                                                              format=" ~ hh:mm"
                                                            />
                                                          </span>
                                                        </Link>
                                                      );
                                                    }
                                                  )}
                                                </Typography>
                                              </AccordionSummary>
                                            </Accordion>
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
      <BlackBlock />
    </section>
  );
}
