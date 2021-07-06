import * as callApiSaga from "./callApiSaga";
import { all } from "redux-saga/effects";
export function* rootSaga() {
  yield all([callApiSaga.followGetMovieList()]);
}
