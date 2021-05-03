import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import "./RebookSeatCheckOut.css";
import { Radio, Input } from "antd";
import "antd/dist/antd.css";
import {
  sentSeatBooking,
} from "../../../redux/actions/BookingCheckout";
import NumberFormat from "react-number-format";
import swal from "sweetalert";
import { settings } from "../../../util/setting";

export default function RebookSeatCheckOut(props) {
  let { lichChieu, maLichChieu } = props;
  const [styleDafault, setStyleDefault] = useState({
    emailActive: "no-active",
    phoneActive: "no-active",
    voucherActive: "no-active",
    value: 0,
  });
  let dispatch = useDispatch();
  // **
  const { totalMoney, listSeat, seat, seatSend } = useSelector(
    (state) => state.ManegerBookingReducer
  );
  const onChange = (e) => {
    setStyleDefault({
      ...styleDafault,
      value: e.target.value,
    });
  };
  // **
  if (lichChieu.thongTinPhim && lichChieu.danhSachGhe) {
    const userLG = JSON.parse(localStorage.getItem(settings.USER_LOGIN));
    seatSend.maLichChieu = maLichChieu;
    seatSend.taiKhoanNguoiDung = userLG.taiKhoan;
    return (
      <div className="rebookSeatCheckOut">
        <div className="cash">
          <p>
            <NumberFormat
              style={{ fontSize: "34px", fontWeight: "bold" }}
              value={seat.giaVe ? seat.giaVe : "0"}
              displayType={"text"}
              thousandSeparator={true}
            />
            <span>đ</span>
          </p>
        </div>
        <div className="nameMovie">
          <p className="title">
            <span>P</span>
            {lichChieu.thongTinPhim.tenPhim}
          </p>
          <div className="address">
            <p> {lichChieu.thongTinPhim.tenCumRap}</p>
            <p>
              {lichChieu.thongTinPhim.ngayChieu} -{" "}
              {lichChieu.thongTinPhim.gioChieu} -{" "}
              {lichChieu.thongTinPhim.tenRap}
            </p>
          </div>
        </div>
        <div className="chair">
          <div className="chair__seat">
            <p style={{ display: "flex", flexWrap: "wrap" }}>
              Ghế:
              {listSeat.map((seat, index) => {
                return (
                  <span style={{ margin: "0 3px" }} key={index}>
                    {seat},{" "}
                  </span>
                );
              })}
            </p>
          </div>
          <div className="chair__price">
            <p>
              <NumberFormat
                value={totalMoney ? totalMoney : "0"}
                displayType={"text"}
                thousandSeparator={true}
              />
              đ
            </p>
          </div>
        </div>
        <div className="formSeat">
          <form className="form-group">
            <div className="item__input">
              <label
                id="helpId"
                className={`email ${styleDafault.emailActive}`}
              >
                E-Mail
              </label>
              <input
                onClick={() => {
                  setStyleDefault({
                    ...styleDafault,
                    emailActive: "active",
                  });
                }}
                type="email"
                name="email"
                className="form-control"
                aria-describedby="helpId"
              />
            </div>
            <div className="item__input">
              <label id="helpId" className={`${styleDafault.phoneActive}`}>
                Phone
              </label>
              <input
                type="number"
                onClick={() => {
                  setStyleDefault({
                    ...styleDafault,
                    phoneActive: "active",
                  });
                }}
                name="phone"
                className="form-control"
                aria-describedby="helpId"
              />
            </div>
            <div className="item__input">
              <label id="helpId" className={`${styleDafault.voucherActive}`}>
                Mã giảm giá
              </label>
              <input
                onClick={() => {
                  setStyleDefault({
                    ...styleDafault,
                    voucherActive: "active",
                  });
                }}
                type="text"
                name="voucher"
                className="form-control"
                aria-describedby="helpId"
              />
            </div>
          </form>
        </div>
        <Radio.Group
          onChange={onChange}
          value={styleDafault.value}
          className="paypal_checkout"
        >
          <Radio value="1">
            <div className="ZaloPay paypal">
              <img src={window.location.origin + "/Logo/zalo_pay.jpg"} />
              <div className="content">
                <p>Thanh toán qua ZaloPay</p>
                <p className="methodnote">
                  x3 vé BHD Star 59k/vé cho tất cả khách hàng
                </p>
              </div>
            </div>
          </Radio>
          <Radio value="2">
            <div className="Momopay paypal">
              <img src={window.location.origin + "/Logo/momo.png"} />
              <div className="content">
                <p>Thanh toán qua Momo</p>
              </div>
            </div>
          </Radio>
        </Radio.Group>
        <div className="booking text-center">
          <span
            className="btn btn-danger"
            style={{ cursor: "pointer", width: "250px", padding: "15px" }}
            onClick={() => {
              if (seatSend.danhSachVe.length == 0) {
                swal("Please, Choose your seat");
              }
              if (seatSend.danhSachVe.length > 0) {
                if (styleDafault.value == 1 || styleDafault.value == 2) {
                 console.log(seatSend);
                  dispatch(sentSeatBooking(seatSend));
                } else {
                  swal("Please, Choose your menthod for pay");
                }
              }
            }}
          >
            Đặt Vé
          </span>
        </div>
      </div>
    );
  }
}
