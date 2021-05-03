import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DeleteIcon from "@material-ui/icons/Delete";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Fragment } from "react";
import { makeStyles } from "@material-ui/core";
import { deteleAccountAdmin } from "../../../redux/actions/AdminActions";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
const useStyles = makeStyles({
  text: {
    textTransform: "inherit",
    background: "#de0b0b",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 38,
    padding: "0 30px",
    margin: "10px 10px 5px 0",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
});
export default function DeleteSearch(props) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  let { itemClick } = props;
  console.log("itemClick", itemClick);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // ** Dispatch
  const dispatch = useDispatch();
  return (
    <Fragment>
      {itemClick ? (
        <Fragment>
          <Button
            className={`${classes.button} ${classes.text}`}
            style={{ fontSize: "13px", textTransform: "inherit" }}
            startIcon={<DeleteIcon />}
            variant="contained"
            onClick={handleClickOpen}
          >
            Delete
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">
              Are you sure delele account?
            </DialogTitle>

            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button
                onClick={() => {
                  if (itemClick.maLoaiNguoiDung === "KhachHang") {
                    dispatch(deteleAccountAdmin(itemClick.taiKhoan));
                  } else {
                    swal(
                      "Tai khoan quan tri! Ban khong the xoa!",
                      "",
                      "warning"
                    );
                    setOpen(false);
                  }
                }}
                color="primary"
              >
                Detele
              </Button>
            </DialogActions>
          </Dialog>
        </Fragment>
      ) : (
        <></>
      )}
    </Fragment>
  );
}
