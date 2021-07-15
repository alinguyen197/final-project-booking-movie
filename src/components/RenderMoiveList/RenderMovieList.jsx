import React, { useEffect } from "react";
import Slider from "react-slick";
import { useSelector, useDispatch } from "react-redux";
import { GET_MOVIE_LIST } from "../../redux/const/movieListConst";
import MovieCard from "../MovieCard/MovieCard";

export default function RenderMovieList() {
  const dispatch = useDispatch();
  const { movieList } = useSelector((state) => state.movieListReducer);
  console.log(movieList);
  useEffect(() => {
    dispatch({ type: GET_MOVIE_LIST });
  }, []);

  const render = () => {
    var settings = {
      dots: false,
      infinite: false,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      rows: 2,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <section id="rendermovielist">
        <div className="">
          <div className="movielist-inner">
            {/* Nav pills */}
            <ul className="nav nav-pills ">
              <li className="nav-item">
                <a className="nav-link active" data-toggle="pill" href="#home">
                  Đang Chiếu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="pill" href="#menu1">
                  Sắp Chiếu
                </a>
              </li>
            </ul>
            {/* Tab panes */}
            <div className="tab-content">
              <div className="tab-pane container active" id="home">
                <Slider {...settings}>
                  {movieList.map((value, index) => {
                    return (
                      <div key={index}>
                        <div className=" movielist-item">
                          <div className="col-12">
                            <MovieCard value={value} />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
              <div className="tab-pane container fade" id="menu1">
                <Slider {...settings}>
                  {movieList.map((value, index) => {
                    return (
                      <div key={index}>
                        <div className=" movielist-item">
                          <div className="col-12">
                            <MovieCard value={value} />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return render();
}
