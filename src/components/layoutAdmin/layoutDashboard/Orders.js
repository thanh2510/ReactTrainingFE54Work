import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";
import { useSelector, useDispatch } from "react-redux";
import { getMemberAdmin } from "../../../redux/actions/AdminActions";
import Pagination from "@material-ui/lab/Pagination";
import { Button } from "@material-ui/core";
import { Fragment } from "react";

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));
export default function Orders(props) {
  let { arrMember } = props;
  const classes = useStyles();
  const [state, setState] = useState({
    road: 10,
    value: 1,
  });
  // ** Dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMemberAdmin(state.road, state.value));
  }, [state]);
  const onChangeClick = (e) => {
    setState({
      ...state,
      value: e.target.outerText,
    });
  };
  return (
    <React.Fragment>
      {arrMember ? (
        <Fragment>
          <Title>List Member </Title>
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
              {arrMember.items ? (
                arrMember.items.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.taiKhoan}</TableCell>
                    <TableCell>{row.hoTen}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.matKhau}</TableCell>
                    <TableCell align="right">{row.maLoaiNguoiDung}</TableCell>
                  </TableRow>
                ))
              ) : (
                <></>
              )}
            </TableBody>
          </Table>
          <div className={classes.seeMore}>
            <Pagination
              component={Button}
              onChange={onChangeClick}
              count={arrMember.totalPages}
              className="ulli"
            />
          </div>
        </Fragment>
      ) : (
        <></>
      )}
    </React.Fragment>
  );
}
