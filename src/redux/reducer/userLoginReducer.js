import {
  ERR_MESSAGE,
  GET_USER_LOGIN_SUCCESS,
  SUCCESS_MESSAGE,
} from "../const/userLoginConst";

const initialState = {
  userLogin: [],
  err_message: "",
};

const userLoginReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case GET_USER_LOGIN_SUCCESS:
      state.userLogin = payload;
      return { ...state };
    case "LOG_OUT":
      state.userLogin = [];
      return { ...state };
    case ERR_MESSAGE:
      state.err_message = payload;
      return { ...state };
    case SUCCESS_MESSAGE:
      state.err_message = "";
      return { ...state };
    default:
      return state;
  }
};
export default userLoginReducer;
