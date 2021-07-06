import { DOMAIN } from "../util/const/settingSystem";
import axios from "axios";
export class Service {
  getMovieListApi() {
    return axios({
      url: `${DOMAIN}/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
      method: "GET",
    });
  }
}

export const service = new Service();
