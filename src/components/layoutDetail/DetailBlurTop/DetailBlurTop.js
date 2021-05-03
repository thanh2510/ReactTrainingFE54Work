import React, { useEffect, useState } from "react";
import style from "./DetailBlurTop.css";
// **
import { NavLink } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import axios from "axios";
import moment, { now } from "moment";
import "moment-timezone";
import Moment from "react-moment";
import { settings } from "../../../util/setting";
import { Collapse } from "antd";
import "antd/dist/antd.css";
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
export default function DetailBlurTop(props) {
  const randomeSo = Math.floor(Math.random() * 10);
  const { Panel } = Collapse;
  const [chiTietPhim, setChiTietPhim] = useState({
    maPhim: props.maPhim,
  });
  const [state, setState] = useState({
    cineClick: "BHD Star Cineplex",
    activeClick: "active",
    noActiveClick: "no__active",
    date: moment(new Date()).format("D"),
    rapChieu: "Co",
  });
  console.log('chiTietPhim state', chiTietPhim);
  // ** create circle to CircularProgressbar
  const percentage = chiTietPhim.danhGia * 10;
  const needDominantBaselineFix = true;
  useEffect(() => {
    const getDetail = async()=>{
      const result = await axios({
        url: `${settings.domain}/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${chiTietPhim.maPhim}`,
        method: "GET",
      });
      console.log("data", result);
      setChiTietPhim(result.data);
      document.title = result.data.tenPhim;
    }
    getDetail()
  }, []);
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
  const renderOfSystemCinema = () => {
    let arrSysCine = [];
    let lichChieu = [];
    console.log(
      "chiTietPhim trong renderOfSystemCinema ",
      chiTietPhim.heThongRapChieu
    );
    for (let sysCine of chiTietPhim.heThongRapChieu) {
      if (sysCine.tenHeThongRap === state.cineClick) {
        arrSysCine = sysCine.cumRapChieu;
      }
    }
    console.log("Mang rap chieu phim - CGV - Aeon Bình Tân", arrSysCine);
    for (let item of arrSysCine) {
      lichChieu = item.lichChieuPhim;
    }
    console.log('lichChieu',lichChieu);

    if (arrSysCine.length > 0) {
      return arrSysCine.map((cine, index) => {
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
                        <span className="movieTitle">{cine.tenCumRap}</span>
                      </p>
                      <p>{cine.tenCumRap} - TIX 8.4 - IMDb 6.6</p>
                    </div>
                  </div>
                }
                key="1"
              >
              
                <div className="bot_content">
                  <h4>2D Digital</h4>
                  {
                  // renderCinemaSystem()
                  }
                  <a className="time">
                    <span className="timeStart">17:00 </span>
                    <span className="timeEnd">~20:40</span>
                  </a>
                  <a className="time">
                    <span className="timeStart">17:00 </span>
                    <span className="timeEnd">~20:40</span>
                  </a>
                </div>
              </Panel>
            </Collapse>
          </div>
        );
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
  };
  return (
    <div>
      <div className="mainPagePhim">
        <div className="mainPagePhim__styleBlur">
          <img src={window.location.origin + `/slider/bg${randomeSo}.jpg`} />
        </div>
        <div className="styleGradient"></div>
        <div className="mainPagePhim__mainDetail">
          <div
            className="row"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="col-4">
              <img className="img__detail" src={chiTietPhim.hinhAnh} />
            </div>
            <div className="col-5" style={{ paddingLeft: "0" }}>
              <div>
                <span className="detailMainInfo1">
                  {moment(chiTietPhim.ngayKhoiChieu).format("L")}
                </span>

                <div
                  className="titleMovies__show"
                  style={{ marginBottom: "20px" }}
                >
                  <div className="show__titleMovie">
                    <span className="age">{chiTietPhim.maNhom}</span>
                    {chiTietPhim.tenPhim}
                  </div>
                  <span className="time">100 phút - 7.2 IMDb - 2D/Digital</span>
                </div>
                <button type="button" className="btn btn-danger">
                  Mua vé
                </button>
              </div>
            </div>
            <div className="col-2">
              <div style={{ width: "150px" }}>
                <CircularProgressbar
                  value={percentage}
                  text={
                    <tspan dy={needDominantBaselineFix ? 0 : 0}>
                      {chiTietPhim.danhGia}
                    </tspan>
                  }
                />
              </div>
              <div id="starMain" className="row star" style={{ marginTop: 10 }}>
                <img
                  className="smallStar"
                  src={window.location.origin + "/film/star1.png"}
                />
                <img
                  className="smallStar"
                  src={window.location.origin + "/film/star1.png"}
                />
                <img
                  className="smallStar"
                  src={window.location.origin + "/film/star1.png"}
                />
                <img
                  className="smallStar"
                  src={window.location.origin + "/film/star1.png"}
                />
                <img
                  className="half"
                  src={window.location.origin + "/film/star1.2.png"}
                />
              </div>
              <p
                style={{ color: " white", fontSize: "16px", marginLeft: "5px" }}
              >
                22 người đánh giá
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="InfoDetail">
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
              >
                Thông tin
              </a>
              <a
                className="nav-link"
                id="nav-contact-tab"
                data-toggle="tab"
                href="#nav-contact"
                role="tab"
                aria-controls="nav-contact"
                aria-selected="false"
              >
                Đánh giá
              </a>
            </div>
          </nav>
          <div className="tab-content InfoDetail__content" id="nav-tabContent">
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
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th scope="col">Ngày công chiếu</th>
                    <th scope="col">First</th>
                    <th scope="col" colSpan="2">
                      Last
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              className="tab-pane fade"
              id="nav-contact"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
            >
              ...
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
