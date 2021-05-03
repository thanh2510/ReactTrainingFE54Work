import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import AddIcon from "@material-ui/icons/Add";
import { Fragment } from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Tooltip,
  Fab,
  IconButton,
} from "@material-ui/core";
import swal from "sweetalert";
import { useDispatch } from "react-redux";
import { addAccountAdmin } from "../../../../redux/actions/AdminActions";
// import { editAccountAdmin } from "../../../redux/actions/AdminActions";
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
  textEdit: {
    textTransform: "inherit",
    background: "#28a745",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 38,
    padding: "0 30px",
    margin: "10px 10px 5px 0",
    boxShadow: "0 3px 5px 2px rgb(105 172 255 / 30%)",
  },
  table: {
    minWidth: 450,
  },
  fab: {
    padding: "10px",
  },
});

export default function AddUserAdmin(props) {
  const [state, setstate] = useState({
    email: "",
    hoTen: "",
    maLoaiNguoiDung: "",
    matKhau: "",
    soDt: "",
    taiKhoan: "",
    maNhom: "GP01",
  });
  console.log(state);
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  let dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChangeInput = (e) => {
    let { value, name } = e.target;
    setstate({
      ...state,
      [name]: value,
      maNhom: "GP01",
    });
  };
  const editUserItem = () => {
    dispatch(addAccountAdmin(state));
    setOpen(false);
    setstate({
      email: "",
      hoTen: "",
      maLoaiNguoiDung: "",
      matKhau: "",
      soDt: "",
      taiKhoan: "",
      maNhom: "GP01",
    });
  };
  return (
    <Fragment >
      <div style={{textAlign:'center'}}>
        <Tooltip  title="Add" aria-label="add" onClick={handleClickOpen}>
          <IconButton
            style={{
              backgroundColor: "rgb(63 81 181)",
            }}
          >
            <AddIcon style={{ color: "white" }} />
          </IconButton>
        </Tooltip>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent style={{ width: "500px" }}>
            <div>
              <Table
                className={`${classes.table} `}
                aria-label="customized table"
              >
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Data account</StyledTableCell>
                    <StyledTableCell align="right">Add</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      Full Name
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <form noValidate autoComplete="off">
                        <TextField
                          value={state.hoTen}
                          id="standard-basic"
                          name="hoTen"
                          onChange={handleChangeInput}
                        />
                      </form>
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      Email
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <form noValidate autoComplete="off">
                        <TextField
                          value={state.email}
                          id="standard-basic"
                          name="email"
                          onChange={handleChangeInput}
                        />
                      </form>
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      Name Account
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <form noValidate autoComplete="off">
                        <TextField
                          value={state.taiKhoan}
                          id="standard-basic"
                          name="taiKhoan"
                          onChange={handleChangeInput}
                        />
                      </form>
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      Password
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <form noValidate autoComplete="off">
                        <TextField
                          value={state.matKhau}
                          id="standard-basic"
                          name="matKhau"
                          onChange={handleChangeInput}
                        />
                      </form>
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      Phone Number
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <form noValidate autoComplete="off">
                        <TextField
                          name="soDt"
                          value={state.soDt}
                          id="standard-basic"
                          onChange={handleChangeInput}
                        />
                      </form>
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      Type Account
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <RadioGroup
                        aria-label="gender"
                        name="maLoaiNguoiDung"
                        value={state.maLoaiNguoiDung}
                        style={{ flexDirection: "row" }}
                        onChange={handleChangeInput}
                      >
                        <FormControlLabel
                          value="KhachHang"
                          control={<Radio />}
                          label="Customer"
                        />
                        <FormControlLabel
                          value="QuanTri"
                          control={<Radio />}
                          label="Admin"
                        />
                      </RadioGroup>
                    </StyledTableCell>
                  </StyledTableRow>
                </TableBody>
              </Table>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={editUserItem} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </Fragment>
  );
}
