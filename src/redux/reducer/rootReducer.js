import { combineReducers } from "redux";
import { movieListReducer } from "./movieListReducer";
import commonReducer from "./commonReducer";
import userLoginReducer from "./userLoginReducer";
import { movieDetailReducer } from "./movieDetailReducer";
import { cinemaReducer } from "./cinemaReducer";
import { userListReducer } from "./userListReducer";
import { bookingReducer } from "./bookingReducer";
import historyUserProfileReducer from "./historyUserProfileReducer";
export const rootReducer = combineReducers({
  movieListReducer,
  commonReducer,
  userLoginReducer,
  movieDetailReducer,
  cinemaReducer,
  userListReducer,
  bookingReducer,
  historyUserProfileReducer,
});
