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
}

export const service = new Service();
