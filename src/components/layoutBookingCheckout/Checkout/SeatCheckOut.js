import React, { Fragment, useState } from "react";
import style from "./Checkout.module.css";
import Countdown, { zeroPad } from "react-countdown";
import moment from "moment";
import Seat from "./Seat";
const arrDefautl = ["A", "B", "C", "D", "E", "F", "G", "H"];

export default function SeatCheckOut(props) {
  // ** render timeCount
  let { lichChieu } = props;
  console.log(lichChieu, "lichChieu");
  const [styleDafault, setStyleDefault] = useState({
    vip: "chuachon2",
    disP: "none",
    action: false,
  });
  const [seatDefault, setSeatDefault] = useState([]);

  const renderer = ({ minutes, seconds }) => {
    if (zeroPad(minutes) === "00" && zeroPad(seconds) === "00") {
      setStyleDefault({
        ...styleDafault,
        disP: "block",
      });
    }
    return (
      <span className="count__checkout">
        {zeroPad(minutes)}:{zeroPad(seconds)}
      </span>
    );
  };
  const renderHangGhe = () => {
    return lichChieu.danhSachGhe.map((seat, index) => {
      if (index < 96) {
        return (
          <Fragment key={index}>
            <Seat seat={seat} />
          </Fragment>
        );
      }
    });
  };
  if (lichChieu.thongTinPhim && lichChieu.danhSachGhe) {
    return (
      <div className={style.seatCheckOutCover}>
        <div
          style={{ display: `${styleDafault.disP}` }}
          className={`${style.bookingTimtOut}`}
        >
          <div className={`${style.bookingTimtOut__content}`}>
            <p>
              Đã hết thời gian giữ ghế. Vui lòng thực hiện đơn hàng trong thời
              hạn 4 phút.
            </p>
          </div>
        </div>
        <div className={`${style.seatCheckOutLeft}`}></div>
        <div className={`${style.seatCheckOutRight}`}>
          <div className={`${style.seatCheckOutRight__top}`}>
            <div className={`${style.CheckOutRight__top__logocinema}`}>
              <img
                src={window.location.origin + "/Logo/bhd-star-cineplex.png"}
              />
              <div
                className={`${style.logocinema__title}`}
                style={{ display: "flex" }}
              >
                <p className={`${style.logocinema__address}`}>
                  <span style={{ color: "#8bc541" }}>
                    {lichChieu.thongTinPhim.tenCumRap}
                  </span>
                </p>
                <p style={{ color: "#a1a5a9c7" }}>
                  {lichChieu.thongTinPhim.ngayChieu} -{" "}
                  {lichChieu.thongTinPhim.gioChieu} -{" "}
                  {lichChieu.thongTinPhim.tenRap}
                </p>
              </div>
            </div>
            <div className={`${style.CheckOutRight__top__righttitle}`}>
              <p style={{ color: "#a1a5a9c7" }}>Thời gian giữ ghế</p>
              <p className={style.timeCount} style={{ color: "#fb4226" }}>
                <Countdown date={Date.now() + 240000} renderer={renderer} />
              </p>
            </div>
          </div>
          <div className={`${style.seatCheckOutRight__bottom}`}>
            <div className={style.namescreen}>
              <img
                style={{ width: "100%" }}
                src={window.location.origin + "/booking/screen.png"}
              />
            </div>
            <div className="d-flex">
              <div className="day">
                {lichChieu.danhSachGhe.map((item, index) => {
                  if (index < 8) {
                    return (
                      <div key={index} className="hangSeat">
                        {arrDefautl[index]}
                      </div>
                    );
                  }
                })}
              </div>
              <div className="listseat">{renderHangGhe()}</div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "20px",
              borderTop: "1px solid rgb(84 112 130 / 32%)",
              paddingTop: "20px",
            }}
          >
            <div className="button-defaul">
              <button disabled type="button" className="btn btn-secondary mr-1">
                A1
              </button>
              <p style={{ fontSize: "14px" }}> Ghế đã được đặt</p>
            </div>
            <div className="button-defaul">
              <button type="button" className="btn btn-ghedangchon mr-1">
                A1
              </button>
              <p style={{ fontSize: "14px" }}> Ghế đang được đặt</p>
            </div>
            <div className="button-defaul">
              <button type="button" className="btn btn-chuachon2 mr-1">
                A1
              </button>
              <p style={{ fontSize: "14px" }}> Ghế "Vip" chưa được đặt</p>
            </div>
            <div className="button-defaul">
              <button type="button" className="btn btn-chuachon mr-1">
                A1
              </button>
              <p style={{ fontSize: "14px" }}> Ghế "Thường" chưa được đặt</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
