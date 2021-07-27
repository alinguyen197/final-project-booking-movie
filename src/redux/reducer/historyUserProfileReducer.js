import { POST_HISTORY_OF_USER_PROFILE_SUCCESS } from "../const/historyUserProfileConst";

const initialState = {
  historyUserProfile: [],
};

const historyUserProfileReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case POST_HISTORY_OF_USER_PROFILE_SUCCESS:
      state.historyUserProfile = payload;
      return { ...state };
    default:
      return { ...state };
  }
};
export default historyUserProfileReducer;
