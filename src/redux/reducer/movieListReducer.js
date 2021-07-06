import { GET_MOVIE_LIST_SUCCESS } from "../const/movieListConst";

const initialState = {
  movieList: [],
};

export const movieListReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_MOVIE_LIST_SUCCESS:
      console.log(action);
      state.movieList = payload;
      return { ...state };

    default:
      return state;
  }
};
