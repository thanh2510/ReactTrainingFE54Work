import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import style from "./LayoutLogin.css";
import { history } from "../../App";
import { Modal, Button } from "antd";
import { useDispatch } from "react-redux";
import { sentUserLogin } from "../../redux/actions/ManagerMemberActions";

export default function LayoutLogin(props) {
  const [visible, setVisible] = useState(true);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState({});
  const [modalStyle, setModalStyle] = useState({
    act: "noActive",
    noAct: "noActive",
  });
  let dispatch = useDispatch();
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
      dispatch(sentUserLogin(modalText));
    }, 3000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    history.goBack();
    setVisible(false);
  };
  const handleChange = (e) => {
    let { value, name } = e.target;
    console.log(value);
    setModalText({
      ...modalText,
      [name]: value,
    });
  };
  console.log("modalText", modalText);
  return (
    <Modal
      className="loginLayout"
      visible={visible}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      <div className="form-group p-3">
        <h3 style={{ color: "#fff" }}>LOGIN</h3>
        <div className="item" style={{ marginTop: "50px" }}>
          <label id="helpId" className={`${modalStyle.act} text-muted`}>
            Your name
          </label>
          <input
            type="text"
            name="name"
            className={`form-control`}
            aria-describedby="helpId"
            onChange={handleChange}
            onClick={() => {
              setModalStyle({
                ...modalStyle,
                act: "active",
              });
            }}
          />
        </div>
        <div className="item" style={{ marginBottom: "10px" }}>
          <label id="helpId" className={`${modalStyle.noAct} text-muted`}>
            Your password
          </label>
          <input
            onChange={handleChange}
            onClick={() => {
              setModalStyle({
                ...modalStyle,
                noAct: "active",
              });
            }}
            type="password"
            name="password"
            className="form-control"
            aria-describedby="helpId"
          />
        </div>
      </div>
    </Modal>
  );
}
