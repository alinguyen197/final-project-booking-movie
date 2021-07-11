import { START_LOADING, STOP_LOADING } from "../const/commonConst";

const initialState = {
  isLoading: false,
};

const commomReducer = (state = initialState, action) => {
  let { type } = action;
  switch (type) {
    case START_LOADING:
      state.isLoading = true;
      return { ...state };
    case STOP_LOADING:
      state.isLoading = false;
      return { ...state };

    default:
      return { ...state };
  }
};
export default commomReducer;
