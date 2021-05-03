import React, { useEffect, useState } from "react";
import style from "./LayoutUserProfile.css";
import { Tabs, Popover, Button } from "antd";
import { settings } from "../../util/setting";
import axios from "axios";
import swal from "@sweetalert/with-react";
import { history } from "../../App";
import { Redirect } from "react-router";
import { editUser } from "../../redux/actions/ManagerMemberActions";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import NumberFormat from "react-number-format";
const { TabPane } = Tabs;

const text = <span>Edit</span>;
const content = (
  <div style={{ textAlign: "end" }}>
    <input
      type="text"
      className="form-control"
      placeholder="Type your editor"
      aria-label="Username"
    ></input>
  </div>
);
export default function LayoutUserProfile(props) {
  const [userEdit, setUserEdit] = useState();
  const [state, setState] = useState({
    clicked: false,
    hovered: false,
  });
  const dispatch = useDispatch();
  // ** Dispatch
  let userLoginReload = JSON.parse(localStorage.getItem(settings.USER_LOGIN));
  console.log("userEdit", userEdit);

  useEffect(() => {
    const getDetail = async () => {
      const result = await axios({
        url: `${settings.domain}/QuanLyNguoiDung/ThongTinTaiKhoan`,
        method: "POST",
        data: { taiKhoan: userLoginReload.taiKhoan },
      });
      setUserEdit(result.data);
    };
    getDetail();
  }, []);
  const hide = () => {
    setState({
      clicked: false,
    });
  };
  const handleClickChange = (visible) => {
    setState({
      clicked: visible,
      hovered: false,
    });
  };
  const handleChange = (e) => {
    let { name, value } = e.target;
    setUserEdit({
      ...userEdit,
      [name]: value,
      maNhom: "GP01",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const renderInforFilm = () => {
    return (
      <table className="table table-striped tb-his">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col" style={{ width: "55%" }}>
              Detail film{" "}
            </th>
            <th scope="col">Date set</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {userEdit && userEdit.thongTinDatVe.length>0 ? (
            userEdit.thongTinDatVe.map((item, index) => {
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>
                    {item.tenPhim}, {item.danhSachGhe[0].tenHeThongRap}
                  </td>
                  <td>{moment(item.ngayDat).format("LL")}</td>
                  <td>
                    <NumberFormat
                      value={item.danhSachGhe[0].maGhe}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  </td>
                </tr>
              );
            })
          ) : (
            <p>Tai khoan chua dat ve</p>
          )}
        </tbody>
      </table>
    );
  };
  if (localStorage.getItem(settings.USER_LOGIN)) {
    let userLogin = JSON.parse(localStorage.getItem(settings.USER_LOGIN));
    console.log(userLogin, "userLogin");
    if (userLogin.maLoaiNguoiDung == "KhachHang") {
      return (
        <div className="LayoutUserProfile">
          <div className="LayoutUserProfile__content">
            <Tabs tabPosition="left">
              <TabPane tab="Your profile" key="1">
                <table
                  className="table LayoutUserProfile__table"
                  style={{ marginTop: "50px" }}
                >
                  <tbody>
                    <tr>
                      <th scope="row">Name account</th>
                      <td>{userLogin.taiKhoan}</td>
                      <td>
                        <Popover
                          placement="bottomRight"
                          title={"Edit name account"}
                          onVisibleChange={handleClickChange}
                          visible={state.clicked}
                          content={
                            <form
                              style={{ textAlign: "end" }}
                              onSubmit={handleSubmit}
                            >
                              <input
                                type="text"
                                className="form-control input__content"
                                placeholder="Type your editor"
                                aria-label="Username"
                                name="taiKhoan"
                                onChange={handleChange}
                              ></input>
                              <button
                                type="submit"
                                value="Submit"
                                onClick={
                                  (hide,
                                  () => {
                                    dispatch(editUser(userEdit));
                                  })
                                }
                                className="btn btn-success mt-2 float-end"
                              >
                                Save
                              </button>
                            </form>
                          }
                          trigger="click"
                        >
                          <span>Edit</span>
                        </Popover>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Full name</th>
                      <td>{userLogin.hoTen}</td>
                      <td>
                        <Popover
                          placement="bottomRight"
                          title={text}
                          content={
                            <form
                              style={{ textAlign: "end" }}
                              onSubmit={handleSubmit}
                            >
                              <input
                                type="text"
                                className="form-control input__content"
                                placeholder="Type your editor"
                                aria-label="Username"
                                name="hoTen"
                                onChange={handleChange}
                              ></input>
                              <button
                                type="submit"
                                value="Submit"
                                onClick={
                                  (hide,
                                  () => {
                                    dispatch(editUser(userEdit));
                                  })
                                }
                                className="btn btn-success mt-2 float-end"
                              >
                                Save
                              </button>
                            </form>
                          }
                          trigger="click"
                        >
                          <a>Edit</a>
                        </Popover>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Email</th>
                      <td>{userLogin.email}</td>
                      <td>
                        <Popover
                          placement="bottomRight"
                          title={text}
                          content={
                            <form
                              style={{ textAlign: "end" }}
                              onSubmit={handleSubmit}
                            >
                              <input
                                type="text"
                                className="form-control input__content"
                                placeholder="Type your editor"
                                aria-label="Username"
                                name="email"
                                onChange={handleChange}
                              ></input>
                              <button
                                type="submit"
                                value="Submit"
                                onClick={
                                  (hide,
                                  () => {
                                    dispatch(editUser(userEdit));
                                  })
                                }
                                className="btn btn-success mt-2 float-end"
                              >
                                Save
                              </button>
                            </form>
                          }
                          trigger="click"
                        >
                          <a>Edit</a>
                        </Popover>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Password </th>
                      {userEdit ? <td>{userEdit.matKhau}</td> : <td></td>}
                      <td>
                        <Popover
                          placement="bottomRight"
                          title={text}
                          content={
                            <form
                              style={{ textAlign: "end" }}
                              onSubmit={handleSubmit}
                            >
                              <input
                                type="text"
                                className="form-control input__content"
                                placeholder="Type your editor"
                                aria-label="Username"
                                name="matKhau"
                                onChange={handleChange}
                              ></input>
                              <button
                                type="submit"
                                value="Submit"
                                onClick={
                                  (hide,
                                  () => {
                                    dispatch(editUser(userEdit));
                                  })
                                }
                                className="btn btn-success mt-2 float-end"
                              >
                                Save
                              </button>
                            </form>
                          }
                          trigger="click"
                        >
                          <a>Edit</a>
                        </Popover>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Phone</th>
                      <td>{userLogin.soDT}</td>
                      <td>
                        <Popover
                          placement="bottomRight"
                          title={text}
                          content={
                            <form
                              style={{ textAlign: "end" }}
                              onSubmit={handleSubmit}
                            >
                              <input
                                type="text"
                                className="form-control input__content"
                                placeholder="Type your editor"
                                aria-label="Username"
                                name="soDT"
                                onChange={handleChange}
                              ></input>
                              <button
                                type="submit"
                                value="Submit"
                                onClick={
                                  (hide,
                                  () => {
                                    dispatch(editUser(userEdit));
                                  })
                                }
                                className="btn btn-success mt-2 float-end"
                              >
                                Save
                              </button>
                            </form>
                          }
                          trigger="click"
                        >
                          <a>Edit</a>
                        </Popover>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Loại người dùng</th>
                      <td>{userLoginReload.maLoaiNguoiDung}</td>
                      <td>
                        <p>Can't edit</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </TabPane>
              <TabPane tab="Your Booking" key="2">
                {renderInforFilm()}
              </TabPane>
            </Tabs>
          </div>
        </div>
      );
    } else {
      swal("You must login account! You not a member!");
      return <Redirect to="/login" />;
    }
  }
  {
    swal("You must login account!");
    return <Redirect to="/login" />;
  }
}
