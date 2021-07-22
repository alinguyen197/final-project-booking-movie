import { takeLatest, call, put, delay } from "redux-saga/effects";
import { service } from "../../services/service";
import { STATUS_CODE } from "../../util/const/settingSystem";
import {
  GET_CINEMA_LIST_BY_BRAND,
  GET_CINEMA_LIST_BY_BRAND_SUCCESS,
} from "../const/cinemaConst";
import { START_LOADING, STOP_LOADING } from "../const/commonConst";
import {
  GET_MOVIE_DETAIL,
  GET_MOVIE_DETAIL_SHOWTIMES_BY_MOVIECODE,
  GET_MOVIE_DETAIL_SHOWTIMES_BY_MOVIECODE_SUCCESS,
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
import {
  BOOKING_MOVIE_TICKET,
  BOOKING_MOVIE_TICKET_SUCCESS,
  GET_BOOKING_LIST_CHAIR,
  GET_BOOKING_LIST_CHAIR_SUCCESS,
} from "../const/bookingConst";
import { POST_MOVIE } from "../const/adminMovieManagementConst";

/**
 *
 * Hàm gọi api lấy tất cả danh sách phim
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
    action.history.goBack();
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
 * Lấy danh sách  rạp theo Brand
 */
function* getCinemaListByBrand(action) {
  console.log(action);
  try {
    let { status, data } = yield call(service.getCinemaListBrandApi);
    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: GET_CINEMA_LIST_BY_BRAND_SUCCESS,
        payload: data,
      });
    }
  } catch (err) {
    console.log(err);
  }
}
export function* followGetCinemaListByBrand() {
  yield takeLatest(GET_CINEMA_LIST_BY_BRAND, getCinemaListByBrand);
}

/**
 *
 * Lấy lịch chiếu trong movie detail by movieCode
 */
function* getShowTimeByMovieCode(action) {
  console.log(action);
  try {
    let { status, data } = yield call(() => {
      return service.getShowTimeByMoiveCodeApi(action.payload);
    });
    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: GET_MOVIE_DETAIL_SHOWTIMES_BY_MOVIECODE_SUCCESS,
        payload: data,
      });
    }
  } catch (err) {
    console.log(err);
  }
}
export function* followGetShowTimeByMovieCode() {
  yield takeLatest(
    GET_MOVIE_DETAIL_SHOWTIMES_BY_MOVIECODE,
    getShowTimeByMovieCode
  );
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

/**
 * Lấy danh sách ghế từ mã lịch chiếu
 *
 */
function* getBookingListChair(action) {
  try {
    // start loading
    yield put({
      type: START_LOADING,
    });
    //delay cho hiệu ứng đẹp
    yield delay(1000);
    let { status, data } = yield call(() => {
      return service.getListBookingChairApi(action.payload);
    });

    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: GET_BOOKING_LIST_CHAIR_SUCCESS,
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
export function* followGetBookingListChair() {
  yield takeLatest(GET_BOOKING_LIST_CHAIR, getBookingListChair);
}

/**
 * Đặt vé xem phim
 */
function* postBookingMovieTicket(action) {
  console.log(action);
  try {
    // start loading
    yield put({
      type: START_LOADING,
    });
    //delay cho hiệu ứng đẹp
    yield delay(1000);
    const taiKhoan = JSON.parse(localStorage.getItem("taiKhoan"));
    const token = JSON.parse(localStorage.getItem("token"));
    let { status, data } = yield call(() => {
      return service.postBookingMovieTicketApi(
        action.bookingCode,
        action.listChairDangChon,
        taiKhoan,
        token
      );
    });
    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: BOOKING_MOVIE_TICKET_SUCCESS,
        payload: action.listChairDangChon,
      });
    }
    alert(data);
    action.history.goBack("/");
    //stop loading
    yield put({
      type: STOP_LOADING,
    });
  } catch (err) {
    console.log(err);
  }
}
export function* followPostBookingMovieTicket() {
  yield takeLatest(BOOKING_MOVIE_TICKET, postBookingMovieTicket);
}

/**
 *  Thêm phim
 */
function* postMovie(action) {
  console.log(action);
  try {
    let { status, data } = yield call(() => {
      return service.postMoiveApi(action.payload);
    });
    console.log(data);
    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: GET_MOVIE_LIST,
      });
    }
  } catch (err) {
    console.log(err.response);
  }
}
export function* followPostMovie() {
  yield takeLatest(POST_MOVIE, postMovie);
}
