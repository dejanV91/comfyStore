import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import React from "react";

import logo from "../../images/comfy.jpg";

const useStyles = makeStyles()((theme) => ({
  appBarStyle: {
    backgroundColor: "#ffffff",
    boxShadow: "none",
    alignItems: "center",
  },
  toolbarDiv: {
    width: "1170px",
  },
  gridContainer: {
    alignItems: "center",
  },
  logoIcon: {
    maxHeight: "4em",
  },
  navLinks: {
    fontSize: "1.1em",
    textDecoration: "none",
    color: theme.palette.common.black,
    textTransform: "capitalize",
    fontFamily: "sans-serif",
    letterSpacing: "4px",
  },
  navButtons: {
    marginRight: "1.2em",
    marginLeft: "1.2em",
    "&:hover": {
      backgroundColor: "transparent",
      borderBottom: `solid 2px ${theme.palette.primary.main}`,
    },
    borderRadius: 0,
  },
}));
const Header = () => {
  const { classes } = useStyles();
  return (
    <AppBar className={classes.appBarStyle} position="static">
      <Toolbar className={classes.toolbarDiv}>
        <Grid
          container
          justifyContent="space-between"
          className={classes.gridContainer}
        >
          <Grid item>
            <Link href="/">
              <img className={classes.logoIcon} src={logo} alt="logo" />
            </Link>
          </Grid>
          <Grid item>
            <Button variant="text" className={classes.navButtons}>
              <Typography className={classes.navLinks}>Home</Typography>
            </Button>
            <Button variant="text" className={classes.navButtons}>
              <Typography className={classes.navLinks}>About</Typography>
            </Button>
            <Button variant="text" className={classes.navButtons}>
              <Typography className={classes.navLinks}>Products</Typography>
            </Button>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
