import React, { Fragment } from "react";
import swal from "sweetalert";
import Dashboard from "../../components/layoutAdmin/layoutDashboard/Dashboard";
import { settings } from "../../util/setting";

export default function Admin(props) {
  const userLG = JSON.parse(localStorage.getItem(settings.USER_LOGIN));
  if (userLG.maLoaiNguoiDung === "QuanTri") {
    return (
      <Fragment>
        <Dashboard userLG={userLG}/>
      </Fragment>
    );
  }
  return(
    swal(
      <div>
        <h1>Opps!</h1>
        <p>{` Have some error! you are not administrator`}</p>
      </div>
    )
  )
}
