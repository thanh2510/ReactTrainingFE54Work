import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { List, ListItem, ListItemText, TextField } from "@material-ui/core";
import { Fragment } from "react";
import {
  searchUserAdmin,
  searchItemClick,
} from "../../../redux/actions/AdminActions";
import { useDispatch, useSelector } from "react-redux";
import { ADMIN_USERCLICK } from "../../../redux/const/ManagerAdmin";

const useStyles = makeStyles((theme) => ({
  search: {
    padding: "10px",
    margin: "10px",
  },
  searchItem: {
    borderBottom: "1px solid #cecece91",
  },
  hei: {
    height: "370px",
  },
}));
let data = [
  {
    taiKhoan: "123",
    hoTen: "assssssssssss",
    email: "vuoaaavvngvgc@gmail.com",
    soDt: "",
    matKhau: "Aa123123",
    maLoaiNguoiDung: "KhachHang",
  },
  {
    taiKhoan: "123@admin",
    hoTen: "asdasd",
    email: "bbbaaadmintuquyet@gmail.com",
    soDt: "",
    matKhau: "148ooo",
    maLoaiNguoiDung: "QuanTri",
  },
  {
    taiKhoan: "123sad",
    hoTen: "asdf",
    email: "fqwef@gmail.com",
    soDt: "1234",
    matKhau: "1",
    maLoaiNguoiDung: "KhachHang",
  },
  {
    taiKhoan: "123xczcv",
    hoTen: "asczx",
    email: "abwe@gmail.com",
    soDt: "123",
    matKhau: "123",
    maLoaiNguoiDung: "KhachHang",
  },
  {
    taiKhoan: "aaaa",
    hoTen: "aaaaa",
    email: "aaa@yahoo.com",
    soDt: "12341234",
    matKhau: "aaaa",
    maLoaiNguoiDung: "khachhang",
  },
  {
    taiKhoan: "aaaaaaaaaaa",
    hoTen: "dsad",
    email: "hoanglong.lek22@gmail.com",
    soDt: "123456",
    matKhau: "123456",
    maLoaiNguoiDung: "KhachHang",
  },
  {
    taiKhoan: "ab",
    hoTen: "a",
    email: "a",
    soDt: "012309123901",
    matKhau: "a",
    maLoaiNguoiDung: "KhachHang",
  },
];
export default function Search(props) {
  const classes = useStyles();
  const [input, setinput] = useState("a");
  const [item, setitem] = useState();
  const handleChangeInput = (e) => {
    setinput(e.target.value);
  };
  // ** Reducer
  const { arrSearchUser, itemClick } = useSelector(
    (state) => state.ManagerAdminReducer
  );
  // ** Dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchUserAdmin(input));
  }, [input]);
  useEffect(() => {
    dispatch(searchItemClick(item));
  }, [item]);
  const handleClickItem = (item) => {
    setitem(item);
  };
  console.log(item);
  return (
    <Fragment>
      {arrSearchUser ? (
        <Paper className={classes.search}>
          <form noValidate autoComplete="off">
            <TextField
              fullWidth
              id="filled-basic"
              label="Search"
              variant="filled"
              onChange={handleChangeInput}
            />
          </form>
          <List
            className={classes.hei}
            component="nav"
            aria-label="main mailbox folders"
          >
            {input != ""
              ? arrSearchUser.map((item, index) => {
                  if (index < 7) {
                    return (
                      <ListItem
                        className={classes.searchItem}
                        button
                        key={index}
                        onClick={() => {
                          handleClickItem(item);
                        }}
                      >
                        <ListItemText primary={`${item.hoTen}`} />
                      </ListItem>
                    );
                  }
                })
              : setinput("a")}
          </List>
        </Paper>
      ) : (
        <></>
      )}
    </Fragment>
  );
}
