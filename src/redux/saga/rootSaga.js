import * as callApiSaga from "./callApiSaga";
import { all, call } from "redux-saga/effects";
export function* rootSaga() {
  // all theo dõi data , cập nhật data
  yield all([
    callApiSaga.followGetMovieList(),
    callApiSaga.followGetUserLogin(),
    callApiSaga.followGetMovieDetail(),
    callApiSaga.followGetCinemaListByBrand(),
    callApiSaga.followGetShowTimeByMovieCode(),
    callApiSaga.followGetUserList(),
    callApiSaga.followGetBookingListChair(),
    callApiSaga.followPostBookingMovieTicket(),
    callApiSaga.followPostHistoryOfUserProfile(),
    callApiSaga.followPutUpdatePassWord(),
    callApiSaga.followGetUserRegister(),
  ]);
}
