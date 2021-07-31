import { GET_USER_REGISTER_SUCCESS } from "../const/userRegisterConst";

const initialState = {
  userRegister: [],
};

const userRegisterReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case GET_USER_REGISTER_SUCCESS:
      state.userRegister = payload;
      return { ...state };
    default:
      return state;
  }
};
export default userRegisterReducer;
