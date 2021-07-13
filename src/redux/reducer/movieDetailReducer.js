import { GET_MOVIE_DETAIL_SUCCESS } from "../const/movieDetailConst";

const initialState = {
  movieDetail: [],
};

export const movieDetailReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_MOVIE_DETAIL_SUCCESS:
      state.movieDetail = payload;
      return { ...state };
    default:
      return state;
  }
};
