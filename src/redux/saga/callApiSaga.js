import { takeLatest, call, put } from "redux-saga/effects";
import { service } from "../../services/service";
import { STATUS_CODE } from "../../util/const/settingSystem";
import {
  GET_MOVIE_LIST,
  GET_MOVIE_LIST_SUCCESS,
} from "../const/movieListConst";

/**
 *
 * Hàm gọi api lấy tất cả danh sách phim
 *
 *
 */
function* getMovieList(action) {
  try {
    let { data, status } = yield call(service.getMovieListApi);

    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: GET_MOVIE_LIST_SUCCESS,
        payload: data,
      });
    }
  } catch (err) {
    console.log(err);
  }
}

export function* followGetMovieList() {
  // takeLatest gọi hàm chạy render function genetor
  yield takeLatest(GET_MOVIE_LIST, getMovieList);
}
