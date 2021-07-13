import * as callApiSaga from "./callApiSaga";
import { all } from "redux-saga/effects";
export function* rootSaga() {
  // all theo dõi data , cập nhật data
  yield all([
    callApiSaga.followGetMovieList(),
    callApiSaga.followGetUserLogin(),
    callApiSaga.followGetMovieDetail(),
  ]);
}
