import React, { useEffect } from "react";
import { withRouter } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { GET_MOVIE_DETAIL } from "../../redux/const/movieDetailConst";
import Footer from "../../components/Footer/Footer";
import Time from "react-time-format";
import InforTable from "./InforTable";
import ShowTime from "./ShowTime";
import Comment from "./Comment";
import Progressbar from "../../components/Circular-progressbar/Progressbar";
import VideoModal from "../../components/Modal-video/VideoModal";
import ModalVideo2 from "../../components/Modal-video/MovieCard2";

function MovieDetail(props) {
  const dispatch = useDispatch();
  //get movieCode trên url
  const { movieCode } = props.match.params;
  useEffect(() => {
    dispatch({
      type: GET_MOVIE_DETAIL,
      payload: movieCode,
    });
  }, [dispatch, movieCode]);

  const { movieDetail } = useSelector((state) => state.movieDetailReducer);
  const { hinhAnh, ngayKhoiChieu, tenPhim, trailer, danhGia } = movieDetail;
  const formatTime = new Date(ngayKhoiChieu);
  return (
    <section id="movieDetail">
      <div style={{ height: 60 }}></div>

      {/* Giới thiệu */}
      <div className="backgroundMain">
        {/* playing */}
        <div
          className="playing-trailer"
          style={{ height: "100%", width: "100%" }}
        >
          <ModalVideo2 trailer={trailer} />
        </div>
        <div className="styleBlur">
          {/* ảnh blur */}
          <img
            className="posterLandscapeFilm"
            src={hinhAnh}
            alt=""
            style={{ backgroundSize: "100% 100%" }}
          />
          {/* gradient */}
          <div className="styleGradient"></div>
          {/* nội dung thông tin ở trong container */}
          <div className="containerCustom detailMainInfor ">
            <div className="col-12 col-sm-12  col-md-12 col-lg-3 col-xl-3">
              <div className="filmPoster">
                <img src={hinhAnh} style={{ width: "100%" }} alt="" />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className="filmName">
                <span className="film-date-release">
                  <Time value={formatTime} format="DD/MM/YYYY" />
                </span>
                <span className="film-title">{tenPhim}</span>
                <div className="film-time-trailer">
                  <VideoModal trailer={trailer} />
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
              <Progressbar danhGia={danhGia} />
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>

      {/* Nội dung  */}
      <div className="contentMain">
        <div className="containerCustom2">
          <div className="contentMain-inner">
            <div>
              {/* Nav pills */}
              <ul className="nav nav-pills contentMain-nav">
                <li className="nav-item contentMain-item ">
                  <a
                    className="nav-link contentMain-link active "
                    data-toggle="pill"
                    href="#infor"
                  >
                    Thông Tin
                  </a>
                </li>
                <li className="nav-item contentMain-item">
                  <a
                    className="nav-link contentMain-link"
                    data-toggle="pill"
                    href="#comment"
                  >
                    Đánh Giá
                  </a>
                </li>
              </ul>
              {/* Tab panes */}
              <div className="tab-content">
                <div className="tab-pane container active" id="infor">
                  <InforTable movieDetail={movieDetail} />
                  <ShowTime movieCode={movieCode} />
                </div>
                <div className="tab-pane container fade" id="comment">
                  <Comment />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>{/* <ShowTime movieCode={movieCode} /> */}</div>
      </div>

      <Footer />
    </section>
  );
}
export default withRouter(MovieDetail);
