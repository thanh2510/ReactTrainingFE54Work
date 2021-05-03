import React, { useEffect, useState } from "react";
import { Tabs, Radio, Space, Collapse } from "antd";
import "antd/dist/antd.css";
import style from "./InfoDetail.css";
import style2 from "../DetailBlurTop/DetailBlurTop.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import moment, { now } from "moment";
import "moment-timezone";
import Moment from "react-moment";
import { settings } from "../../../util/setting";
import InfoDetailComment from "./InfoDetailComment";

const arrDefault = [
  {
    name: "BHD Star Cineplex",
    img: "https://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
    opacityCustom: 0.6,
  },
  {
    name: "cgv",
    img: "http://movie0706.cybersoft.edu.vn/hinhanh/cgv.png",
    opacityCustom: 0.6,
  },
  {
    name: "CineStar",
    img: "http://movie0706.cybersoft.edu.vn/hinhanh/cinestar.png",
    opacityCustom: 0.6,
  },
  {
    name: "Galaxy Cinema",
    img: "https://movie0706.cybersoft.edu.vn/hinhanh/galaxy-cinema.png",
    opacityCustom: 0.6,
  },
  {
    name: "Lotte Cinema",
    img: "https://movie0706.cybersoft.edu.vn/hinhanh/lotte-cinema.png",
    opacityCustom: 0.6,
  },
  {
    name: "MegaGS",
    img: "https://movie0706.cybersoft.edu.vn/hinhanh/megags.png",
    opacityCustom: 0.6,
  },
];
export default function InfoDetail(props) {
  const { TabPane } = Tabs;
  const { Panel } = Collapse;
  const [chiTietPhim, setChiTietPhim] = useState({
    maPhim: props.maPhim,
  });
  const [chiTietPhimProps, setChiTietPhimProps] = useState({});
  const [state, setState] = useState({
    cineClick: "BHD Star Cineplex",
    activeClick: "active",
    noActiveClick: "no__active",
    date: moment(new Date()).format("D"),
    classClick: "normal",
  });
  // ** Get APIs
  useEffect(() => {
    const getDetail = async () => {
      const result = await axios({
        url: `${settings.domain}/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${chiTietPhim.maPhim}`,
        method: "GET",
      });
      setChiTietPhim(result.data);
      document.title = result.data.tenPhim;
    };
    getDetail();
  }, []);
  //** Render
  const renderCinemaSystem = () => {
    return arrDefault.map((systemCine, index) => {
      if (systemCine.name === state.cineClick) {
        return (
          <div
            className={`item ${state.activeClick}`}
            key={index}
            onClick={() => {
              setState({
                ...state,
                cineClick: systemCine.name,
              });
            }}
          >
            <img src={systemCine.img} />
            <div style={{ marginLeft: "10px" }} className="item__title">
              <p>{systemCine.name}</p>
              <small>{systemCine.name} from Movie</small>
            </div>
          </div>
        );
      } else {
        return (
          <div
            className={`item ${state.noActiveClick}`}
            key={index}
            onClick={() => {
              setState({
                ...state,
                cineClick: systemCine.name,
              });
            }}
          >
            <img src={systemCine.img} />
            <div style={{ marginLeft: "10px" }} className="item__title">
              <p>{systemCine.name}</p>
              <small>{systemCine.name} from Movie</small>
            </div>
          </div>
        );
      }
    });
  };
  const renderDayOfWeek = () => {
    let arrTime = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    Moment.globalFormat = "DD-MM-YYYY";
    var now = moment(new Date());
    return arrTime.map((item, index) => {
      var new_date = moment(now, "DD-MM-YYYY").add(item, "days");
      let gan = new_date.toString();
      if (state.date === moment(gan).format("D")) {
        return (
          <div
            className={`dayOfWeek__item ${state.activeClick}`}
            key={index}
            onClick={() => {
              setState({
                ...state,
                date: moment(gan).format("D"),
              });
            }}
          >
            <p className="dayOfWeek__item__week">
              {moment(gan).format("dddd")}
            </p>
            <p className="dayOfWeek__item__date">{moment(gan).format("D")}</p>
          </div>
        );
      } else {
        return (
          <div
            className={`dayOfWeek__item ${state.noActiveClick}`}
            key={index}
            onClick={() => {
              setState({
                ...state,
                date: moment(gan).format("D"),
              });
            }}
          >
            <p className="dayOfWeek__item__week">
              {moment(gan).format("dddd")}
            </p>
            <p className="dayOfWeek__item__date">{moment(gan).format("D")}</p>
          </div>
        );
      }
    });
  };
  const checkDate = (arr) => {
    for (let item of arr) {
      let date = moment(item.ngayChieuGioChieu).format("D");
      if (date === state.date) {
        return true;
      }
    }
    return false;
  };
  const renderOfSystemCinema = () => {
    let arrSysCine = [];
    let lichChieu = [];
    if (chiTietPhim.heThongRapChieu) {
      for (let sysCine of chiTietPhim.heThongRapChieu) {
        if (sysCine.tenHeThongRap === state.cineClick) {
          arrSysCine = sysCine.cumRapChieu;
        }
      }
      if (arrSysCine) {
        for (let item of arrSysCine) {
          lichChieu = [...lichChieu, item.lichChieuPhim];
        }
        if (arrSysCine.length > 0) {
          return arrSysCine.map((cine, index) => {
            let bol = checkDate(cine.lichChieuPhim);
            if (bol == true) {
              return (
                <div className="itemPhim" key={index}>
                  <Collapse defaultActiveKey={["1"]} ghost>
                    <Panel
                      header={
                        <div className="right__cover">
                          <img
                            className="TabHomeCinemaComplex__rightImg"
                            style={{ marginTop: "10px" }}
                            src={
                              "https://s3img.vcdn.vn/mobile/123phim/2021/03/godzilla-vs-kong-16150074733397_60x60.jpg"
                            }
                          />
                          <div className="show__titleMovie">
                            <p>
                              <span className="age">C13</span>
                              <span className="movieTitle">
                                {cine.tenCumRap}
                              </span>
                            </p>
                            <p>{cine.tenCumRap} - TIX 8.4 - IMDb 6.6</p>
                          </div>
                        </div>
                      }
                      key="1"
                    >
                      <div className="bot_content">
                        <h4>2D Digital</h4>
                        {cine.lichChieuPhim.map((time, indexTime) => {
                          let dateN = moment(time.ngayChieuGioChieu).format(
                            "D"
                          );
                          if (dateN == state.date) {
                            return (
                              <NavLink
                                to={`/checkout/${time.maLichChieu}`}
                                className="time"
                                key={indexTime}
                                onClick={() => {
                                  setChiTietPhimProps({
                                    maId: time.maLichChieu,
                                  });
                                }}
                              >
                                <span className="timeStart">
                                  {moment(time.ngayChieuGioChieu).format("LT")}
                                </span>
                                <span className="timeEnd">~20:40</span>
                              </NavLink>
                            );
                          }
                        })}
                      </div>
                    </Panel>
                  </Collapse>
                </div>
              );
            }
          });
        } else {
          return (
            <div
              style={{
                fontFamily: "SF Medium",
                fontSize: "18px",
                color: "#000",
                letterSpacing: "0.3",
              }}
            >
              Không có lịch chiếu
            </div>
          );
        }
      }
    }
  };

  return (
    <div className="InfoDetail">
      <div className="InfoDetail__tabs">
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <a
              className="nav-link active"
              id="nav-home-tab"
              data-toggle="tab"
              href="#nav-home"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
              onClick={() => {
                setState({
                  ...state,
                  classClick: "normal",
                });
              }}
            >
              Lịch Chiếu
            </a>
            <a
              className="nav-link"
              id="nav-profile-tab"
              data-toggle="tab"
              href="#nav-profile"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
              onClick={() => {
                setState({
                  ...state,
                  classClick: "bg-transparent",
                });
              }}
            >
              Thông tin
            </a>
            <a
              className="nav-link"
              id="nav-comment-tab"
              data-toggle="tab"
              href="#nav-comment"
              role="tab"
              aria-controls="nav-comment"
              aria-selected="false"
              onClick={() => {
                setState({
                  ...state,
                  classClick: "bg-transparent normal-comment",
                });
              }}
            >
              Đánh giá
            </a>
          </div>
        </nav>
        <div
          className={`tab-content InfoDetail__content ${state.classClick}`}
          id="nav-tabContent"
        >
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <div className="row">
              <div className="col-4 renderCinemaSystem__scroll">
                {renderCinemaSystem()}
              </div>
              <div className="col-8">
                <div className="dayOfWeek">{renderDayOfWeek()}</div>
                <div className="renderOfSystemCinema">
                  {renderOfSystemCinema()}
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade InfoDetail__Intro"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            <div className="row">
              <table className="table table-borderless col-6">
                <tbody>
                  <tr>
                    <td className="td-title">Tên phim</td>
                    <td> {chiTietPhim.tenPhim}</td>
                  </tr>
                  <tr>
                    <td className="td-title">Ngày công chiếu</td>
                    <td>
                      {moment(chiTietPhim.ngayKhoiChieu).format("MMM Do YY")}
                    </td>
                  </tr>
                  <tr>
                    <td className="td-title">Mã rap chiếu </td>
                    <td>{chiTietPhim.maNhom}</td>
                  </tr>
                  <tr>
                    <td className="td-title">Đánh giá trung bính </td>
                    <td>{chiTietPhim.danhGia}</td>
                  </tr>
                  <tr>{/* <hr style={{border: '1px solid #ffffff4a'}}/> */}</tr>
                  <tr>
                    <td className="td-title">Thể Loại- Định dạng </td>
                    <td>Hành Động - 2D/Digital</td>
                  </tr>
                  <tr>
                    <td className="td-title">Quốc Gia SX </td>
                    <td>Mỹ </td>
                  </tr>
                </tbody>
              </table>
              <div className="col-6">
                <h3>Nội dung</h3>
                <p className="noidung">{chiTietPhim.moTa}</p>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-comment"
            role="tabpanel"
            aria-labelledby="nav-comment-tab"
          >
            <div className="row">
              <InfoDetailComment/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
