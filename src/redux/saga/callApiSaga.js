import { takeLatest, call, put, delay } from "redux-saga/effects";
import { service } from "../../services/service";
import { STATUS_CODE } from "../../util/const/settingSystem";
import { START_LOADING, STOP_LOADING } from "../const/commonConst";
import {
  GET_MOVIE_DETAIL,
  GET_MOVIE_DETAIL_SUCCESS,
} from "../const/movieDetailConst";
import {
  GET_MOVIE_LIST,
  GET_MOVIE_LIST_SUCCESS,
} from "../const/movieListConst";
import {
  GET_USER_LOGIN_SUCCESS,
  GET_USER_LOGIN,
} from "../const/userLoginConst";

import { GET_USER_LIST_SUCCESS, GET_USER_LIST } from "../const/userListConst";
/**
 *
 * Hàm gọi api lấy tất cả danh sách phim
 *
 *
 */
function* getMovieList(action) {
  try {
    // start loading
    yield put({
      type: START_LOADING,
    });
    //delay cho hiệu ứng đẹp
    yield delay(1000);
    let { data, status } = yield call(service.getMovieListApi);

    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: GET_MOVIE_LIST_SUCCESS,
        payload: data,
      });
    }
    //stop loading
    yield put({
      type: STOP_LOADING,
    });
  } catch (err) {
    console.log(err);
  }
}

export function* followGetMovieList() {
  // takeLatest gọi hàm chạy render function genetor
  yield takeLatest(GET_MOVIE_LIST, getMovieList);
}

/***
 *
 *  Lấy chi tiết thông tin  phim
 */
function* getMovieDetail(action) {
  try {
    // start loading
    yield put({
      type: START_LOADING,
    });
    //delay cho hiệu ứng đẹp
    yield delay(1000);
    let { data, status } = yield call(() => {
      return service.getMovieDetailApi(action.payload);
    });
    // lưu lên store
    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: GET_MOVIE_DETAIL_SUCCESS,
        payload: data,
      });
    }

    //stop loading
    yield put({
      type: STOP_LOADING,
    });
  } catch (err) {
    console.log(err);
  }
}

export function* followGetMovieDetail() {
  // takeLatest gọi hàm chạy render function genetor
  yield takeLatest(GET_MOVIE_DETAIL, getMovieDetail);
}

/***
 *
 *  Đăng nhập
 */
function* getUserLogin(action) {
  try {
    // start loading
    yield put({
      type: START_LOADING,
    });
    //delay cho hiệu ứng đẹp
    yield delay(1000);
    let { data, status } = yield call(() => {
      return service.getUserLoginApi(action.payload);
    });
    console.log(data);
    // lưu nó xuống local storage
    const { accessToken, taiKhoan, maLoaiNguoiDung, ...userLogin } = data;

    localStorage.setItem("token", JSON.stringify(accessToken));
    localStorage.setItem("taiKhoan", JSON.stringify(taiKhoan));
    localStorage.setItem("maLoaiNguoiDung", JSON.stringify(maLoaiNguoiDung));

    // lưu lên store
    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: GET_USER_LOGIN_SUCCESS,
        payload: { ...data, isValid: true },
      });
    }

    //stop loading
    yield put({
      type: STOP_LOADING,
    });
    alert("Đăng nhập thành công !!");
    action.history.push("/");
  } catch (err) {
    alert("Tài Khoản & Mật khẩu không chính xác !!!");
    yield put({
      type: STOP_LOADING,
    });
  }
}

export function* followGetUserLogin() {
  // takeLatest gọi hàm chạy render function genetor
  yield takeLatest(GET_USER_LOGIN, getUserLogin);
}
/**
 * Lấy danh sách người dùng
 */
function* getUserList(action) {
  try {
    // start loading
    yield put({
      type: START_LOADING,
    });
    //delay cho hiệu ứng đẹp
    yield delay(1000);
    let { data, status } = yield call(service.getUserListApi);

    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: GET_USER_LIST_SUCCESS,
        payload: data,
      });
    }
    //stop loading
    yield put({
      type: STOP_LOADING,
    });
  } catch (err) {
    console.log(err);
  }
}

export function* followGetUserList() {
  // takeLatest gọi hàm chạy render function genetor
  yield takeLatest(GET_USER_LIST, getUserList);
}
