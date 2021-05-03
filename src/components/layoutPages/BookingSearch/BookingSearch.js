import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import moment, { now } from "moment";
import "moment-timezone";
import style from "./BookingSearch.css";
import { useSelector, useDispatch } from "react-redux";
import {
  getDataFilmAction,
  getDataFilmListCinemaAction,
} from "../../../redux/actions/ManagerFilm";
import { Redirect } from "react-router";
import { Link, NavLink } from "react-router-dom";

export default function BookingSearch(props) {
  const [tabsFilm, setTabsFilm] = useState({
    phim: "Phim",
    rap: "Rạp",
    date: "Ngày xem",
    timeShow: "Xuất chiếu",
    showDate: "",
    showTime: "",
  });
  const [idFilm, setIdFilm] = useState({
    idPhim: 1334,
  });
  const [style, setStyle] = useState({
    displays: "none",
  });
  // ** Reducer
  const { arrFilm, arrFilmListCinema } = useSelector(
    (state) => state.QuanLyPhimReducer
  );
  // ** Dispatch
  const dispatch = useDispatch();
  // ** Dispatch Actions Get APIs
  useEffect(() => {
    dispatch(getDataFilmAction());
  }, []);
  useEffect(() => {
    dispatch(getDataFilmListCinemaAction(idFilm.idPhim));
  }, [idFilm]);
  // ** Render Functions
  const renderListFilmTabs = () => {
    return arrFilm.map((film, index) => {
      if (index < 15) {
        return (
          <li
            key={index}
            onClick={() => {
              setTabsFilm({
                ...tabsFilm,
                phim: film.tenPhim,
              });
              setIdFilm({
                ...idFilm,
                idPhim: film.maPhim,
              });
            }}
          >
            <a>{film.tenPhim}</a>
          </li>
        );
      }
    });
  };
  const layCumRap = () => {
    let cinemaForHT = arrFilmListCinema.heThongRapChieu;
    let cinemaToHT = [];
    for (let cumRap of cinemaForHT) {
      let arrCumRap = cumRap.cumRapChieu;
      for (let cinema of arrCumRap) {
        cinemaToHT.push(cinema);
      }
    }
    return cinemaToHT;
  };
  const renderCinemaToFilm = () => {
    if (tabsFilm.phim === "Phim") {
      return <span>Vui Lòng Chọn Phim</span>;
    } else {
      let cinemaToHT = layCumRap();
      return cinemaToHT.map((cine, index) => {
        return (
          <li
            key={index}
            onClick={() => {
              setTabsFilm({
                ...tabsFilm,
                rap: cine.tenCumRap,
                idRap: cine.maCumRap,
              });
            }}
          >
            <a>{cine.tenCumRap}</a>
          </li>
        );
      });
    }
  };
  const renderTimeToFilm = () => {
    if (tabsFilm.phim === "Phim") {
      return <span>Vui Lòng Chọn Phim</span>;
    }
    if (tabsFilm.rap === "Rạp") {
      return <span>Vui Lòng Chọn Rap</span>;
    } else {
      let arrTime = [0, 1, 2, 3, 4, 5, 6];
      var now = moment(new Date());
      Moment.globalFormat = "DD-MM-YYYY";
      return arrTime.map((item, index) => {
        var new_date = moment(now, "DD-MM-YYYY").add(item, "days");
        let gan = new_date.toString();
        return (
          <li key={index} style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "16px", fontFamily: "SF Medium" }}>
              {moment(gan).format("dddd")}
            </span>
            <Moment
              style={{ fontSize: "16px", fontFamily: "SF Medium" }}
              onClick={() => {
                setTabsFilm({
                  ...tabsFilm,
                  date: gan,
                });
              }}
            >
              {new_date}
            </Moment>
          </li>
        );
      });
    }
  };
  const getLichChieuPhimFormCinema = () => {
    let cumRap = layCumRap();
    let cumRapFlim = [];
    for (let cumRapItem of cumRap) {
      if (cumRapItem.tenCumRap === tabsFilm.rap) {
        cumRapFlim.push(cumRapItem);
      }
    }
    return cumRapFlim;
  };
  const getMaChieu = ()=>{
    let cumRap = layCumRap();
    let timeD;
    let cumRapFlim = [];
    for (let cumRapItem of cumRap) {
      if (cumRapItem.tenCumRap === tabsFilm.rap) {
        cumRapFlim.push(cumRapItem);
      }
    }
    let LC = [];
    let LCphim = [];
    for (let lichChieu of cumRapFlim) {
      LCphim = lichChieu.lichChieuPhim;
    }
    for( let date of LCphim){
      // moment(tabsFilm.date).format("Do")
      if(moment(tabsFilm.date).format("Do") === moment(date.ngayChieuGioChieu).format("Do")){
        timeD = date.maLichChieu
        return timeD
      }
    }
    return timeD
  }
  const getTTTgianChieu = () => {
    let cumRap = layCumRap();
    let cumRapFlim = [];
    for (let cumRapItem of cumRap) {
      if (cumRapItem.tenCumRap === tabsFilm.rap) {
        cumRapFlim.push(cumRapItem);
      }
    }
    let LC = [];
    let LCphim = [];
    for (let lichChieu of cumRapFlim) {
      LCphim = lichChieu.lichChieuPhim;
    }
    for (let itemGio of LCphim) {
      LC.push(itemGio.ngayChieuGioChieu);
      // if(tabsFilm && )
    }
    let timeBooking = moment(tabsFilm.date).format("D");
    let LCreturn = [];
    for (let itemBooking of LC) {
      let itemTam = moment(itemBooking).format("D");
      if (itemTam == timeBooking) {
        LCreturn.push(itemBooking);
      }
    }
    return LCreturn;
  };
  const renderSeatTimeShow = () => {
    if (tabsFilm.phim === "Phim") {
      return <span>Vui Lòng Chọn Phim</span>;
    }
    if (tabsFilm.rap === "Rạp") {
      return <span>Vui Lòng Chọn Rap</span>;
    }
    if (tabsFilm.date === "Ngày xem") {
      return <span>Vui Lòng Chọn Rap</span>;
    } else {
      // ** Lay Thong Tin Gio Chieu, ngay chieu
      let arrTime = getTTTgianChieu();
      if (arrTime.length == 0) {
        return (
          <li>
            <span>Không có lịch chiếu</span>
          </li>
        );
      } else {
        return arrTime.map((item, index) => {
          return (
            <li key={index} 
            onClick={()=>{
              let d = getMaChieu()
              setTabsFilm({
                ...tabsFilm,
                timeShow: item,
                maRapChieu:d
              });
            }}>
              <a>{moment(item).format("LT")}</a>
            </li>
          );
        });
      }
    }
  };
  return (
    <div className="homeToolsBook__rule" id="Showtimes">
      <div className="rule__name">
        <div
          className="text__name rule__bg dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {tabsFilm.phim}
        </div>
        <div className="show__rule__name hide__show dropdown-menu">
          <ul style={{ width: "500px" }}>{renderListFilmTabs()}</ul>
        </div>
      </div>
      <div className={`rule__cinema width__rulr__right rule__bg`}>
        <div
          className="text dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          style={{ paddingRight: "5px" }}
        >
          {tabsFilm.rap}
        </div>
        <div className={`show__rule__cinema hide__show dropdown-menu`}>
          <ul style={{ width: "500px" }}>{renderCinemaToFilm()}</ul>
        </div>
      </div>
      <div className="rule__date width__rulr__right rule__bg">
        <div
          className="text dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {tabsFilm.date}
        </div>
        <div className="show__rule__date hide__show dropdown-menu">
          <ul style={{ minWidth: "200px", overflowY: "auto" }}>
            {renderTimeToFilm()}
          </ul>
        </div>
      </div>
      <div className="rule__show width__rulr__right rule__bg">
        <div
          className="text dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {(tabsFilm.timeShow!='Xuất chiếu')?moment(tabsFilm.timeShow).format("LT"):tabsFilm.timeShow}
        </div>
        <div className="show__rule__show hide__show dropdown-menu">
          <ul style={{ minWidth: "190px" }}>{renderSeatTimeShow()}</ul>
        </div>
      </div>
      <div className="rule__button width__rulr__right text-center">
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => {
            if (tabsFilm.phim === "Phim"||tabsFilm.rap === "Rạp"||tabsFilm.date === "Ngày xem" || tabsFilm.timeShow ==='Xuất chiếu') {
              setStyle({
                ...style,
                displays: "block",
              });
            }
            if (tabsFilm.phim != "Phim"&&tabsFilm.rap != "Rạp"&&tabsFilm.date != "Ngày xem" && tabsFilm.timeShow !='Xuất chiếu'){
              console.log('tabsFilm', tabsFilm);
              setStyle({
                ...style,
                displays: "none",
              });
            }
          }}
        >
           <NavLink to={`checkout/${tabsFilm.maRapChieu}`}>Mua Vé Ngay</NavLink>
        </button>
        <p style={{ position: "absolute", display: `${style.displays}`, fontSize:'14px', color:'red' }}>
          Vui lòng chọn thông tin trước!
        </p>
      </div>
    </div>
  );
}
