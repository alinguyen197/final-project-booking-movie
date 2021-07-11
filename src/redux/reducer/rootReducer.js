import { combineReducers } from "redux";
import { movieListReducer } from "./movieListReducer";
import commonReducer from "./commonReducer";
import userLoginReducer from "./userLoginReducer";
export const rootReducer = combineReducers({
  movieListReducer,
  commonReducer,
  userLoginReducer,
});
