import React from "react";
import iconBHD from "../../assets/img/ListCinemaRelease/bhd.png";
import cinestar from "../../assets/img/ListCinemaRelease/cinestar.png";
import dongdacinema from "../../assets/img/ListCinemaRelease/dongdacinema.png";
import megags from "../../assets/img/ListCinemaRelease/megags.png";
import dcine from "../../assets/img/ListCinemaRelease/dcine.png";
import lottecinema from "../../assets/img/ListCinemaRelease/lottecinema.png";
import bhdbitexco from "../../assets/img/ListCinemaRelease/bhdbitexco.png";
import wonderwoman from "../../assets/img/ListCinemaRelease/WW.png";
import cinemaHBT from "../../assets/img/ListCinemaRelease/cinemaHBT.jpg";
import chi13 from "../../assets/img/ListCinemaRelease/chi13.png";

export default function CinemaRelease() {
  return (
    <section id="cinemarelease">
      <div className="container">
        <div className="row listcinema">
          <div
            className="col-12 col-sm-12 col-md-1 col-lg-1 col-xl-1 content"
            style={{ border: "1px solid #ebebec" } }
          >
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a className="nav-link active" data-toggle="pill" href="#bhd">
                  <div className="logo-cinema">
                    <img src={iconBHD} alt="" />
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="pill" href="#cns">
                  <div className="logo-cinema">
                    <img src={cinestar} alt="" />
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="pill" href="#brand3">
                  <div className="logo-cinema">
                    <img src={dongdacinema} alt="" />
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="pill" href="#brand4">
                  <div className="logo-cinema">
                    <img src={megags} alt="" />
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="pill" href="#brand5">
                  <div className="logo-cinema">
                    <img src={dcine} alt="" />
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="pill" href="#brand6">
                  <div className="logo-cinema">
                    <img src={lottecinema} alt="" />
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div
            className=" col-md-11 col-lg-11 col-xl-11 col-12 col-sm-12"
            style={{ border: "1px solid #ebebec" }}
          >
            <div className="tab-content">
              <div className="tab-pane container show active " id="bhd">
                <div className="row">
                  <div className=" col-md-4 col-lg-4 col-xl-4 col-12 col-sm-12 br ">
                    <div className="cinema-item">
                      <ul className="nav nav-pills row">
                        <li className="nav-item col-12 col-sm-12">
                          <a
                            className="nav-link active"
                            data-toggle="pill"
                            href="#bhd1"
                          >
                            <div className="row cinema-banner">
                              <div className="col-3">
                                <img src={bhdbitexco} alt="" />
                              </div>
                              <div className="col-9 cinema-infor">
                                <p className="cinema-name">
                                  {" "}
                                  <span className="bhd">BHD Star</span> -
                                  Bitexco
                                </p>
                                <p className="cinema-address">
                                  L3-Bitexco Icon 68, 2 Hải Triều, Quận 1
                                </p>
                                <p className="cinema-detail">[chi tiết]</p>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="nav-item col-12 col-sm-12">
                          <a
                            className="nav-link"
                            data-toggle="pill"
                            href="#bhd2"
                          >
                            <div className="row cinema-banner">
                              <div className="col-3">
                                <img src={bhdbitexco} alt="" />
                              </div>
                              <div className="col-9 cinema-infor">
                                <p className="cinema-name">
                                  {" "}
                                  <span className="bhd">BHD Star</span> -
                                  Bitexco
                                </p>
                                <p className="cinema-address">
                                  L3-Bitexco Icon 68, 2 Hải Triều, Quận 1
                                </p>
                                <p className="cinema-detail">[chi tiết]</p>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="nav-item col-12 col-sm-12">
                          <a
                            className="nav-link"
                            data-toggle="pill"
                            href="#bhd3"
                          >
                            <div className="row cinema-banner">
                              <div className="col-3">
                                <img src={bhdbitexco} alt="" />
                              </div>
                              <div className="col-9 cinema-infor">
                                <p className="cinema-name">
                                  {" "}
                                  <span className="bhd">BHD Star</span> -
                                  Bitexco
                                </p>
                                <p className="cinema-address">
                                  L3-Bitexco Icon 68, 2 Hải Triều, Quận 1
                                </p>
                                <p className="cinema-detail">[chi tiết]</p>
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className=" col-md-8 col-lg-8 col-xl-8 col-12 col-sm-12 list-cinema ">
                    <div className="tab-content">
                      <div
                        className="tab-pane container fade show active"
                        id="bhd1"
                      >
                        <div className="row">
                          <div className="col-12">
                            <div className="list-flim-detail">
                              <div className="list-flim-detail-infor">
                                <img src={wonderwoman} alt="" />
                                <div className="list-flim-detail-infor-name">
                                  <span className="list-flim-detail-infor-name-type">
                                    C13
                                  </span>
                                  <p className="list-flim-detail-infor-movie-name">
                                    {" "}
                                    Nữ Thần Chiến Binh 1984 - Wonder Woman 1984
                                    BHD1
                                  </p>
                                  <p className="cinema-address">
                                    100 phút - TIX 7 - IMDb 0
                                  </p>
                                </div>
                              </div>
                              <div className="list-flim-detail-type">
                                2D Digital
                              </div>
                              <div className="list-flim-detail-showtime">
                                <a href>
                                  <span>12:00</span> ~ 14:00
                                </a>
                                <a href>
                                  <span>12:00</span> ~ 14:00
                                </a>
                                <a href>
                                  <span>12:00</span> ~ 14:00
                                </a>
                                <a href>
                                  <span>12:00</span> ~ 14:00
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane container fade" id="bhd2">
                        <div className="row">
                          <div className="col-12">
                            <div className="list-flim-detail">
                              <div className="list-flim-detail-infor">
                                <img src={wonderwoman} alt="" />
                                <div className="list-flim-detail-infor-name">
                                  <span className="list-flim-detail-infor-name-type">
                                    C13
                                  </span>
                                  <p className="list-flim-detail-infor-movie-name">
                                    {" "}
                                    Nữ Thần Chiến Binh 1984 - Wonder Woman 1984
                                    BHD2
                                  </p>
                                  <p className="cinema-address">
                                    100 phút - TIX 7 - IMDb 0
                                  </p>
                                </div>
                              </div>
                              <div className="list-flim-detail-type">
                                2D Digital
                              </div>
                              <div className="list-flim-detail-showtime">
                                <a href>
                                  <span>12:00</span> ~ 14:00
                                </a>
                                <a href>
                                  <span>12:00</span> ~ 14:00
                                </a>
                                <a href>
                                  <span>12:00</span> ~ 14:00
                                </a>
                                <a href>
                                  <span>12:00</span> ~ 14:00
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane container fade" id="bhd3">
                        <div className=" row">
                          <div className="col-12">
                            <div className="list-flim-detail">
                              <div className="list-flim-detail-infor">
                                <img src={wonderwoman} alt="" />
                                <div className="list-flim-detail-infor-name">
                                  <span className="list-flim-detail-infor-name-type">
                                    C13
                                  </span>
                                  <p className="list-flim-detail-infor-movie-name">
                                    {" "}
                                    Nữ Thần Chiến Binh 1984 - Wonder Woman 1984
                                    BHD1
                                  </p>
                                  <p className="cinema-address">
                                    100 phút - TIX 7 - IMDb 0
                                  </p>
                                </div>
                              </div>
                              <div className="list-flim-detail-type">
                                2D Digital
                              </div>
                              <div className="list-flim-detail-showtime">
                                <a href>
                                  <span>12:00</span> ~ 14:00
                                </a>
                                <a href>
                                  <span>12:00</span> ~ 14:00
                                </a>
                                <a href>
                                  <span>12:00</span> ~ 14:00
                                </a>
                                <a href>
                                  <span>12:00</span> ~ 14:00
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane container show fade" id="cns">
                <div className="row">
                  <div className=" col-md-4 col-lg-4 col-xl-4 col-12 col-sm-12 br ">
                    <div className="cinema-item">
                      <ul className="nav nav-pills row">
                        <li className="nav-item col-12 col-sm-12">
                          <a
                            className="nav-link active"
                            data-toggle="pill"
                            href="#cns1"
                          >
                            <div className="row cinema-banner">
                              <div className="col-3">
                                <img src={cinemaHBT} alt="" />
                              </div>
                              <div className="col-9 cinema-infor">
                                <p className="cinema-name">
                                  {" "}
                                  <span className="cns">CNS </span> - Hai Bà
                                  Trưng
                                </p>
                                <p className="cinema-address">
                                  L3-Bitexco Icon 68, 2 Hải Triều, Quận 1
                                </p>
                                <p className="cinema-detail">[chi tiết]</p>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="nav-item col-12 col-sm-12">
                          <a
                            className="nav-link"
                            data-toggle="pill"
                            href="#cns2"
                          >
                            <div className="row cinema-banner">
                              <div className="col-3">
                                <img src={cinemaHBT} alt="" />
                              </div>
                              <div className="col-9 cinema-infor">
                                <p className="cinema-name">
                                  {" "}
                                  <span className="cns">CNS </span> - Quốc Thanh
                                </p>
                                <p className="cinema-address">
                                  L3-Bitexco Icon 68, 2 Hải Triều, Quận 1
                                </p>
                                <p className="cinema-detail">[chi tiết]</p>
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className=" col-md-8 col-lg-8 col-xl-8 col-12 col-sm-12 list-cinema ">
                    <div className="tab-content">
                      <div
                        className="tab-pane container fade show active"
                        id="cns1"
                      >
                        <div className="row">
                          <div className="col-12">
                            <div className="list-flim-detail">
                              <div className="list-flim-detail-infor">
                                <img src={chi13} alt="" />
                                <div className="list-flim-detail-infor-name">
                                  <span className="list-flim-detail-infor-name-type">
                                    C13
                                  </span>
                                  <p className="list-flim-detail-infor-movie-name">
                                    {" "}
                                    Chị Mười Ba: 3 Ngày Sinh Tử
                                  </p>
                                  <p className="cinema-address">
                                    100 phút - TIX 7 - IMDb 0
                                  </p>
                                </div>
                              </div>
                              <div className="list-flim-detail-type">
                                2D Digital
                              </div>
                              <div className="list-flim-detail-showtime">
                                <a href>
                                  <span>12:00</span> ~ 14:00
                                </a>
                                <a href>
                                  <span>12:00</span> ~ 14:00
                                </a>
                                <a href>
                                  <span>12:00</span> ~ 14:00
                                </a>
                                <a href>
                                  <span>12:00</span> ~ 14:00
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane container fade" id="cns2">
                        <div className="row">
                          <div className="col-12">
                            <div className="list-flim-detail">
                              <div className="list-flim-detail-infor">
                                <img src={chi13} alt="" />
                                <div className="list-flim-detail-infor-name">
                                  <span className="list-flim-detail-infor-name-type">
                                    C13
                                  </span>
                                  <p className="list-flim-detail-infor-movie-name">
                                    {" "}
                                    Chị Mười Ba: 3 Ngày Sinh Tử
                                  </p>
                                  <p className="cinema-address">
                                    100 phút - TIX 7 - IMDb 0
                                  </p>
                                </div>
                              </div>
                              <div className="list-flim-detail-type">
                                2D Digital
                              </div>
                              <div className="list-flim-detail-showtime">
                                <a href>
                                  <span>12:00</span> ~ 14:00
                                </a>
                                <a href>
                                  <span>12:00</span> ~ 14:00
                                </a>
                                <a href>
                                  <span>12:00</span> ~ 14:00
                                </a>
                                <a href>
                                  <span>12:00</span> ~ 14:00
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <div className="list-flim-detail">
                              <div className="list-flim-detail-infor">
                                <img src={chi13} alt="" />
                                <div className="list-flim-detail-infor-name">
                                  <span className="list-flim-detail-infor-name-type">
                                    C13
                                  </span>
                                  <p className="list-flim-detail-infor-movie-name">
                                    {" "}
                                    Chị Mười Ba: 3 Ngày Sinh Tử
                                  </p>
                                  <p className="cinema-address">
                                    100 phút - TIX 7 - IMDb 0
                                  </p>
                                </div>
                              </div>
                              <div className="list-flim-detail-type">
                                2D Digital
                              </div>
                              <div className="list-flim-detail-showtime">
                                <a href>
                                  <span>12:00</span> ~ 14:00
                                </a>
                                <a href>
                                  <span>12:00</span> ~ 14:00
                                </a>
                                <a href>
                                  <span>12:00</span> ~ 14:00
                                </a>
                                <a href>
                                  <span>12:00</span> ~ 14:00
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <div className="list-flim-detail">
                              <div className="list-flim-detail-infor">
                                <img src={chi13} alt="" />
                                <div className="list-flim-detail-infor-name">
                                  <span className="list-flim-detail-infor-name-type">
                                    C13
                                  </span>
                                  <p className="list-flim-detail-infor-movie-name">
                                    {" "}
                                    Chị Mười Ba: 3 Ngày Sinh Tử
                                  </p>
                                  <p className="cinema-address">
                                    100 phút - TIX 7 - IMDb 0
                                  </p>
                                </div>
                              </div>
                              <div className="list-flim-detail-type">
                                2D Digital
                              </div>
                              <div className="list-flim-detail-showtime">
                                <a href>
                                  <span>12:00</span> ~ 14:00
                                </a>
                                <a href>
                                  <span>12:00</span> ~ 14:00
                                </a>
                                <a href>
                                  <span>12:00</span> ~ 14:00
                                </a>
                                <a href>
                                  <span>12:00</span> ~ 14:00
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <div className="list-flim-detail">
                              <div className="list-flim-detail-infor">
                                <img src={chi13} alt="" />
                                <div className="list-flim-detail-infor-name">
                                  <span className="list-flim-detail-infor-name-type">
                                    C13
                                  </span>
                                  <p className="list-flim-detail-infor-movie-name">
                                    {" "}
                                    Chị Mười Ba: 3 Ngày Sinh Tử
                                  </p>
                                  <p className="cinema-address">
                                    100 phút - TIX 7 - IMDb 0
                                  </p>
                                </div>
                              </div>
                              <div className="list-flim-detail-type">
                                2D Digital
                              </div>
                              <div className="list-flim-detail-showtime">
                                <a href>
                                  <span>12:00</span> ~ 14:00
                                </a>
                                <a href>
                                  <span>12:00</span> ~ 14:00
                                </a>
                                <a href>
                                  <span>12:00</span> ~ 14:00
                                </a>
                                <a href>
                                  <span>12:00</span> ~ 14:00
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <div className="list-flim-detail">
                              <div className="list-flim-detail-infor">
                                <img src={chi13} alt="" />
                                <div className="list-flim-detail-infor-name">
                                  <span className="list-flim-detail-infor-name-type">
                                    C13
                                  </span>
                                  <p className="list-flim-detail-infor-movie-name">
                                    {" "}
                                    Chị Mười Ba: 3 Ngày Sinh Tử
                                  </p>
                                  <p className="cinema-address">
                                    100 phút - TIX 7 - IMDb 0
                                  </p>
                                </div>
                              </div>
                              <div className="list-flim-detail-type">
                                2D Digital
                              </div>
                              <div className="list-flim-detail-showtime">
                                <a href>
                                  <span>12:00</span> ~ 14:00
                                </a>
                                <a href>
                                  <span>12:00</span> ~ 14:00
                                </a>
                                <a href>
                                  <span>12:00</span> ~ 14:00
                                </a>
                                <a href>
                                  <span>12:00</span> ~ 14:00
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <div className="list-flim-detail">
                              <div className="list-flim-detail-infor">
                                <img src={chi13} alt="" />
                                <div className="list-flim-detail-infor-name">
                                  <span className="list-flim-detail-infor-name-type">
                                    C13
                                  </span>
                                  <p className="list-flim-detail-infor-movie-name">
                                    {" "}
                                    Chị Mười Ba: 3 Ngày Sinh Tử
                                  </p>
                                  <p className="cinema-address">
                                    100 phút - TIX 7 - IMDb 0
                                  </p>
                                </div>
                              </div>
                              <div className="list-flim-detail-type">
                                2D Digital
                              </div>
                              <div className="list-flim-detail-showtime">
                                <a href>
                                  <span>12:00</span> ~ 14:00
                                </a>
                                <a href>
                                  <span>12:00</span> ~ 14:00
                                </a>
                                <a href>
                                  <span>12:00</span> ~ 14:00
                                </a>
                                <a href>
                                  <span>12:00</span> ~ 14:00
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <div className="list-flim-detail">
                              <div className="list-flim-detail-infor">
                                <img src={chi13} alt="" />
                                <div className="list-flim-detail-infor-name">
                                  <span className="list-flim-detail-infor-name-type">
                                    C13
                                  </span>
                                  <p className="list-flim-detail-infor-movie-name">
                                    {" "}
                                    Chị Mười Ba: 3 Ngày Sinh Tử
                                  </p>
                                  <p className="cinema-address">
                                    100 phút - TIX 7 - IMDb 0
                                  </p>
                                </div>
                              </div>
                              <div className="list-flim-detail-type">
                                2D Digital
                              </div>
                              <div className="list-flim-detail-showtime">
                                <a href>
                                  <span>12:00</span> ~ 14:00
                                </a>
                                <a href>
                                  <span>12:00</span> ~ 14:00
                                </a>
                                <a href>
                                  <span>12:00</span> ~ 14:00
                                </a>
                                <a href>
                                  <span>12:00</span> ~ 14:00
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <div className="list-flim-detail">
                              <div className="list-flim-detail-infor">
                                <img src={chi13} alt="" />
                                <div className="list-flim-detail-infor-name">
                                  <span className="list-flim-detail-infor-name-type">
                                    C13
                                  </span>
                                  <p className="list-flim-detail-infor-movie-name">
                                    {" "}
                                    Chị Mười Ba: 3 Ngày Sinh Tử
                                  </p>
                                  <p className="cinema-address">
                                    100 phút - TIX 7 - IMDb 0
                                  </p>
                                </div>
                              </div>
                              <div className="list-flim-detail-type">
                                2D Digital
                              </div>
                              <div className="list-flim-detail-showtime">
                                <a href>
                                  <span>12:00</span> ~ 14:00
                                </a>
                                <a href>
                                  <span>12:00</span> ~ 14:00
                                </a>
                                <a href>
                                  <span>12:00</span> ~ 14:00
                                </a>
                                <a href>
                                  <span>12:00</span> ~ 14:00
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane container fade" id="cns3">
                        <div className=" row">
                          <div className="col-12">
                            <div className="list-flim-detail">
                              <div className="list-flim-detail-infor">
                                <img src={wonderwoman} alt="" />
                                <div className="list-flim-detail-infor-name">
                                  <span className="list-flim-detail-infor-name-type">
                                    C13
                                  </span>
                                  <p className="list-flim-detail-infor-movie-name">
                                    {" "}
                                    Nữ Thần Chiến Binh 1984 - Wonder Woman 1984
                                    BHD1
                                  </p>
                                  <p className="cinema-address">
                                    100 phút - TIX 7 - IMDb 0
                                  </p>
                                </div>
                              </div>
                              <div className="list-flim-detail-type">
                                2D Digital
                              </div>
                              <div className="list-flim-detail-showtime">
                                <a href>
                                  <span>12:00</span> ~ 14:00
                                </a>
                                <a href>
                                  <span>12:00</span> ~ 14:00
                                </a>
                                <a href>
                                  <span>12:00</span> ~ 14:00
                                </a>
                                <a href>
                                  <span>12:00</span> ~ 14:00
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
