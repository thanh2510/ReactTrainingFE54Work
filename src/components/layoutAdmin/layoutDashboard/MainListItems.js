import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AssessmentIcon from "@material-ui/icons/Assessment";
import DashboardIcon from "@material-ui/icons/Dashboard";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import SettingsIcon from "@material-ui/icons/Settings";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import ExtensionIcon from "@material-ui/icons/Extension";
import { useDispatch } from "react-redux";
import { ADMIN_DP_CLICK_STYLE } from "../../../redux/const/ManagerAdmin";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 260,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(6),
  },
}));

export default function MainListItems() {
  const classes = useStyles();
  const [open, setOpen] = React.useState({
    openMember: false,
    openBooking: false,
  });
  const [click, setClick] = React.useState("Member List");
  const clickActive = (e) => {
    setClick(e.target.innerHTML);
  };
  const dispatch = useDispatch();
  // ** Dispatch - gui 1 du lieu len reducer
  useEffect(() => {
    dispatch({
      type: ADMIN_DP_CLICK_STYLE,
      clickStyle: click,
    });
  }, [click]);
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText
          primary={
            <p style={{ marginBottom: "0" }} onClick={clickActive}>
              Dashboard
            </p>
          }
        />
      </ListItem>
      {/* ******* */}
      <ListItem
        button
        onClick={() => {
          setOpen({
            openMember: !open.openMember,
          });
        }}
      >
        <ListItemIcon>
          <PeopleAltIcon />
        </ListItemIcon>
        <ListItemText primary="Member" />
        {open.openMember ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open.openMember} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText
              primary={
                <p style={{ marginBottom: "0" }} onClick={clickActive}>
                  Member List
                </p>
              }
            />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText
              primary={
                <p style={{ marginBottom: "0" }} onClick={clickActive}>
                  Administrator List
                </p>
              }
            />
          </ListItem>
          
          <ListItem button className={classes.nested}>
            <ListItemText
              primary={
                <p style={{ marginBottom: "0" }} onClick={clickActive}>
                  Setting
                </p>
              }
            />
          </ListItem>
        </List>
      </Collapse>
      {/* ******* */}
      <ListItem
        button
        onClick={() => {
          setOpen({
            openBooking: !open.openBooking,
          });
        }}
      >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Booking" />
        {open.openBooking ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open.openBooking} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse>
      {/* ******* */}
      <ListItem button>
        <ListItemIcon>
          <ExtensionIcon />
        </ListItemIcon>
        <ListItemText primary="Film" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Setting theme" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AssessmentIcon />
        </ListItemIcon>
        <ListItemText primary="Report" />
      </ListItem>
    </List>
  );
}
