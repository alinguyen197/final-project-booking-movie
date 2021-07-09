import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GET_MOVIE_LIST } from "../../redux/const/movieListConst";

export default function RenderMovieList() {
  const dispatch = useDispatch();
  const { movieList } = useSelector((state) => state.movieListReducer);
  console.log(movieList);
  useEffect(() => {
    dispatch({ type: GET_MOVIE_LIST });
  }, []);
  return (
    <div className="text-center">
      <h1>Render Movie List - Test Data Get Movie List</h1>
    </div>
  );
}
