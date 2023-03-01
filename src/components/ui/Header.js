import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack/Stack";
import React from "react";

import logo from "../../images/comfy.jpg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";

const useStyles = makeStyles()((theme) => ({
  appBarStyle: {
    backgroundColor: "#ffffff",
    boxShadow: "none",
    alignItems: "center",
  },
  toolbarDiv: {
    width: "80%",
    maxWidth: "1250px",
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
  navIcons: {
    fontSize: "30px",
    color: theme.palette.common.black,
  },
  cartLoginButtons: {},
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
          direction="row"
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

          {/* Login an Cart buttons Div  */}
          <Stack
            item
            direction="row"
            className={classes.cartLoginButtons}
            spacing={3}
          >
            <Button direction="row">
              <Typography variant="h5">Cart</Typography>
              <ShoppingCartIcon className={classes.navIcons} />
            </Button>
            <Button direction="row">
              <Typography variant="h5">Login</Typography>
              <PersonAddAlt1Icon className={classes.navIcons} />
            </Button>
          </Stack>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
