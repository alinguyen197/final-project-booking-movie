import { GET_USER_LIST_SUCCESS } from "../const/userListConst";

const initialState = {
  userList: [],
};

export const userListReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USER_LIST_SUCCESS:
      state.userList = payload;
      return { ...state };
    default:
      return state;
  }
};
