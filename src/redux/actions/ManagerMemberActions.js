import Axios from "axios";
import { settings } from "../../util/setting";
import { history } from "../../App";
import swal from "@sweetalert/with-react";
// **
import { LOGIN } from "../const/ManagerUserType.js";
export const sentUserRegister = (userRegister) => {
  return async (dispatch) => {
    try {
      const result = await Axios({
        url: `${settings.domain}/QuanLyNguoiDung/DangKy`,
        method: "POST",
        data: {
          taiKhoan: userRegister.taiKhoan,
          matKhau: userRegister.matKhau,
          email: userRegister.email,
          soDt: userRegister.soDt,
          maNhom: 'GP01',
          maLoaiNguoiDung: userRegister.maLoaiNguoiDung,
          hoTen: userRegister.hoTen,
        },
      });
      //Đăng ký thành công
      console.log(result.data);
      history.push("/login");
      // history.goBack();
    } catch (err) {
      console.log(err.response?.data);
      swal(
        <div>
          <h1>Opps!</h1>
          <p>{` Have some error! ${err.response?.data}`}</p>
        </div>
      );
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  };
};
export const sentUserLogin = (userLogin) => {
  return async (dispatch) => {
    try {
      const result = await Axios({
        url: `${settings.domain}/QuanLyNguoiDung/DangNhap`,
        method: "POST",
        data: {
          taiKhoan: userLogin.name,
          matKhau: userLogin.password,
        },
      });
      //Đăng nhap thành công
      console.log("getMember", result);
      //Lấy token lưu vào localstorage
      if (localStorage.getItem(settings.USER_LOGIN) != null) {
        localStorage.removeItem(settings.USER_LOGIN);
      }
      localStorage.setItem(settings.ACCESS_TOKEN, result.data.accessToken);
      localStorage.setItem(settings.USER_LOGIN, JSON.stringify(result.data));
      swal(
        <div>
          <h1>Good Job!</h1>
          <p>Login success</p>
        </div>
      );
      dispatch({
        type: LOGIN,
        resultLogin: result.data,
      });
      history.push("/");
    } catch (err) {
      //Đăng nhap thất bại
      swal(`Have some error, ${err.response?.data}`, {
        buttons: [false],
      });
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  };
};
export const editUser = (user) => {
  const userLG = JSON.parse(localStorage.getItem(settings.USER_LOGIN));
  return async (dispatch) => {
    try {
      const result = await Axios({
        url: `${settings.domain}/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
        method: "PUT",
        data: {
          taiKhoan: user.taiKhoan,
          matKhau: user.matKhau,
          email: user.email,
          soDt: user.soDt,
          maNhom: 'GP01',
          maLoaiNguoiDung: 'KhachHang',
          hoTen: user.hoTen,
        },
        headers: {
          Authorization: `Bearer ${userLG.accessToken}`,
        },
      });
      console.log("getMember PUT", result);
      const resultLG = await Axios({
        url: `${settings.domain}/QuanLyNguoiDung/DangNhap`,
        method: "POST",
        data: {
          taiKhoan: user.taiKhoan,
          matKhau: user.matKhau,
        },
      });
      //Lấy token lưu vào localstorage
      localStorage.setItem(settings.ACCESS_TOKEN, resultLG.data.accessToken);
      localStorage.setItem(settings.USER_LOGIN, JSON.stringify(resultLG.data));
      swal(
        <div>
          <h1>Good Job!</h1>
          <p>Edit success, please, reLogin</p>
        </div>
      );
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (err) {
      //Đăng nhap thất bại
      swal(`Have some error, ${err.response?.data}`, {
        buttons: [false],
      });
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  };
};
