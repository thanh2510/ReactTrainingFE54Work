import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useSelector } from "react-redux";
import { Fragment } from "react";
import DeleteSearch from "./DeleteSearch";
import EditSearch from "./EditSearch";
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);
const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
  search: {
    padding: "10px",
    margin: "10px",
  },
});
export default function TableSearch(props) {
  const classes = useStyles();
  // ** Reducer
  const { itemClick } = useSelector((state) => state.ManagerAdminReducer);
  return (
    <Fragment>
      {itemClick ? (
        <TableContainer component={Paper} className={`${classes.search}`}>
          <Table className={`${classes.table} `} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Data account</StyledTableCell>
                <StyledTableCell align="right">Results</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  Full Name
                </StyledTableCell>
                <StyledTableCell align="right">
                  {itemClick.hoTen}
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  Email
                </StyledTableCell>
                <StyledTableCell align="right">
                  {itemClick.email}
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  Name Account
                </StyledTableCell>
                <StyledTableCell align="right">
                  {itemClick.taiKhoan}
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  Password
                </StyledTableCell>
                <StyledTableCell align="right">
                  {itemClick.matKhau}
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  Phone Number
                </StyledTableCell>
                <StyledTableCell align="right">
                  {itemClick.soDt}
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  Type Account
                </StyledTableCell>
                <StyledTableCell align="right">
                  {itemClick.maLoaiNguoiDung}
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
          <div>
            <DeleteSearch itemClick={itemClick}/>
            <EditSearch itemClick={itemClick}/>
          </div>
        </TableContainer>
      ) : (
        <TableContainer component={Paper} className={`${classes.search}`}>
          <Table className={`${classes.table} `} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Data account</StyledTableCell>
                <StyledTableCell align="right">Results</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  Full Name
                </StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  Email
                </StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  Name Account
                </StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  Password
                </StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  Phone Number
                </StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  Type Account
                </StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
          <div>
            <DeleteSearch itemClick={itemClick}/>
            <EditSearch itemClick={itemClick}/>
          </div>
        </TableContainer>
      )}
    </Fragment>
  );
}
