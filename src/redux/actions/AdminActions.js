import Axios from "axios";
import swal from "sweetalert";
import { settings } from "../../util/setting";
import {
  ADMIN_ALL_USER,
  ADMIN_GET_MEMBER,
  ADMIN_SEARCH_USER,
  ADMIN_USERCLICK,
  DELETE_ACCOUTN_ADMIN,
} from "../const/ManagerAdmin";
// **
export const getMemberAdmin = (count, pages) => {
  return async (dispatch) => {
    const result = await Axios({
      url: `${settings.domain}/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP01&soTrang=${pages}&soPhanTuTrenTrang=${count}`,
      method: "GET",
    });
    //Đăng ký thành công
    dispatch({
      type: ADMIN_GET_MEMBER,
      dataMember: result.data,
    });
    // history.goBack();
  };
};
export const getAllUserAdmin = () => {
  return async (dispatch) => {
    const resultAll = await Axios({
      url: `${settings.domain}/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`,
      method: "GET",
    });
    //Đăng ký thành công
    dispatch({
      type: ADMIN_ALL_USER,
      dataAllMember: resultAll.data,
    });
    // history.goBack();
  };
};
export const searchUserAdmin = (value) => {
  return async (dispatch) => {
    const resultAll = await Axios({
      url: `${settings.domain}/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${value}`,
      method: "GET",
    });
    //Đăng ký thành công
    dispatch({
      type: ADMIN_SEARCH_USER,
      arrSearchUser: resultAll.data,
    });
    // history.goBack();
  };
};
export const searchItemClick = (item) => {
  return (dispatch) => {
    dispatch({
      type: ADMIN_USERCLICK,
      itemCl: item,
    });
  };
};
export const deteleAccountAdmin = (value) => {
  const userLG = JSON.parse(localStorage.getItem(settings.USER_LOGIN));
  return async (dispatch) => {
    try {
      const resultAll = await Axios({
        url: `${settings.domain}/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${value}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${userLG.accessToken}`,
        },
      });
      swal("Delete success!", "", "success");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (err) {
      //Đăng nhap thất bại
      swal(`Have some error, ${err.response?.data}`, {
        buttons: [false],
      });
    }
  };
};
export const editAccountAdmin = (userItem) => {
  const userLG = JSON.parse(localStorage.getItem(settings.USER_LOGIN));
  return async (dispatch) => {
    try {
      const resultAll = await Axios({
        url: `${settings.domain}/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
        method: "PUT",
        data: userItem,
        headers: {
          Authorization: `Bearer ${userLG.accessToken}`,
        },
      });
      console.log(resultAll);
      swal("Edit success!", "", "success");
    } catch (err) {
      //Đăng nhap thất bại
      swal(`Have some error, ${err.response?.data}`, {
        buttons: [false],
      });
    }
  };
};
export const addAccountAdmin = (userItem) => {
  const userLG = JSON.parse(localStorage.getItem(settings.USER_LOGIN));
  return async (dispatch) => {
    try {
      const resultAll = await Axios({
        url: `${settings.domain}/QuanLyNguoiDung/ThemNguoiDung`,
        method: "POST",
        data: userItem,
        headers: {
          Authorization: `Bearer ${userLG.accessToken}`,
        },
      });
      console.log(resultAll);
      swal("Add success!", "", "success");
    } catch (err) {
      //Đăng nhap thất bại
      swal(`Have some error, ${err.response?.data}`, {
        buttons: [false],
      });
    }
  };
};
