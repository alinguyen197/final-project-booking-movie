import {
  GET_CINEMA_BRAND_SUCCESS,
  GET_CINEMA_LIST_BY_BRAND_SUCCESS,
} from "../const/cinemaConst";

const initialState = {
  cinemaListByBrand: [],
};

export const cinemaReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CINEMA_LIST_BY_BRAND_SUCCESS:
      state.cinemaListByBrand = payload;
      return { ...state };
    default:
      return state;
  }
};
