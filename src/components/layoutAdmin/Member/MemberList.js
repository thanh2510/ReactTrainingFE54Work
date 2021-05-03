import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useSelector, useDispatch } from "react-redux";
import { getAllUserAdmin } from "../../../redux/actions/AdminActions";
import Pagination from "@material-ui/lab/Pagination";
import { Button } from "@material-ui/core";
import style from '../layoutDashboard/Dashboard.css'

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function MemberList(props) {
  let { arrAllUser } = props;
  let lg = Math.floor((arrAllUser.length)/10);
  const classes = useStyles();
  const [state, setState] = useState({
    road: 10,
    value: 1,
  });
  // ** Dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUserAdmin());
  }, []);
  const onChangeClick = (e) => {
    setState({
      ...state,
      value: e.target.outerText,
    });
  };
  const renderTable = (row, index) => {
    return (
      <TableRow key={index}>
        <TableCell>{row.taiKhoan}</TableCell>
        <TableCell>{row.hoTen}</TableCell>
        <TableCell>{row.email}</TableCell>
        <TableCell>{row.matKhau}</TableCell>
        <TableCell align="right">{row.maLoaiNguoiDung}</TableCell>
      </TableRow>
    );
  };
  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Account</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Password</TableCell>
            <TableCell align="right">Type Account</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {arrAllUser ? (
            arrAllUser.map((row, index) =>
              index < state.value * state.road &&
              index > (state.value - 1) * state.road
                ? renderTable(row, index)
                : ""
            )
          ) : (
            <></>
          )}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Pagination
          component={Button}
          onChange={onChangeClick}
          count={lg +1}
          className="ulli"
        />
      </div>
    </React.Fragment>
  );
}
