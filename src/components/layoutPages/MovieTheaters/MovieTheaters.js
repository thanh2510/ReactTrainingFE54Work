import React, { useEffect, useMemo, useState } from "react";
import style from "./MovieTheaters.css";
import { useSelector, useDispatch } from "react-redux";
import { getDataFilmAction } from "../../../redux/actions/ManagerFilm";
import { NavLink } from "react-router-dom";

export default function MovieTheaters(props) {
  const [state, setstate] = useState({
    act: "active",
    show: "show",
    active: true,
  });
  const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataFilmAction());
  }, []);
  const renderListPhim = (start) => {
    return arrFilm.map((phim, index) => {
      if (
        index == start ||
        index == start + 1 ||
        index == start + 2 ||
        index == start + 3
      ) {
        return (
          <div className="col-3" key={index} style={{ padding: "0 10px" }}>
            <NavLink
              to={`/moviedetail/${phim.maPhim}`}
              className="movies__tabs__item"
            >
              <div className="movies__show">
                <div className="imgMovies">
                  <img src={phim.hinhAnh} style={{ height: "300px" }} />
                  <div className="imgMovies__play introHoverNone">
                    <img src="./img/play-video.png" />
                  </div>
                </div>
                <div className="titleMovies">
                  <div className="titleMovies__show">
                    <div
                      className="show__titleMovie"
                      style={{ padding: "0 10px" }}
                    >
                      <span className="age">C16</span>
                      {phim.tenPhim}
                    </div>
                    <span className="time">102 phút </span>
                  </div>
                  <div className="titleMovies__buy introHoverNone">
                    <button type="button" className="btn btn-danger">
                      Mua Vé
                    </button>
                  </div>
                </div>
                <div className="pointMovies">
                  <p>7.8</p>
                  <p>
                    <img className="smallStar" src="./img/star1.png" />
                    <img className="smallStar" src="./img/star1.png" />
                    <img className="smallStar" src="./img/star1.png" />
                    <img className="half" src="./img/star1.2.png" />
                  </p>
                </div>
              </div>
            </NavLink>
          </div>
        );
      }
    });
  };
  const handleClickStyle = () => {
    setstate({
      active: !state.active,
    });
  };
  return (
    <div className="container" style={{ padding: "5px 100px" }}>
      <div className="tabsMovies containerTIX">
        <ul
          className="nav nav-tabsMovies"
          style={{ marginBottom: "50px" }}
          id="tabsMovies-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link  ${state.active ? "active" : "noActive"}`}
              id="nowMovie"
              data-bs-toggle="pill"
              data-bs-target="#tabsMovies-home"
              type="button"
              role="tab"
              aria-controls="tabsMovies-home"
              aria-selected={`${state.active ? "true" : "false"}`}
              onClick={handleClickStyle}
            >
              Đang Chiếu
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link  ${state.active ? "noActive" : "active"}`}
              id="futureMovie"
              data-bs-toggle="pill"
              data-bs-target="#tabsMovies-profile"
              type="button"
              role="tab"
              aria-controls="tabsMovies-profile"
              aria-selected={`${state.active ? "true" : "false"}`}
              onClick={handleClickStyle}
            >
              Sắp Chiếu
            </button>
          </li>
        </ul>
        <div className="tab-content" id="tabsMovies-tabContent">
          <div
            className={`tab-pane fade ${state.active ? "show active" : ""}`}
            id="tabsMovies-home"
            role="tabpanel"
            aria-labelledby="nowMovie"
          >
            <div
              id="moviesSlide-3"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row" style={{ margin: "0" }}>
                    {renderListPhim(44)}
                  </div>
                  <div className="row" style={{ margin: "0" }}>
                    {renderListPhim(40)}
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row" style={{ margin: "0" }}>
                    {renderListPhim(52)}
                  </div>
                  <div className="row" style={{ margin: "0" }}>
                    {renderListPhim(16)}
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-next"
                href="#moviesSlide-3"
                role="button"
                data-slide="next"
              >
                <img src="./img/next-session.png" />
              </a>
              <a
                className="carousel-control-prev"
                href="#moviesSlide-3"
                role="button"
                data-slide="prev"
              >
                <img src="./img/back-session.png" />
              </a>
            </div>
          </div>
          <div
            className={`tab-pane fade ${state.active ? "" : "show active"}`}
            id="tabsMovies-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
            aria-labelledby="futureMovie"
          >
            <div
              id="moviesSlide-4"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item">
                  <div className="row" style={{ margin: "0" }}>{renderListPhim(4)}</div>
                  <div className="row" style={{ margin: "0" }}>{renderListPhim(10)}</div>
                </div>
                <div className="carousel-item active">
                  <div className="row" style={{ margin: "0" }}>{renderListPhim(18)}</div>
                  <div className="row" style={{ margin: "0" }}>{renderListPhim(28)}</div>
                </div>
              </div>
              <a
                className="carousel-control-next"
                href="#moviesSlide-4"
                role="button"
                data-slide="next"
              >
                <img src="./img/next-session.png" />
              </a>
              <a
                className="carousel-control-prev"
                href="#moviesSlide-4"
                role="button"
                data-slide="prev"
              >
                <img src="./img/back-session.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
