import { GET_USER_LOGIN_SUCCESS } from "../const/userLoginConst";

const initialState = {
  userLogin: [],
};

const userLoginReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case GET_USER_LOGIN_SUCCESS:
      state.userLogin = payload;
      return { ...state };

    default:
      return state;
  }
};
export default userLoginReducer;
