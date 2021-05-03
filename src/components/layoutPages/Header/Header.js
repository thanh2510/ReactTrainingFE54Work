import React, { useState } from "react";
import style from "./Header.css";
import { settings } from "../../../util/setting";
import { NavLink } from "react-router-dom";
import { Popover, Button } from "antd";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Header(props) {
  const [state, setState] = useState({visible: false,});
  let userLogin = JSON.parse(localStorage.getItem(settings.USER_LOGIN));
  const hide = () => {
    setState({
      visible: false,
    });
  };
  const handleVisibleChange = (visible) => {
    setState({ visible });
  };
  if (userLogin) {
    return (
      <div className="header">
        <div className="container">
          <div className="headerTop mt-4">
            <p className="text-white text-right mb-0">
              <i className="fas fa-phone-" />
              <span>
                <a
                  className="text-white mx-3 border-right pr-3 text-phone"
                  href="tel:03301234567"
                >
                  0962 311 276
                </a>
              </span>
              <i className="fa fa-user" />
              <span>
                <NavLink
                  className="text-white mx-3 border-right pr-3 text-phone"
                  to="/register"
                >
                  Registration
                </NavLink>
              </span>
              <i className="fa fa-user-lock" />
              <span>
                <Popover
                  className="headerLogin"
                  placement="bottomRight"
                  title={`Xin chào ${userLogin.hoTen}`}
                  visible={state.visible}
                  onVisibleChange={handleVisibleChange}
                  trigger="click"
                  content={
                    <div className="d-flex flex-column popLogin">
                      <NavLink
                        className="login__item"
                        to="/profile"
                        onClick={hide}
                      >
                        Xem thông tin cá nhân
                      </NavLink>
                      <a
                        className="login__item"
                        onClick={() => {
                          localStorage.removeItem(settings.USER_LOGIN);
                          setTimeout(() => {
                            window.location.reload();
                          }, 1000);
                        }}
                      >
                        Đăng xuất
                      </a>
                    </div>
                  }
                >
                  <Button className="ml-3">{userLogin.hoTen}</Button>
                </Popover>
              </span>
            </p>
          </div>
          <nav className="navbar navbar-expand-lg navbar-dark">
            <NavLink className="navbar-brand" to="/">
              <img src={window.location.origin + "/Logo/logo.svg"} />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#movieNavBar"
              aria-controls="navbarNavMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="movieNavBar">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <NavLink className="nav-link" to="/">
                    Home <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="Showtimes" spy={true} smooth={true}>
                    Showtimes
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="Theaters" spy={true} smooth={true}>
                    Theaters
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="Booking" spy={true} smooth={true}>
                    Booking
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="Contact" spy={true} smooth={true}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  } else {
    return (
      <div className="header">
        <div className="container">
          <div className="headerTop mt-4">
            <p className="text-white text-right mb-0">
              <i className="fas fa-phone-" />
              <span>
                <a
                  className="text-white mx-3 border-right pr-3 text-phone"
                  href="tel:03301234567"
                >
                  0962 311 276
                </a>
              </span>
              <i className="fa fa-user" />
              <span>
                <NavLink
                  className="text-white mx-3 border-right pr-3 text-phone"
                  to="/register"
                >
                  Registration
                </NavLink>
              </span>
              <i className="fa fa-user-lock" />
              <span>
                <NavLink
                  to="/login"
                  className="text-white mx-3 border-right pr-3 text-phone"
                >
                  Login
                </NavLink>
              </span>
            </p>
          </div>
          <nav className="navbar navbar-expand-lg navbar-dark">
            <NavLink className="navbar-brand" to="/">
              <img src={window.location.origin + "/Logo/logo.svg"} />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#movieNavBar"
              aria-controls="navbarNavMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="movieNavBar">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <NavLink className="nav-link" to="/home">
                    Home <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="Showtimes" spy={true} smooth={true}>
                    Showtimes
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="Theaters" spy={true} smooth={true}>
                    Theaters
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="Booking" spy={true} smooth={true}>
                    Booking
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="Contact" spy={true} smooth={true}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
