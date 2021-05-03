import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Tabs, Radio, Space, Collapse } from "antd";
import "antd/dist/antd.css";
import "./HomeCinemaComplex.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getDataCinemaAction,
  getDataFilmAction,
  getDataCinemaWithIdCinemaAction,
  getDataCinemaWithIdCinemaSystemAction,
} from "../../../redux/actions/ManagerFilm";
import moment from "moment";
import { NavLink } from "react-router-dom";
const renderColor = (param) => {
  switch (param) {
    case "BHDStar":
      return "BHDStar";
    case "CGV":
      return "CGV";
    case "CineStar":
      return "CineStar";
    case "Galaxy":
      return "Galaxy";
    case "LotteCinima":
      return "LotteCinima";
    case "MegaGS":
      return "MegaGS";
  }
};
export default function HomeCinemaComplex(props) {
  const { TabPane } = Tabs;
  const { Panel } = Collapse;
  //   ** State
  const [cinema, setCinema] = useState({
    cineId: "BHDStar",
    opcity: "activeOp",
    rap: "BHD Star Cineplex - 3/2",
  });
  console.log(cinema);
  // ** Reducer
  const {
    arrCinema,
    arrFilmListCinemaSystem,
    arrCinemaWithIdCinema,
  } = useSelector((state) => state.QuanLyPhimReducer);
  // ** Dispatch
  const dispatch = useDispatch();
  // ** Dispatch Actions Get APIs
  useEffect(() => {
    // **
    dispatch(getDataFilmAction());
    dispatch(getDataCinemaAction());
  }, []);
  useEffect(() => {
    // **
    dispatch(getDataCinemaWithIdCinemaSystemAction(cinema.cineId));
    dispatch(getDataCinemaWithIdCinemaAction(cinema.cineId));
  }, [cinema]);
  // ** Render Cinemas
  const renderSystemCinema = () => {
    let listCinema = arrCinema;
    return listCinema.map((cine, index) => {
      return (
        <TabPane
          tab={
            <img
              className="cinemaTabHome"
              style={{ marginTop: "10px" }}
              src={`${cine.logo}`}
              onClick={() => {
                if (cine.maHeThongRap === "CGV") {
                  setCinema({
                    ...cinema,
                    cineId: cine.maHeThongRap,
                    rap: "CGV - Aeon Bình Tân",
                  });
                }
                if (cine.maHeThongRap === "BHDStar") {
                  setCinema({
                    ...cinema,
                    cineId: cine.maHeThongRap,
                    rap: "BHD Star Cineplex - 3/2",
                  });
                }
                if (cine.maHeThongRap === "CineStar") {
                  setCinema({
                    ...cinema,
                    cineId: cine.maHeThongRap,
                    rap: "CNS - Hai Bà Trưng",
                  });
                }
                if (cine.maHeThongRap === "LotteCinima") {
                  setCinema({
                    ...cinema,
                    cineId: cine.maHeThongRap,
                    rap: "Lotte - Cantavil",
                  });
                }
                if (cine.maHeThongRap === "Galaxy") {
                  setCinema({
                    ...cinema,
                    cineId: cine.maHeThongRap,
                    rap: "GLX - Huỳnh Tấn Phát",
                  });
                }
                if (cine.maHeThongRap === "MegaGS") {
                  setCinema({
                    ...cinema,
                    cineId: cine.maHeThongRap,
                    rap: "MegaGS - Cao Thắng",
                  });
                }
              }}
            />
          }
          key={`${index}`}
        >
          {renderCineList()}
        </TabPane>
      );
    });
  };
  const renderCineList = () => {
    if (arrFilmListCinemaSystem) {
      return arrFilmListCinemaSystem.map((item, index) => {
        return (
          <div
            className={`listPCinemas__item`}
            key={index}
            onClick={() => {
              setCinema({
                ...cinema,
                rap: item.tenCumRap,
              });
            }}
          >
            <img
              style={{ width: "50px", height: "50px" }}
              src={window.location.origin + "/Logo/cine.png"}
            />
            <div className="listPCinemas__content">
              <p className="title">
                <span className={renderColor(cinema.cineId)}>
                  {cinema.cineId}
                </span>
                - {item.tenCumRap}
              </p>
              <p className="add">{item.diaChi}</p>
              <a>[Chi Tiết]</a>
            </div>
          </div>
        );
      });
    }
  };
  const renderTimeFromFilm = (arr) => {
    if (arr) {
      return arr.map((time, index) => {
        let ti = moment(time.ngayChieuGioChieu).format("LT");
        let date = moment(time.ngayChieuGioChieu).format("D");
        let now = moment(Date()).format("D");
        // console.log(time, 'time');
        if (date === now) {
          return (
            <div key={index}>
              <NavLink to={`/checkout/${time.maLichChieu}`} className="time">
                <span className="timeStart">
                  {moment(time.ngayChieuGioChieu).format("LT")}{" "}
                </span>
                <span className="timeEnd">~{moment(ti + 2).format("LT")}</span>
              </NavLink>
            </div>
          );
        }
      });
    } else {
      return <></>;
    }
  };
  const checkDate = (arr) => {
    let now = moment(Date()).format("D");
    for (let item of arr) {
      let date = moment(item.ngayChieuGioChieu).format("D");
      if (date === now) {
        return true;
      }
    }
    return false;
  };
  const renderFilmFromCinema = () => {
    // ** lay rap theo cum
    if (arrCinemaWithIdCinema[0].lstCumRap) {
      let index = arrCinemaWithIdCinema[0].lstCumRap.findIndex(
        (cine) => cine.tenCumRap === cinema.rap
      );
      if (arrCinemaWithIdCinema[0].lstCumRap[index]) {
        let dsPhim = arrCinemaWithIdCinema[0].lstCumRap[index].danhSachPhim;
        if (dsPhim) {
          return dsPhim.map((film, index) => {
            let bol = checkDate(film.lstLichChieuTheoPhim);
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
                            src={film.hinhAnh}
                          />
                          <div className="show__titleMovie">
                            <p>
                              <span className="age">C13</span>
                              <span className="movieTitle">{film.tenPhim}</span>
                            </p>
                            <p>100 phút - TIX 8.4 - IMDb 6.6</p>
                          </div>
                        </div>
                      }
                      key="1"
                    >
                      <div className="bot_content">
                        <h4>2D Digital</h4>
                        {renderTimeFromFilm(film.lstLichChieuTheoPhim)}
                      </div>
                    </Panel>
                  </Collapse>
                </div>
              );
            }
          });
        } else {
          return <p>Không có lịch chiếu</p>;
        }
      }
    }
  };
  return (
    <div className="container CinemaComplex__bg" id="Booking">
      <div className="TabHomeCinemaComplex row">
        <div className="TabHomeCinemaComplex__left col-5">
          <Tabs tabPosition="left">{renderSystemCinema()}</Tabs>
        </div>
        <div className="TabHomeCinemaComplex__right col-7">
          {renderFilmFromCinema()}
        </div>
      </div>
    </div>
  );
}
