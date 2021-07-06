import { combineReducers } from "redux";
import { movieListReducer } from "./movieListReducer";
import commonReducer from "./commonReducer";
export const rootReducer = combineReducers({
  movieListReducer,
  commonReducer,
});
