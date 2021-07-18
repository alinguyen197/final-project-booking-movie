import { combineReducers } from "redux";
import { movieListReducer } from "./movieListReducer";
import commonReducer from "./commonReducer";
import userLoginReducer from "./userLoginReducer";
import { movieDetailReducer } from "./movieDetailReducer";
import { userListReducer } from "./userListReducer";
export const rootReducer = combineReducers({
  movieListReducer,
  commonReducer,
  userLoginReducer,
  movieDetailReducer,
  userListReducer,
});
