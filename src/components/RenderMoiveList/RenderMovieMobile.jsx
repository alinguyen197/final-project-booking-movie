import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { GET_MOVIE_LIST } from "../../redux/const/movieListConst";
import StarRating from "../MovieCard/StarRating";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});
export default function RenderMovieMobile() {
  const dispatch = useDispatch();

  const history = useHistory();
  const classes = useRowStyles();

  const handleViewDetail = (maPhim) => {
    //khi bấm button sẽ đẩy qua trang này + movieCode truyền lên url
    history.push(`/movie-detail/${maPhim}`);
  };
  const { movieList } = useSelector((state) => state.movieListReducer);

  const [itemMoviePage, setItemMoviePage] = useState(4);
  const [currentPage] = useState(1);
  const lastOfIndexMovie = itemMoviePage * currentPage;
  const firstOfIndexMovie = lastOfIndexMovie - itemMoviePage;
  const dataItemMoviePage = movieList?.slice(
    firstOfIndexMovie,
    lastOfIndexMovie
  );

  const handleLoadMovie = () => {
    setItemMoviePage(itemMoviePage + 4);
  };

  useEffect(() => {
    dispatch({ type: GET_MOVIE_LIST });
  }, [dispatch]);

  return (
    <section id="rendermoviemobile">
      <div className="movielist-inner">
        <ul className="nav nav-pills ">
          <li className="nav-item">
            <a className="nav-link active" data-toggle="pill" href="#loz1">
              Đang Chiếu
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="pill" href="#loz2">
              Sắp Chiếu
            </a>
          </li>
        </ul>

        <div className="tab-content">
          <div className="tab-pane container active" id="loz1">
            {dataItemMoviePage?.map((value, index) => {
              return (
                <div key={index}>
                  <div className=" movielist-item">
                    <div className="col-12">
                      <div
                        className="moviecardmobile"
                        onClick={() => handleViewDetail(value.maPhim)}
                      >
                        <img
                          className="card-img-top"
                          src={value.hinhAnh}
                          alt=""
                        />
                        <div className="rating">
                          <StarRating value={value} />
                        </div>
                        <div class="renderThumbnail">2D</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="tab-pane container face" id="loz2">
            {dataItemMoviePage?.reverse().map((value, index) => {
              return (
                <div key={index}>
                  <div className=" movielist-item">
                    <div className="col-12">
                      <div
                        className="moviecardmobile"
                        onClick={() => handleViewDetail(value.maPhim)}
                      >
                        <img
                          className="card-img-top"
                          src={value.hinhAnh}
                          alt=""
                        />
                        <div className="rating">
                          <StarRating value={value} />
                        </div>
                        <div class="renderThumbnail">2D</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center btnReadmore">
            <Button
              variant="contained"
              color="primary"
              className={classes.customeButon}
              onClick={handleLoadMovie}
            >
              Xem thêm
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
