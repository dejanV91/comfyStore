import React from "react";
import theme from "./ui/Theme";
import { ThemeProvider } from "@mui/material";

import Header from "./ui/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header></Header>
    </ThemeProvider>
  );
}

export default App;
