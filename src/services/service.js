import { DOMAIN } from "../util/const/settingSystem";
import axios from "axios";
export class Service {
  getMovieListApi() {
    return axios({
      url: `${DOMAIN}/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
      method: "GET",
    });
  }
  getMovieDetailApi(maPhim) {
    return axios({
      url: `${DOMAIN}/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
      method: "GET",
    });
  }

  // User Login
  getUserLoginApi(userLogin) {
    return axios({
      url: `${DOMAIN}/QuanLyNguoiDung/DangNhap`,
      method: "POST",
      data: userLogin,
    });
  }

  //Get Cinema List By Brand in CinemaRelease
  getCinemaListBrandApi() {
    return axios({
      url: `${DOMAIN}/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01`,
      method: "GET",
    });
  }

  // Get ShowTime by MovieCode in Movie detail page
  getShowTimeByMoiveCodeApi(movieCode) {
    return axios({
      url: `${DOMAIN}/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieCode}`,
      method: "GET",
    });
  }
  //Lay danh sach nguoi dung
  getUserListApi() {
    return axios({
      url: `${DOMAIN}/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`,
      method: "GET",
    });
  }

  // Lấy dánh sách phòng vé để show ra danh sách ghê trong trang booking
  getListBookingChairApi(bookingCode) {
    return axios({
      url: `${DOMAIN}/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${bookingCode}`,
      method: "GET",
    });
  }

  // Đặt vé xem phim
  postBookingMovieTicketApi(bookingCode, listChoiceChair, taiKhoan, token) {
    return axios({
      url: `${DOMAIN}/QuanLyDatVe/DatVe`,
      method: "POST",
      data: {
        maLichChieu: bookingCode,
        danhSachVe: listChoiceChair,
        taiKhoanNguoiDung: taiKhoan,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  // Lấy danh sách phim phân trang
  getMovieListPagination(paramsString) {
    return axios({
      url: `${DOMAIN}/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&${paramsString}`,
      method: "GET",
    });
  }

  // lấy thông tin người dùng và lịch sử đặt vé
  postHistoryOfUserProfileApi(taiKhoan) {
    return axios({
      url: `${DOMAIN}/QuanLyNguoiDung/ThongTinTaiKhoan`,
      method: "POST",
      data: {
        taiKhoan,
      },
    });
  }

  putUpdatePassWordApi(user, token) {
    return axios({
      url: `${DOMAIN}/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      method: "PUT",
      data: user,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  getUserRegisterApi(userRegister) {
    return axios({
      url: `${DOMAIN}/QuanLyNguoiDung/DangKy`,
      method: "POST",
      data: userRegister,
    });
  }
}

export const service = new Service();
