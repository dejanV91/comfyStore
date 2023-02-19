import { AppBar, Toolbar } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import React from "react";

const useStyles = makeStyles()((theme) => ({
  appBarStyle: {
    backgroundColor: "#ffffff",
    boxShadow: "none",
  },
}));
const Header = () => {
  const { classes } = useStyles();
  return (
    <AppBar className={classes.appBarStyle} position="static">
      <Toolbar></Toolbar>
    </AppBar>
  );
};

export default Header;
