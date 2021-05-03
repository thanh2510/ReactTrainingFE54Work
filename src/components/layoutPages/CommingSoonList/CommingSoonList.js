import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from './CommingSoonList.css'
import { getDataFilmAction } from "../../../redux/actions/ManagerFilm";
import { NavLink } from "react-router-dom";

export default function CommingSoonList(props) {
  // ** Reducer
  const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);
  // ** Dispatch
  const dispatch = useDispatch();
  // ** Dispatch Actions Get APIs
  useEffect(() => {
    dispatch(getDataFilmAction());
  }, []);

  const renderList = () => {
    return arrFilm.map((item, index) => {
      if (index < 50 && index > 43) {
        return (
          <NavLink to={`/moviedetail/${item.maPhim}`} style={{cursor:'pointer'}} className="col-md-2 col-6 movieList__item" key={index}>
            <a className="overlay">
              <img src={item.hinhAnh} style={{height:'220px'}} className="img-fluid" />
              <h3 className="movieList__title">{item.tenPhim}</h3>
              <p className="movieList__date">{moment(item.ngayKhoiChieu).format("L")}</p>
            </a>
          </NavLink>
        );
      }
    });
  };
  return (
    <div className="movieList">
      <div className="container">
        <div className="row">{renderList()}</div>
      </div>
    </div>
  );
}
