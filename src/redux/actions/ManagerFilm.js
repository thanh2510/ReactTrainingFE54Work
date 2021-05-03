import Axios from "axios";
import { settings } from "../../util/setting";
// import * as type from "../const/ManagerFilmType";
import {
  GET_DATA_CINEMA,
  GET_DATA_CINEMA_WITH_ID_CINEMA,
  GET_DATA_FILM,
  GET_DATA_FILM_LIST_CINEMA,
  GET_DATA_FILM_SEARCH,
  GET_DATA_FILM_WITH_ID_CINEMA,
  GET_DATA_CINEMA_WITH_ID_CINEMA_BHD,
} from "../const/ManagerFilmType";
// ** List Film
export const getDataFilmAction = () => {
  return async (dispatch) => {
    //Gọi ajax lấy data từ api về
    const result = await Axios({
      url: `${settings.domain}/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
      method: "GET",
    });
    //Sau khi có data => dùng hàm middleware reduxthunk (dispatch) để đưa dữ liệu lên reducer
    dispatch({
      type: GET_DATA_FILM,
      dataFilm: result.data,
    });
  };
};
// ** Search 1 Film
export const getDataFilmSearchAction = (nameFilm) => {
  // nhan 1 props la ten phim tu getDataFilmSearchAction
  return async (dispatch) => {
    const result = await Axios({
      url: `${settings.domain}/QuanLyPhim/LayDanhSachPhim?maNhom=GP01&tenPhim=${nameFilm}`,
      method: "GET",
    });
    dispatch({
      type: GET_DATA_FILM_SEARCH,
      dataFilmSearch: result.data,
    });
  };
};
// ** Cum Rap
export const getDataCinemaAction = () => {
  return async (dispatch) => {
    const result = await Axios({
      url: `${settings.domain}/QuanLyRap/LayThongTinHeThongRap`,
      method: "GET",
    });
    dispatch({
      type: GET_DATA_CINEMA,
      dataCinema: result.data,
    });
  };
};
// ** lấy các lịch chiếu theo mã hệ thống rạp
export const getDataCinemaWithIdCinemaAction = (idCinema) => {
  return async (dispatch) => {
    const result = await Axios({
      url: `${settings.domain}/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${idCinema}&maNhom=GP01`,
      method: "GET",
    });
    dispatch({
      type: GET_DATA_CINEMA_WITH_ID_CINEMA,
      dataCinemaWithIdCinema: result.data,
    });
  };
};
// ** lay cac cum rap bhd ======== test
export const getDataCinemaWithIdCinemaSystemAction = (cine) => {
  let theaterSystemArray = [];
  return async (dispatch) => {
    const result = await Axios({
      url: `${settings.domain}/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${cine}`,
      method: "GET",
    });
    theaterSystemArray = result.data;
      dispatch({
        type: GET_DATA_CINEMA_WITH_ID_CINEMA_BHD,
        theaterSystemArray: theaterSystemArray,
      });
  };
};
export const getDataFilmWithCinemaAction = (idFilm) => {
  return async (dispatch) => {
    const result = await Axios({
      url: `${settings.domain}/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${idFilm}&maNhom=GP01`,
      method: "GET",
    });
    dispatch({
      type: GET_DATA_FILM_WITH_ID_CINEMA,
      dataFilmWithIdCinema: result.data,
    });
  };
};
export const getDataFilmListCinemaAction = (film) => {
  return async (dispatch) => {
    const result = await Axios({
      url: `${settings.domain}/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${film}`,
      method: "GET",
    });
    dispatch({
      type: GET_DATA_FILM_LIST_CINEMA,
      dataFilmListCinema: result.data,
    });
  };
};
