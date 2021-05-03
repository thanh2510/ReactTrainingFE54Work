import axios from "axios";
import React, { useEffect, useState } from "react";
import { settings } from "../../../util/setting";
import { Input, Select, Rate } from "antd";
import "antd/dist/antd.css";
import UserComment from "./UserComment";

// *****
export default function InfoDetailComment(props) {
  let { chiTietPhim } = props;
  const [listUser, setListUser] = useState();
  console.log(listUser);
  let userLogin = JSON.parse(localStorage.getItem(settings.USER_LOGIN));
  console.log(userLogin);
  // ** Get APIs
  useEffect(() => {
    const getUser = async () => {
      const result = await axios({
        url: `${settings.domain}/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP01&tuKhoa=thanh&soTrang=1&soPhanTuTrenTrang=5`,
        method: "GET",
      });
      console.log("data", result);
      setListUser(result.data);
    };
    getUser();
  }, []);
  console.log("chiTietPhim props", chiTietPhim);
  return (
    <div className="comment">
      <div className="comment__star">
        <Input
          addonBefore={
            <img src={window.location.origin + "/Logo/avatar.jpg"} />
          }
          addonAfter={<Rate allowHalf defaultValue={0} />}
          placeholder="Bạn nghĩ gì về phim này?"
        />
      </div>
      <div className="comment">
        <UserComment/>
        <UserComment/>
      </div>
    </div>
  );
}
