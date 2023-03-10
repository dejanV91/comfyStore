import { createTheme } from "@mui/material";

const arcBlack = "#424242";

export default createTheme({
  palette: {
    common: {
      black: `${arcBlack}`,
    },
    primary: {
      main: "#DFC472",
    },
    secondary: {
      main: "#D5D5DF",
    },
  },
  typography: {
    fontFamily: "Roboto",

    h5: {
      color: `${arcBlack}`,
      fontFamily: "sans-serif",
      letterSpacing: "2px",
      textTransform: "capitalize",
    },
  },
});
