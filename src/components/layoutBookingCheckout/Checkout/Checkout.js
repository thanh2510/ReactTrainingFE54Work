import axios from "axios";
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";
import swal from "sweetalert";
import { settings } from "../../../util/setting";
import style from "./Checkout.module.css";
import RebookSeatCheckOut from "./RebookSeatCheckOut";
import SeatCheckOut from "./SeatCheckOut";

export default function Checkout(props) {
  const maLichChieu = props.match.params.maLichChieu;
  const [lichChieu, setLichChieu] = useState();
  useEffect(() => {
    if (maLichChieu) {
      const getDetail = async () => {
        const result = await axios({
          url: `${settings.domain}/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
          method: "GET",
        });
        console.log("data", result.data);
        setLichChieu(result.data);
      };
      getDetail();
    }
  }, []);
  if (localStorage.getItem(settings.USER_LOGIN) && maLichChieu) {
    let userLogin = JSON.parse(localStorage.getItem(settings.USER_LOGIN));
    if (userLogin.maLoaiNguoiDung == "KhachHang") {
      return (
        <div className={`${style.containerBooking}`}>
          <div
            style={{ fontFamily: "SF Text Regular" }}
            className={` ${style.booking}`}
          >
            <div className={` ${style.leftcheckout}`}>
              <div className={` ${style.stepCheckOut}`}>
                <div className={style.leftstep}>
                  <ul className={``}>
                    <li>
                      <span className={style.stepnumber}>01 </span> CHỌN GHẾ &
                      THANH TOÁN
                    </li>
                    <li>
                      <span className={style.stepnumber}>02 </span> KẾT QUẢ ĐẶT
                      VÉ
                    </li>
                  </ul>
                </div>
                <div className={style.rightstep}>
                  <div className={style.account}>
                    <img
                      style={{ width: "16%" }}
                      src={window.location.origin + "/Logo/avatar.jpg"}
                    />
                    <p className="">{userLogin.taiKhoan}</p>
                  </div>
                </div>
              </div>
              <div className={`${style.SeatCheckOut}`}>
                {lichChieu ? <SeatCheckOut lichChieu={lichChieu} /> : ""}
              </div>
            </div>
            <div
              className={` ${style.rightCheckOut}`}
              style={{ position: "relative" }}
            >
              {lichChieu ? <RebookSeatCheckOut lichChieu={lichChieu} maLichChieu={maLichChieu}/> : ""}
            </div>
          </div>
        </div>
      );
    }
  }
  {
    swal("You must login account!");
    return <Redirect to="/login" />;
  }
}
