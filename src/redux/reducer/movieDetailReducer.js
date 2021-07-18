import {
  GET_MOVIE_DETAIL_SUCCESS,
  GET_MOVIE_DETAIL_SHOWTIMES_BY_MOVIECODE_SUCCESS,
} from "../const/movieDetailConst";

const initialState = {
  movieDetail: [],
  showTimeMovieDetail: [],
};

export const movieDetailReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_MOVIE_DETAIL_SUCCESS:
      state.movieDetail = payload;
      return { ...state };
    case GET_MOVIE_DETAIL_SHOWTIMES_BY_MOVIECODE_SUCCESS:
      console.log(action);
      state.showTimeMovieDetail = payload;
      return { ...state };
    default:
      return state;
  }
};
